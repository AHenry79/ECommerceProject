import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllProducts.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getSingleProduct.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.addProducts.matchFulfilled,
      (state, { payload }) => {
        state.push(payload);
        return state;
      }
    );
  },
});

export default productsSlice.reducer;
