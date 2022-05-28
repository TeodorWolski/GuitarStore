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
          name: newItem.name,
          id: newItem.id,
          totalPrice: newItem.price,
          quantity: 1,
          price: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    increaseQuantity: (state, action) => {},
    decreaseQuantity: (state, action) => {},
    removeFromCart: (state) => {},
    setShowCart: (state) => {
      state.showCart = true;
    },
  },
});

export const { addToCart, removeFromCart, setShowCart, increaseQuantity } =
  cartSlice.actions;

export default cartSlice;
