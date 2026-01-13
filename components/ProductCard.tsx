
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white border border-gray-100 shadow-sm overflow-hidden group">
      <div className="relative aspect-[4/5] bg-cover bg-center bg-gray-50 overflow-hidden" style={{ backgroundImage: `url("${product.imageUrl}")` }}>
        {product.isSale && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider">
            Sale
          </div>
        )}
        <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 text-gray-600 hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined text-lg">favorite</span>
        </button>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1">
          <span className="material-symbols-outlined text-yellow-400 text-[14px] fill-1">star</span>
          <span className="text-xs text-gray-500 font-medium">{product.rating} ({product.reviews})</span>
        </div>
        <h3 className="font-bold text-sm text-[#111418] leading-tight line-clamp-2 h-9 mb-1">
          {product.name}
        </h3>
        <div className="flex items-end justify-between mt-auto">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-[10px] text-gray-400 line-through">${product.originalPrice}</span>
            )}
            <span className="font-bold text-base text-[#111418]">${product.price}</span>
          </div>
          <button 
            onClick={onAdd}
            className="flex items-center justify-center size-8 rounded-full bg-[#137fec] text-white hover:bg-[#0f6fd4] active:scale-95 transition-all shadow-md shadow-blue-200"
          >
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
