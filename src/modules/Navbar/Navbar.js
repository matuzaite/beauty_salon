import { useState, useLayoutEffect, useRef, useEffect } from "react";
import "./styles.scss";
import logo from "../../assets/logotipas.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navRef = useRef(null);

  useLayoutEffect(() => {
    if (navRef.current) {
      const h = navRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
    }
    const onResize = () => {
      if (navRef.current) {
        const h = navRef.current.getBoundingClientRect().height;
        document.documentElement.style.setProperty("--navbar-height", `${h}px`);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close mobile menu if user scrolls downward after opening
  useEffect(() => {
    if (!isMenuOpen) return;
    const startY = window.scrollY;
    const onScroll = () => {
      if (window.scrollY > startY + 5) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  return (
    <>
      <nav ref={navRef} className="navbar">
        <div className="navbar__logo">
          <a href="/">
            <img id="logo" src={logo} alt="salon logo" />
          </a>
        </div>

        <ul className="navbar__links">
          <li>
            <a href="#about">Apie Mus</a>
          </li>
          <li>
            <a href="#services">Paslaugos</a>
          </li>
          <li>
            <a href="#contact">Kontaktai</a>
          </li>
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
