// cart-item.model.ts

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  thumbnail: string;
  discountPercentage: number;
  discountedPrice?: number; // Add this property
}
