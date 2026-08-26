import { useState } from 'react';
import { Aperture, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logobgrm.png" alt="Lumière Photo Studio" className="logo-img" />
        </div>

        <nav className="nav-menu">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#rental">Rental</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-action">
          <a href="#contact" className="btn-header">Book a Session &rarr;</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Aperture size={28} className="aperture-icon" />}
        </button>

        <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-menu">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#rental" onClick={closeMenu}>Rental</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href="#contact" className="btn-mobile-book" onClick={closeMenu}>Book a Session &rarr;</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
