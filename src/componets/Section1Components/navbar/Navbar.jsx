import 'remixicon/fonts/remixicon.css';
import React, { useState } from 'react';
import Logo from './Logo';
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
    <nav className="relative w-full bg-[#071321] border-b border-gray-800">

      {/* Main Row */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10">

        <Logo />

        <div className="hidden md:flex">
          <NavItems navItems={navItems} />
        </div>

        <div className="hidden md:block">
          <Resumebtn />
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </button>

      </div>

      {/* Mobile Menu */}
      <div className="absolute top-full left-0 w-full z-50 bg-[#071321] border-t border-gray-600">
        {menuOpen && (
          <MobileMenu
            navItems={navItems}
          />
        )}
      </div>

    </nav>
  );
};

export default Navbar;