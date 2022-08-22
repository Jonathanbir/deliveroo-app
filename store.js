import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import restaurantReducer from "./features/restaurantSlice";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

export const store = configureStore(
  {
    reducer: {
      basket: basketReducer,
      restaurant: restaurantReducer,
    },
  },
  applyMiddleware(logger)
);
