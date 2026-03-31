import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart, Filter, Search, ChevronDown } from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockData';
import { useCart } from '../contexts/CartContext';
import { Category } from '../types';
import { motion } from 'motion/react';

const CATEGORIES: Category[] = ['Spices', 'Lentils & Pulses (Dal)', 'Rice & Grains', 'Atta & Flours', 'Oils & Ghee', 'Frozen / Ready-to-cook'];

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');
  const [searchQuery, setSearchQuery] = useState(searchParam || '');
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  // Update searchQuery when URL changes
  React.useEffect(() => {
    if (searchParam !== null) {
      setSearchQuery(searchParam);
    }
  }, [searchParam]);

  const filteredProducts = useMemo(() => {
    let result = MOCK_PRODUCTS;

    if (categoryParam) {
      result = result.filter(p => p.category === categoryParam);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case 'newest':
        result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // featured
        break;
    }

    return result;
  }, [categoryParam, searchQuery, sortBy]);

  const handleCategoryClick = (category: string | null) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="bg-[#FDF8F5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {categoryParam ? categoryParam : 'All Products'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium Indian ingredients, sourced directly from the finest farms to your kitchen.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-lg mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-[#FF9933]" /> Categories
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => handleCategoryClick(null)}
                      className={`text-sm w-full text-left transition-colors ${!categoryParam ? 'text-[#FF9933] font-semibold' : 'text-gray-600 hover:text-[#FF9933]'}`}
                    >
                      All Products
                    </button>
                  </li>
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => handleCategoryClick(cat)}
                        className={`text-sm w-full text-left transition-colors ${categoryParam === cat ? 'text-[#FF9933] font-semibold' : 'text-gray-600 hover:text-[#FF9933]'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-serif font-semibold text-lg mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF9933] focus:border-[#FF9933]"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-sm text-gray-500">
                Showing {filteredProducts.length} results
              </span>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF9933] focus:border-[#FF9933]"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest Arrivals</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col"
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
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">{product.category}</div>
                      <Link to={`/product/${product.id}`} className="flex-grow">
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
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                  className="mt-6 text-[#FF9933] font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
