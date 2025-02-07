import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {}, // Changed from [] to {}
  products: [],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item._id === action.payload._id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.products = state.products.filter((product) => product._id !== action.payload._id);
        }
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter((item) => item._id !== action.payload._id);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem, resetCart } =
  orebiSlice.actions;
export default orebiSlice.reducer;
