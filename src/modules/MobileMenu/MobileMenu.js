const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="menu-overlay">
      <div className="menu-panel">
        <button className="close" onClick={closeMenu}>
          ×
        </button>

        <a href="#services" onClick={closeMenu}>
          Paslaugos
        </a>
        <a href="#team" onClick={closeMenu}>
          Komanda
        </a>
        <a href="#gallery" onClick={closeMenu}>
          Galerija
        </a>
        <a href="#contact" onClick={closeMenu}>
          Kontaktai
        </a>

        <button className="book-btn">Rezervuoti laiką</button>
      </div>
    </div>
  );
};
export default MobileMenu;
