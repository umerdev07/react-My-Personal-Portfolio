import React from "react";

const NavItems = ({ navItems }) => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex items-center gap-5 text-gray-400 font-medium text-sm">

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="group relative overflow-hidden px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md"
        >
          {item.name}

          <span className="absolute left-2 right-2 bottom-1 h-0.5 scale-x-0 bg-cyan-400 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
      ))}

    </div>
  );
};

export default NavItems;