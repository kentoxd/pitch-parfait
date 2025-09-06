// Database Setup Script for Pitch Parfait Inventory System
// This script will populate your Firebase database with sample data

import { firebase } from './firebase-config.js';

class DatabaseSetup {
    constructor() {
        this.sampleInventoryData = [
            // Classic Swirls
            {
                name: "Choco Chip",
                category: "Classic Swirls",
                price: 55,
                quantity: 50,
                minStock: 10,
                maxStock: 100,
                description: "Rich chocolate ice cream with chocolate chips",
                image: "https://assets.onecompiler.app/42vc5shrr/42z65dqwa/with%20logo_ChocoChip-1-removebg-preview.png",
                lastUpdated: new Date()
            },
            {
                name: "Choco Extreme",
                category: "Classic Swirls",
                price: 55,
                quantity: 45,
                minStock: 10,
                maxStock: 100,
                description: "Intense chocolate flavor with extra chocolate pieces",
                image: "https://assets.onecompiler.app/42vc5shrr/42z65dqwa/with%20logo_ChocoExtreme-removebg-preview.png",
                lastUpdated: new Date()
            },
            {
                name: "Double Dutch",
                category: "Classic Swirls",
                price: 55,
                quantity: 30,
                minStock: 10,
                maxStock: 100,
                description: "Classic vanilla and chocolate combination",
                image: "https://assets.onecompiler.app/42vc5shrr/42z65dqwa/with%20logo_DoubleDutch-removebg-preview.png",
                lastUpdated: new Date()
            },
            {
                name: "Mango Cheesecake",
                category: "Classic Swirls",
                price: 55,
                quantity: 25,
                minStock: 10,
                maxStock: 100,
                description: "Creamy mango ice cream with cheesecake pieces",
                image: "https://assets.onecompiler.app/42vc5shrr/42z65dqwa/with%20logo_MangoCheesecake-removebg-preview.png",
                lastUpdated: new Date()
            },

            // Special Swirls
            {
                name: "Berry Choco",
                category: "Special Swirls",
                price: 60,
                quantity: 40,
                minStock: 8,
                maxStock: 80,
                description: "Mixed berry ice cream with chocolate swirls",
                image: "https://assets.onecompiler.app/42rxknjmk/42zmfprf9/berry-choco.png",
                lastUpdated: new Date()
            },
            {
                name: "Chocolate Chip Cookie Dough",
                category: "Special Swirls",
                price: 60,
                quantity: 35,
                minStock: 8,
                maxStock: 80,
                description: "Vanilla ice cream with cookie dough pieces",
                image: "https://assets.onecompiler.app/42rxknjmk/42zmfprf9/chocolate-chip-cookie-dough-swirls.png",
                lastUpdated: new Date()
            },
            {
                name: "French Silk Pie",
                category: "Special Swirls",
                price: 60,
                quantity: 20,
                minStock: 8,
                maxStock: 80,
                description: "Silky chocolate ice cream with pie crust pieces",
                image: "https://assets.onecompiler.app/42rxknjmk/42zmfprf9/french-silk-pie.png",
                lastUpdated: new Date()
            },
            {
                name: "Turtle Pecan",
                category: "Special Swirls",
                price: 60,
                quantity: 15,
                minStock: 8,
                maxStock: 80,
                description: "Caramel ice cream with pecans and chocolate",
                image: "https://assets.onecompiler.app/42rxknjmk/42zmfprf9/Turtle-Pecan-Swirls.png",
                lastUpdated: new Date()
            },

            // Royal Swirls
            {
                name: "New York Cheesecake Swirl",
                category: "Royal Swirls",
                price: 75,
                quantity: 30,
                minStock: 5,
                maxStock: 50,
                description: "Premium cheesecake ice cream with graham cracker swirls",
                image: "https://assets.onecompiler.app/42vc5shrr/42zmby6kh/Royal-New-York-Cheesecake-Swirls.png",
                lastUpdated: new Date()
            },
            {
                name: "Oreo Swirl",
                category: "Royal Swirls",
                price: 75,
                quantity: 25,
                minStock: 5,
                maxStock: 50,
                description: "Vanilla ice cream with Oreo cookie pieces",
                image: "https://assets.onecompiler.app/42vc5shrr/42zmby6kh/Royal-Oreo-Swirls.png",
                lastUpdated: new Date()
            },
            {
                name: "Reeses Brownies Swirl",
                category: "Royal Swirls",
                price: 75,
                quantity: 20,
                minStock: 5,
                maxStock: 50,
                description: "Chocolate ice cream with Reese's pieces and brownie chunks",
                image: "https://assets.onecompiler.app/42vc5shrr/42zmby6kh/Royal-Reese_s-Brownie-Swirls.png",
                lastUpdated: new Date()
            },
            {
                name: "Ultimate Choco Brownie Swirl",
                category: "Royal Swirls",
                price: 75,
                quantity: 18,
                minStock: 5,
                maxStock: 50,
                description: "Rich chocolate ice cream with fudge brownie pieces",
                image: "https://assets.onecompiler.app/42vc5shrr/42zmeqcx4/Royal-Ultimate-Choco-Brownie-Swirls.png",
                lastUpdated: new Date()
            },

            // Cakes
            {
                name: "Ice Cream Chocolate Cake Extreme",
                category: "Cakes",
                price: 899,
                quantity: 8,
                minStock: 2,
                maxStock: 20,
                description: "6-inch chocolate ice cream cake with extreme chocolate flavor",
                image: "https://assets.onecompiler.app/42vc5shrr/42yyv2knc/DQ-Blizzard-Ice-Cream-Cake-Chocolate-Extreme.png",
                lastUpdated: new Date()
            },
            {
                name: "Ice Cream Chocolate Cake KitKat",
                category: "Cakes",
                price: 899,
                quantity: 6,
                minStock: 2,
                maxStock: 20,
                description: "6-inch chocolate ice cream cake with KitKat pieces",
                image: "https://assets.onecompiler.app/42vc5shrr/42yyv2knc/DQ-Blizzard-Ice-Cream-Cake-Chocolate-KitKat.png",
                lastUpdated: new Date()
            },
            {
                name: "Ice Cream Choco Shavings",
                category: "Cakes",
                price: 899,
                quantity: 10,
                minStock: 2,
                maxStock: 20,
                description: "6-inch chocolate ice cream cake with chocolate shavings",
                image: "https://assets.onecompiler.app/42vc5shrr/42yyv2knc/DQ-Ice-Cream-Choco-Shavings.png",
                lastUpdated: new Date()
            },
            {
                name: "Purple Fudge Cheesecake",
                category: "Cakes",
                price: 899,
                quantity: 4,
                minStock: 2,
                maxStock: 20,
                description: "6-inch purple fudge cheesecake ice cream cake",
                image: "https://assets.onecompiler.app/42vc5shrr/42yyv2knc/WEB_Purple-Fudge-Cheesecake-8-04-1024x1024.png",
                lastUpdated: new Date()
            },

            // Parfait
            {
                name: "Berry Parfait",
                category: "Parfait",
                price: 99,
                quantity: 25,
                minStock: 5,
                maxStock: 50,
                description: "Layered berry parfait with yogurt and granola",
                image: "https://assets.onecompiler.app/42rxknjmk/42zqumkdw/Berry%20Parfait.png",
                lastUpdated: new Date()
            },
            {
                name: "Nutty Chocolate Parfait",
                category: "Parfait",
                price: 99,
                quantity: 20,
                minStock: 5,
                maxStock: 50,
                description: "Chocolate parfait with nuts and whipped cream",
                image: "https://assets.onecompiler.app/42rxknjmk/42zqumkdw/Nutty-Chocolate-Candy%20Parfait.png",
                lastUpdated: new Date()
            },
            {
                name: "Oreo Mudpie Parfait",
                category: "Parfait",
                price: 99,
                quantity: 15,
                minStock: 5,
                maxStock: 50,
                description: "Oreo mudpie parfait with chocolate layers",
                image: "https://assets.onecompiler.app/42rxknjmk/42zqumkdw/Oreo-Mudpie%20Parfait.png",
                lastUpdated: new Date()
            },
            {
                name: "Purple Dream Parfait",
                category: "Parfait",
                price: 99,
                quantity: 12,
                minStock: 5,
                maxStock: 50,
                description: "Purple dream parfait with mixed berries",
                image: "https://assets.onecompiler.app/42rxknjmk/42zqumkdw/Purple-Dream%20Parfait.png",
                lastUpdated: new Date()
            },

            // Milkshake
            {
                name: "Hot Fudge Milkshake",
                category: "Milkshake",
                price: 75,
                quantity: 30,
                minStock: 10,
                maxStock: 60,
                description: "Rich chocolate milkshake with hot fudge topping",
                image: "https://assets.onecompiler.app/42zqvdqhy/42zqvhhnr/hot-fudge-milkshake.png",
                lastUpdated: new Date()
            },
            {
                name: "Caramel Chocolate Milkshake",
                category: "Milkshake",
                price: 75,
                quantity: 25,
                minStock: 10,
                maxStock: 60,
                description: "Chocolate milkshake with caramel swirl",
                image: "https://assets.onecompiler.app/42zqvdqhy/42zqvhhnr/caramel-moolatte-milkshake.png",
                lastUpdated: new Date()
            },
            {
                name: "Mocha Chocolate Milkshake",
                category: "Milkshake",
                price: 75,
                quantity: 20,
                minStock: 10,
                maxStock: 60,
                description: "Mocha chocolate milkshake with coffee flavor",
                image: "https://assets.onecompiler.app/42zqvdqhy/42zqvg87b/mocha-moolatte-milkshake.png",
                lastUpdated: new Date()
            },
            {
                name: "Strawberry Milkshake",
                category: "Milkshake",
                price: 75,
                quantity: 35,
                minStock: 10,
                maxStock: 60,
                description: "Fresh strawberry milkshake with real fruit",
                image: "https://assets.onecompiler.app/42zqvdqhy/42zqvdsvt/strawberry-milkshake.png",
                lastUpdated: new Date()
            },

            // Ingredients (for internal tracking)
            {
                name: "Chocolate Ice Cream Base",
                category: "Ingredients",
                price: 15.50,
                quantity: 100,
                minStock: 20,
                maxStock: 200,
                description: "Base chocolate ice cream mix for various flavors",
                image: null,
                lastUpdated: new Date()
            },
            {
                name: "Vanilla Ice Cream Base",
                category: "Ingredients",
                price: 15.50,
                quantity: 80,
                minStock: 20,
                maxStock: 200,
                description: "Base vanilla ice cream mix for various flavors",
                image: null,
                lastUpdated: new Date()
            },
            {
                name: "Chocolate Chips",
                category: "Ingredients",
                price: 8.75,
                quantity: 50,
                minStock: 10,
                maxStock: 100,
                description: "Premium chocolate chips for ice cream",
                image: null,
                lastUpdated: new Date()
            },
            {
                name: "Oreo Cookies",
                category: "Ingredients",
                price: 12.25,
                quantity: 30,
                minStock: 5,
                maxStock: 50,
                description: "Oreo cookies for cookie-based flavors",
                image: null,
                lastUpdated: new Date()
            },
            {
                name: "Whipped Cream",
                category: "Ingredients",
                price: 6.50,
                quantity: 40,
                minStock: 10,
                maxStock: 80,
                description: "Whipped cream for toppings and decorations",
                image: null,
                lastUpdated: new Date()
            },

            // Supplies (for internal tracking)
            {
                name: "Ice Cream Cones",
                category: "Supplies",
                price: 0.25,
                quantity: 500,
                minStock: 100,
                maxStock: 1000,
                description: "Waffle cones for ice cream servings",
                image: null,
                lastUpdated: new Date()
            },
            {
                name: "Paper Cups (Small)",
                category: "Supplies",
                price: 0.15,
                quantity: 300,
                minStock: 50,
                maxStock: 500,
                description: "Small paper cups for ice cream servings",
                image: null,
                lastUpdated: new Date()
            },
            {
                name: "Paper Cups (Medium)",
                category: "Supplies",
                price: 0.20,
                quantity: 400,
                minStock: 50,
                maxStock: 500,
                description: "Medium paper cups for ice cream servings",
                image: null,
                lastUpdated: new Date()
            },
            {
                name: "Paper Cups (Large)",
                category: "Supplies",
                price: 0.25,
                quantity: 350,
                minStock: 50,
                maxStock: 500,
                description: "Large paper cups for ice cream servings",
                image: null,
                lastUpdated: new Date()
            },
            {
                name: "Plastic Spoons",
                category: "Supplies",
                price: 0.05,
                quantity: 1000,
                minStock: 200,
                maxStock: 2000,
                description: "Plastic spoons for ice cream servings",
                image: null,
                lastUpdated: new Date()
            }
        ];
    }

    // Initialize the database with sample data
    async initializeDatabase() {
        try {
            console.log('Starting database initialization...');
            
            // Check if inventory collection already has data
            const existingData = await this.checkExistingData();
            if (existingData.length > 0) {
                console.log('Database already contains data. Skipping initialization.');
                return;
            }

            // Add sample inventory data
            await this.addSampleInventoryData();
            
            console.log('Database initialization completed successfully!');
            console.log(`Added ${this.sampleInventoryData.length} inventory items.`);
            
        } catch (error) {
            console.error('Error initializing database:', error);
            throw error;
        }
    }

    // Check if data already exists
    async checkExistingData() {
        try {
            const inventoryRef = firebase.collection(firebase.db, 'inventory');
            const snapshot = await firebase.getDocs(inventoryRef);
            return snapshot.docs;
        } catch (error) {
            console.error('Error checking existing data:', error);
            return [];
        }
    }

    // Add sample inventory data to Firestore
    async addSampleInventoryData() {
        try {
            const inventoryRef = firebase.collection(firebase.db, 'inventory');
            
            for (const item of this.sampleInventoryData) {
                await firebase.addDoc(inventoryRef, item);
                console.log(`Added: ${item.name}`);
            }
        } catch (error) {
            console.error('Error adding sample data:', error);
            throw error;
        }
    }

    // Clear all inventory data (use with caution)
    async clearAllData() {
        try {
            const inventoryRef = firebase.collection(firebase.db, 'inventory');
            const snapshot = await firebase.getDocs(inventoryRef);
            
            const deletePromises = snapshot.docs.map(doc => 
                firebase.deleteDoc(firebase.doc(firebase.db, 'inventory', doc.id))
            );
            
            await Promise.all(deletePromises);
            console.log('All inventory data cleared.');
        } catch (error) {
            console.error('Error clearing data:', error);
            throw error;
        }
    }

    // Add a single item to inventory
    async addItem(itemData) {
        try {
            const inventoryRef = firebase.collection(firebase.db, 'inventory');
            const docRef = await firebase.addDoc(inventoryRef, {
                ...itemData,
                lastUpdated: new Date()
            });
            console.log('Item added with ID:', docRef.id);
            return docRef.id;
        } catch (error) {
            console.error('Error adding item:', error);
            throw error;
        }
    }

    // Get database statistics
    async getDatabaseStats() {
        try {
            const inventoryRef = firebase.collection(firebase.db, 'inventory');
            const snapshot = await firebase.getDocs(inventoryRef);
            
            const stats = {
                totalItems: snapshot.size,
                categories: {},
                lowStockItems: 0,
                outOfStockItems: 0,
                totalValue: 0
            };

            snapshot.forEach(doc => {
                const item = doc.data();
                
                // Count by category
                if (!stats.categories[item.category]) {
                    stats.categories[item.category] = 0;
                }
                stats.categories[item.category]++;

                // Count low stock and out of stock
                if (item.quantity === 0) {
                    stats.outOfStockItems++;
                } else if (item.quantity <= item.minStock) {
                    stats.lowStockItems++;
                }

                // Calculate total value
                stats.totalValue += item.price * item.quantity;
            });

            return stats;
        } catch (error) {
            console.error('Error getting database stats:', error);
            throw error;
        }
    }
}

// Make DatabaseSetup globally available
window.DatabaseSetup = DatabaseSetup;

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Only initialize if we're on a page that needs it
    if (window.location.pathname.includes('inventory') || 
        window.location.pathname.includes('admin-dashboard') ||
        window.location.pathname.includes('database-setup')) {
        
        const dbSetup = new DatabaseSetup();
        
        // Add initialization button to inventory page
        if (window.location.pathname.includes('inventory')) {
            addDatabaseSetupButton(dbSetup);
        }
    }
});

// Add database setup button to inventory page
function addDatabaseSetupButton(dbSetup) {
    const container = document.querySelector('.inventory-section');
    if (container) {
        const setupButton = document.createElement('div');
        setupButton.className = 'text-center mb-4';
        setupButton.innerHTML = `
            <button class="btn btn-success me-2" onclick="initializeDatabase()">
                <i class="bi bi-database-add"></i> Initialize Database with Sample Data
            </button>
            <button class="btn btn-warning me-2" onclick="clearDatabase()">
                <i class="bi bi-database-dash"></i> Clear All Data
            </button>
            <button class="btn btn-info" onclick="showDatabaseStats()">
                <i class="bi bi-graph-up"></i> Show Database Stats
            </button>
        `;
        container.insertBefore(setupButton, container.firstChild);
    }
}

// Global functions for database management
window.initializeDatabase = async function() {
    const dbSetup = new DatabaseSetup();
    try {
        await dbSetup.initializeDatabase();
        alert('Database initialized successfully with sample data!');
        location.reload();
    } catch (error) {
        alert('Error initializing database: ' + error.message);
    }
};

window.clearDatabase = async function() {
    if (confirm('Are you sure you want to clear all inventory data? This action cannot be undone.')) {
        const dbSetup = new DatabaseSetup();
        try {
            await dbSetup.clearAllData();
            alert('Database cleared successfully!');
            location.reload();
        } catch (error) {
            alert('Error clearing database: ' + error.message);
        }
    }
};

window.showDatabaseStats = async function() {
    const dbSetup = new DatabaseSetup();
    try {
        const stats = await dbSetup.getDatabaseStats();
        const statsHtml = `
            <div class="alert alert-info">
                <h5>Database Statistics</h5>
                <p><strong>Total Items:</strong> ${stats.totalItems}</p>
                <p><strong>Low Stock Items:</strong> ${stats.lowStockItems}</p>
                <p><strong>Out of Stock Items:</strong> ${stats.outOfStockItems}</p>
                <p><strong>Total Inventory Value:</strong> ₱${stats.totalValue.toFixed(2)}</p>
                <h6>Items by Category:</h6>
                <ul>
                    ${Object.entries(stats.categories).map(([category, count]) => 
                        `<li><strong>${category}:</strong> ${count} items</li>`
                    ).join('')}
                </ul>
            </div>
        `;
        
        // Create modal to show stats
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Database Statistics</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        ${statsHtml}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
        
        // Remove modal from DOM when hidden
        modal.addEventListener('hidden.bs.modal', () => {
            document.body.removeChild(modal);
        });
    } catch (error) {
        alert('Error getting database stats: ' + error.message);
    }
};

export default DatabaseSetup;
