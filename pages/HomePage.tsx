
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, FEATURED_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const HomePage: React.FC<{ onAddToCart: (product: Product) => void }> = ({ onAddToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 pt-0">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white px-4 pt-4 pb-2 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button className="text-[#111418] flex size-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <h2 className="text-[#111418] text-xl font-extrabold flex-1 text-center">OpenCart</h2>
          <div className="flex w-10 items-center justify-end">
            <button 
              onClick={() => navigate('/cart')}
              className="relative text-[#111418] hover:text-[#137fec] transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="block w-full pl-10 pr-3 py-2.5 bg-gray-100 border-none rounded-xl text-sm placeholder-gray-500 focus:ring-2 focus:ring-[#137fec] transition-all"
          />
        </div>
      </header>

      {/* Hero Banner */}
      <section className="px-4">
        <div 
          className="relative h-44 w-full rounded-2xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2w5x3IZu3JrvS9E4zkvTgbvddc8uyRI0xK5y0imDFfhVqXyojp9H0hwSXdYgQ-WmC1HETU-WO3So-S29AYmUK3zTssEjH0EmMWML1h-s5jhKscu8lLs5Xbh3pbHVUvHwLea6d24dzzmbtI31NnJ3hGANgRd1u60YWZ8SQu2ZKDejgO5z9gWjQB-VMl-RZfWnFJf1y2V_ifFS5j9HyUopoHI5zRHcdMlK6DUy_MvfdXirzHewHG1vsATskXZC3fDWoSC25lP2ChvVI")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex flex-col justify-center px-6">
            <span className="text-white/90 text-[10px] font-bold uppercase tracking-widest mb-1">Limited Time</span>
            <h3 className="text-white text-2xl font-bold leading-tight mb-4">New Season Sale<br/>Up to 50% Off</h3>
            <button className="bg-[#137fec] text-white px-5 py-2 rounded-lg text-xs font-bold w-fit hover:bg-blue-600 active:scale-95 transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="flex flex-col gap-3">
        <h2 className="px-4 text-lg font-bold text-[#111418]">Categories</h2>
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => navigate(`/category/${cat.id}`)}
              className="group flex flex-col items-center gap-2 shrink-0"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#137fec]/10 transition-colors">
                <span className="material-symbols-outlined text-xl text-gray-700 group-hover:text-[#137fec]">{cat.icon}</span>
              </div>
              <p className="text-[#111418] text-[11px] font-semibold text-center">{cat.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 pb-4">
        <div className="flex items-center justify-between pb-3">
          <h2 className="text-lg font-bold text-[#111418]">Featured Products</h2>
          <button className="text-[#137fec] text-xs font-bold hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {FEATURED_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onAdd={() => onAddToCart(product)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
