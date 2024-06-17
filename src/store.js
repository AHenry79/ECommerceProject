import { configureStore } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import auth from "./slices/auth";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
