import { useGetAllProductsQuery } from "../slices/api";
import Products from "./Products";

function ProductsPage() {
  const { isLoading, data } = useGetAllProductsQuery();
  //   console.log(data);
  return (
    <>
      <div>{isLoading ? <h1>Loading...</h1> : <Products />}</div>
    </>
  );
}
export default ProductsPage;
