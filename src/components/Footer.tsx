import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logobgrm.png" alt="Lumière Photo Studio" className="logo-img" />
          </div>

          <nav className="footer-nav">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#rental">Rental</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-right">
          <p className="copyright">&copy; 2025 Lumière Photo Studio. All rights reserved.</p>
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
