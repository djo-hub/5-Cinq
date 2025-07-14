import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../data/products';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProduct = ()=>{
    navigate(`/productsdetails/${product.id}`);
  }

  // Find the complete product data including image
  const productData = Array.isArray(products) 
    ? products.find(p => p.id === product.id) || product
    : product;
  
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all transform hover:scale-105 border border-gray-700 hover:border-purple-500">
      <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
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
        <h3 className="font-semibold text-lg mb-2">{productData.name}</h3>
        <p className="text-gray-400 mb-3">{productData.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-400">{productData.price} Da</span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors" onClick={handleProduct}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;