// Prisma seed script for categories only
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Main categories (depth 0, parentId: null)
    const mainCategories = [
        { name: 'Electronics', slug: 'electronics', icon: 'icon-electronics', depth: 0 },
        { name: 'Fashion & Apparel', slug: 'fashion-apparel', icon: 'icon-fashion', depth: 0 },
        { name: 'Home & Garden', slug: 'home-garden', icon: 'icon-home', depth: 0 },
        { name: 'Sports & Outdoors', slug: 'sports-outdoors', icon: 'icon-sports', depth: 0 },
        { name: 'Books & Media', slug: 'books-media', icon: 'icon-books', depth: 0 },
        { name: 'Toys & Games', slug: 'toys-games', icon: 'icon-toys', depth: 0 },
        { name: 'Furniture', slug: 'furniture', icon: 'icon-furniture', depth: 0 },
        { name: 'Vehicles & Accessories', slug: 'vehicles-accessories', icon: 'icon-vehicles', depth: 0 },
        { name: 'Collectibles & Art', slug: 'collectibles-art', icon: 'icon-collectibles', depth: 0 },
        { name: 'Tools & Equipment', slug: 'tools-equipment', icon: 'icon-tools', depth: 0 },
        { name: 'Jewelry & Watches', slug: 'jewelry-watches', icon: 'icon-jewelry', depth: 0 },
    ];

    // Insert main categories and keep their IDs
    const createdMain = [];
    for (const cat of mainCategories) {
        const created = await prisma.category.create({
            data: { ...cat, isActive: true },
        });
        createdMain.push(created);
    }

    // Helper to get parentId by name
    const getParentId = (name) => createdMain.find(c => c.name === name)?.id;

    // Subcategories by parent
    const subcategories = [
        // Electronics
        { name: 'Smartphones', slug: 'smartphones', icon: 'icon-smartphone', depth: 1, parent: 'Electronics' },
        { name: 'Laptops & Computers', slug: 'laptops-computers', icon: 'icon-laptop', depth: 1, parent: 'Electronics' },
        { name: 'Tablets', slug: 'tablets', icon: 'icon-tablet', depth: 1, parent: 'Electronics' },
        { name: 'Cameras', slug: 'cameras', icon: 'icon-camera', depth: 1, parent: 'Electronics' },
        { name: 'Audio Equipment', slug: 'audio-equipment', icon: 'icon-audio', depth: 1, parent: 'Electronics' },
        { name: 'Gaming Consoles', slug: 'gaming-consoles', icon: 'icon-gaming', depth: 1, parent: 'Electronics' },
        { name: 'Televisions', slug: 'televisions', icon: 'icon-tv', depth: 1, parent: 'Electronics' },
        { name: 'Smart Home Devices', slug: 'smart-home', icon: 'icon-smart-home', depth: 1, parent: 'Electronics' },
        // Fashion & Apparel
        { name: ",Men's Clothing", slug: 'mens-clothing', icon: 'icon-mens', depth: 1, parent: 'Fashion & Apparel' },
        { name: ",Women's Clothing", slug: 'womens-clothing', icon: 'icon-womens', depth: 1, parent: 'Fashion & Apparel' },
        { name: 'Kids Clothing', slug: 'kids-clothing', icon: 'icon-kids', depth: 1, parent: 'Fashion & Apparel' },
        { name: 'Shoes', slug: 'shoes', icon: 'icon-shoes', depth: 1, parent: 'Fashion & Apparel' },
        { name: 'Bags & Accessories', slug: 'bags-accessories', icon: 'icon-bags', depth: 1, parent: 'Fashion & Apparel' },
        { name: 'Sportswear', slug: 'sportswear', icon: 'icon-sportswear', depth: 1, parent: 'Fashion & Apparel' },
        // Home & Garden
        { name: 'Kitchen & Dining', slug: 'kitchen-dining', icon: 'icon-kitchen', depth: 1, parent: 'Home & Garden' },
        { name: 'Bedding & Linens', slug: 'bedding-linens', icon: 'icon-bedding', depth: 1, parent: 'Home & Garden' },
        { name: 'Decor & Lighting', slug: 'decor-lighting', icon: 'icon-decor', depth: 1, parent: 'Home & Garden' },
        { name: 'Gardening Tools', slug: 'gardening-tools', icon: 'icon-gardening', depth: 1, parent: 'Home & Garden' },
        { name: 'Outdoor Furniture', slug: 'outdoor-furniture', icon: 'icon-outdoor', depth: 1, parent: 'Home & Garden' },
        // Sports & Outdoors
        { name: 'Fitness Equipment', slug: 'fitness-equipment', icon: 'icon-fitness', depth: 1, parent: 'Sports & Outdoors' },
        { name: 'Camping & Hiking', slug: 'camping-hiking', icon: 'icon-camping', depth: 1, parent: 'Sports & Outdoors' },
        { name: 'Cycling', slug: 'cycling', icon: 'icon-cycling', depth: 1, parent: 'Sports & Outdoors' },
        { name: 'Water Sports', slug: 'water-sports', icon: 'icon-water-sports', depth: 1, parent: 'Sports & Outdoors' },
        { name: 'Team Sports', slug: 'team-sports', icon: 'icon-team-sports', depth: 1, parent: 'Sports & Outdoors' },
        // Books & Media
        { name: 'Books', slug: 'books', icon: 'icon-books', depth: 1, parent: 'Books & Media' },
        // Toys & Games
        { name: 'Action Figures', slug: 'action-figures', icon: 'icon-figures', depth: 1, parent: 'Toys & Games' },
        { name: 'Board Games', slug: 'board-games', icon: 'icon-board-games', depth: 1, parent: 'Toys & Games' },
        { name: 'Dolls & Accessories', slug: 'dolls-accessories', icon: 'icon-dolls', depth: 1, parent: 'Toys & Games' },
        { name: 'Building Sets', slug: 'building-sets', icon: 'icon-building', depth: 1, parent: 'Toys & Games' },
        // Furniture
        { name: 'Living Room', slug: 'living-room', icon: 'icon-living-room', depth: 1, parent: 'Furniture' },
        { name: 'Bedroom Furniture', slug: 'bedroom-furniture', icon: 'icon-bedroom', depth: 1, parent: 'Furniture' },
        { name: 'Office Furniture', slug: 'office-furniture', icon: 'icon-office', depth: 1, parent: 'Furniture' },
        { name: 'Dining Furniture', slug: 'dining-furniture', icon: 'icon-dining', depth: 1, parent: 'Furniture' },
        // Vehicles & Accessories
        { name: 'Car Accessories', slug: 'car-accessories', icon: 'icon-car-acc', depth: 1, parent: 'Vehicles & Accessories' },
        { name: 'Motorcycle Parts', slug: 'motorcycle-parts', icon: 'icon-moto', depth: 1, parent: 'Vehicles & Accessories' },
        { name: 'Bicycle Parts', slug: 'bicycle-parts', icon: 'icon-bike-parts', depth: 1, parent: 'Vehicles & Accessories' },
        // Collectibles & Art
        { name: 'Art & Prints', slug: 'art-prints', icon: 'icon-art', depth: 1, parent: 'Collectibles & Art' },
        { name: 'Memorabilia', slug: 'memorabilia', icon: 'icon-memorabilia', depth: 1, parent: 'Collectibles & Art' },
        // Tools & Equipment
        { name: 'Hand Tools', slug: 'hand-tools', icon: 'icon-hand-tools', depth: 1, parent: 'Tools & Equipment' },
        { name: 'Power Tools', slug: 'power-tools', icon: 'icon-power-tools', depth: 1, parent: 'Tools & Equipment' },
        { name: 'Safety Equipment', slug: 'safety-equipment', icon: 'icon-safety', depth: 1, parent: 'Tools & Equipment' },
        // Jewelry & Watches
        { name: 'Watches', slug: 'watches', icon: 'icon-watches', depth: 1, parent: 'Jewelry & Watches' },
        { name: 'Rings', slug: 'rings', icon: 'icon-rings', depth: 1, parent: 'Jewelry & Watches' },
        { name: 'Necklaces', slug: 'necklaces', icon: 'icon-necklaces', depth: 1, parent: 'Jewelry & Watches' },
        { name: 'Bracelets', slug: 'bracelets', icon: 'icon-bracelets', depth: 1, parent: 'Jewelry & Watches' },
        { name: 'Earrings', slug: 'earrings', icon: 'icon-earrings', depth: 1, parent: 'Jewelry & Watches' },
    ];

    for (const sub of subcategories) {
        const parentId = getParentId(sub.parent);
        if (!parentId) continue;
        await prisma.category.create({
            data: {
                name: sub.name.replace(/^,/, ''),
                slug: sub.slug,
                icon: sub.icon,
                depth: sub.depth,
                isActive: true,
                parentId,
            },
        });
    }
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(() => prisma.$disconnect());
