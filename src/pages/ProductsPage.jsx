import { useGetAllProductsQuery } from "../slices/api";
import Products from "./Products";

function ProductsPage() {
  //   console.log(data);
  return (
    <>
      <div>
        <Products />
      </div>
    </>
  );
}
export default ProductsPage;
