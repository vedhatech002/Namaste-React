import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header render");

  //if no dependency array  => useEffect called on every render
  //if dependency array is empty =[]=> useeffect called on initial render(just once)
  //if dependency array is =[btnName] => called everytime btnName is updated
  useEffect(() => {
    // console.log("useeffect called");
  }, [btnName]);
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
      </nav>
    </header>
  );
};

export default Header;
