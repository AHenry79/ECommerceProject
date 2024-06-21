import { configureStore } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import auth from "./slices/auth";
import products from "./slices/products";
import users from "./slices/users";
import carts from "./slices/cart";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: auth,
    products: products,
    users: users,
    carts: carts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
