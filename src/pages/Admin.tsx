import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, ShoppingBag, Users, Settings, LogOut, TrendingUp, DollarSign, Package } from 'lucide-react';

export const Admin = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role !== 'admin') {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'admin') return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = [
    { name: 'Orders', value: '356', icon: ShoppingBag, change: '+12.5%', trend: 'up' },
    { name: 'Active Customers', value: '2,420', icon: Users, change: '+5.4%', trend: 'up' },
    { name: 'Products in Stock', value: '142', icon: Package, change: '-2.1%', trend: 'down' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-2xl font-serif font-bold text-[#FF9933]">ALZ Admin</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center px-4 py-3 bg-gray-800 text-white rounded-md font-medium">
            <LayoutDashboard className="h-5 w-5 mr-3 text-[#FF9933]" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-md font-medium transition-colors">
            <ShoppingBag className="h-5 w-5 mr-3" />
            Orders
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-md font-medium transition-colors">
            <Package className="h-5 w-5 mr-3" />
            Products
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-md font-medium transition-colors">
            <Users className="h-5 w-5 mr-3" />
            Customers
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-md font-medium transition-colors">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </a>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-gray-400 hover:text-red-400 rounded-md font-medium transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard Overview</h1>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-[#FF9933] text-white flex items-center justify-center font-bold">
              A
            </div>
            <span className="font-medium text-sm text-gray-700">Admin User</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{stat.name}</p>
                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  </div>
                  <div className="p-3 bg-[#FDF8F5] rounded-lg text-[#FF9933]">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className={`h-4 w-4 mr-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                  <span className={`font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500 ml-2">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <button className="text-sm font-medium text-[#FF9933] hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-4 font-medium">Order ID</th>
                    <th className="px-6 py-4 font-medium">Customer</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { id: '#ORD-001', customer: 'John Doe', date: 'Today, 10:42 AM', status: 'pending_call' },
                    { id: '#ORD-002', customer: 'Jane Smith', date: 'Today, 09:15 AM', status: 'confirmed' },
                    { id: '#ORD-003', customer: 'Robert Johnson', date: 'Yesterday', status: 'delivered' },
                    { id: '#ORD-004', customer: 'Emily Davis', date: 'Yesterday', status: 'pending_call' },
                  ].map((order) => (
                    <tr key={order.id} className="text-sm text-gray-900 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{order.id}</td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4 text-gray-500">{order.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                          order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' : 
                          order.status === 'pending_call' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
