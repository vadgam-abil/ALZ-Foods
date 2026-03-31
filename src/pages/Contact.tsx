import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#FDF8F5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about our products, your order, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#FF9933] mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-1">For general inquiries & support:</p>
                  <a href="mailto:hello@alzfoods.com" className="text-[#FF9933] font-medium hover:underline">hello@alzfoods.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#FF9933] mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">Mon-Fri from 9am to 5pm EST</p>
                  <a href="tel:+18001234567" className="text-[#FF9933] font-medium hover:underline">+1 (800) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#FF9933] mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Headquarters</h3>
                  <p className="text-gray-600 leading-relaxed">
                    123 Spice Avenue, Suite 400<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wholesale Inquiries</h3>
              <p className="text-gray-600 text-sm mb-4">Interested in carrying ALZ Foods in your store or restaurant?</p>
              <a href="mailto:wholesale@alzfoods.com" className="inline-flex items-center text-[#FF9933] font-medium hover:underline">
                Contact our wholesale team <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933] focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933] focus:bg-white transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933] focus:bg-white transition-colors" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select id="subject" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933] focus:bg-white transition-colors">
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Returns & Refunds</option>
                    <option>Product Question</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-[#FF9933] focus:border-[#FF9933] focus:bg-white transition-colors"></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#FF9933] hover:bg-[#E68A2E] text-white py-4 rounded-md font-bold text-lg flex items-center justify-center transition-colors shadow-md"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for ArrowRight since it wasn't imported at the top
const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);
