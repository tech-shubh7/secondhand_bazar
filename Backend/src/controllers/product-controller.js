const { productCreateSchema, productUpdateSchema } = require('../validators/product-validator');
const productService = require('../services/product-service');

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 50;
const ALLOWED_PRODUCT_STATUSES = new Set(['AVAILABLE', 'RESERVED', 'SOLD', 'BLOCKED']);

const parsePositiveInteger = (value, fallback) => {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

exports.createProduct = async (req, res) => {
    // Remove sellerId, categoryId, slug, and rental fields from client input
    const { sellerId, categoryId, slug, rentalDurationDays, rentalPricePerDay, availableFrom, availableTo, ...rest } = req.body || {};
    // Transform price to string if number, and condition/mode to uppercase
    if (rest.price && typeof rest.price === 'number') rest.price = rest.price.toString();
    if (rest.condition) rest.condition = rest.condition.toUpperCase();
    if (rest.mode) rest.mode = rest.mode.toUpperCase();
    const parseResult = productCreateSchema.safeParse(rest);
    if (!parseResult.success) {
        return res.status(400).json({
            error: 'Invalid input',
            details: parseResult.error.issues
        });
    }
    try {
        // Get sellerId from req.user
        const sellerId = req.user.id;
        // Get categoryId from category name
        const categoryName = req.body.category;
        const category = await productService.findCategoryByName(categoryName);
        if (!category) {
            return res.status(400).json({ error: 'Invalid category name' });
        }
        const slug = await productService.generateUniqueSlug(parseResult.data.title);
        let rentalDetail = undefined;
        if (parseResult.data.mode === 'RENT') {
            rentalDetail = {
                rentalDurationDays,
                rentalPricePerDay,
                availableFrom,
                availableTo,
            };
        }
        const product = await productService.createProduct({
            ...parseResult.data,
            sellerId,
            categoryId: category.id,
            slug,
        }, rentalDetail);
        res.status(201).json({ product });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const { page, limit, category, sellerId, status, search } = req.query;
        const parsedPage = parsePositiveInteger(page, DEFAULT_PAGE);
        const rawLimit = parsePositiveInteger(limit, DEFAULT_LIMIT);
        const parsedLimit = Math.min(rawLimit, MAX_LIMIT);

        const filters = {};

        if (category) {
            const matchedCategory = await productService.findCategoryByName(category);
            if (!matchedCategory) {
                return res.status(400).json({ error: 'Invalid category name' });
            }
            filters.categoryId = matchedCategory.id;
        }

        if (sellerId) {
            const parsedSellerId = parsePositiveInteger(sellerId, null);
            if (!parsedSellerId) {
                return res.status(400).json({ error: 'Invalid sellerId' });
            }
            filters.sellerId = parsedSellerId;
        }

        if (status) {
            const normalizedStatus = String(status).toUpperCase();
            if (!ALLOWED_PRODUCT_STATUSES.has(normalizedStatus)) {
                return res.status(400).json({ error: 'Invalid status value' });
            }
            filters.status = normalizedStatus;
        }

        if (search && String(search).trim().length > 0) {
            const query = String(search).trim().slice(0, 100);
            filters.OR = [
                { title: { contains: query, mode: 'insensitive' } },
                { description: { contains: query, mode: 'insensitive' } },
            ];
        }

        const skip = (parsedPage - 1) * parsedLimit;
        const [products, total] = await Promise.all([
            productService.getAllProducts({ skip, take: parsedLimit, where: filters }),
            productService.countProducts({ where: filters })
        ]);

        res.status(200).json({ products, total, page: parsedPage, limit: parsedLimit });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(Number(id));
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ product });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        // Only allow owner or admin to update
        const product = await productService.getProductById(Number(id));
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        if (product.sellerId !== req.user.id && req.user.role !== 'ADMIN') {
            return res.status(403).json({ success: false, message: 'Forbidden' });
        }
        // Prevent update if product is not AVAILABLE
        if (product.status !== 'AVAILABLE') {
            return res.status(400).json({ success: false, message: 'Product cannot be updated unless status is AVAILABLE' });
        }
        // Validate update input (allow partial updates)
        const { sellerId, categoryId, slug, rentalDurationDays, rentalPricePerDay, availableFrom, availableTo, ...rest } = req.body || {};
        if (rest.price && typeof rest.price === 'number') rest.price = rest.price.toString();
        if (rest.condition) rest.condition = rest.condition.toUpperCase();
        if (rest.mode) rest.mode = rest.mode.toUpperCase();
        const parseResult = productUpdateSchema.safeParse(rest);
        if (!parseResult.success) {
            return res.status(400).json({
                success: false,
                message: 'Invalid input',
                errors: parseResult.error.issues,
            });
        }
        // Optionally update categoryId if category name provided
        let categoryIdToUpdate = product.categoryId;
        if (req.body.category) {
            const category = await productService.findCategoryByName(req.body.category);
            if (!category) {
                return res.status(400).json({ success: false, message: 'Invalid category name' });
            }
            categoryIdToUpdate = category.id;
        }
        // Optionally update slug if title changed
        let slugToUpdate = product.slug;
        if (parseResult.data.title && parseResult.data.title !== product.title) {
            slugToUpdate = await productService.generateUniqueSlug(parseResult.data.title, product.id);
        }
        let rentalDetail = undefined;
        if ((parseResult.data.mode || product.mode) === 'RENT') {
            rentalDetail = {
                rentalDurationDays,
                rentalPricePerDay,
                availableFrom,
                availableTo,
            };
        }
        const updatedProduct = await productService.updateProduct(Number(id), {
            ...parseResult.data,
            categoryId: categoryIdToUpdate,
            slug: slugToUpdate,
        }, rentalDetail);
        res.status(200).json({
            success: true,
            data: { product: updatedProduct },
            message: 'Product updated successfully',
        });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(Number(id));
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        if (product.sellerId !== req.user.id && req.user.role !== 'ADMIN') {
            return res.status(403).json({ error: 'Forbidden' });
        }
        await productService.deleteProduct(Number(id));
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
        });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};