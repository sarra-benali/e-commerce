// models/Payment.js
const db = require('../config/db');

const Payment = {
    create: async (order_id, payment_method, transaction_id, amount, status) => {
        const sql = 'INSERT INTO payments (order_id, payment_method, transaction_id, amount, status) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [order_id, payment_method, transaction_id, amount, status];
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    findAll: async () => {
        const sql = 'SELECT * FROM payments';
        const { rows } = await db.query(sql);
        return rows;
    },

    findById: async (id) => {
        const sql = 'SELECT * FROM payments WHERE id = $1';
        const { rows } = await db.query(sql, [id]);
        return rows[0];
    },

    update: async (id, status) => {
        const sql = 'UPDATE payments SET status = $1 WHERE id = $2 RETURNING *';
        const values = [status, id];
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    delete: async (id) => {
        const sql = 'DELETE FROM payments WHERE id = $1 RETURNING *';
        const { rows } = await db.query(sql, [id]);
        return rows[0];
    }
};

module.exports = Payment;