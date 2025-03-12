// controllers/cartController.js
const Cart = require('../models/Cart');

const addToCart = async (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    try {
        const cartItem = await Cart.addToCart(user_id, product_id, quantity);
        res.status(201).json({ message: 'Item added to cart', cartItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCart = async (req, res) => {
    const { user_id } = req.params;
    try {
        const cart = await Cart.getCart(user_id);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateCartItem = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {
        const cartItem = await Cart.updateCartItem(id, quantity);
        res.json({ message: 'Cart item updated', cartItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const removeFromCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cartItem = await Cart.removeFromCart(id);
        res.json({ message: 'Item removed from cart', cartItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addToCart, getCart, updateCartItem, removeFromCart };