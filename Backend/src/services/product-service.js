const prisma = require("../config/db");

const MAX_SLUG_ATTEMPTS = 25;


exports.createProduct = async (data, rentalDetail) => {
    // rentalDetail: { rentalDurationDays, rentalPricePerDay, availableFrom, availableTo }
    const created = await prisma.product.create({
        data: {
            ...data,
            rentalDetail: rentalDetail
                ? {
                    create: {
                        rentalDurationDays: rentalDetail.rentalDurationDays,
                        rentalPricePerDay: rentalDetail.rentalPricePerDay,
                        availableFrom: rentalDetail.availableFrom,
                        availableTo: rentalDetail.availableTo,
                    },
                }
                : undefined,
        },
        include: { rentalDetail: true },
    });
    return created;
};


exports.getAllProducts = async (options = {}) => {
    const where = {
        deletedAt: null,
        isActive: true,
        ...(options.where || {}),
    };

    return prisma.product.findMany({
        ...options,
        where,
        orderBy: { createdAt: 'desc' },
        include: {
            category: true,
            seller: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profile: { select: { profileImage: true } }
                }
            },
            rentalDetail: true,
            images: {
                where: { deletedAt: null },
                orderBy: [{ isPrimary: 'desc' }, { order: 'asc' }, { id: 'asc' }],
            },
        },
    });
};

exports.countProducts = async (options = {}) => {
    const where = {
        deletedAt: null,
        isActive: true,
        ...(options.where || {}),
    };
    return prisma.product.count({ ...options, where });
};

exports.getProductById = async (id) => {
    return prisma.product.findFirst({
        where: {
            id,
            deletedAt: null,
            isActive: true,
        },
        include: {
            category: true,
            seller: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profile: { select: { profileImage: true } }
                }
            },
            rentalDetail: true,
            images: {
                where: { deletedAt: null },
                orderBy: [{ isPrimary: 'desc' }, { order: 'asc' }, { id: 'asc' }],
            },
        },
    });
};


exports.updateProduct = async (id, data, rentalDetail) => {
    // rentalDetail: { rentalDurationDays, rentalPricePerDay, availableFrom, availableTo }
    const updated = await prisma.product.update({
        where: { id },
        data: {
            ...data,
            rentalDetail: rentalDetail
                ? {
                    upsert: {
                        create: {
                            rentalDurationDays: rentalDetail.rentalDurationDays,
                            rentalPricePerDay: rentalDetail.rentalPricePerDay,
                            availableFrom: rentalDetail.availableFrom,
                            availableTo: rentalDetail.availableTo,
                        },
                        update: {
                            rentalDurationDays: rentalDetail.rentalDurationDays,
                            rentalPricePerDay: rentalDetail.rentalPricePerDay,
                            availableFrom: rentalDetail.availableFrom,
                            availableTo: rentalDetail.availableTo,
                        },
                    },
                }
                : undefined,
        },
        include: { rentalDetail: true },
    });
    return updated;
};

exports.deleteProduct = async (id) => {
    return prisma.product.update({
        where: { id },
        data: {
            isActive: false,
            deletedAt: new Date(),
        },
    });
};

exports.findCategoryByName = async (name) => {
    const normalizedName = (name || '').trim();
    if (!normalizedName) return null;

    return prisma.category.findFirst({
        where: {
            name: {
                equals: normalizedName,
                mode: 'insensitive',
            },
            isActive: true,
            deletedAt: null,
        },
    });
};

exports.generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
        .replace(/--+/g, '-');
};

exports.generateUniqueSlug = async (title, excludeProductId = null) => {
    const baseSlug = exports.generateSlug(title);
    const fallbackSlug = `product-${Date.now()}`;
    const normalizedBase = baseSlug || fallbackSlug;

    for (let attempt = 0; attempt < MAX_SLUG_ATTEMPTS; attempt += 1) {
        const candidate = attempt === 0 ? normalizedBase : `${normalizedBase}-${attempt + 1}`;
        const existing = await prisma.product.findFirst({
            where: {
                slug: candidate,
                ...(excludeProductId ? { id: { not: excludeProductId } } : {}),
            },
            select: { id: true },
        });

        if (!existing) return candidate;
    }

    return `${normalizedBase}-${Date.now()}`;
};