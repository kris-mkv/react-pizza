export type PizzaItem = {
  id: number;
  title?: string;
  imageUrl?: string;
  price?: number;
  productSize: {
    type: string;
    size: number;
  };
  count?: number;
};

export interface CartSliceState {
  pizza: PizzaItem[];
  totalPrice: number;
  amount: number;
}
