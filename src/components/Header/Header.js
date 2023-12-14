import Title from "./Title";
import { useState, useEffect } from "react";

const Header = () => {
  const [btn, setbtn] = useState("Login");

  // if no dependency array useEffect will call at every re-render
  // if empty dependency array the ueEffect will call at only initial render(just once)
  // if any value in dependency array then the useEffect will only be on change or update in aaray
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "Login" ? setbtn("Logout") : setbtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
