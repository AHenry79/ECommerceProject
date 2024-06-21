import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useSelector } from "react-redux";
import {
  useGetCartItemsByUserIdQuery,
  useDeleteCartItemByIdMutation,
} from "../slices/api";
import { useEffect, useState } from "react";

const CartPage = () => {
  const user = useSelector((state) => state.auth.credentials);
  useGetCartItemsByUserIdQuery(user.users.id);
  const cart = useSelector((state) => state.carts.cart);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [del] = useDeleteCartItemByIdMutation();
  console.log(cart);
  useEffect(() => {
    if (cart) {
      setCartItems(cart);
      setQuantity(new Array(cart.length).fill(1));
    }
  }, [cart]);
  const handleQuantityChange = (index, newQuantity) => {
    setQuantity((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = newQuantity;
      return newQuantities;
    });
  };
  const handleRemove = async (cartId) => {
    await del(cartId);
    window.location.reload();
  };
  const totalPrice = cartItems.reduce(
    (acc, item, index) => acc + Number(item.price) * quantity[index] || 1,
    0
  );

  // const handleCheckout = () => {
  //   alert("Proceeding to checkout!");
  // };

  return (
    <div className="cartPage">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="emptyCart">Your cart is empty. Fill it up!</p>
      ) : (
        <div className="cartItems">
          {cartItems.map((item, index) => (
            <div key={item.id} className="cartItem">
              <div className="cartItemInfo">
                <span className="itemName">{item.product_name}</span>
                <span>${item.price}</span>
                <span>Quantity: {quantity[index]}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(index, quantity[index] + 1)
                  }
                >
                  Add
                </button>
                {quantity[index] > 1 ? (
                  <button
                    onClick={() =>
                      handleQuantityChange(index, quantity[index] - 1)
                    }
                  >
                    Remove
                  </button>
                ) : (
                  <button onClick={() => handleRemove(item.cart_id)}>
                    Remove
                  </button>
                )}
                <span className="itemTotal">
                  Total: ${Number(item.price) * quantity[index].toFixed(2)}
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
        <h3>Total: ${Number(totalPrice.toFixed(2))}</h3>
        <button className="checkoutButton">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
