import { LOGO_URL } from "../utils/Constant";

const Header = () => {
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
      </nav>
    </header>
  );
};

export default Header;
