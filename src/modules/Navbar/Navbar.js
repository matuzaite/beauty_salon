import "./styles.scss";
import logo from "../../assets/logotipas.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__logo">
        <img id="logo" src={logo} alt="salon logo" />
      </ul>

      <ul className="navbar__links">
        <li>Paslaugos</li>
        <li>Apie Mus</li>
        <li>Kontaktai</li>
        <li>LT / IT / EN</li>
      </ul>
    </nav>
  );
};

export default Navbar;
