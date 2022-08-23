import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  amounts: 0,
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.items = action.payload;
    },
    increaseBasket: (state, { payload }) => {
      const basketItem = state.items.find((item) => item.id === payload.id);
      basketItem.amount = basketItem.amount + 1;
    },
    decreaseBasket: (state, { payload }) => {
      const basketItem = state.items.find((item) => item.id === payload.id);
      basketItem.amount = basketItem.amount - 1;
    },
    calculateAmounts: (state) => {
      state.amounts = state.items.reduce((totals, item) => {
        return totals + item.amount;
      }, 0);
    },
    calculateTotals: (state) => {
      state.total = state.items.reduce((totals, item) => {
        return totals + item.amount * item.price;
      }, 0);
    },
    removeFromBasket: (state, { payload }) => {
      console.log("staeid", current(state), payload);
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setBasket,
  increaseBasket,
  decreaseBasket,
  removeFromBasket,
  calculateAmounts,
  calculateTotals,
} = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => {
  state.basket.items.filter((item) => item.id === id);
};

export default basketSlice.reducer;
