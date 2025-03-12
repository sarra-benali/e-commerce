// models/Cart.js
const db = require('../config/db');

const Cart = {
    addToCart: async (user_id, product_id, quantity) => {
        const sql = 'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *';
        const values = [user_id, product_id, quantity];
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    getCart: async (user_id) => {
        const sql = 'SELECT * FROM cart WHERE user_id = $1';
        const { rows } = await db.query(sql, [user_id]);
        return rows;
    },

    updateCartItem: async (id, quantity) => {
        const sql = 'UPDATE cart SET quantity = $1 WHERE id = $2 RETURNING *';
        const values = [quantity, id];
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    removeFromCart: async (id) => {
        const sql = 'DELETE FROM cart WHERE id = $1 RETURNING *';
        const { rows } = await db.query(sql, [id]);
        return rows[0];
    }
};

module.exports = Cart;