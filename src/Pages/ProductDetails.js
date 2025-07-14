import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Shield, Check, Plus, Minus } from 'lucide-react';
import { products } from '../data/products'; // adjust path if needed

// Cart Context (you can also use Redux or other state management)
const CartContext = React.createContext();

// Cart Provider Component (wrap your app with this)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1, variant = null) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: variant ? variant.price : product.price,
      quantity: quantity,
      variant: variant,
      image: product.image 
    };

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === product.id && 
        item.variant?.name === variant?.name
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.variant?.name === variant?.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, cartItem];
    });
  };

  const updateQuantity = (productId, newQuantity, variantName = null) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.variant?.name === variantName
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId, variantName = null) => {
    setCartItems(prevItems =>
      prevItems.filter(item => 
        !(item.id === productId && item.variant?.name === variantName)
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Flatten all platform categories
  const allProducts = Object.values(products).flat();
  const currentProduct = allProducts.find(p => p.id === id);

  // ✅ Declare hooks BEFORE any conditional logic
  const [selectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!currentProduct) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="text-gray-400">Please check the URL or return to the shop.</p>
      </div>
    );
  }

  // Extend product data with additional fields
  const productData = {
    ...currentProduct,
    rating: 4.8,
    reviewCount: 2847,
    longDescription: "This is a high-quality product perfect for gamers and users who want quick and reliable digital delivery.",
    variants: [
      { name: "Standard", color: "#7c3aed", price: currentProduct.price },
      { name: "Limited Edition", color: "#9333ea", price: currentProduct.price + 10 }
    ],
    stockCount: 24,
    warranty: "15-days warranty included"
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    try {
      // Add the product to cart with selected variant and quantity
      addToCart(productData, quantity, productData.variants[selectedVariant]);
      
      // Show success feedback
      setAddedToCart(true);
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };


  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 font-medium transition-colors ${
        isActive
          ? 'text-purple-400 border-b-2 border-purple-400'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto bg-gray-900 text-white p-6 rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-80 h-80 bg-gray-800 rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
              <div className="text-center">
                
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
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-3xl font-bold text-purple-400">
                {productData.variants[selectedVariant].price} Da
              </span>
              {productData.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">{productData.originalPrice} Da</span>
                  <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm">
                    {Math.round(((productData.originalPrice - productData.variants[selectedVariant].price) / productData.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>
            <p className="text-gray-300 mb-6">{productData.description}</p>
          </div>
        
          {/* Quantity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border border-gray-600 rounded-lg">
                <button onClick={() => handleQuantityChange(-1)} className="p-2 hover:bg-gray-700 transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x border-gray-600">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-700 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-400">
                {productData.stockCount} in stock
              </span>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className={`flex-1 font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 ${
                  addedToCart 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                } ${isAddingToCart ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isAddingToCart ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Adding...</span>
                  </>
                ) : addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 rounded-xl transition-all ${
                  isWishlisted
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="bg-gray-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-sm">{productData.warranty}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-sm">In Stock</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <div className="flex space-x-6 border-b border-gray-700 mb-6">
          <TabButton id="description" label="Description" isActive={activeTab === 'description'} onClick={setActiveTab} />
          <TabButton id="specifications" label="Specifications" isActive={activeTab === 'specifications'} onClick={setActiveTab} />
        </div>

        <div className="min-h-[200px]">
          {activeTab === 'description' && (
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">{productData.longDescription}</p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productData.specifications &&
                Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">{key}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
