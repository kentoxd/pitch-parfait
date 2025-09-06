// Real-time inventory tracking and alerts
import { firebase } from './firebase-config.js';

class InventoryAlerts {
    constructor() {
        this.lowStockThreshold = 5; // Default low stock threshold
        this.alerts = [];
        this.listeners = [];
    }

    // Initialize real-time inventory monitoring
    async initialize() {
        try {
            await this.setupRealtimeListener();
            this.checkLowStockItems();
            this.setupPeriodicChecks();
        } catch (error) {
            console.error('Error initializing inventory alerts:', error);
        }
    }

    // Set up real-time listener for inventory changes
    async setupRealtimeListener() {
        try {
            const inventoryRef = firebase.collection(firebase.db, 'inventory');
            const q = firebase.query(inventoryRef, firebase.orderBy('lastUpdated', 'desc'));

            const unsubscribe = firebase.onSnapshot(q, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'modified') {
                        this.handleInventoryUpdate(change.doc.data(), change.doc.id);
                    }
                });
            });

            this.listeners.push(unsubscribe);
        } catch (error) {
            console.error('Error setting up real-time listener:', error);
        }
    }

    // Handle inventory updates
    handleInventoryUpdate(itemData, itemId) {
        const { name, quantity, minStock, category } = itemData;
        
        // Check if item is now low stock or out of stock
        if (quantity === 0) {
            this.addAlert({
                type: 'out_of_stock',
                itemId,
                itemName: name,
                category,
                message: `${name} is now out of stock!`,
                timestamp: new Date(),
                priority: 'high'
            });
        } else if (quantity <= minStock) {
            this.addAlert({
                type: 'low_stock',
                itemId,
                itemName: name,
                category,
                message: `${name} is running low (${quantity} remaining, min: ${minStock})`,
                timestamp: new Date(),
                priority: 'medium'
            });
        }

        // Update UI if on inventory page
        this.updateInventoryUI();
    }

    // Check for low stock items
    async checkLowStockItems() {
        try {
            const inventoryRef = firebase.collection(firebase.db, 'inventory');
            const snapshot = await firebase.getDocs(inventoryRef);

            snapshot.forEach((doc) => {
                const item = doc.data();
                const { name, quantity, minStock, category } = item;

                if (quantity === 0) {
                    this.addAlert({
                        type: 'out_of_stock',
                        itemId: doc.id,
                        itemName: name,
                        category,
                        message: `${name} is out of stock!`,
                        timestamp: new Date(),
                        priority: 'high'
                    });
                } else if (quantity <= minStock) {
                    this.addAlert({
                        type: 'low_stock',
                        itemId: doc.id,
                        itemName: name,
                        category,
                        message: `${name} is running low (${quantity} remaining, min: ${minStock})`,
                        timestamp: new Date(),
                        priority: 'medium'
                    });
                }
            });

            this.displayAlerts();
        } catch (error) {
            console.error('Error checking low stock items:', error);
        }
    }

    // Add alert to the alerts array
    addAlert(alert) {
        // Check if alert already exists for this item
        const existingAlert = this.alerts.find(a => a.itemId === alert.itemId && a.type === alert.type);
        
        if (existingAlert) {
            // Update existing alert
            existingAlert.message = alert.message;
            existingAlert.timestamp = alert.timestamp;
        } else {
            // Add new alert
            this.alerts.push(alert);
        }

        this.displayAlerts();
    }

    // Display alerts in the UI
    displayAlerts() {
        // Create or update alerts container
        let alertsContainer = document.getElementById('inventory-alerts');
        if (!alertsContainer) {
            alertsContainer = this.createAlertsContainer();
        }

        // Clear existing alerts
        alertsContainer.innerHTML = '';

        if (this.alerts.length === 0) {
            alertsContainer.style.display = 'none';
            return;
        }

        // Sort alerts by priority and timestamp
        const sortedAlerts = this.alerts.sort((a, b) => {
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[b.priority] - priorityOrder[a.priority];
            }
            return new Date(b.timestamp) - new Date(a.timestamp);
        });

        // Display alerts
        sortedAlerts.forEach(alert => {
            const alertElement = this.createAlertElement(alert);
            alertsContainer.appendChild(alertElement);
        });

        alertsContainer.style.display = 'block';
    }

    // Create alerts container
    createAlertsContainer() {
        const container = document.createElement('div');
        container.id = 'inventory-alerts';
        container.className = 'inventory-alerts-container';
        container.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            width: 350px;
            max-height: 400px;
            overflow-y: auto;
            z-index: 1050;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            border: 1px solid #e9ecef;
        `;

        // Add to body
        document.body.appendChild(container);
        return container;
    }

    // Create individual alert element
    createAlertElement(alert) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${this.getAlertClass(alert.type)} alert-dismissible fade show`;
        alertDiv.style.cssText = `
            margin: 10px;
            border-radius: 8px;
            border: none;
            font-size: 0.9rem;
        `;

        const priorityIcon = this.getPriorityIcon(alert.priority);
        const timeAgo = this.getTimeAgo(alert.timestamp);

        alertDiv.innerHTML = `
            <div class="d-flex align-items-start">
                <div class="me-2">${priorityIcon}</div>
                <div class="flex-grow-1">
                    <div class="fw-bold">${alert.itemName}</div>
                    <div class="small">${alert.message}</div>
                    <div class="small text-muted">${timeAgo}</div>
                </div>
                <button type="button" class="btn-close" onclick="inventoryAlerts.dismissAlert('${alert.itemId}', '${alert.type}')"></button>
            </div>
        `;

        return alertDiv;
    }

    // Get alert class based on type
    getAlertClass(type) {
        switch (type) {
            case 'out_of_stock': return 'danger';
            case 'low_stock': return 'warning';
            default: return 'info';
        }
    }

    // Get priority icon
    getPriorityIcon(priority) {
        switch (priority) {
            case 'high': return '<i class="bi bi-exclamation-triangle-fill text-danger"></i>';
            case 'medium': return '<i class="bi bi-exclamation-circle-fill text-warning"></i>';
            case 'low': return '<i class="bi bi-info-circle-fill text-info"></i>';
            default: return '<i class="bi bi-info-circle-fill text-info"></i>';
        }
    }

    // Get time ago string
    getTimeAgo(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);
        const diffInMinutes = Math.floor((now - time) / (1000 * 60));

        if (diffInMinutes < 1) return 'Just now';
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
        return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }

    // Dismiss alert
    dismissAlert(itemId, type) {
        this.alerts = this.alerts.filter(alert => !(alert.itemId === itemId && alert.type === type));
        this.displayAlerts();
    }

    // Clear all alerts
    clearAllAlerts() {
        this.alerts = [];
        this.displayAlerts();
    }

    // Update inventory UI (if on inventory page)
    updateInventoryUI() {
        if (typeof displayItems === 'function') {
            displayItems();
        }
        if (typeof updateStatistics === 'function') {
            updateStatistics();
        }
    }

    // Set up periodic checks for low stock
    setupPeriodicChecks() {
        // Check every 5 minutes
        setInterval(() => {
            this.checkLowStockItems();
        }, 5 * 60 * 1000);
    }

    // Get alerts summary
    getAlertsSummary() {
        const summary = {
            total: this.alerts.length,
            outOfStock: this.alerts.filter(a => a.type === 'out_of_stock').length,
            lowStock: this.alerts.filter(a => a.type === 'low_stock').length,
            highPriority: this.alerts.filter(a => a.priority === 'high').length
        };
        return summary;
    }

    // Cleanup listeners
    cleanup() {
        this.listeners.forEach(unsubscribe => unsubscribe());
        this.listeners = [];
    }
}

// Initialize inventory alerts
const inventoryAlerts = new InventoryAlerts();

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    inventoryAlerts.initialize();
});

// Make inventoryAlerts globally available
window.inventoryAlerts = inventoryAlerts;

export default inventoryAlerts;
