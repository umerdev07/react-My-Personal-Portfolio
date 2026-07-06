import React from "react";
import Resumebtn from "./Resumebtn";

const MobileMenu = ({ navItems, setMenuOpen }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col px-6 py-4 text-white">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="text-left py-3 border-b border-gray-800 hover:text-cyan-400 transition"
        >
          {item.name}
        </button>
      ))}

      <Resumebtn mobile />
    </div>
  );
};

export default MobileMenu;