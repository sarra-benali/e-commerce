// routes/cart.js
const express = require('express');
const { addToCart, getCart, updateCartItem, removeFromCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/', addToCart);
router.get('/:user_id', getCart);
router.put('/:id', updateCartItem);
router.delete('/:id', removeFromCart);

module.exports = router;