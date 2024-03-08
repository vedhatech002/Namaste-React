import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(userContext);

  //subsribing to the store using a selector
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);

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
        <Link to="/cart" className=" text-lg font-semibold">
          Cart -({cartItems.length}-items)
        </Link>

        <button
          className="px-4 py-1 bg-slate-950 text-white rounded-md font-semibold"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
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
