const { z } = require('zod');


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,32}$/;

const signupSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters')
        .regex(/^[a-zA-Z ]+$/, 'Name must only contain letters and spaces'),
    email: z.string()
        .email('Invalid email address')
        .max(100, 'Email must be at most 100 characters'),
    phone: z.string()
        .trim()
        .min(7, 'Phone must be at least 7 characters')
        .max(20, 'Phone must be at most 20 characters')
        .regex(/^[+0-9()\-\s]+$/, 'Phone format is invalid')
        .optional()
        .or(z.literal('')),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .max(32, 'Password must be at most 32 characters')
        .regex(passwordRegex, 'Password must contain uppercase, lowercase, number, and special character'),
});

const loginSchema = z.object({
    email: z.string()
        .email('Invalid email address')
        .max(100, 'Email must be at most 100 characters'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .max(32, 'Password must be at most 32 characters')
        .regex(passwordRegex, 'Password must contain uppercase, lowercase, number, and special character'),
});

module.exports = { signupSchema, loginSchema };


