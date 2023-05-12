import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;
export const selectPizzaById = (id: number) => (state: RootState) =>
  state.cart.pizza.filter((item) => item.id === id);
