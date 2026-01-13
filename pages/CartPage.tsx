
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, onUpdateQuantity, onClearCart }) => {
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // 模擬網路請求處理
    setTimeout(() => {
      setIsCheckingOut(false);
      setShowSuccess(true);
      onClearCart();
    }, 1800);
  };

  if (cartItems.length === 0 && !showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 text-center animate-in fade-in zoom-in-95 duration-500">
        <div className="size-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl text-gray-400">shopping_bag</span>
        </div>
        <h2 className="text-xl font-bold text-[#111418] mb-2">Your cart is empty</h2>
        <p className="text-gray-500 text-sm mb-8">Looks like you haven't added anything to your cart yet.</p>
        <button 
          onClick={() => navigate('/')}
          className="w-full max-w-xs py-3.5 bg-[#137fec] text-white font-bold rounded-xl shadow-lg shadow-blue-100 active:scale-95 transition-all"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7f8] relative">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-gray-100 text-[#111418] active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold">Shopping Cart</h1>
        <div className="w-10"></div>
      </header>

      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 p-3 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all animate-in slide-in-from-right-4">
            <div 
              className="size-20 bg-gray-50 rounded-xl bg-cover bg-center shrink-0 border border-gray-100" 
              style={{ backgroundImage: `url("${item.imageUrl}")` }}
            ></div>
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <div>
                <h3 className="font-bold text-sm text-[#111418] line-clamp-1">{item.name}</h3>
                <p className="text-xs text-gray-400 capitalize">{item.category}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-base text-[#137fec]">${item.price}</span>
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="size-6 flex items-center justify-center rounded-md bg-white text-gray-600 hover:text-red-500 shadow-sm active:scale-90 transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">remove</span>
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="size-6 flex items-center justify-center rounded-md bg-white text-gray-600 hover:text-[#137fec] shadow-sm active:scale-90 transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Summary Card */}
        <div className="mt-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Shipping Fee</span>
            <span className="font-semibold">${shipping.toFixed(2)}</span>
          </div>
          <div className="h-px bg-gray-100 my-1"></div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#111418]">Total</span>
            <span className="text-xl font-extrabold text-[#137fec]">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Checkout Bar */}
      <div className="p-4 bg-white border-t border-gray-100">
        <button 
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className={`w-full py-4 bg-[#137fec] text-white font-bold rounded-2xl shadow-xl shadow-blue-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${isCheckingOut ? 'opacity-80' : ''}`}
        >
          {isCheckingOut ? (
            <div className="flex items-center gap-3">
              <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Processing...</span>
            </div>
          ) : (
            <>
              <span>Checkout Now</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </>
          )}
        </button>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
            <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <span className="material-symbols-outlined text-5xl font-bold">check</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#111418] mb-2">Order Confirmed!</h2>
            <p className="text-gray-500 text-sm mb-1 leading-relaxed">
              Thank you for your purchase. Your order <span className="text-[#137fec] font-bold">#OC-82910</span> is being processed.
            </p>
            <p className="text-xs text-gray-400 mb-8">We'll notify you when it's shipped.</p>
            
            <button 
              onClick={() => navigate('/')}
              className="w-full py-3.5 bg-[#137fec] text-white font-bold rounded-xl shadow-lg shadow-blue-100 active:scale-95 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
