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
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <h3>online:{onlinestatus ? "✅" : "🔴"}</h3>
      <nav className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/aboutus"}>About Us</Link>
        <Link to="/contactus"> Contact Us</Link>
        <Link to="/grocery">Grocery</Link>
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
