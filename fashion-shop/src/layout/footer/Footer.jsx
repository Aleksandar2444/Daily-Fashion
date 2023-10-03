import "./Footer.css";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>{props.children}</div>
      <small>&copy; Aleksandar Ichev 2022 - {currentYear}</small>
    </footer>
  );
};

export default Footer;
