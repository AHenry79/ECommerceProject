import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import {
  useAddToCartByUserIdMutation,
  useGetAllProductsQuery,
} from "../slices/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cart";
import { useNavigate } from "react-router-dom";

function Products() {
  const { isLoading } = useGetAllProductsQuery();
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState("");
  const user = useSelector((state) => state.auth.credentials.users);
  const [addToCartFunc] = useAddToCartByUserIdMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e, productId) => {
    let positionClick = e.target;
    if (positionClick.classList.contains("addToCartButton")) {
      let product_id = positionClick.parentElement.dataset.id;
      addToCartFunc({ product_id: product_id });
    }
    dispatch(addToCart(productId));
  };
  const handleEditButton = (e) => {
    let positionClick = e.target;
    if (positionClick.classList.contains("editButton")) {
      let product_id = positionClick.parentElement.dataset.id;
      navigate(`/products/editProducts/${product_id}`);
    }
  };
  return (
    <>
      <div className="searchProductsWrapper">
        <input
          type="text"
          placeholder="Search In-store Products..."
          onChange={(e) => setProduct(e.target.value)}
          className="searchBar"
        />
      </div>
      {isLoading ? (
        <h1 className="emptyCart">Loading Products...</h1>
      ) : (
        <div id={"Products"}>
          {products.length < 1 ? (
            <h1>No Available Products...</h1>
          ) : (
            products
              .filter((i) =>
                i.name.toLowerCase().includes(product.toLowerCase())
              )
              .map((i) => (
                <div key={i.id} data-id={i.id} className="Product">
                  <Link to={"/products/" + i.id}>
                    <h1 className="productLink">{i.name}</h1>
                  </Link>
                  <img src={i.image_url} alt={i.description} />
                  {i.availability ? (
                    <h3 style={{ color: "green", fontSize: "14px" }}>
                      In Stock
                    </h3>
                  ) : (
                    <h3 style={{ color: "red", fontSize: "14px" }}>
                      Not Available
                    </h3>
                  )}
                  <h2>Category: {i.description}</h2>
                  <h2>Price: ${i.price}</h2>
                  {!user.id ? (
                    <h2>Must be logged in to add to cart!</h2>
                  ) : (
                    <>
                      {!i.availability ? (
                        <>
                          <button className="addToCartButton" disabled>
                            Currently Unavailable
                          </button>
                          <br />
                          <br />
                        </>
                      ) : (
                        <>
                          <button
                            className="addToCartButton"
                            onClick={(e) => handleAddToCart(e, i.id)}
                          >
                            Add to Cart
                          </button>
                          <br />
                          <br />
                        </>
                      )}
                    </>
                  )}
                  {user.is_admin && (
                    <button
                      className="editButton"
                      onClick={(e) => handleEditButton(e)}
                    >
                      Edit Product
                    </button>
                  )}
                </div>
              ))
          )}
        </div>
      )}
    </>
  );
}
export default Products;
