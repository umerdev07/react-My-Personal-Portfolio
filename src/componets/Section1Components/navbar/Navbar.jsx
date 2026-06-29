import 'remixicon/fonts/remixicon.css';
import React, { useState } from 'react';
import Logo from './Logo'
import NavItems from './NavItems';
import Resumebtn from './Resumebtn';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact"
  ];

  return (
    <nav className="bg-[#071321] w-full border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <NavItems navItems={navItems}/>

        {/* Resume Button (Desktop) */}
        <Resumebtn />

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            <i className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenu navItems={navItems}/>
      )}
    </nav>
  );
};

export default Navbar;