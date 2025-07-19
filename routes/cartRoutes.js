const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const checkoutController = require('../controllers/checkoutController');

router.get('/:userId', cartController.getCart);

router.post('/add', cartController.addToCart);

router.put('/update', cartController.updateCartItem);

router.delete('/:userId/:productId', cartController.deleteCartItem);

router.post('/:userId/checkout', checkoutController.checkoutCart);

module.exports = router;
