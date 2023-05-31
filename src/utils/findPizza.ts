import { CartSliceState, PizzaItem } from '../redux/cart/types';

export const findPizza = (state: CartSliceState, obj: PizzaItem) => {
  return state.pizza.find((item) => {
    if (item.id === obj.id) {
      return JSON.stringify(item.productSize) === JSON.stringify(obj.productSize);
    } else {
      return false;
    }
  });
};
