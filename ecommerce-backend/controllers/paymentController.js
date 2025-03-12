// controllers/paymentController.js
const Payment = require('../models/Payment');

const createPayment = async (req, res) => {
    const { order_id, payment_method, transaction_id, amount, status } = req.body;
    try {
        const payment = await Payment.create(order_id, payment_method, transaction_id, amount, status);
        res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPaymentById = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await Payment.findById(id);
        if (!payment) return res.status(404).json({ error: 'Payment not found' });
        res.json(payment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updatePayment = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const payment = await Payment.update(id, status);
        res.json({ message: 'Payment updated successfully', payment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deletePayment = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await Payment.delete(id);
        res.json({ message: 'Payment deleted successfully', payment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createPayment, getPayments, getPaymentById, updatePayment, deletePayment };