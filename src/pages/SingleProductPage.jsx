import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useAddToCartByUserIdMutation,
  useDeleteProductMutation,
} from "../slices/api";

function SingleProduct() {
  const productsData = useSelector((state) => state.products);
  const params = useParams();
  const chosenProduct = productsData.find((i) => i.id === Number(params.id));
  console.log(chosenProduct);
  const user = useSelector((state) => state.auth.credentials.users);
  const [addToCart] = useAddToCartByUserIdMutation();
  const [del] = useDeleteProductMutation();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    addToCart({ product_id: chosenProduct.id });
    navigate("/products");
  };
  const handleDeleteProduct = async () => {
    await del(chosenProduct.id);
    navigate("/products");
    window.location.reload();
  };
  return (
    <>
      <div id={"productDetailWrapper"}>
        <div className={"header"}>
          <h1>Product Details - {chosenProduct.name}</h1>
          <p>Detail Page of Product</p>
        </div>
        <div className={"imageWrapper"}>
          <img
            className={"productImage"}
            src={chosenProduct.image_url}
            alt={chosenProduct.description}
          />
          <img
            className={"nutritionFactsImg"}
            src={chosenProduct.nutrition_facts}
            alt={chosenProduct.description}
          />
        </div>
        {user && (
          <>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </>
        )}
        {user.is_admin && (
          <button onClick={handleDeleteProduct}>Delete Product</button>
        )}
      </div>
    </>
  );
}
export default SingleProduct;
