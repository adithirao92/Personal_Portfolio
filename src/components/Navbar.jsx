import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <Link to={`/${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;