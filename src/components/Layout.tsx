import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, Globe } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

import { SearchBar } from './SearchBar';

export const Layout = () => {
  const { totalItems } = useCart();
  const { user } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.shop'), path: '/shop' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FDF8F5] text-gray-900">
      {/* Top Banner */}
      <div className="bg-[#2A9D8F] text-white text-center py-2 text-sm font-medium">
        Premium Indian Spices Delivered Worldwide
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-serif text-3xl font-bold text-[#FF9933]">ALZ</span>
              <span className="font-serif text-3xl font-bold text-gray-900 ml-1">Foods</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-[#FF9933]",
                    location.pathname === link.path ? "text-[#FF9933]" : "text-gray-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-5">
              <div className="relative">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center text-gray-600 hover:text-[#FF9933] transition-colors"
                >
                  <Globe className="h-5 w-5 mr-1" />
                  <span className="text-sm font-medium uppercase">{language}</span>
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
                    >
                      <button
                        onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                        className={cn("block w-full text-left px-4 py-2 text-sm", language === 'en' ? "bg-gray-50 text-[#FF9933] font-medium" : "text-gray-700 hover:bg-gray-50")}
                      >
                        English
                      </button>
                      <button
                        onClick={() => { setLanguage('hi'); setIsLangMenuOpen(false); }}
                        className={cn("block w-full text-left px-4 py-2 text-sm", language === 'hi' ? "bg-gray-50 text-[#FF9933] font-medium" : "text-gray-700 hover:bg-gray-50")}
                      >
                        हिंदी
                      </button>
                      <button
                        onClick={() => { setLanguage('gu'); setIsLangMenuOpen(false); }}
                        className={cn("block w-full text-left px-4 py-2 text-sm", language === 'gu' ? "bg-gray-50 text-[#FF9933] font-medium" : "text-gray-700 hover:bg-gray-50")}
                      >
                        ગુજરાતી
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-600 hover:text-[#FF9933] transition-colors hidden sm:block"
              >
                <Search className="h-6 w-6" />
              </button>
              
              <Link to={user ? (user.role === 'admin' ? '/admin' : '/dashboard') : '/login'} className="text-gray-600 hover:text-[#FF9933] transition-colors">
                <User className="h-6 w-6" />
              </Link>
              
              <Link to="/cart" className="text-gray-600 hover:text-[#FF9933] transition-colors relative group">
                <ShoppingCart className="h-6 w-6" />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-[#FF9933] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-[#E68A2E] transition-colors"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-600 hover:text-[#FF9933]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-gray-100"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      location.pathname === link.path ? "bg-[#FDF8F5] text-[#FF9933]" : "text-gray-600 hover:bg-gray-50 hover:text-[#FF9933]"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center mb-4">
                <span className="font-serif text-3xl font-bold text-[#FF9933]">ALZ</span>
                <span className="font-serif text-3xl font-bold text-white ml-1">Foods</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium Indian food and spices, sourced directly from the finest farms. Authentic, clean, and culturally rich ingredients for your kitchen.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-[#E9C46A]">Shop</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/shop?category=Spices" className="hover:text-white transition-colors">Spices</Link></li>
                <li><Link to="/shop?category=Lentils+%26+Pulses+(Dal)" className="hover:text-white transition-colors">Lentils & Pulses (Dal)</Link></li>
                <li><Link to="/shop?category=Rice+%26+Grains" className="hover:text-white transition-colors">Rice & Grains</Link></li>
                <li><Link to="/shop?category=Frozen+%2F+Ready-to-cook" className="hover:text-white transition-colors">Frozen / Ready-to-cook</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-[#E9C46A]">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold mb-4 text-[#E9C46A]">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe to get 10% off your first order and exclusive recipes.</p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="tel" 
                  placeholder="Your phone number" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#FF9933] w-full text-sm"
                />
                <button 
                  type="submit" 
                  className="bg-[#FF9933] hover:bg-[#E68A2E] px-4 py-2 rounded-r-md text-white text-sm font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ALZ Foods. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
