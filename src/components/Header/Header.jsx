import "./Header.css";
import { FiHeart, FiUser, FiSearch, FiShoppingBag, FiGlobe } from "react-icons/fi";

export default function Header() {
  return (
    <header className="header">

      {/* ✅ Top header row */}
      <div className="header-top container">
        <div className="left-icon">✧</div>

        <div className="logo">LOGO</div>

        <div className="right-icons">
          <FiSearch className="icon" />
          <FiHeart className="icon" />
          <FiShoppingBag className="icon" />
          <FiUser className="icon" />
          <div className="lang">
            <FiGlobe className="icon" /> ENG <span>▾</span>
          </div>
        </div>
      </div>

      {/* ✅ Navigation row */}
      <nav className="navbar container">
        <a href="/">SHOP</a>
        <a href="/">SKILLS</a>
        <a href="/">STORIES</a>
        <a href="/">ABOUT</a>
        <a href="/">CONTACT US</a>
      </nav>

      {/* ✅ Search bar */}
      <div className="search-wrapper">
        <div className="search-bar container">
          <FiSearch />
          <input type="text" placeholder="Search products" />
        </div>
      </div>

    </header>
  );
}
