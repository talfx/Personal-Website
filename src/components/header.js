import '../FilesCss/App.css';
import { useLocation, Link } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  return (
    <>
      <div className="header-container">
        <h1>Tal Golan</h1>
        <h2>Data Scientist & Full-Stack Developer</h2>
      </div>
      <nav className='navBar'>
        <Link to="/" className={`navLinks ${location.pathname === '/' ? 'active' : ''}`}>
          Portfolio
        </Link>
        <Link to="/services" className={`navLinks ${location.pathname === '/services' ? 'active' : ''}`}>
          Services
        </Link>
        <Link to="/about" className={`navLinks ${location.pathname === '/about' ? 'active' : ''}`}>
          About me
        </Link>
        <Link to="/contact" className={`navLinks ${location.pathname === '/contact' ? 'active' : ''}`}>
          Contact
        </Link>
      </nav>
    </>
  );
}