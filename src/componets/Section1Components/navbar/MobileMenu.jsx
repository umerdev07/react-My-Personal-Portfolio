import React from "react";

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

      <button className="mt-5 group relative overflow-hidden border border-cyan-400 rounded-full px-5 py-2 text-cyan-300 text-sm hover:bg-white/10 transition-all duration-300">
        <i className="ri-download-2-line mr-1"></i>
        Resume
      </button>

    </div>
  );
};

export default MobileMenu;