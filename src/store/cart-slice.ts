import { createSlice } from "@reduxjs/toolkit";
import { BasketItem } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
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
        existingItem.price += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeFromCart: (state) => {},
    setShowCart: (state) => {
      state.showCart = true;
    },
  },
});

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;

export default cartSlice;
