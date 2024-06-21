import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:6800/",
    prepareHeaders: (headers, { getState }) => {
      const credentials = window.sessionStorage.getItem("CREDENTIALS");
      const parsedCredentials = JSON.parse(credentials || "{}");
      const token = parsedCredentials.token;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => "api/users",
    }),
    getAllProducts: build.query({
      query: () => "api/products",
    }),
    getSingleProduct: build.query({
      query: (id) => `api/products/` + id,
    }),
    getCartItemsByUserId: build.query({
      query: (id) => `api/cart/users/` + id,
    }),
    getSingleUserById: build.query({
      query: (id) => `api/users/` + id,
    }),
    getAllOrders: build.query({
      query: () => "api/orders",
    }),
    getSingleOrder: build.query({
      query: (id) => `api/orders` + id,
    }),
    getProductsByOrderId: build.query({
      query: (id) => `api/orders/users/` + id,
    }),
    addToCartByUserId: build.mutation({
      query: (body, id) => ({
        url: `api/cart/` + id,
        method: "POST",
        body: body,
      }),
    }),
    deleteCartItemById: build.mutation({
      query: (id) => ({
        url: `api/cart/` + id,
        method: "DELETE",
      }),
    }),
    checkOut: build.mutation({
      query: () => ({
        url: "api/orders",
        method: "POST",
        body: body,
      }),
    }),
    register: build.mutation({
      query: (cred) => ({
        url: "auth/register",
        method: "POST",
        body: cred,
      }),
    }),
    login: build.mutation({
      query: (cred) => ({
        url: "auth/login",
        method: "POST",
        body: cred,
      }),
    }),
    findUserWithToken: build.query({
      query: () => "/api/users/check/token",
    }),
    addProducts: build.mutation({
      query: (body) => ({
        url: "api/products",
        method: "POST",
        body: body,
      }),
    }),
    logout: build.mutation({
      queryFn: () => ({ data: {} }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetCartItemsByUserIdQuery,
  useGetSingleUserByIdQuery,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
  useGetProductsByOrderIdQuery,
  useAddToCartByUserIdMutation,
  useDeleteCartItemByIdMutation,
  useCheckOutMutation,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useFindUserWithTokenQuery,
  useAddProductsMutation,
} = api;
