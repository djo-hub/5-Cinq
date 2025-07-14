
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlatformCard from './common/PlatformCard';

const Category = () => {
  const navigate = useNavigate();
  const platforms = ['PC', 'PlayStation', 'Xbox', 'Mobile'];

  const handleCategorySelect = (platform) => {
    // Add safety check
    if (!platform) return;
    
    // Navigate to category-specific product page
    navigate(`/category/${platform.toLowerCase()}`);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Shop by Platform
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find gaming currency, credits, subscriptions and digital products for your favorite gaming platform
          </p>
        </div>
                
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <PlatformCard
              key={platform}
              platform={platform}
              onClick={handleCategorySelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;