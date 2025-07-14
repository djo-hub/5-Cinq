import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, CreditCard,Shield, Tag } from 'lucide-react';
import { useCart } from '../Pages/ProductDetails';
const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const navigate = useNavigate();

  // Early return if item is undefined
  if (!item) {
    return null;
  }

  const handleProduct = () => {
    navigate(`/productsdetails/${item.id}`);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveItem(item.id, item.variant?.name);
    } else {
      onUpdateQuantity(item.id, newQuantity, item.variant?.name);
    }
  };

  const handleRemove = () => {
    onRemoveItem(item.id, item.variant?.name);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all border border-gray-700 hover:border-purple-500">
      <div className="p-4">
        <div className="flex gap-4">
          {/* Product Image/Preview */}
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
            {item.image ? (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white font-bold text-lg">{item.name}</span>
        )}
          </div>
          
          {/* Product Details */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 cursor-pointer hover:text-purple-400 transition-colors" onClick={handleProduct}>
              {item.name || 'Product Name'}
            </h3>
            {item.variant && (
              <p className="text-purple-300 text-sm mb-1">Variant: {item.variant.name}</p>
            )}
            <p className="text-gray-400 text-sm mb-3">{item.description || 'No description available'}</p>
            
            {/* Price and Quantity Controls */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-purple-400">{item.price || 0} Da</span>
                
                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button 
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
                    onClick={() => handleQuantityChange(item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity || 0}</span>
                  <button 
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
                    onClick={() => handleQuantityChange(item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Total Price and Remove Button */}
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-white">
                  {((item.price || 0) * (item.quantity || 0)).toFixed(2)} Da
                </span>
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition-colors text-sm"
                  onClick={handleRemove}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  const handleContinueShopping = () => {
    navigate('/'); // Adjust path as needed
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Adjust path as needed
  };

  const handleClearCart = () => {
    cartItems.forEach(item => {
      removeFromCart(item.id, item.variant?.name);
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-16 h-16 text-gray-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-400 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <button 
              onClick={handleContinueShopping}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleContinueShopping}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </button>
            <div className="w-px h-6 bg-gray-700"></div>
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
            </span>
          </div>
          
          {cartItems.length > 0 && (
            <button 
              onClick={handleClearCart}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              Clear Cart
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <CartItem 
                key={`${item.id}-${item.variant?.name}-${index}`}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal ({getTotalItems()} items)</span>
                  <span className="font-semibold">{subtotal.toFixed(2)} Da</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax</span>
                  <span className="font-semibold">{tax.toFixed(2)} Da</span>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-purple-400">{total.toFixed(2)} Da</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 mb-4"
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Checkout
              </button>

              {/* Benefits */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">Secure checkout guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Tag className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;