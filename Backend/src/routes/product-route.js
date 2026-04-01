const express = require('express');
const productController = require('../controllers/product-controller');
const { authMiddleware } = require('../middleware/auth-middleware');
const productRouter = express.Router();

productRouter.post('/', authMiddleware, productController.createProduct);
productRouter.get('/', authMiddleware, productController.getAllProducts);
productRouter.get('/:id', authMiddleware, productController.getProductById);
productRouter.put('/:id', authMiddleware, productController.updateProduct);
productRouter.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = productRouter;
