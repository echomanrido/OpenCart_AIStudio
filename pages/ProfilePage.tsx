
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: 'person', label: 'Personal Information', sub: 'Name, email, phone' },
    { icon: 'package_2', label: 'Order History', sub: 'Track and manage orders' },
    { icon: 'payments', label: 'Payment Methods', sub: 'Credit cards, digital wallets' },
    { icon: 'location_on', label: 'Shipping Address', sub: 'Default delivery locations' },
    { icon: 'notifications', label: 'Notifications', sub: 'Sales, alerts, messages' },
    { icon: 'shield', label: 'Security', sub: 'Password, biometrics' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7f8]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-16 flex items-center justify-between">
        <h1 className="text-lg font-bold">My Profile</h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100">
          <span className="material-symbols-outlined text-[20px]">settings</span>
        </button>
      </header>

      <div className="p-4 flex flex-col gap-6 overflow-y-auto">
        {/* User Card */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="relative">
            <div className="size-16 rounded-full bg-blue-100 flex items-center justify-center border-2 border-[#137fec]/20">
              <span className="material-symbols-outlined text-4xl text-[#137fec]">person</span>
            </div>
            <div className="absolute bottom-0 right-0 size-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-extrabold text-[#111418]">Jane Cooper</h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="px-2 py-0.5 rounded-md bg-yellow-100 text-yellow-700 text-[10px] font-bold uppercase">Gold Member</span>
              <p className="text-xs text-gray-500 font-medium">jane.cooper@example.com</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Orders', val: '12', icon: 'shopping_bag' },
            { label: 'Wishlist', val: '45', icon: 'favorite' },
            { label: 'Coupons', val: '3', icon: 'sell' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-3 flex flex-col items-center gap-1 shadow-sm active:scale-95 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[#137fec] text-xl">{stat.icon}</span>
              <span className="text-sm font-extrabold text-[#111418]">{stat.val}</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Menu Section */}
        <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50 overflow-hidden">
          {menuItems.map((item, idx) => (
            <button key={idx} className="flex items-center gap-4 p-4 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors group">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-[#137fec]/10 text-gray-500 group-hover:text-[#137fec] transition-colors">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#111418]">{item.label}</p>
                <p className="text-[11px] text-gray-400 font-medium">{item.sub}</p>
              </div>
              <span className="material-symbols-outlined text-gray-300 text-[20px]">chevron_right</span>
            </button>
          ))}
        </div>

        {/* Support & Logout */}
        <div className="flex flex-col gap-3 pb-8">
          <button className="flex items-center justify-center gap-2 p-4 bg-gray-100 rounded-2xl text-gray-700 font-bold text-sm hover:bg-gray-200 transition-colors active:scale-95">
            <span className="material-symbols-outlined text-lg text-gray-500">help_outline</span>
            <span>Help Center & Support</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl font-bold text-sm border border-red-100 hover:bg-red-100 transition-colors active:scale-95">
            <span className="material-symbols-outlined text-lg">logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
