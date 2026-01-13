
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  category: string;
  subCategory?: string; // 加入子分類欄位
  isSale?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
}
