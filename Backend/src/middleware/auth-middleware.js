const jwt = require('jsonwebtoken');
const prisma = require('../config/db');


const authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies?.accessToken;

    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user || !user.isActive || user.deletedAt) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const { password, ...userWithoutPassword } = user;
    req.user = userWithoutPassword;
    next();
  } catch (error) {
    console.error('ERROR: ', error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = {
  authMiddleware,
};