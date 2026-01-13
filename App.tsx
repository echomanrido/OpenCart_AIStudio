
import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import { Product, CartItem } from './types';

// Shared Layout Component to handle Navigation and Cart count
const Layout: React.FC<{ children: React.ReactNode, cartCount: number }> = ({ children, cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col min-h-screen pb-24 max-w-md mx-auto bg-white shadow-xl min-h-[100dvh]">
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 pb-safe pt-2 px-6 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => navigate('/')}
            className={`flex flex-col items-center justify-center gap-1 w-12 transition-colors ${isActive('/') ? 'text-[#137fec]' : 'text-gray-400'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive('/') ? 'fill-1' : ''}`}>home</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          
          <button 
            onClick={() => navigate('/catalog')}
            className={`flex flex-col items-center justify-center gap-1 w-12 transition-colors ${isActive('/catalog') || isActive('/category') ? 'text-[#137fec]' : 'text-gray-400'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive('/catalog') || isActive('/category') ? 'fill-1' : ''}`}>grid_view</span>
            <span className="text-[10px] font-medium">Catalog</span>
          </button>
          
          <button 
            onClick={() => navigate('/cart')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors w-12 relative ${isActive('/cart') ? 'text-[#137fec]' : 'text-gray-400'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive('/cart') ? 'fill-1' : ''}`}>shopping_cart</span>
            <span className="text-[10px] font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 size-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => navigate('/profile')}
            className={`flex flex-col items-center justify-center gap-1 transition-colors w-12 ${isActive('/profile') ? 'text-[#137fec]' : 'text-gray-400'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive('/profile') ? 'fill-1' : ''}`}>person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const onAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const onUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const onClearCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <Layout cartCount={totalCount}>
            <HomePage onAddToCart={onAddToCart} />
          </Layout>
        } />
        <Route path="/catalog" element={
          <Layout cartCount={totalCount}>
            <CatalogPage />
          </Layout>
        } />
        <Route path="/category/:categoryId" element={
          <Layout cartCount={totalCount}>
            <CategoryPage onAddToCart={onAddToCart} />
          </Layout>
        } />
        <Route path="/cart" element={
          <Layout cartCount={totalCount}>
            <CartPage cartItems={cartItems} onUpdateQuantity={onUpdateQuantity} onClearCart={onClearCart} />
          </Layout>
        } />
        <Route path="/profile" element={
          <Layout cartCount={totalCount}>
            <ProfilePage />
          </Layout>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
