import { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };
  return (
    <div className="cartPage">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="emptyCart">Your cart is empty. Fill it up!</p>
      ) : (
        <div className="cartItems">
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <div className="cartItemInfo">
                <span className="itemName">{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
                <span className="itemTotal">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <button
                className="deleteItemButton"
                onClick={() => handleRemove(item.id)}
              >
                <DeleteRoundedIcon />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cartTotal">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="checkoutButton" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
