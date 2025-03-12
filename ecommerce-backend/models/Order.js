// models/Order.js
const db = require('../config/db');

const Order = {
    create: async (user_id, total_amount, payment_status, shipping_address) => {
        const sql = 'INSERT INTO orders (user_id, total_amount, payment_status, shipping_address) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [user_id, total_amount, payment_status, shipping_address];
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    findAll: async () => {
        const sql = 'SELECT * FROM orders';
        const { rows } = await db.query(sql);
        return rows;
    },

    findById: async (id) => {
        const sql = 'SELECT * FROM orders WHERE id = $1';
        const { rows } = await db.query(sql, [id]);
        return rows[0];
    },

    update: async (id, payment_status) => {
        const sql = 'UPDATE orders SET payment_status = $1 WHERE id = $2 RETURNING *';
        const values = [payment_status, id];
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    delete: async (id) => {
        const sql = 'DELETE FROM orders WHERE id = $1 RETURNING *';
        const { rows } = await db.query(sql, [id]);
        return rows[0];
    }
};

module.exports = Order;