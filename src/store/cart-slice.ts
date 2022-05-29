import { createSlice } from "@reduxjs/toolkit";
import { BasketItem } from "../types";
import { DUMMY_PRODUCTS } from "../assets/data/";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: DUMMY_PRODUCTS,
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (state: any, action) => {
      const newItem: BasketItem = action.payload;
      const existingItem = state.itemsList.find(
        (item: BasketItem) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          name: newItem.name,
          id: newItem.id,
          totalPrice: newItem.price,
          quantity: 1,
          price: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart: (state: any, action) => {
      const id = action.payload;
      const existingItem: BasketItem = state.itemsList.find(
        (item: BasketItem) => item.id === id
      );
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(
          (item: BasketItem) => item.id !== id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
