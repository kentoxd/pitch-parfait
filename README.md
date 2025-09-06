# Pitch Parfait - Bootstrap Website

This is a complete Bootstrap remake of the Pitch Parfait ice cream parlor website. The website has been redesigned using Bootstrap 5.3.0 for better responsiveness, modern UI components, and improved user experience.

## 🚀 Features

### Modern Bootstrap Design
- **Responsive Layout**: Fully responsive design that works on all devices
- **Bootstrap 5.3.0**: Latest Bootstrap framework with modern components
- **Bootstrap Icons**: Beautiful icons throughout the interface
- **Custom Styling**: Maintains the original brand colors and fonts

### Pages Included
1. **Home Page** (`index.html`) - Landing page with hero section and featured products
2. **Menu Page** (`menu.html`) - Complete menu with all products organized by categories
3. **About Page** (`about.html`) - Company information, mission, vision, and team
4. **Cart Page** (`cart.html`) - Shopping cart with checkout functionality
5. **Profile Page** (`profile.html`) - Login and registration forms
6. **FAQs Page** (`faqs.html`) - Frequently asked questions with accordion layout
7. **Nutrition Facts** (`facts.html`) - Detailed nutrition information with search
8. **Directory Page** (`directory.html`) - Branch locations with contact information

### Key Improvements
- **Mobile-First Design**: Optimized for mobile devices
- **Interactive Components**: Accordions, modals, carousels, and more
- **Enhanced Navigation**: Collapsible navigation for mobile
- **Better Typography**: Improved readability and hierarchy
- **Modern UI Elements**: Cards, buttons, forms with hover effects
- **Accessibility**: Better contrast and keyboard navigation

## 🎨 Design Features

### Color Scheme
- **Primary**: #ba1b59 (Pitch Parfait Pink)
- **Secondary**: #ffcae9 (Light Pink)
- **Background**: Linear gradient from #C8A8E9 to #F6BCBA
- **Text**: #734f96 (Purple)

### Typography
- **Custom Fonts**: All original fonts preserved
  - `avocadodiet` - Headers
  - `bakeryroast` - Navigation and buttons
  - `sweetaffogato`, `sundaebite`, `parfait` - Decorative elements

### Components Used
- **Navigation**: Bootstrap navbar with responsive collapse
- **Cards**: Product cards, team member cards, branch cards
- **Carousel**: Hero image slider
- **Accordion**: FAQ section
- **Modal**: Registration form
- **Tables**: Nutrition facts with search functionality
- **Forms**: Enhanced login and registration forms

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible hamburger menu
- **Flexible Grid**: Bootstrap grid system for all screen sizes
- **Touch-Friendly**: Larger buttons and touch targets
- **Optimized Images**: Responsive images that scale properly

## 🛠️ Technical Details

### Dependencies
- **Bootstrap 5.3.0**: CSS and JS framework
- **Bootstrap Icons**: Icon library
- **Custom CSS**: Brand-specific styling
- **Vanilla JavaScript**: Interactive functionality

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📁 File Structure

```
Bootstrap Website/
├── index.html          # Home page
├── menu.html           # Menu page
├── about.html          # About page
├── cart.html           # Shopping cart
├── profile.html        # Login/Registration
├── faqs.html           # FAQ page
├── facts.html          # Nutrition facts
├── directory.html      # Branch locations
├── fonts/              # Custom font files
│   ├── avocadodiet.ttf
│   ├── bakeryroast.ttf
│   ├── parfait.ttf
│   ├── sundaebite.otf
│   └── sweetaffogato.ttf
└── README.md           # This file
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Local Server** (recommended): Use a local server for best experience
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎯 Key Functionality

### Shopping Cart
- Add items to cart from menu
- Update quantities
- Remove items
- Calculate totals
- Checkout with payment options
- PWD/Senior discount support

### User Authentication
- Login form with validation
- Registration modal
- Password visibility toggle
- Form validation

### Interactive Features
- Image carousel on home page
- Searchable nutrition facts table
- Expandable FAQ accordion
- Click-to-call and map integration
- Back-to-top button
- Smooth scrolling

## 🔧 Customization

### Colors
Edit the CSS custom properties in each HTML file:
```css
:root {
    --primary-color: #ba1b59;
    --secondary-color: #ffcae9;
    --text-color: #734f96;
}
```

### Fonts
Font files are included in the `fonts/` directory. Update the `@font-face` declarations in the CSS to modify fonts.

### Content
All content can be easily modified by editing the HTML files. The Bootstrap classes make it simple to adjust layouts and styling.

## 📞 Support

For questions or issues with the Bootstrap website, please refer to the original website structure or contact the development team.

---

**Note**: This Bootstrap version maintains all the original functionality while providing a modern, responsive, and user-friendly interface. All external image URLs and functionality have been preserved from the original website.
