const express = require('express');
const { isAdmin } = require('../middlewares/authMiddleware');
const { getAllUsers, blockUser } = require('../controllers/adminController');
const { getAllOrders, updateOrderStatus } = require('../controllers/orderController');
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

// User Management
router.get('/users', isAdmin, getAllUsers);
router.put('/users/:id/block', isAdmin, blockUser);

// Order Management
router.get('/orders', isAdmin, getAllOrders);
router.put('/orders/:id/status', isAdmin, updateOrderStatus);

// Product Management
router.get('/products', isAdmin, getAllProducts);
router.post('/products', isAdmin, createProduct);
router.put('/products/:id', isAdmin, updateProduct);
router.delete('/products/:id', isAdmin, deleteProduct);

module.exports = router;