import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Phone, CheckCircle, X,  User, ShoppingBag } from 'lucide-react';
import { useCart } from '../Pages/ProductDetails';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalItems, getTotalPrice, removeFromCart } = useCart();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBackToCart = () => {
    navigate('/cart');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleConfirmOrder = () => {
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    const isValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isValid) {
      alert('Please fill in all required fields');
      return;
    }

    // Store order data before clearing cart
    const orderSummary = {
      items: cartItems.length,
      total: total,
      subtotal: subtotal,
      tax: tax,
      phone: formData.phone
    };
    
    setOrderData(orderSummary);
    setIsConfirmed(true);
    
    // Clear cart after successful order (if removeFromCart is available)
    if (removeFromCart) {
      cartItems.forEach(item => {
        removeFromCart(item.id, item.variant?.name);
      });
    }
  };

  const handleCancelOrder = () => {
    navigate('/');
  };

  // If order is confirmed, show success message
  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto p-6">
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <div className="bg-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-semibold">You will receive a call to confirm your order</span>
              </div>
              <p className="text-gray-400 mb-4">
                Our team will contact you at <span className="text-purple-400 font-semibold">{orderData?.phone}</span> within 30 minutes to confirm your order details and delivery information.
              </p>
              <div className="text-sm text-gray-400">
                <p>Order Total: <span className="text-white font-bold">{orderData?.total?.toFixed(2) || '0.00'} Da</span></p>
                <p>Items: <span className="text-white">{orderData?.items || 0} {orderData?.items === 1 ? 'item' : 'items'}</span></p>
              </div>
            </div>
            <button 
              onClick={handleBackToHome}
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
              onClick={handleBackToCart}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Cart
            </button>
            <div className="w-px h-6 bg-gray-700"></div>
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="space-y-6">
            {/* Customer Information */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Cart Items Summary */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Order Summary
              </h2>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {cartItems.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex justify-between items-center py-2 border-b border-gray-700">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      {item.variant && (
                        <p className="text-sm text-purple-300">Variant: {item.variant.name}</p>
                      )}
                      <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{((item.price || 0) * (item.quantity || 0)).toFixed(2)} Da</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal ({getTotalItems()} items)</span>
                  <span className="font-semibold">{subtotal.toFixed(2)} Da</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax</span>
                  <span className="font-semibold">{tax.toFixed(2)} Da</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-purple-400">{total.toFixed(2)} Da</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={handleConfirmOrder}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Confirm Order
              </button>
              <button 
                onClick={handleCancelOrder}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" />
                Cancel Order
              </button>
            </div>

            {/* Call Confirmation Note */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-300 mb-1">Phone Confirmation</h3>
                  <p className="text-sm text-blue-200">
                    After placing your order, you will receive a call within 24 hours to confirm your order details and delivery information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;