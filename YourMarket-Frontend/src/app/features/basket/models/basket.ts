export interface Basket {
  userId: string;
  items: BasketItem[];
}

export interface BasketItem {
  quantity: number;
  price: number;
  name: string;
}
