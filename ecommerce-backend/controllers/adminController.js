const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const blockUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const updatedUser = await User.update(id, { isBlocked: true });
        res.json({ message: 'User blocked successfully', user: updatedUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllUsers, blockUser };