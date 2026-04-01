// src/services/user-service.js
const prisma = require('../config/db');

exports.getProfile = async (userId) => {
    // Fetch user and join UserProfile for bio and profileImage
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            city: true,
            state: true,
            latitude: true,
            longitude: true,
            role: true,
            isActive: true,
            isVerified: true,
            createdAt: true,
            updatedAt: true,
            profile: {
                select: {
                    bio: true,
                    profileImage: true,
                }
            }
        },
    });
    // Flatten profile fields for easier consumption
    if (user && user.profile) {
        user.bio = user.profile.bio;
        user.profileImage = user.profile.profileImage;
        delete user.profile;
    }
    return user;
};
