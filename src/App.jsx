import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Nav from "./pages/Nav";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import { useGetAllProductsQuery } from "./slices/api";
import SingleProduct from "./pages/SingleProductPage";
import CartPage from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import ScrollList from "./pages/AccountPage";

function App() {
  useGetAllProductsQuery();
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/register"} element={<Auth />} />
        <Route path={"/products"} element={<ProductsPage />} />
        <Route path={"/products/:id"} element={<SingleProduct />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/addProducts"} element={<AddProduct />} />
        <Route path={"/profile"} element={<ScrollList />} />
      </Routes>
    </>
  );
}

export default App;
