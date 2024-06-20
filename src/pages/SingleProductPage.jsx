import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleProduct() {
  const productsData = useSelector((state) => state.products);
  const params = useParams();
  const chosenProduct = productsData.find((i) => i.id === Number(params.id));
  const user = useSelector((state) => state.auth.credentials.users);
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
        {user.is_admin && <button>Delete Product</button>}
      </div>
    </>
  );
}
export default SingleProduct;
