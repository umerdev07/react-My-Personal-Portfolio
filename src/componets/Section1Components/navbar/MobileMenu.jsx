import React from 'react'

const MobileMenu = (props) => {
    return (
        <div className="md:hidden px-10 pb-4 flex flex-col gap-3 text-gray-300">
            {props.navItems.map((item) => (
                <a
                    key={item}
                    href="#"
                    className="py-2 border-b border-gray-800"
                >
                    {item}
                </a>
            ))}

            <button className="group relative overflow-hidden border border-cyan-400 rounded-full px-5 py-2 text-cyan-300 text-sm hover:bg-white/10 hover:backdrop-blur-lg hover:scale-95 cursor-pointer transition-all duration-300">
                <i className="ri-download-2-line mr-1"></i>
                Resume
            </button>
        </div>)
}

export default MobileMenu