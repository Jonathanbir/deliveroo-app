import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  imgUrl: null,
  title: null,
  rating: null,
  genre: null,
  address: null,
  short_description: null,
  dishes: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.items = [action.payload];
    },
    increaseRestaurant: (state, { payload }) => {
      const restaurantItem = state.items.find((item) => item.id === payload.id);
      restaurantItem.amount = restaurantItem.amount + 1;
    },
    decreaseRestaurant: (state, { payload }) => {
      const restaurantItem = state.items.find((item) => item.id === payload.id);
      restaurantItem.amount = restaurantItem.amount - 1;
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
    removeFromRestaurant: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setRestaurant,
  increaseRestaurant,
  decreaseRestaurant,
  removeFromRestaurant,
  calculateAmounts,
  calculateTotals,
} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.items;

export const selectRestaurantItemsWithId = (state, id) => {
  state.restaurant.items.filter((item) => item.id === id);
};

export default restaurantSlice.reducer;
