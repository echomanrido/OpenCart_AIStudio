
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const CatalogPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7f8]">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-16 flex items-center justify-between">
        <h1 className="text-lg font-bold">Categories</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      <div className="p-4 grid grid-cols-1 gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/category/${cat.id}`)}
            className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm active:scale-[0.98] transition-all text-left"
          >
            <div className="flex size-14 items-center justify-center rounded-xl bg-[#137fec]/10 text-[#137fec]">
              <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-[#111418] capitalize">{cat.name}</h3>
              <p className="text-xs text-gray-400">View all items in {cat.name}</p>
            </div>
            <span className="material-symbols-outlined text-gray-300">chevron_right</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
