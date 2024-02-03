import { useState } from "react";
import { LOGO_URL } from "../utils/Constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header render");
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <nav className="nav">
        <a>Home</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Cart</a>
        <button
          style={{ padding: "0.25rem 0.5rem" }}
          onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login");
          }}
        >
          {btnName}
        </button>
      </nav>
    </header>
  );
};

export default Header;
