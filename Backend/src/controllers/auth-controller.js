const authService = require('../services/auth-service');
const { signupSchema, loginSchema } = require("../validators/auth-validator");

const isProduction = process.env.NODE_ENV === 'production';
const configuredSameSite = (process.env.COOKIE_SAME_SITE || '').toLowerCase();
const validSameSite = ['lax', 'strict', 'none'];

const resolvedSameSite = validSameSite.includes(configuredSameSite)
    ? configuredSameSite
    : (isProduction ? 'none' : 'lax');

const configuredSecure = (process.env.COOKIE_SECURE || '').toLowerCase();
const secureFromEnv = configuredSecure === 'true'
    ? true
    : configuredSecure === 'false'
        ? false
        : isProduction;

const resolvedSecure = resolvedSameSite === 'none' ? true : secureFromEnv;

const authCookieOptions = {
    httpOnly: true,
    secure: resolvedSecure,
    sameSite: resolvedSameSite,
    path: '/',
    ...(process.env.COOKIE_DOMAIN ? { domain: process.env.COOKIE_DOMAIN } : {}),
};

exports.signup = async (req, res) => {
    const parseResult = signupSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({
            error: 'Invalid input',
            details: parseResult.error.issues
        });
    }
    try {
        const { name, email, password, phone } = req.body;
        const user = await authService.signup({ name, email, password, phone });
        res.status(201).json({ user });
    } catch (err) {
        console.error("ERROR: ", err);
        if (err.code === 'P2002' || err.code === 'P2003') {
            return res.status(409).json({ error: 'Invalid credentials' });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.login = async (req, res) => {
    const parseResult = loginSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({
            error: 'Invalid input',
            details: parseResult.error.issues
        });
    }
    try {
        const { user, accessToken, refreshToken, error } = await authService.login(req.body);
        if (error) return res.status(401).json({ error: 'Invalid credentials' });

        res.cookie('accessToken', accessToken, {
            ...authCookieOptions,
            maxAge: 15 * 60 * 1000, // 15 minutes
        });
        res.cookie('refreshToken', refreshToken, {
            ...authCookieOptions,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.json({ user });
    } catch (err) {
        console.error("ERROR: ", err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.refresh = async (req, res) => {
    try {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
            return res.status(401).json({ error: 'No refresh token' });
        }
        const { user, accessToken, refreshToken: newRefreshToken, error } = await authService.refresh(refreshToken);
        if (error) return res.status(401).json({ error: error });

        res.cookie('accessToken', accessToken, {
            ...authCookieOptions,
            maxAge: 15 * 60 * 1000, // 15 minutes
        });
        res.cookie('refreshToken', newRefreshToken, {
            ...authCookieOptions,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        res.json({ user });
    } catch (err) {
        console.error("ERROR: ", err);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getCurrentUser = async (req, res) => {
    try {
        res.json({ user: req.user });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
}


exports.logout = async (req, res) => {
    try {
        const refreshToken = req.cookies?.refreshToken;
        if (refreshToken) {
            await authService.logout(refreshToken);
        }
        res.clearCookie('accessToken', {
            ...authCookieOptions,
        });
        res.clearCookie('refreshToken', {
            ...authCookieOptions,
        });
        res.json({ message: 'Logged out' });
    } catch (err) {
        console.error("ERROR: ", err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
