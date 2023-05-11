import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

// TODO: Check all cartSlice
type PizzaItem = {
  id: number;
  price?: number;
  productSize: {
    type: number;
    size: number;
  };
  count?: number;
};

interface CartSliceState {
  pizza: PizzaItem[];
  totalPrice: number;
  amount: number;
}

const initialState: CartSliceState = {
  pizza: [],
  totalPrice: 0,
  amount: 0,
};

const findPizza = (state: CartSliceState, obj: PizzaItem) => {
  return state.pizza.find((item) => {
    if (item.id === obj.id) {
      return JSON.stringify(item.productSize) === JSON.stringify(obj.productSize);
    } else {
      return false;
    }
  });
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      const result = findPizza(state, action.payload);

      if (result) {
        result.count++;
      } else {
        state.pizza.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.pizza.reduce((sum, item) => item.price * item.count + sum, 0);
      state.amount = state.pizza.reduce((num, item) => item.count + num, 0);
    },
    minusPizza(state, action) {
      const result = findPizza(state, action.payload);
      const indexOfResult = state.pizza.indexOf(result);

      const minusIndicators = () => {
        state.amount--;
        state.totalPrice -= result.price;
      };

      if (result.count > 1) {
        result.count--;
        minusIndicators();
      } else {
        state.pizza.splice(indexOfResult, 1);
        minusIndicators();
      }
    },
    removePizza(state, action) {
      const result = findPizza(state, action.payload);
      const indexOfResult = state.pizza.indexOf(result);

      state.pizza.splice(indexOfResult, 1);
      state.amount -= result.count;
      state.totalPrice -= result.price * result.count;
    },
    clearPizza(state) {
      state.pizza = [];
      state.totalPrice = 0;
      state.amount = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectPizzaById = (id: number) => (state: RootState) =>
  state.cart.pizza.filter((item) => item.id === id);

export const { addPizza, minusPizza, removePizza, clearPizza } = cartSlice.actions;

export default cartSlice.reducer;
