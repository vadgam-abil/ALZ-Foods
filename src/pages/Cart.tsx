import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { Toast } from '../components/Toast';

export const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalItems } = useCart();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSaveList = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-[#FDF8F5]">
        <div className="bg-white p-6 rounded-full shadow-sm mb-6 text-[#FF9933]">
          <ShoppingBag className="h-12 w-12" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8 max-w-md">Looks like you haven't added any of our premium spices or ingredients to your cart yet.</p>
        <Link to="/shop" className="bg-[#FF9933] text-white px-8 py-4 rounded-md font-medium hover:bg-[#E68A2E] transition-colors shadow-md hover:shadow-lg">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FDF8F5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-10">Your Cart ({totalItems} items)</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 text-sm font-medium text-gray-500 uppercase tracking-wider">
                <div className="col-span-8">Product</div>
                <div className="col-span-4 text-center">Quantity</div>
              </div>

              <div className="divide-y divide-gray-100">
                {items.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={item.product.id} 
                    className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center"
                  >
                    <div className="col-span-8 flex items-center w-full">
                      <Link to={`/product/${item.product.id}`} className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                        <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                      </Link>
                      <div className="ml-4 flex-1">
                        <Link to={`/product/${item.product.id}`} className="font-medium text-gray-900 hover:text-[#FF9933] transition-colors line-clamp-2">
                          {item.product.name}
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-4 flex items-center justify-between sm:justify-center w-full sm:w-auto mt-4 sm:mt-0">
                      <span className="sm:hidden text-sm text-gray-500">Quantity:</span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 text-gray-500 hover:text-[#FF9933] transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, Math.min(item.product.stock, item.quantity + 1))}
                            className="p-2 text-gray-500 hover:text-[#FF9933] transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            className="text-gray-400 hover:text-[#FF9933] transition-colors p-2 text-sm font-medium flex items-center"
                            aria-label="Save to Smart List"
                            onClick={() => handleSaveList(`${item.product.name} saved to Smart List!`)}
                          >
                            <span className="hidden sm:inline mr-1">Save</span>
                          </button>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-2"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Total Items</span>
                  <span className="font-medium text-gray-900">{totalItems}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Worldwide</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#FF9933] hover:bg-[#E68A2E] text-white py-4 rounded-md font-medium flex items-center justify-center transition-colors shadow-md hover:shadow-lg mb-4"
              >
                Proceed to Order Request <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <button 
                onClick={() => {
                  const text = `Hey! Check out my order request from ALZ Foods:\n\n${items.map(i => `- ${i.quantity}x ${i.product.name}`).join('\n')}\n\nTotal Items: ${totalItems}`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-md font-medium flex items-center justify-center transition-colors shadow-sm mb-4"
              >
                Share via WhatsApp
              </button>

              <button 
                onClick={() => handleSaveList('Entire cart saved as Smart List!')}
                className="w-full bg-white border border-gray-300 hover:border-[#FF9933] hover:text-[#FF9933] text-gray-700 py-3 rounded-md font-medium flex items-center justify-center transition-colors shadow-sm"
              >
                Save as Smart List
              </button>

              <div className="mt-6 text-center">
                <Link to="/shop" className="text-sm text-gray-500 hover:text-[#FF9933] transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast 
        message={toastMessage} 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
};
