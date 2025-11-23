import { useState } from "react";
import "./styles.scss";
import logo from "../../assets/logotipas.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img id="logo" src={logo} alt="salon logo" />
        </div>

        <ul className="navbar__links">
          <li>Paslaugos</li>
          <li>Apie Mus</li>
          <li>Kontaktai</li>
        </ul>

        <div className="navbar__burger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>
      {isMenuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
