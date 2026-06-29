import React from 'react'

const NavItems = (props) => {
  return (
    <div className="hidden md:flex items-center gap-5 text-gray-400 font-medium text-sm">
          {props.navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="group relative overflow-hidden px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md"
            >
              {item}
              <span className="absolute left-2 right-2 bottom-1 h-0.5 scale-x-0 bg-cyan-400 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
  )
}

export default NavItems