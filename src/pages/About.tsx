import React from 'react';
import { Leaf, ShieldCheck, Heart, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/about_hero/1920/600" 
            alt="Spices background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light"
          >
            Bringing the authentic taste of India to kitchens around the world, one spice at a time.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Rooted in Tradition, Crafted for Today</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ALZ Foods was born out of a simple desire: to make high-quality, authentic Indian ingredients accessible to everyone. We noticed that many spices available in local supermarkets lacked the vibrant color, intense aroma, and health benefits of the spices we grew up with.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We travel across India, partnering directly with farmers in regions famous for specific crops—from the saffron fields of Kashmir to the cardamom hills of Kerala. By cutting out the middlemen, we ensure that our farmers are paid fairly and our customers receive the freshest possible product.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to inspire home cooks to explore the rich, diverse flavors of Indian cuisine with confidence, knowing they are using the very best ingredients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/about_spices/800/800" alt="Spices" className="rounded-2xl w-full h-64 object-cover" />
              <img src="https://picsum.photos/seed/about_rice/800/800" alt="Rice" className="rounded-2xl w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[#FDF8F5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF9933]">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We source only the highest grade ingredients, rigorously tested for purity and potency.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[#FDF8F5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF9933]">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Sourcing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We work directly with farmers across India, ensuring fair trade practices and traceability.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[#FDF8F5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF9933]">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">From eco-friendly packaging to supporting sustainable farming methods, we care for the earth.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-[#FDF8F5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF9933]">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We believe food brings people together. We are building a community of passionate home chefs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
