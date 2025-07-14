import React from 'react';
import { products } from '../data/products';
import {useNavigate} from 'react-router-dom';

// Select 2 products from each category for trending products
const trendingProducts = [
  ...products.PC.slice(0, 2),
  ...products.PlayStation.slice(0, 2),
  ...products.Xbox.slice(0, 2),
  ...products.Mobile.slice(0, 2)
];

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
    const handleProductClick = () => {
    navigate(`/productsdetails/${product.id}`); // or use state if you prefer
  };
const productData = Array.isArray(products) 
    ? products.find(p => p.id === product.id) || product
    : product;
  
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all transform hover:scale-105 border border-gray-700 hover:border-purple-500">
      <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
        {productData.image ? (
          <img 
            src={productData.image} 
            alt={productData.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white font-bold text-lg">{productData.name}</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-400">{product.price} Da</span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors" onClick={handleProductClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const TrendProducts = () => {
    const navigate = useNavigate();
     const handleShopRedirect1 = () =>{
        navigate("/products");
    };
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Trending Products</h1>
          <p className="text-gray-400 text-lg">Discover the hottest items across all categories</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105" onClick={handleShopRedirect1}>
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendProducts;