import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getOrderByUserId.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});
export default ordersSlice.reducer;
