import logo from "../../public/logo.png";
import {useState, useContext } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../CustomHook/useNetworkStatus";
import { ThemeContext } from "../Context/ThemeContext";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const isOnline = useNetworkStatus()
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className="header__container flex justify-between h-20 bg-white items-center py-1.5 px-[10%] shadow-xl fixed w-[100%] z-50 top-0 dark:bg-gray-900">
      <div className="logo w-40 h-15">
        <Link to="/"><img src={logo} alt="SnapEats logo" /></Link>
      </div>
      <div className="header_items">
        <ul className="flex justify-around items-center dark:text-white">
          <li className="px-2 text-sm font-bold">{isOnline? '✅ Online' : '🔴 Offline'}</li>
          <li className="px-2 text-sm font-bold"><Link to='/'>Home</Link></li>
          <li className="px-2 text-sm font-bold"><Link to='/about'>About Us</Link></li>
          <li className="px-2 text-sm font-bold"><Link to='/contactus'>Contact Us</Link></li>
          <li className="px-2 text-sm font-bold"><Link to='/grocery'>Grocery</Link></li>

          <li className="px-2 text-sm font-bold">Cart</li>
          <li className="px-2 text-sm font-bold">
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
          <li className="px-2 text-sm font-bold flex justify-center"><input type='checkbox' onChange={() => {
            let changedTheme = 'light'
            if (theme === 'dark') {
                changedTheme = 'light'
            } else {
              changedTheme = 'dark'
            }
            console.log(changedTheme)
              setTheme(changedTheme)
            }}/><label className="px-2 text-sm font-bold">{'Dark'}</label></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
