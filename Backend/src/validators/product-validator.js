const { z } = require('zod');

const priceRegex = /^\d{1,8}(\.\d{1,2})?$/;

const productCreateSchema = z.object({
    title: z.string()
        .min(3, 'Title must be at least 3 characters')
        .max(150, 'Title must be at most 150 characters'),
    description: z.string()
        .min(10, 'Description must be at least 10 characters')
        .max(2000, 'Description must be at most 2000 characters'),
    price: z.union([
        z.string().regex(priceRegex, 'Price must be a valid number with up to 2 decimal places'),
        z.number().refine(val => val > 0, 'Price must be greater than 0').transform(val => val.toString())
    ]),
    condition: z.enum(['NEW', 'LIKE_NEW', 'USED'], {
        errorMap: () => ({ message: 'Condition must be NEW, LIKE_NEW, or USED' })
    }),
    mode: z.enum(['SELL', 'RENT'], {
        errorMap: () => ({ message: 'Mode must be SELL or RENT' })
    }),
    city: z.string().max(50, 'City must be at most 50 characters').optional(),
    state: z.string().max(50, 'State must be at most 50 characters').optional(),
    latitude: z.number().min(-90).max(90).optional(),
    longitude: z.number().min(-180).max(180).optional(),
    // Rental fields removed; handled in ProductRentalDetail
    isActive: z.boolean().optional(),
    isNegotiable: z.boolean().optional(),
    status: z.enum(['AVAILABLE', 'RESERVED', 'SOLD', 'BLOCKED']).optional(),
});

const productUpdateSchema = productCreateSchema.partial();
module.exports = { productCreateSchema, productUpdateSchema };
