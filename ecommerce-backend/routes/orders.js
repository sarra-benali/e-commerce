// routes/orders.js
const express = require('express');
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;