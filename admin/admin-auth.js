// Admin Authentication System
// This script protects all admin pages and must be included in every admin HTML file

(function() {
    'use strict';
    
    // Check if user is logged in as admin
    function checkAdminAuth() {
        const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
        const loginTime = parseInt(sessionStorage.getItem('adminLoginTime') || '0');
        const currentTime = Date.now();
        
        // Session expires after 8 hours
        const sessionTimeout = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
        const isSessionValid = (currentTime - loginTime) < sessionTimeout;
        
        if (!isLoggedIn || !isSessionValid) {
            // Clear invalid session
            sessionStorage.removeItem('adminLoggedIn');
            sessionStorage.removeItem('adminLoginTime');
            
            // Redirect to login page
            window.location.href = 'login.html';
            return false;
        }
        
        return true;
    }
    
    // Add logout functionality
    function addLogoutButton() {
        // Find existing logout button or create one
        let logoutBtn = document.getElementById('adminLogoutBtn');
        
        if (!logoutBtn) {
            // Create logout button
            logoutBtn = document.createElement('button');
            logoutBtn.id = 'adminLogoutBtn';
            logoutBtn.className = 'btn btn-outline-danger btn-sm';
            logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt me-1"></i>Logout';
            logoutBtn.onclick = logout;
            
            // Try to add it to the navbar
            const navbar = document.querySelector('.navbar-nav') || document.querySelector('.navbar');
            if (navbar) {
                const navItem = document.createElement('li');
                navItem.className = 'nav-item';
                navItem.appendChild(logoutBtn);
                navbar.appendChild(navItem);
            } else {
                // Add to top of page if no navbar found
                document.body.insertBefore(logoutBtn, document.body.firstChild);
                logoutBtn.style.position = 'fixed';
                logoutBtn.style.top = '10px';
                logoutBtn.style.right = '10px';
                logoutBtn.style.zIndex = '9999';
            }
        }
    }
    
    // Logout function
    function logout() {
        if (confirm('Are you sure you want to logout?')) {
            sessionStorage.removeItem('adminLoggedIn');
            sessionStorage.removeItem('adminLoginTime');
            window.location.href = 'login.html';
        }
    }
    
    // Session timeout warning
    function setupSessionTimeout() {
        const loginTime = parseInt(sessionStorage.getItem('adminLoginTime') || '0');
        const sessionTimeout = 7.5 * 60 * 60 * 1000; // 7.5 hours (30 min before expiry)
        
        setTimeout(() => {
            if (sessionStorage.getItem('adminLoggedIn') === 'true') {
                if (confirm('Your session will expire in 30 minutes. Do you want to extend it?')) {
                    sessionStorage.setItem('adminLoginTime', Date.now().toString());
                    setupSessionTimeout(); // Reset the timer
                } else {
                    logout();
                }
            }
        }, sessionTimeout);
    }
    
    // Initialize admin authentication
    function initAdminAuth() {
        if (checkAdminAuth()) {
            addLogoutButton();
            setupSessionTimeout();
            
            // Add admin indicator to page title
            if (!document.title.includes('(Admin)')) {
                document.title = '(Admin) ' + document.title;
            }
            
            // Add admin badge to page
            const adminBadge = document.createElement('div');
            adminBadge.className = 'badge bg-success position-fixed';
            adminBadge.style.top = '10px';
            adminBadge.style.left = '10px';
            adminBadge.style.zIndex = '9999';
            adminBadge.innerHTML = '<i class="fas fa-shield-alt me-1"></i>Admin Mode';
            document.body.appendChild(adminBadge);
        }
    }
    
    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAdminAuth);
    } else {
        initAdminAuth();
    }
    
    // Expose logout function globally
    window.adminLogout = logout;
    
})();
