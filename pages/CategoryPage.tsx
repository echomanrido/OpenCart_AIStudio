
import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ALL_PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const CategoryPage: React.FC<{ onAddToCart: (product: Product) => void }> = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [activeChip, setActiveChip] = useState('All');

  const categoryName = CATEGORIES.find(c => c.id === categoryId)?.name || categoryId;

  // 根據 categoryId 與 activeChip 進行過濾
  const filteredProducts = useMemo(() => {
    // 首先根據主類別過濾 (例如: electronics)
    let base = ALL_PRODUCTS.filter(p => p.category === categoryId);
    
    // 如果選中的不是 "All"，則根據 subCategory 進一步過濾
    if (activeChip !== 'All') {
      base = base.filter(p => p.subCategory === activeChip);
    }
    return base;
  }, [categoryId, activeChip]);

  // 定義篩選標籤 (可以根據不同主類別動態設定，這裡以 Electronics 為主)
  const chips = categoryId === 'electronics' 
    ? ['All', 'Phones', 'Laptops', 'Audio', 'Accessories'] 
    : ['All', 'Trending', 'New Arrival', 'Sale'];

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7f8]">
      {/* Category Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => navigate('/catalog')}
          className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-gray-100 text-[#111418] active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold capitalize">{categoryName}</h1>
        <div className="flex items-center gap-1 -mr-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </header>

      {/* Filter Chips - 這裡就是您圈起來的地方 */}
      <div className="sticky top-16 z-30 bg-[#f6f7f8]/95 backdrop-blur-sm py-4">
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar scroll-smooth">
          {chips.map(chip => (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              className={`flex shrink-0 items-center justify-center rounded-full px-5 h-9 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                activeChip === chip 
                  ? 'bg-[#137fec] text-white shadow-md shadow-blue-200' 
                  : 'bg-white border border-gray-100 text-gray-700 hover:border-blue-200'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1 transition-all duration-300 ease-in-out">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 p-4 pb-12 animate-in fade-in slide-in-from-bottom-2">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAdd={() => onAddToCart(product)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 px-8 text-center text-gray-400 animate-in fade-in">
            <div className="size-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
            </div>
            <h3 className="text-base font-bold text-gray-700 mb-1">No products found</h3>
            <p className="text-xs">We couldn't find any products in "{activeChip}" for this category.</p>
            <button 
              onClick={() => setActiveChip('All')}
              className="mt-6 text-[#137fec] text-sm font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
