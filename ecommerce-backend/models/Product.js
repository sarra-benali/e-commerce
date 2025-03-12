const db = require('../config/db');

const Product = {
    create: async (name, description, price, category, images, stock) => {
        const sql = `INSERT INTO products (name, description, price, category, images, stock) 
                     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const values = [name, description, price, category, JSON.stringify(images), stock]; // Convert images to JSON
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    findAll: async () => {
        const sql = 'SELECT * FROM products';
        const { rows } = await db.query(sql);
        return rows;
    },

    findById: async (id) => {
        const sql = 'SELECT * FROM products WHERE id = $1';
        const { rows } = await db.query(sql, [id]);
        return rows[0];
    },

    update: async (id, name, description, price, category, images, stock) => {
        const sql = `UPDATE products SET name = $1, description = $2, price = $3, category = $4, 
                     images = $5, stock = $6 WHERE id = $7 RETURNING *`;
        const values = [name, description, price, category, JSON.stringify(images), stock, id]; // Convert images to JSON
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    delete: async (id) => {
        const sql = 'DELETE FROM products WHERE id = $1 RETURNING *';
        const { rows } = await db.query(sql, [id]);
        return rows[0];
    }
};

module.exports = Product;
