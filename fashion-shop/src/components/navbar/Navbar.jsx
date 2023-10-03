import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const navbarLinkData = [
  {
    text: "Home",
    href: "/products",
  },
  {
    text: "🛒",
    href: "/cart",
  },
];

const Navbar = () => {
  const cartCount = useSelector(
    (state) => state.products.value.filter((product) => product.isInCart).length
  );

  return (
    <nav className="navbar">
      <ul>
        {navbarLinkData.map((link, i) => (
          <li key={i}>
            <NavLink to={link.href}>
              {link.text}
              {link.href === "/cart" && <strong>{cartCount}</strong>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
