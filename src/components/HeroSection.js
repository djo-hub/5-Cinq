import React from 'react';
import { useNavigate } from "react-router-dom";


  
const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopRedirect = () => {
    navigate("/products");
  };
  const handleAboutRedirect = ()=>{
    navigate("/about");
  }

  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Gateway to Gaming
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Credits & Subscription
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Get instant access to Steam Wallet, Valorant Points, PlayStation Store, Xbox Live, and more. 
            Fast delivery, secure transactions, competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors" onClick={handleShopRedirect}>
              Shop Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors" onClick={handleAboutRedirect}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
