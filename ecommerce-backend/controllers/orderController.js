    // controllers/orderController.js
const Order = require('../models/Order');

const createOrder = async (req, res) => {
    const { user_id, total_amount, payment_status, shipping_address } = req.body;
    try {
        const order = await Order.create(user_id, total_amount, payment_status, shipping_address);
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { payment_status } = req.body;
    try {
        const order = await Order.update(id, payment_status);
        res.json({ message: 'Order updated successfully', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.delete(id);
        res.json({ message: 'Order deleted successfully', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const Order = require('../models/Order');

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const order = await Order.update(id, { status });
        res.json({ message: 'Order status updated successfully', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createOrder, getOrders, getOrderById, updateOrder, deleteOrder, getAllOrders, updateOrderStatus };