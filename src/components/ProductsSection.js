import React from 'react';
import PlatformCard from './common/PlatformCard';
import ProductCard from './common/ProductCard';
import { products } from '../data/products';

const ProductsSection = ({ selectedPlatform, setSelectedPlatform }) => {
  const platforms = ['PC', 'PlayStation', 'Xbox', 'Mobile'];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Choose Your Platform
        </h2>
        
        {!selectedPlatform ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map(platform => (
              <PlatformCard 
                key={platform} 
                platform={platform} 
                onClick={setSelectedPlatform}
              />
            ))}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center mb-8">
              <button 
                onClick={() => setSelectedPlatform(null)}
                className="text-purple-400 hover:text-purple-300 mr-4"
              >
                ← Back to Platforms
              </button>
              <h3 className="text-2xl font-semibold text-white">{selectedPlatform} Products</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products[selectedPlatform].map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;