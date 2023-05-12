export type PizzaItem = {
  id: number;
  price?: number;
  productSize: {
    type: number;
    size: number;
  };
  count?: number;
};

export interface CartSliceState {
  pizza: PizzaItem[];
  totalPrice: number;
  amount: number;
}
