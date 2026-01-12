import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  // ✅ total quantity (IMPORTANT)
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        {/* Search */}
        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>

        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="The Sports Factory" className="logo-img" />
          </Link>
        </div>

        {/* Icons */}
        <div className="top-icons">
          <Link to="/login">
            <FaUser title="Login" />
          </Link>

          <Link to="/wishlist">
            <FaHeart title="Wishlist" />
          </Link>

          {/* 🛒 CART WITH BADGE */}
          <Link to="/cart" className="cart-icon">
            <FaShoppingBag title="Cart" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <ul>
          <NavItem title="Men" gender="men" />
          <NavItem title="Women" gender="women" />
          <NavItem title="Kids" gender="kids" />

          <li>
            <Link to="/shop?category=home-decor">Home Decor</Link>
          </li>

          <li>
            <Link to="/shop?category=design">Shop By Design</Link>
          </li>

          <li>
            <Link to="/shop?category=accessories">Accessories</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

/* Dropdown Item */
function NavItem({ title, gender }) {
  return (
    <li className="dropdown">
      <Link to={`/shop?gender=${gender}`}>
        {title} <span className="arrow">⌄</span>
      </Link>

      <div className="dropdown-menu">
        <Link to={`/shop?gender=${gender}&category=topwear`}>Topwear</Link>
        <Link to={`/shop?gender=${gender}&category=bottomwear`}>Bottomwear</Link>
        <Link to={`/shop?gender=${gender}&category=shoes`}>Shoes</Link>
        <Link to={`/shop?gender=${gender}&category=accessories`}>
          Accessories
        </Link>
      </div>
    </li>
  );
}
