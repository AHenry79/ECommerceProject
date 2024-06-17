import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

function storeToken(state, { payload }) {
  state.credentials = { token: payload.token, user: { ...payload.user } };
  window.sessionStorage.setItem(
    "CREDENTIALS",
    JSON.stringify({
      token: payload.token,
      user: { ...payload.user },
    })
  );
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    credentials: JSON.parse(window.sessionStorage.getItem("CREDENTIALS")) || {
      token: "",
      user: {
        id: null,
        username: null,
      },
    },
  },
  reducers: {},
  extraReducers: (build) => {
    build.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
    build.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
    build.addMatcher(api.endpoints.logout.matchFulfilled, (state) => {
      state.credentials = {
        token: "",
        user: {
          id: null,
          username: null,
        },
      };
      window.sessionStorage.removeItem("CREDENTIALS");
    });
  },
});
export default authSlice.reducer;
