const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/', productController.getAllProducts);

// GET one Product
router.get('/:id', productController.getProductById);

// POST create product
router.post('/', productController.createProduct);

// PUT update product
router.put('/:id', productController.updateProduct);

// DELETE a product
router.delete('/:id', productController.deleteProduct);

module.exports = router;