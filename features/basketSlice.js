import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    increaseBasket: (state, { payload }) => {
      const basketItem = state.items[0].find((item) => {
        return item.id === payload.id;
      });
      basketItem.amount = basketItem.amount + 1;
    },
    removeFromBasket: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, increaseBasket, setBasket, removeFromBasket } =
  basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => {
  state.basket.items.filter((item) => item.id === id);
};

export default basketSlice.reducer;
