import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Leaf, Truck, ShoppingCart } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockData';
import { useCart } from '../contexts/CartContext';

export const Home = () => {
  const bestSellers = MOCK_PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
  const { addToCart, items } = useCart();

  return (
    <div className="flex flex-col">
      {/* Abandoned Cart Reminder */}
      {items.length > 0 && (
        <div className="bg-[#E9C46A] text-gray-900 py-3 px-4 text-center text-sm font-medium">
          You have {items.length} {items.length === 1 ? 'item' : 'items'} waiting in your order request. <Link to="/cart" className="underline font-bold ml-1">Complete your request now</Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2000&q=80" 
            alt="Indian Spices" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Authentic Indian Flavors, <br/>
            <span className="text-[#E9C46A]">Delivered Pure.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light"
          >
            Elevate your cooking with premium, ethically sourced spices and ingredients directly from the finest farms in India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#FF9933] rounded-md hover:bg-[#E68A2E] transition-colors shadow-lg hover:shadow-xl"
            >
              Shop the Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-[#FDF8F5] p-4 rounded-full text-[#2A9D8F] mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">100% Authentic</h3>
              <p className="text-sm text-gray-500">Sourced directly from India</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FDF8F5] p-4 rounded-full text-[#2A9D8F] mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Pure & Natural</h3>
              <p className="text-sm text-gray-500">No artificial additives</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FDF8F5] p-4 rounded-full text-[#2A9D8F] mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Shipping</h3>
              <p className="text-sm text-gray-500">Free over $50 nationwide</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#FDF8F5] p-4 rounded-full text-[#2A9D8F] mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Premium Quality</h3>
              <p className="text-sm text-gray-500">Hand-selected ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-[#FDF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Best Sellers</h2>
              <p className="text-gray-600 max-w-2xl">Discover the most loved ingredients by our community of home chefs and culinary enthusiasts.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-[#FF9933] font-medium hover:text-[#E68A2E] transition-colors">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-[#E9C46A] text-gray-900 text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {product.stock < 100 && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Limited Stock
                    </span>
                  )}
                </Link>
                <div className="p-5">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">{product.category}</div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#FF9933] transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-end mt-4">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 1);
                      }}
                      className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-[#FF9933] transition-colors font-medium text-sm flex items-center justify-center"
                      aria-label="Add to order"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center text-[#FF9933] font-medium hover:text-[#E68A2E] transition-colors">
              View All Products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-16">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/shop?category=Spices" className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80" alt="Spices" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Premium Spices</h3>
                  <span className="text-white/80 flex items-center text-sm font-medium group-hover:text-[#E9C46A] transition-colors">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/shop?category=Lentils+%26+Pulses+(Dal)" className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" alt="Lentils" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Lentils & Pulses (Dal)</h3>
                  <span className="text-white/80 flex items-center text-sm font-medium group-hover:text-[#E9C46A] transition-colors">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/shop?category=Rice+%26+Grains" className="relative h-80 rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80" alt="Rice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Rice & Grains</h3>
                  <span className="text-white/80 flex items-center text-sm font-medium group-hover:text-[#E9C46A] transition-colors">
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#2A9D8F] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 text-[#E9C46A] fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-4xl font-serif font-medium leading-relaxed mb-8">
             "The quality of ALZ Foods' saffron and turmeric is unmatched. It has completely transformed my home cooking. It feels like I'm back in my grandmother's kitchen in Delhi."
          </blockquote>
          <div className="font-medium text-lg text-[#E9C46A]">
            — Anjali M., Verified Buyer
          </div>
        </div>
      </section>
    </div>
  );
};
