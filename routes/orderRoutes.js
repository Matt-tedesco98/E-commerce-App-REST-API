const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')

router.get('/:userId', orderController.getOrders);
router.get('/details/:orderId', orderController.getOrderDetails);

module.exports = router;