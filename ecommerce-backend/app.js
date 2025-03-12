// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth')); // Add this line
app.use('/api/products', require('./routes/products')); // Add this line
app.use('/api/orders', require('./routes/orders')); // Add this line
app.use('/api/cart', require('./routes/cart')); // Add this line
app.use('/api/payments', require('./routes/payments')); // Add this line
app.use('/api/admin', require('./routes/admin'));

app.get('/', (req, res) => {
    res.send('E-commerce backend is running!');
});

module.exports = app;