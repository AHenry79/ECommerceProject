import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Nav from "./pages/Nav";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import { useGetAllProductsQuery } from "./slices/api";
import SingleProduct from "./pages/SingleProductPage";
import CartPage from "./pages/Cart";

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
      </Routes>
    </>
  );
}

export default App;
