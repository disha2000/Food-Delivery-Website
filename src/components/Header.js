import logo from "../../public/logo.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
