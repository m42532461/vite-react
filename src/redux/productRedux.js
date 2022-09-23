import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    currentPage: 1,
    numberOfPages: 1,
  },
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    endLoading: (state, action) => {
      state.isLoading = false;
    },
    fetchProductBySearch: (state, action) => {
      state.products = action.payload.data;
    },
    fetchAllProduct: (state, action) => {
      console.log(action.payload);
      state.products = action.payload.data;
      state.currentPage = action.payload.currentPage;
      state.numberOfPages = action.payload.numberOfPages;
    },
  },
});

export const {
  startLoading,
  endLoading,
  fetchProductBySearch,
  fetchAllProduct,
} = productSlice.actions;
export default productSlice.reducer;
