import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(userContext);

  const onlinestatus = useOnlineStatus();

  return (
    <header className="flex items-center font-inter justify-between px-6 py-1 border-b shadow-sm fixed w-full bg-white z-10">
      <div className="logo-container">
        <img className="w-[60px]" src={LOGO_URL}></img>
      </div>

      <nav className="flex items-center gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/aboutus"}>About Us</Link>
        <Link to="/contactus"> Contact Us</Link>
        <Link to="/grocery">Grocery</Link>
        <a>Cart</a>
        <button
          className="px-4 py-1 bg-slate-950 text-white rounded-md font-semibold"
          onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login");
          }}
        >
          {btnName}
        </button>
        <Link className="font-bold">{loggedInUser}</Link>
      </nav>
    </header>
  );
};

export default Header;
