require('dotenv').config();
const prisma = require('./src/config/db');
const authRouter = require('./src/routes/auth-route');
const userRouter = require('./src/routes/user-route');
const productRouter = require('./src/routes/product-route');
const { startRefreshTokenCleanupJob } = require('./src/jobs/refresh-token-cleanup');
const cookieParser = require('cookie-parser');

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
}));
const PORT = process.env.PORT || 3000;


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);


// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
});

startRefreshTokenCleanupJob();