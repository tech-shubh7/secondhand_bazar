// src/services/auth-service.js
const prisma = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const crypto = require('crypto');

const ACCESS_TOKEN_TTL = process.env.JWT_EXPIRES_IN || '15m';
const REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const parsedRetentionDays = Number.parseInt(process.env.REFRESH_TOKEN_RETENTION_DAYS || '30', 10);
const REFRESH_TOKEN_RETENTION_DAYS = Number.isFinite(parsedRetentionDays) && parsedRetentionDays > 0
    ? parsedRetentionDays
    : 30;
const parsedMaxActiveTokens = Number.parseInt(process.env.MAX_ACTIVE_REFRESH_TOKENS_PER_USER || '5', 10);
const MAX_ACTIVE_REFRESH_TOKENS_PER_USER = Number.isFinite(parsedMaxActiveTokens) && parsedMaxActiveTokens > 0
    ? parsedMaxActiveTokens
    : 5;


const capitalizeEveryWord = str =>
    str.trim().split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

const generateAccessToken = (userId) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: ACCESS_TOKEN_TTL }
    );
};

const generateRefreshToken = () => {
    return crypto.randomBytes(64).toString('hex');
};

const getRefreshTokenExpiry = () => new Date(Date.now() + REFRESH_TOKEN_TTL_MS);

const getRefreshTokenRetentionCutoff = () => {
    return new Date(Date.now() - (REFRESH_TOKEN_RETENTION_DAYS * 24 * 60 * 60 * 1000));
};

const pruneRefreshTokens = async (tx, userId) => {
    const retentionCutoff = getRefreshTokenRetentionCutoff();
    await tx.refreshToken.deleteMany({
        where: {
            OR: [
                { expiresAt: { lt: retentionCutoff } },
                {
                    revokedAt: { not: null },
                    createdAt: { lt: retentionCutoff },
                },
            ],
        },
    });

    if (!userId) return;

    const activeTokens = await tx.refreshToken.findMany({
        where: {
            userId,
            revokedAt: null,
            expiresAt: { gt: new Date() },
        },
        orderBy: { createdAt: 'desc' },
        select: { id: true },
    });

    if (activeTokens.length <= MAX_ACTIVE_REFRESH_TOKENS_PER_USER) return;

    const idsToDelete = activeTokens.slice(MAX_ACTIVE_REFRESH_TOKENS_PER_USER).map((row) => row.id);
    if (idsToDelete.length > 0) {
        await tx.refreshToken.deleteMany({ where: { id: { in: idsToDelete } } });
    }
};

exports.signup = async ({ name, email, password, phone }) => {
    email = email.toLowerCase().trim();
    name = capitalizeEveryWord(name);
    phone = phone?.trim() || null;
    // Pre-check for existing email
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        const error = new Error('Invalid credentials');
        error.code = 'P2002';
        throw error;
    }
    // Pre-check for existing phone if provided
    if (phone) {
        const phoneExists = await prisma.user.findUnique({ where: { phone } });
        if (phoneExists) {
            const error = new Error('Invalid credentials');
            error.code = 'P2003';
            throw error;
        }
    }
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword, phone },
    });
    // Remove password from response
    const { password: _pw, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

exports.login = async ({ email, password }) => {
    email = email.toLowerCase().trim();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.isActive || user.deletedAt) return { error: 'Invalid credentials' };
    if (!user.password) return { error: 'Invalid credentials' }; // OAuth-only user
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { error: 'Invalid credentials' };
    // Do NOT delete all previous refresh tokens (support multi-device)
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken();
    const expiresAt = getRefreshTokenExpiry();

    await prisma.$transaction(async (tx) => {
        await tx.refreshToken.create({
            data: {
                userId: user.id,
                token: refreshToken,
                expiresAt,
            },
        });
        await pruneRefreshTokens(tx, user.id);
    });

    const { password: _pw, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, accessToken, refreshToken };
};

exports.refresh = async (refreshToken) => {
    const token = (refreshToken || '').trim();
    if (!token) return { error: 'Invalid or expired refresh token' };

    return prisma.$transaction(async (tx) => {
        const tokenRow = await tx.refreshToken.findUnique({
            where: { token },
            select: { userId: true, revokedAt: true, expiresAt: true },
        });

        const now = new Date();
        if (!tokenRow || tokenRow.revokedAt || tokenRow.expiresAt <= now) {
            return { error: 'Invalid or expired refresh token' };
        }

        const revokeResult = await tx.refreshToken.updateMany({
            where: {
                token,
                revokedAt: null,
                expiresAt: { gt: now },
            },
            data: { revokedAt: now },
        });

        if (revokeResult.count !== 1) {
            return { error: 'Invalid or expired refresh token' };
        }

        const user = await tx.user.findUnique({ where: { id: tokenRow.userId } });
        if (!user || !user.isActive || user.deletedAt) return { error: 'Invalid credentials' };

        const newRefreshToken = generateRefreshToken();
        await tx.refreshToken.create({
            data: {
                userId: user.id,
                token: newRefreshToken,
                expiresAt: getRefreshTokenExpiry(),
            },
        });

        await pruneRefreshTokens(tx, user.id);

        const accessToken = generateAccessToken(user.id);
        const { password: _pw, ...userWithoutPassword } = user;
        return { user: userWithoutPassword, accessToken, refreshToken: newRefreshToken };
    });
};

exports.logout = async (refreshToken) => {
    const token = (refreshToken || '').trim();
    if (!token) return;

    await prisma.refreshToken.updateMany({
        where: { token },
        data: { revokedAt: new Date() },
    });
};

exports.cleanupExpiredRefreshTokens = async () => {
    const retentionCutoff = getRefreshTokenRetentionCutoff();
    await prisma.refreshToken.deleteMany({
        where: {
            OR: [
                { expiresAt: { lt: retentionCutoff } },
                {
                    revokedAt: { not: null },
                    createdAt: { lt: retentionCutoff },
                },
            ],
        },
    });
};

