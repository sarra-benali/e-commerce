// models/User.js
const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    create: async (username, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [username, email, hashedPassword];
        const { rows } = await db.query(sql, values);
        return rows[0];
    },

    findByEmail: async (email) => {
        const sql = 'SELECT * FROM users WHERE email = $1';
        const { rows } = await db.query(sql, [email]);
        return rows[0];
    }
};

module.exports = User;