import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import { useAddToCartByUserIdMutation } from "../slices/api";

function Products() {
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState("");
  const user = useSelector((state) => state.auth.credentials.users);
  const [addToCart] = useAddToCartByUserIdMutation();
  const handleAddToCart = async (productId) => {
    await addToCart({ product_id: productId });
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
      <div id={"Products"}>
        {products.length < 1 ? (
          <h1>No Available Products...</h1>
        ) : (
          products
            .filter((i) => i.name.toLowerCase().includes(product.toLowerCase()))
            .map((i) => (
              <div key={i.id} className="Product">
                <Link to={"/products/" + i.id}>
                  <h1 className="productLink">{i.name}</h1>
                </Link>
                <img src={i.image_url} alt={i.description} />
                {i.availability ? (
                  <h3 style={{ color: "green", fontSize: "14px" }}>In Stock</h3>
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
                          onClick={() => handleAddToCart(i.id)}
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
                  <button className="editButton">Edit Product</button>
                )}
              </div>
            ))
        )}
      </div>
    </>
  );
}
export default Products;
