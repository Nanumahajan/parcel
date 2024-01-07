import { Link } from "react-router-dom";
import Title from "./Title";
import { useState } from "react";
import useUserStatus from "../../customHooks/useUserStatus";

const Header = () => {
  const [btn, setbtn] = useState("Login");
  const onlineStatus = useUserStatus();

  // if no dependency array useEffect will call at every re-render
  // if empty dependency array the ueEffect will call at only initial render(just once)
  // if any value in dependency array then the useEffect will only be on change or update in aaray

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Status :{onlineStatus ? "online" : "offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About-Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
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
