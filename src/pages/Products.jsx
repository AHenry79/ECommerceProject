import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Products() {
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState("");
  const user = useSelector((state) => state.auth.credentials.users);
  return (
    <>
      <div className="searchProductsWrapper">
        {/* <SearchIcon className={"ProductsSearchIcon"} /> */}
        <input
          type="text"
          placeholder="Search In-store Products"
          onChange={(e) => setProduct(e.target.value)}
          className="searchBar"
        />
        {/* <ShoppingCartIcon className={"ShoppingCartIcon"} /> */}
      </div>
      <div id={"Products"}>
        {products.length < 1 ? (
          <h1>No available Products...</h1>
        ) : (
          products
            .filter((i) => i.name.toLowerCase().includes(product.toLowerCase()))
            .map((i) => (
              <div key={i.id} className="Product">
                <Link to={"/products/" + i.id}>
                  <h1>{i.name}</h1>
                </Link>
                <img src={i.image_url} alt={i.description} />
                {i.availability ? (
                  <h3 style={{ color: "green", fontSize: "10px" }}>In Stock</h3>
                ) : (
                  <h3 style={{ color: "red", fontSize: "10px" }}>
                    Not available
                  </h3>
                )}
                <h2>Category: {i.description}</h2>
                <h2>Price: ${i.price}</h2>
                <button>Add to Cart</button>
                {user.is_admin && <button>Edit Product</button>}
              </div>
            ))
        )}
      </div>
    </>
  );
}
export default Products;
