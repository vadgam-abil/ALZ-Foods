import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data/mockData';
import { useCart } from '../contexts/CartContext';
import { Star, Truck, ShieldCheck, Minus, Plus, ShoppingCart, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Toast } from '../components/Toast';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSaveList = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you are looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="bg-[#FF9933] text-white px-6 py-3 rounded-md font-medium hover:bg-[#E68A2E] transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optional: Show toast notification here
  };

  const relatedProducts = MOCK_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#FF9933]">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-[#FF9933]">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-[#FF9933]' : 'border-transparent'}`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-[#E9C46A] fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">({product.reviews.length} reviews)</span>
                </div>
                <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">In Stock</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{product.shortDescription}</p>
            </div>

            <div className="py-6 border-t border-b border-gray-100 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-gray-600 hover:text-[#FF9933] transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-3 text-gray-600 hover:text-[#FF9933] transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#FF9933] hover:bg-[#E68A2E] text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors shadow-md hover:shadow-lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Order
                </button>
                <button 
                  onClick={() => handleSaveList('Saved to your smart shopping list!')}
                  className="bg-orange-50 hover:bg-orange-100 text-[#FF9933] py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors border border-orange-200"
                  title="Save to Smart List"
                >
                  <Star className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-[#2A9D8F]" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-[#2A9D8F]" />
                  <span>100% Authentic</span>
                </div>
              </div>
            </div>

            {/* Details Accordion (Simplified) */}
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              
              {product.howToUse && (
                <div>
                  <h3 className="font-serif font-semibold text-lg mb-2">How to Use</h3>
                  <p className="text-gray-600 leading-relaxed">{product.howToUse}</p>
                </div>
              )}

              {product.usedInDishes && product.usedInDishes.length > 0 && (
                <div>
                  <h3 className="font-serif font-semibold text-lg mb-2">Commonly Used In</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.usedInDishes.map((dish, idx) => (
                      <span key={idx} className="bg-orange-50 text-[#FF9933] px-3 py-1 rounded-full text-sm font-medium">
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recipe Integration */}
              {product.usedInDishes && product.usedInDishes.length > 0 && (
                <div className="bg-[#FDF8F5] p-6 rounded-xl border border-orange-100 mt-6">
                  <h3 className="font-serif font-semibold text-lg mb-3 flex items-center text-[#FF9933]">
                    <span className="mr-2">👨‍🍳</span> Recipe Inspiration
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Want to make authentic <strong>{product.usedInDishes[0]}</strong>? We've got the perfect recipe using our {product.name}.
                  </p>
                  <button 
                    onClick={() => setShowRecipeModal(true)}
                    className="text-[#FF9933] font-medium text-sm hover:underline flex items-center"
                  >
                    View Full Recipe <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              )}

              {product.pairsWellWith && product.pairsWellWith.length > 0 && (
                <div>
                  <h3 className="font-serif font-semibold text-lg mb-2">Pairs Well With</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.pairsWellWith.map((item, idx) => (
                      <span key={idx} className="bg-green-50 text-[#2A9D8F] px-3 py-1 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.origin && (
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Origin</h3>
                    <p className="text-gray-600">{product.origin}</p>
                  </div>
                )}
                {product.storageTips && (
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Storage Tips</h3>
                    <p className="text-gray-600">{product.storageTips}</p>
                  </div>
                )}
              </div>

              {product.freshnessGuarantee && (
                <div className="bg-[#FDF8F5] p-4 rounded-lg border border-orange-100">
                  <h3 className="font-serif font-semibold text-lg mb-2 text-[#FF9933] flex items-center">
                    <ShieldCheck className="h-5 w-5 mr-2" />
                    Freshness Guarantee
                  </h3>
                  <p className="text-gray-700">{product.freshnessGuarantee}</p>
                </div>
              )}

              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">Ingredients</h3>
                <p className="text-gray-600">{product.ingredients.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">Nutritional Info</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="text-center">
                    <span className="block text-xs text-gray-500 uppercase">Calories</span>
                    <span className="font-medium">{product.nutritionalInfo.calories}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-gray-500 uppercase">Fat</span>
                    <span className="font-medium">{product.nutritionalInfo.fat}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-gray-500 uppercase">Carbs</span>
                    <span className="font-medium">{product.nutritionalInfo.carbs}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xs text-gray-500 uppercase">Protein</span>
                    <span className="font-medium">{product.nutritionalInfo.protein}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-100 pt-16">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1 group-hover:text-[#FF9933] transition-colors">{p.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recipe Modal */}
      <AnimatePresence>
        {showRecipeModal && product.usedInDishes && product.usedInDishes.length > 0 && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#FDF8F5]">
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  Authentic {product.usedInDishes[0]}
                </h2>
                <button
                  onClick={() => setShowRecipeModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80" alt={product.usedInDishes[0]} className="w-full h-full object-cover" />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This traditional recipe uses our premium {product.name} to bring out the authentic flavors of {product.usedInDishes[0]}. Perfect for family dinners or special occasions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-4 text-[#FF9933]">Ingredients</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start"><span className="mr-2 text-[#2A9D8F]">•</span> 2 tbsp ALZ Foods {product.name}</li>
                      <li className="flex items-start"><span className="mr-2 text-[#2A9D8F]">•</span> 1 cup basmati rice</li>
                      <li className="flex items-start"><span className="mr-2 text-[#2A9D8F]">•</span> 2 onions, finely chopped</li>
                      <li className="flex items-start"><span className="mr-2 text-[#2A9D8F]">•</span> 2 tomatoes, pureed</li>
                      <li className="flex items-start"><span className="mr-2 text-[#2A9D8F]">•</span> 1 tbsp ginger-garlic paste</li>
                      <li className="flex items-start"><span className="mr-2 text-[#2A9D8F]">•</span> Salt to taste</li>
                      <li className="flex items-start"><span className="mr-2 text-[#2A9D8F]">•</span> Fresh cilantro for garnish</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-4 text-[#FF9933]">Instructions</h3>
                    <ol className="space-y-4 text-gray-700 list-decimal list-inside">
                      <li>Heat oil in a pan and sauté onions until golden brown.</li>
                      <li>Add ginger-garlic paste and cook for a minute.</li>
                      <li>Stir in the tomato puree and cook until oil separates.</li>
                      <li>Add <strong>ALZ Foods {product.name}</strong> and salt. Mix well.</li>
                      <li>Add the main ingredients and simmer until cooked through.</li>
                      <li>Garnish with fresh cilantro and serve hot.</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                <button 
                  onClick={() => {
                    addToCart(product, 1);
                    setShowRecipeModal(false);
                  }}
                  className="bg-[#FF9933] hover:bg-[#E68A2E] text-white px-6 py-3 rounded-md font-medium transition-colors shadow-sm flex items-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add {product.name} to Order
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Toast 
        message={toastMessage} 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
};
