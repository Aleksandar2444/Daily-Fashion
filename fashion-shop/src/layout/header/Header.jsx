import "./Header.css";
import Navbar from "../../components/navbar/Navbar";

const Header = (props) => {
  return (
    <header className="header">
      <h2 style={{ fontSize: props.fontSize }}>{props.title}</h2>
      <Navbar cartCount={props.cartCount} />
    </header>
  );
};

export default Header;
