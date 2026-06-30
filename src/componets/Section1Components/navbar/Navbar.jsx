import "remixicon/fonts/remixicon.css";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Resumebtn from "./Resumebtn";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-[#040E1A]/95 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
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
      {menuOpen && (
        <div className="absolute top-full left-0 w-full z-50 bg-[#071321]">
          <MobileMenu navItems={navItems} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;