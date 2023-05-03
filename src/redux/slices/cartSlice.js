import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizza: [],
  totalPrice: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPizza(state, action) {
      const result = state.pizza.find((item) => {
        if (item.id === action.payload.id) {
          return JSON.stringify(item.productSize) === JSON.stringify(action.payload.productSize);
        } else {
          return false;
        }
      });

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
    removePizza(state, action) {},
    clearPizza(state) {
      state.pizza = [];
      state.totalPrice = 0;
      state.amount = 0;
    },
  },
});

export const { addPizza, removePizza, clearPizza } = cartSlice.actions;

export default cartSlice.reducer;
