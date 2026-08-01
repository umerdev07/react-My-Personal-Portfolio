import "remixicon/fonts/remixicon.css";
import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";
import Resumebtn from "./Resumebtn";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Workflow", id: "workflow" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scroll
          ? "bg-[#040E1A]/95 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

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

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#071321] z-50">
          <MobileMenu
            navItems={navItems}
            setMenuOpen={setMenuOpen}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;