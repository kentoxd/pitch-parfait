# Admin Stock Update Guide

## 🚀 Quick Access
1. **Login URL**: `admin/login.html`
2. **Credentials**: 
   - Username: `admin`
   - Password: `pingol`

## 📊 Available Admin Pages

### 1. **inventory-ultra-fast.html** (Main Inventory)
- **Ultra-fast loading** (1-2 seconds)
- **Skeleton loading** for instant feedback
- **Quick stock updates** (+10, +50 buttons)
- **Real-time search** and filtering
- **Direct access after login**
- **Features**: View, Edit, Add, Delete items

### 2. **admin-dashboard.html** (Analytics)
- **Inventory analytics**
- **Stock reports**
- **Performance metrics**

## 🔧 How to Update Stock

### **Method 1: Edit Individual Items**
1. Login to admin
2. Find the item in the inventory list
3. Click "Edit" button
4. Change the quantity
5. Click "Update"

### **Method 2: Add New Items**
1. Click "Add New Item" button
2. Fill in:
   - Name (e.g., "Choco Chip")
   - Category (e.g., "Classic Swirls")
   - Price (e.g., 55)
   - Quantity (e.g., 50)
   - Min Stock (e.g., 10)
3. Click "Add Item"

### **Method 3: Bulk Update (if available)**
1. Use search to filter items
2. Edit multiple items
3. Changes save automatically

## 📱 Real-time Updates
- **Changes appear immediately** in the public menu
- **Stock indicators update** automatically
- **Cart validation** uses current stock levels

## 🛠️ Troubleshooting

### **If inventory page doesn't load:**
1. Check Firebase connection
2. Try `inventory-fast.html` instead
3. Refresh the page

### **If changes don't appear:**
1. Check browser console for errors
2. Verify Firebase permissions
3. Try logging out and back in

### **If you can't login:**
1. Clear browser cache
2. Check credentials: admin/pingol
3. Try incognito/private mode

## 🔄 Stock Update Workflow
1. **Customer purchases** → Stock automatically deducted
2. **Admin adds stock** → Available immediately
3. **Menu shows** → Real-time stock indicators
4. **Cart validates** → Current stock levels

## 📞 Quick Links
- **Admin Login**: `admin/login.html`
- **Ultra Fast Inventory**: `admin/inventory-ultra-fast.html`
- **Admin Dashboard**: `admin/admin-dashboard.html`
- **Public Menu**: `public/menu.html`
- **Database Setup**: `database/setup-database.html`
