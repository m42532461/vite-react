import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // console.log(action.payload._id);
      // console.log(state.products);
      // console.log(state);
      // const item = state.products.find(
      //   (item) => item._id === action.payload._id
      // );
      // console.log(item);
      // const index = state.products.indexOf(item);
      let index;
      state.products.forEach((element, ind, array) => {
        if (element._id === action.payload._id) {
          index = ind;
        }
      });
      if (index >= 0) {
        console.log(index);
        state.products[index].quantity += 1;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      const index = state.products.indexOf(item);
      if (item.quantity === action.payload.quantity) {
        console.log("last one");
        state.products = state.products.filter(
          (item) => item._id !== action.payload._id
        );
        state.quantity -= 1;
      } else {
        state.products[index] = {
          ...item,
          quantity: item.quantity - action.payload.quantity,
        };
      }
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
