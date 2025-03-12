// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create(username, email, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findByEmail(email);
        if (!user) return res.status(400).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, isAdmin: user.isAdmin });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { register, login };