import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { CheckCircle, ShieldCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Checkout = () => {
  const { items, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [callMeAsap, setCallMeAsap] = useState(false);
  const [whatsappInstead, setWhatsappInstead] = useState(false);

  if (items.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#FDF8F5]">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-green-500 mb-6"
        >
          <CheckCircle className="h-24 w-24" />
        </motion.div>
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Order Request Received!</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Thank you for your request. Our team will call you shortly to confirm pricing, availability, and delivery details for order #ALZ-{Math.floor(Math.random() * 100000)}.
        </p>
        <div className="flex space-x-4">
          <Link to="/shop" className="bg-[#FF9933] text-white px-8 py-3 rounded-md font-medium hover:bg-[#E68A2E] transition-colors">
            Continue Shopping
          </Link>
          {user && (
            <Link to="/dashboard" className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              View Order
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDF8F5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Order Request</h1>
        <p className="text-gray-600 mb-10">Submit your request and we'll contact you to confirm pricing and delivery. No payment required now.</p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Checkout Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Contact Information</h2>
                {!user && (
                  <p className="text-sm text-gray-500 mb-4">
                    Already have an account? <Link to="/login" className="text-[#FF9933] hover:underline">Log in</Link> for faster checkout.
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" id="phone" required defaultValue={user?.phone || ''} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]" placeholder="(555) 123-4567" />
                    <p className="text-xs text-gray-500 mt-1">We will use this number to confirm your order.</p>
                  </div>
                </div>
              </div>

              {/* Order Preferences */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Order Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="callTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Call Time</label>
                    <select id="callTime" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]">
                      <option value="any">Anytime</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={callMeAsap}
                        onChange={(e) => setCallMeAsap(e.target.checked)}
                        className="h-5 w-5 text-[#FF9933] focus:ring-[#FF9933] border-gray-300 rounded"
                      />
                      <span className="text-gray-700 flex items-center">
                        <PhoneCall className="h-4 w-4 mr-2 text-[#FF9933]" />
                        Call me ASAP to confirm
                      </span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={whatsappInstead}
                        onChange={(e) => setWhatsappInstead(e.target.checked)}
                        className="h-5 w-5 text-[#25D366] focus:ring-[#25D366] border-gray-300 rounded"
                      />
                      <span className="text-gray-700 flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2 text-[#25D366]" />
                        WhatsApp me instead of calling
                      </span>
                    </label>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Order Notes (Optional)</label>
                    <textarea 
                      id="notes" 
                      rows={3} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]"
                      placeholder="Any special requests or delivery instructions?"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Delivery Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input type="text" id="address" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]" />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" id="city" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]" />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input type="text" id="state" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]" />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input type="text" id="zip" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933]" />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#FF9933] hover:bg-[#E68A2E] text-white py-4 rounded-md font-bold text-lg flex items-center justify-center transition-colors shadow-lg disabled:opacity-70"
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Submit Order Request`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="divide-y divide-gray-100 mb-6">
                {items.map(item => (
                  <div key={item.product.id} className="py-3 flex items-center">
                    <div className="relative">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-16 h-16 object-cover rounded border border-gray-200" />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.product.name}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-md flex items-start space-x-3">
                <ShieldCheck className="h-5 w-5 text-[#2A9D8F] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-600">
                  Your order information is processed securely. We do not share your details with any third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
