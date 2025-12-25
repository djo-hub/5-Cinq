# 5-CINQ

Your premium destination for gaming currency, digital credits, and subscriptions. Level up your gaming experience across all major platforms.

🌐 **Live Demo:** [https://djo-hub.github.io/5-Cinq](https://djo-hub.github.io/5-Cinq)

## Overview

5-CINQ is a modern React-based e-commerce platform designed for gamers, providing quick and secure access to gaming currencies, digital credits, gift cards, and gaming subscriptions across all major gaming platforms and services.

## Features

- **Multi-Platform Support:** Gaming currency for PlayStation, Xbox, Steam, Nintendo, EA, and more
- **Digital Credits:** Purchase credits for popular gaming platforms and services
- **Product Categories:** Browse organized categories of gaming products
- **Shopping Cart:** Full cart functionality with item management
- **Product Details:** Detailed product information and pricing
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation:** React-based single-page application for seamless user experience
- **Modern UI Components:** Reusable components for consistent design

## Tech Stack

**Frontend:**
- React.js
- JavaScript (ES6+)
- CSS3
- HTML5

**Build Tools:**
- Create React App
- React Testing Library
- Jest

**Deployment:**
- GitHub Pages

## Installation & Setup

### Prerequisites

```bash
node >= 14.0.0
npm >= 6.0.0
```

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/djo-hub/5-Cinq.git
cd 5-Cinq
```

2. Navigate to the source directory:
```bash
cd src
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Visit `http://localhost:3000` in your browser

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Project Structure

```
5-Cinq/
├── src/
│   ├── Pages/                      # Page components
│   │   ├── CartItems.js           # Shopping cart page
│   │   ├── CheckoutPage.js        # Checkout and payment
│   │   ├── ProductDetails.js      # Individual product view
│   │   ├── ProductsPage.js        # Products catalog
│   │   └── Shop.js                # Main shop page
│   │
│   ├── components/                 # Reusable components
│   │   ├── common/                # Common UI components
│   │   │   ├── AboutSection.js   # About section
│   │   │   ├── Category.js       # Category display
│   │   │   ├── CategoryPage.js   # Category page
│   │   │   ├── Footer.js         # Footer component
│   │   │   ├── Header.js         # Header/navigation
│   │   │   ├── HeroSection.js    # Hero banner
│   │   │   ├── LoginModal.js     # Login/auth modal
│   │   │   ├── ProductsSection.js # Products display
│   │   │   ├── ScrollToTop.js    # Scroll utility
│   │   │   └── TrendProducts.js  # Trending products
│   │   │
│   │   └── common/                # Product card components
│   │       ├── PlatformCard.js   # Platform selection cards
│   │       └── ProductCard.js    # Product display cards
│   │
│   ├── data/                      # Static data and assets
│   │   ├── products.js           # Product database/catalog
│   │   ├── *.png                 # Product images (PlayStation, Xbox, etc.)
│   │   ├── ea.png               # EA Origin images
│   │   ├── gp*.png              # Google Play cards
│   │   ├── ps*.png              # PlayStation cards
│   │   ├── steam*.png           # Steam cards
│   │   └── store.png            # Store assets
│   │
│   ├── App.js                    # Main App component
│   ├── index.js                  # Entry point
│   ├── reportWebVitals.js       # Performance monitoring
│   └── setupTests.js            # Test configuration
│
├── package.json                  # Dependencies and scripts
├── README.md                     # Project documentation
└── .gitignore                   # Git ignore rules
```

## Key Components

### Pages
- **Shop.js**: Main landing page with hero section and featured products
- **ProductsPage.js**: Complete product catalog with filtering
- **ProductDetails.js**: Detailed view of individual products
- **CartItems.js**: Shopping cart management
- **CheckoutPage.js**: Payment and order completion

### Components
- **Header.js**: Navigation bar with cart and login functionality
- **Footer.js**: Site footer with links and information
- **ProductCard.js**: Reusable product display component
- **PlatformCard.js**: Gaming platform selection cards
- **Category.js**: Product category navigation
- **HeroSection.js**: Main banner/hero section
- **TrendProducts.js**: Trending products showcase
- **LoginModal.js**: User authentication modal

## Supported Platforms

The platform supports digital products for:
- **PlayStation Network** (PSN cards: $5, $10, $25, $50, $100)
- **Xbox Live** (Xbox gift cards)
- **Steam** (Steam Wallet codes)
- **Nintendo eShop** (Nintendo cards)
- **EA Origin** (EA Play subscriptions)
- **Google Play** (Google Play gift cards)
- **Valorant Points**

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation!** Ejects from Create React App configuration

## Development Roadmap

- [ ] User authentication and account system
- [ ] Order history and tracking
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Wishlist functionality
- [ ] Product search and advanced filtering
- [ ] Customer reviews and ratings
- [ ] Live chat support
- [ ] Loyalty rewards program
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Email notifications
- [ ] Admin dashboard for inventory management

## Testing

The project uses Jest and React Testing Library for testing. Test files are configured in `setupTests.js`.

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow React best practices and hooks guidelines
- Use functional components with hooks
- Maintain component modularity and reusability
- Write meaningful commit messages
- Add tests for new features

## Deployment

The project is deployed using GitHub Pages:

```bash
# Build and deploy
npm run build
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Disclaimer

5-CINQ is an independent platform. All product names, logos, brands, and trademarks are property of their respective owners. This platform is not affiliated with or endorsed by Sony, Microsoft, Nintendo, Valve, EA, or any gaming platform mentioned.

## Contact

**Developer:** [@djo-hub](https://github.com/djo-hub)  
**Website:** [https://djo-hub.github.io/5-Cinq](https://djo-hub.github.io/5-Cinq)  
**GitHub:** [https://github.com/djo-hub/5-Cinq](https://github.com/djo-hub/5-Cinq)
**Email** [djoghlal.abid@univ-khenchela.dz]

## Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Product images and logos from respective gaming platforms
- Hosted on GitHub Pages
- React community for excellent documentation and tools

---

**Built with ❤️ for gamers by gamers**

## Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Testing Library](https://testing-library.com/react)
