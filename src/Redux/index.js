import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart/CartReducer";

const store = configureStore({
  reducer: { cart: CartReducer },
});

export default store;
