const express = require('express');
const userRouter = express.Router();
const { authMiddleware } = require('../middleware/auth-middleware');
const userController = require('../controllers/user-controller');

userRouter.get('/profile', authMiddleware, userController.getProfile);

module.exports = userRouter;