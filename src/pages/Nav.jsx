import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { useLogoutMutation } from "../slices/api";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const [logout] = useLogoutMutation();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.auth.credentials.users);
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      currentScrollPosition = window.scrollY;
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(true);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(false);
      }
      previousScrollPosition = currentScrollPosition;
    });
  }, []);
  return (
    <nav className={`active ${show && "hidden"}`}>
      {window.sessionStorage.getItem("CREDENTIALS") ? (
        <>
          <ul className="navlinks">
            <li>
              <Link to="/">
                Home
                <HomeRoundedIcon className="icons" />
              </Link>
            </li>
            <li>
              <Link to="/products">
                Products
                <MenuBookRoundedIcon className="productsicon"></MenuBookRoundedIcon>
              </Link>
            </li>
            {user.is_admin && <li>Add products</li>}
            <li>
              <Link to="/cart">
                Cart
                <LocalGroceryStoreRoundedIcon className="carticon"></LocalGroceryStoreRoundedIcon>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                Account
                <Person2RoundedIcon className="icons"></Person2RoundedIcon>
              </Link>
            </li>
            <button onClick={logout}>LOGOUT</button>
          </ul>
        </>
      ) : (
        <ul className="navlinks">
          <li>
            <Link to="/">
              Home
              <HomeRoundedIcon className="icons" />
            </Link>
          </li>
          <li>
            <Link to="/products">
              Products
              <MenuBookRoundedIcon className="productsicon"></MenuBookRoundedIcon>
            </Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
