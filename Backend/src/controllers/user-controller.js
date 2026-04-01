// src/controllers/user-controller.js
const userService = require('../services/user-service');

exports.getProfile = async (req, res) => {
    try {
        const user = await userService.getProfile(req.user.id);
        res.json({ user });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
};

