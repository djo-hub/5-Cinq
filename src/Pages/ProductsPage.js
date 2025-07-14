import React, { useState } from 'react';
import ProductsSection from '../components/ProductsSection';

function ProductsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  return (
    <ProductsSection 
      selectedPlatform={selectedPlatform} 
      setSelectedPlatform={setSelectedPlatform} 
    />
  );
}

export default ProductsPage;
