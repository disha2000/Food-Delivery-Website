import logo from "../../public/logo.png";
import {useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log("before use memo");
  const fullName = useMemo(() => {
    console.log("use memo");
    return firstName + lastName;
  }, [lastName, firstName]);

  console.log("after use memo");
  return (
    <div className="header__container">
      <div className="logo">
        <img src={logo} alt="SnapEats logo" />
      </div>
      <div className="header_items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contactus'>Contact Us</Link></li>
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
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
      <div>{fullName}</div>
    </div>
  );
};

export default Header;
