const express = require('express');
const authRouter = express.Router();
const { signup, login, logout, refresh, getCurrentUser } = require('../controllers/auth-controller');
const { authMiddleware } = require("../middleware/auth-middleware");


authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/refresh', refresh);
authRouter.post('/logout', logout);
authRouter.get('/me', authMiddleware, getCurrentUser);


module.exports = authRouter;