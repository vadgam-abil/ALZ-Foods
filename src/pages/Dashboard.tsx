import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Package, User as UserIcon, MapPin, LogOut, List, Users, Star, Gift } from 'lucide-react';
import { Toast } from '../components/Toast';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role === 'admin') {
      navigate('/admin');
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Mock orders
  const mockOrders = [
    { id: 'ORD-8472', date: 'Oct 12, 2023', status: 'delivered', items: 2 },
    { id: 'ORD-9123', date: 'Nov 05, 2023', status: 'pending_call', items: 5 },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(`alzfoods.com/ref/${user.phone.slice(-4)}`);
    setToastMessage('Referral link copied to clipboard!');
    setShowToast(true);
  };

  return (
    <div className="bg-[#FDF8F5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">My Account</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-[#FF9933] text-white flex items-center justify-center font-bold text-xl">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.phone}</p>
                </div>
              </div>
              <nav className="p-4 space-y-2">
                <a href="#" className="flex items-center px-4 py-3 bg-[#FDF8F5] text-[#FF9933] rounded-md font-medium transition-colors">
                  <Package className="h-5 w-5 mr-3" />
                  Order History
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md font-medium transition-colors">
                  <List className="h-5 w-5 mr-3" />
                  Smart Lists
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md font-medium transition-colors">
                  <Users className="h-5 w-5 mr-3" />
                  Family Mode
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md font-medium transition-colors">
                  <UserIcon className="h-5 w-5 mr-3" />
                  Profile Details
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md font-medium transition-colors">
                  <MapPin className="h-5 w-5 mr-3" />
                  Saved Addresses
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">Recent Orders</h2>
              
              {mockOrders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                        <th className="pb-4 font-medium">Order ID</th>
                        <th className="pb-4 font-medium">Date</th>
                        <th className="pb-4 font-medium">Status</th>
                        <th className="pb-4 font-medium text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="text-sm text-gray-900">
                          <td className="py-4 font-medium">{order.id}</td>
                          <td className="py-4 text-gray-500">{order.date}</td>
                          <td className="py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'pending_call' ? 'bg-yellow-100 text-yellow-800' :
                              order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {order.status.replace('_', ' ').toUpperCase()}
                            </span>
                          </td>
                          <td className="py-4 text-right">
                            <button className="text-[#FF9933] hover:underline font-medium">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                  <p className="text-gray-500">When you place an order, it will appear here.</p>
                </div>
              )}
            </div>

            {/* Smart Lists */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif font-semibold text-gray-900">Smart Shopping Lists</h2>
                <button className="text-[#FF9933] text-sm font-medium hover:underline">Create New List</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-100 rounded-lg p-4 hover:border-[#FF9933] transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">Monthly Groceries</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">12 items</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Rice, Dal, Spices, and essentials.</p>
                  <button className="text-sm text-[#FF9933] font-medium flex items-center">
                    <Package className="h-4 w-4 mr-1" /> Add All to Order
                  </button>
                </div>
                <div className="border border-gray-100 rounded-lg p-4 hover:border-[#FF9933] transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">Diwali Prep</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">8 items</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Sweets ingredients, dry fruits, ghee.</p>
                  <button className="text-sm text-[#FF9933] font-medium flex items-center">
                    <Package className="h-4 w-4 mr-1" /> Add All to Order
                  </button>
                </div>
              </div>
            </div>

            {/* Family Mode */}
            <div className="bg-[#FDF8F5] rounded-xl shadow-sm border border-orange-100 p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-serif font-semibold text-gray-900 mb-2 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-[#FF9933]" />
                    Family Mode
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 max-w-md">
                    Share your account with family members. They can add items to the cart, and you can review and submit the final order request.
                  </p>
                  <button className="bg-[#FF9933] hover:bg-[#E68A2E] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Invite Family Member
                  </button>
                </div>
                <div className="hidden sm:flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#2A9D8F] text-white flex items-center justify-center font-bold text-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm">
                    +
                  </div>
                </div>
              </div>
            </div>

            {/* Loyalty & Referrals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-gray-900">ALZ Rewards</h2>
                    <p className="text-sm text-gray-500">Gold Tier Member</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-900">1,250 Points</span>
                    <span className="text-gray-500">2,000 to Platinum</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#E9C46A] h-2 rounded-full" style={{ width: '62.5%' }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  You have enough points for a $10 discount on your next order request!
                </p>
                <button className="text-[#FF9933] font-medium text-sm hover:underline">
                  View Rewards Catalog
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Gift className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-gray-900">Refer a Friend</h2>
                    <p className="text-sm text-gray-500">Give $15, Get $15</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Share your unique referral link. When they place their first order request, you both get a $15 credit.
                </p>
                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    readOnly 
                    value={`alzfoods.com/ref/${user.phone.slice(-4)}`} 
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-600"
                  />
                  <button 
                    onClick={handleCopy}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Copy
                  </button>
                </div>
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
