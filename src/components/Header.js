import logo from "../../public/logo.png";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  return (
    <div className="header__container">
      <div className="logo">
        <img src={logo} alt="SnapEats logo" />
      </div>
      <div className="header_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="btn"
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
