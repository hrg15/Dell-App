import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalCartQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        (food) => food.id === action.payload.id
      );
      state.changed = true;
      state.totalCartQuantity++;
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          totalPrice: Number(newItem.price),
          totalQuantity: 1,
        });
      } else {
        existingItem.totalQuantity++;
        existingItem.totalPrice =
          existingItem.totalPrice + Number(newItem.price);
      }
      state.totalPrice = state.cart.reduce(
        (prv, current) => prv + current.price * current.totalQuantity,
        0
      );
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((food) => food.id === id);
      state.changed = true;
      state.totalCartQuantity--;
      if (existingItem.totalQuantity === 1) {
        state.cart = state.cart.filter((food) => food.id !== id);
      } else {
        existingItem.totalQuantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalPrice = state.cart.reduce(
        (prv, current) => prv + current.price * current.totalQuantity,
        0
      );
    },
    replaceCart(state, action) {
      state.totalPrice = action.payload.totalPrice;
      state.cart = action.payload.cart;
    },
    showCartToggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { showCartToggle, removeItem, addToCart, replaceCart } =
  CartReducer.actions;
export default CartReducer.reducer;
