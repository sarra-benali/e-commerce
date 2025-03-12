// controllers/productController.js
const Product = require('../models/Product');

const createProduct = async (req, res) => {
    const { name, description, price, category, images, stock } = req.body;
    try {
        const product = await Product.create(name, description, price, category, images, stock);
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, images, stock } = req.body;
    try {
        const product = await Product.update(id, name, description, price, category, images, stock);
        res.json({ message: 'Product updated successfully', product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.delete(id);
        res.json({ message: 'Product deleted successfully', product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllProducts,createProduct, getProducts, getProductById, updateProduct, deleteProduct };