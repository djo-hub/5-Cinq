// App.js
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import AboutSection from './components/AboutSection';
import Shop from './Pages/Shop';
import Products from './Pages/ProductsPage';
import ProductDetails from './Pages/ProductDetails';
import CartItems from './Pages/CartItems';
import { CartProvider } from '../src/Pages/ProductDetails';
import CheckoutPage from './Pages/ChekoutPage';
import ScrollToTop from './components/ScrollToTop'
import Category from './components/Category';
import CategoryPage from './components/CategoryPage';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header setShowLogin={setShowLogin} />
        <main>
          <ScrollToTop/>
          <CartProvider>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/home" element={<Shop />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productsdetails/:id" element={<ProductDetails/>} />
            <Route path="/cartitems" element={<CartItems/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path="/category/:platform" element={<CategoryPage />} />
          </Routes>
          </CartProvider>
        </main>
        <Footer />
        
        <LoginModal 
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;