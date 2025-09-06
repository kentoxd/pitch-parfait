# Pitch Parfait Inventory System Setup Guide

## 🎯 Your Firebase Project: `pitchpar-535ee`

This guide will help you set up the complete inventory management system for your Pitch Parfait project.

## 📋 Prerequisites

- Access to your Firebase project: [pitchpar-535ee](https://console.firebase.google.com/u/0/project/pitchpar-535ee/overview)
- A web server to host your files (Firebase Hosting, GitHub Pages, or local server)

## 🚀 Quick Setup Steps

### Step 1: Get Your Firebase Configuration

1. Go to your [Firebase Console](https://console.firebase.google.com/u/0/project/pitchpar-535ee/overview)
2. Click the gear icon (⚙️) next to "Project Overview"
3. Select "Project settings"
4. Scroll down to "Your apps" section
5. If you don't have a web app yet:
   - Click "Add app" and select the web icon (</>)
   - Register your app with nickname "Pitch Parfait Web"
   - Copy the configuration object

### Step 2: Update Firebase Configuration

Open `firebase-config.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key-here",
    authDomain: "pitchpar-535ee.firebaseapp.com",
    projectId: "pitchpar-535ee",
    storageBucket: "pitchpar-535ee.appspot.com",
    messagingSenderId: "your-actual-sender-id",
    appId: "your-actual-app-id"
};
```

### Step 3: Set up Firestore Database

1. In your Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" for development
4. Select a location (choose closest to your users)
5. Click "Done"

### Step 4: Configure Security Rules

1. Go to "Firestore Database" → "Rules" tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to inventory collection
    match /inventory/{document} {
      allow read, write: if true; // For development
    }
  }
}
```

3. Click "Publish"

### Step 5: Initialize Your Database

1. Open `inventory.html` in your browser
2. You'll see database setup buttons at the top
3. Click "Initialize Database with Sample Data"
4. This will populate your database with all Pitch Parfait menu items

## 📊 What Gets Created

The system will automatically create:

### Inventory Items (32 items total)
- **Classic Swirls**: Choco Chip, Choco Extreme, Double Dutch, Mango Cheesecake
- **Special Swirls**: Berry Choco, Chocolate Chip Cookie Dough, French Silk Pie, Turtle Pecan
- **Royal Swirls**: New York Cheesecake, Oreo Swirl, Reese's Brownies, Ultimate Choco Brownie
- **Cakes**: Chocolate Extreme, KitKat, Choco Shavings, Purple Fudge Cheesecake
- **Parfait**: Berry, Nutty Chocolate, Oreo Mudpie, Purple Dream
- **Milkshake**: Hot Fudge, Caramel Chocolate, Mocha Chocolate, Strawberry
- **Ingredients**: Ice cream bases, chocolate chips, cookies, whipped cream
- **Supplies**: Cones, cups, spoons

### Sample Data Structure
Each item includes:
- Name and category
- Price (in Philippine Pesos)
- Current stock quantity
- Minimum stock level
- Maximum stock level
- Description and image URL
- Last updated timestamp

## 🎮 How to Use the System

### 1. Inventory Management (`inventory.html`)
- View all inventory items with real-time updates
- Add new items with the "Add Item" button
- Edit existing items by clicking the edit icon
- Update stock levels with +/- buttons
- Filter by stock status (All, Low Stock, Out of Stock)
- Search items by name or category

### 2. Menu Integration (`menu.html`)
- Menu items show real-time stock indicators
- Out-of-stock items are disabled
- Stock levels are displayed as colored badges
- Cart prevents adding unavailable items

### 3. Cart System (`cart.html`)
- Validates stock availability before adding items
- Prevents exceeding available quantities
- Shows real-time stock status

### 4. Admin Dashboard (`admin-dashboard.html`)
- Overview of inventory statistics
- Charts showing stock distribution
- Critical alerts for low stock items
- Export functionality for reports
- Recent activity tracking

## 🔧 Database Management Features

### Initialize Database
- Click "Initialize Database with Sample Data" to populate with all menu items
- Only runs if database is empty (prevents duplicates)

### Clear Database
- Click "Clear All Data" to remove all inventory items
- Use with caution - this action cannot be undone

### Database Statistics
- Click "Show Database Stats" to see:
  - Total number of items
  - Low stock and out-of-stock counts
  - Total inventory value
  - Items by category

## 📱 Real-time Features

### Live Updates
- All pages update automatically when inventory changes
- No need to refresh the page
- Changes sync across all open tabs

### Stock Alerts
- Real-time notifications for low stock items
- Priority-based alert system
- Dismissible alert panel

### Visual Indicators
- Color-coded stock status badges
- Green: High stock
- Yellow: Medium stock
- Orange: Low stock
- Red: Out of stock

## 🎨 Customization

### Adding New Items
1. Go to inventory page
2. Click "Add Item"
3. Fill in the form:
   - Name (required)
   - Category (required)
   - Price (required)
   - Current Stock (required)
   - Minimum Stock Level (required)
   - Maximum Stock Level (optional)
   - Description (optional)
   - Image URL (optional)

### Modifying Existing Items
1. Click the edit icon on any item
2. Update the information
3. Click "Save Item"

### Stock Management
- Use +/- buttons to quickly adjust stock
- Or edit the item to change quantities
- System automatically updates all related pages

## 🚨 Troubleshooting

### Common Issues

1. **"Firebase not initialized" error**
   - Check that your Firebase configuration is correct
   - Ensure you're serving files from a web server (not file://)

2. **"Permission denied" error**
   - Check your Firestore security rules
   - Make sure rules allow read/write access

3. **"Module not found" error**
   - Ensure all JavaScript files are in the same directory
   - Check that you're using a web server, not opening files directly

4. **Database not updating**
   - Check your internet connection
   - Verify Firebase project is active
   - Check browser console for errors

### Getting Help

- Check the browser console (F12) for error messages
- Verify Firebase configuration matches your project
- Ensure Firestore database is created and rules are published

## 📈 Next Steps

1. **Test the System**: Add some items, update stock levels, test the cart
2. **Customize Data**: Modify prices, descriptions, and stock levels to match your business
3. **Add Images**: Update image URLs to point to your actual product photos
4. **Set Up Production**: Configure proper security rules for production use
5. **Train Staff**: Show your team how to use the inventory management system

## 🎯 Production Considerations

### Security Rules for Production
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /inventory/{document} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        request.auth.token.admin == true;
    }
  }
}
```

### Backup Strategy
- Export data regularly using the export function
- Set up Firebase backup rules
- Keep local backups of important data

## 🎉 You're All Set!

Your Pitch Parfait inventory management system is now ready to use. The system will help you:

- Track inventory in real-time
- Prevent overselling
- Manage stock levels efficiently
- Generate reports and analytics
- Provide better customer experience

For any questions or issues, refer to the Firebase documentation or check the browser console for error messages.
