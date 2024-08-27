import React, { useState } from 'react';
import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onSidebarToggle }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBars className="icon" onClick={onSidebarToggle} />
        <span className="logo">DoIt</span>
      </div>

      <div className="navbar-right">
        <div className="search-container">
          <FaSearch className="icon" onClick={handleSearchClick} />
          {isSearchOpen && <input type="text" placeholder="Search..." className="search-bar" />}
        </div>
        <FaTh className="icon" />
        <div className="dark-mode-toggle" onClick={handleDarkModeToggle}>
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
