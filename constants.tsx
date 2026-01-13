
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: 'devices' },
  { id: 'fashion', name: 'Fashion', icon: 'styler' },
  { id: 'home', name: 'Home', icon: 'chair' },
  { id: 'beauty', name: 'Beauty', icon: 'brush' },
  { id: 'sports', name: 'Sports', icon: 'fitness_center' },
];

export const ALL_PRODUCTS: Product[] = [
  // --- Electronics / Phones ---
  {
    id: 'e1',
    name: 'iPhone 15 Pro Max Titanium',
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 120,
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Phones'
  },
  {
    id: 'e4',
    name: 'Galaxy S24 Ultra 512GB',
    price: 1299,
    rating: 4.6,
    reviews: 94,
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Phones'
  },
  {
    id: 'e6',
    name: 'Google Pixel 8 Pro',
    price: 999,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 78,
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Phones'
  },

  // --- Electronics / Laptops ---
  {
    id: 'e2',
    name: 'MacBook Air M3 Midnight',
    price: 1099,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 85,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Laptops',
    isSale: true
  },
  {
    id: 'e7',
    name: 'Dell XPS 13 Plus',
    price: 1399,
    rating: 4.5,
    reviews: 42,
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Laptops'
  },
  {
    id: 'e8',
    name: 'ASUS ROG Zephyrus G14',
    price: 1599,
    rating: 4.8,
    reviews: 67,
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Laptops'
  },

  // --- Electronics / Audio ---
  {
    id: 'e3',
    name: 'AirPods Pro (2nd Gen)',
    price: 249,
    rating: 4.7,
    reviews: 210,
    imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Audio'
  },
  {
    id: 'e9',
    name: 'Sony WH-1000XM5 ANC',
    price: 349,
    rating: 4.9,
    reviews: 340,
    imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Audio',
    isSale: true
  },
  {
    id: 'e10',
    name: 'Bose SoundLink Flex',
    price: 149,
    rating: 4.6,
    reviews: 89,
    imageUrl: 'https://images.unsplash.com/photo-1608156639585-34a0a5625594?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Audio'
  },

  // --- Electronics / Accessories ---
  {
    id: 'e5',
    name: 'USB-C Fast Charger 65W',
    price: 45,
    rating: 4.5,
    reviews: 156,
    imageUrl: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Accessories'
  },
  {
    id: 'p1',
    name: 'Smart Watch Series 7',
    price: 299,
    rating: 4.8,
    reviews: 120,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Accessories'
  },
  {
    id: 'e11',
    name: 'Mechanical Gaming Keyboard',
    price: 129,
    rating: 4.7,
    reviews: 210,
    imageUrl: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop',
    category: 'electronics',
    subCategory: 'Accessories'
  },

  // --- Fashion ---
  {
    id: 'f1',
    name: 'Running Sneakers Pro',
    price: 89,
    rating: 4.5,
    reviews: 85,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    category: 'fashion',
    subCategory: 'New Arrival'
  },
  {
    id: 'f2',
    name: 'Leather Tote Bag',
    price: 120,
    rating: 4.9,
    reviews: 210,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    category: 'fashion',
    subCategory: 'Trending'
  },
  {
    id: 'f3',
    name: 'Classic White T-Shirt',
    price: 25,
    rating: 4.4,
    reviews: 560,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    category: 'fashion',
    subCategory: 'Sale',
    isSale: true
  },
  {
    id: 'f4',
    name: 'Denim Jacket Urban',
    price: 75,
    rating: 4.6,
    reviews: 120,
    imageUrl: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=800&auto=format&fit=crop',
    category: 'fashion',
    subCategory: 'Trending'
  },

  // --- Home ---
  {
    id: 'h1',
    name: 'Modern Accent Chair',
    price: 245,
    rating: 4.7,
    reviews: 32,
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop',
    category: 'home',
    subCategory: 'Trending'
  },
  {
    id: 'h2',
    name: 'Minimalist Floor Lamp',
    price: 120,
    rating: 4.8,
    reviews: 54,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    category: 'home',
    subCategory: 'New Arrival'
  },
  {
    id: 'h3',
    name: 'Ceramic Vase Set',
    price: 45,
    originalPrice: 60,
    rating: 4.5,
    reviews: 18,
    imageUrl: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800&auto=format&fit=crop',
    category: 'home',
    subCategory: 'Sale',
    isSale: true
  },

  // --- Beauty ---
  {
    id: 'b1',
    name: 'Glow Skin Serum',
    price: 35,
    rating: 4.9,
    reviews: 850,
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    category: 'beauty',
    subCategory: 'Trending'
  },
  {
    id: 'b2',
    name: 'Organic Lip Balm Set',
    price: 18,
    rating: 4.7,
    reviews: 420,
    imageUrl: 'https://images.unsplash.com/photo-1512496011931-a2c38ffeb2e4?q=80&w=800&auto=format&fit=crop',
    category: 'beauty',
    subCategory: 'New Arrival'
  },

  // --- Sports ---
  {
    id: 's1',
    name: 'Yoga Mat Eco-Friendly',
    price: 40,
    rating: 4.8,
    reviews: 156,
    imageUrl: 'https://images.unsplash.com/photo-1592432676556-28456ca715d2?q=80&w=800&auto=format&fit=crop',
    category: 'sports',
    subCategory: 'Trending'
  },
  {
    id: 's2',
    name: 'Adjustable Dumbbells',
    price: 199,
    rating: 4.9,
    reviews: 89,
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    category: 'sports',
    subCategory: 'New Arrival'
  }
];

export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter(p => p.isSale).slice(0, 4);
