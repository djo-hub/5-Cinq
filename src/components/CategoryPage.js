import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from './common/ProductCard';
import { products } from '../data/products';

const CategoryPage = () => {
  const { platform } = useParams();
  const navigate = useNavigate();
  
  // Valid platforms
  const validPlatforms = ['pc', 'playstation', 'xbox', 'mobile'];
  
  // Safety check for undefined or invalid platform
  if (!platform || !validPlatforms.includes(platform.toLowerCase())) {
    navigate('/');
    return null;
  }
  
  // Map URL platform to data structure key
  const platformMapping = {
    'pc': 'PC',
    'playstation': 'PlayStation',
    'xbox': 'Xbox',
    'mobile': 'Mobile'
  };
  
  const platformName = platformMapping[platform.toLowerCase()];
  
  // Get products for this platform
  const platformProducts = products[platformName] || [];
  
  const handleGoBack = () => {
    navigate('/'); // or navigate(-1) to go back to previous page
  };

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={handleGoBack}
            className="text-purple-400 hover:text-purple-300 mr-4 flex items-center"
          >
            ← Back to Shop
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {platformName} Products
          </h1>
        </div>
        
        {platformProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformProducts.map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No products found for {platformName}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;