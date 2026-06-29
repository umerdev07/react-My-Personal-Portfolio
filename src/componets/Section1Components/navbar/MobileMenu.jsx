import React from 'react';

const MobileMenu = ({ navItems, setMenuOpen }) => {
  return (
    <div className="px-6 pb-6 flex flex-col gap-3 text-gray-300">

      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          onClick={() => setMenuOpen(false)}
          className="py-3 border-b border-gray-800 hover:text-cyan-400 transition"
        >
          {item}
        </a>
      ))}

      {/* Resume Button */}
      <button className="mt-4 group relative overflow-hidden border border-cyan-400 rounded-full px-5 py-2 text-cyan-300 text-sm hover:bg-white/10 transition-all duration-300">
        <i className="ri-download-2-line mr-1"></i>
        Resume
      </button>
    </div>
  );
};

export default MobileMenu;