import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    id: null,
    customer_id: null,
    cart: [],
    quantity: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getCartItemsByUserId.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.addToCartByUserId.matchFulfilled,
      (state, { payload }) => {
        state.push(payload);
        return state;
      }
    );
    builder.addMatcher(
      api.endpoints.deleteCartItemById.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});
export default cartSlice.reducer;
