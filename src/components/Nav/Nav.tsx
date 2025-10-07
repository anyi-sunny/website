import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <nav className="app-nav">
        <div className='nav-item' onClick={() => window.location.href = "/"}>
            <Link to="/" className="nav-brand">
                Anyi Sun
            </Link>
        </div>
      
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <div className='nav-item' onClick={() => window.location.href = "/bio"}>
            <Link to="/bio" className="nav-link">Bio</Link>
        </div>
        <div className='nav-item' onClick={() => window.location.href = "/experience"}>
            <Link to="/experience" className="nav-link">Experience</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
