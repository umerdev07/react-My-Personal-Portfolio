import React, { useState, useEffect } from "react";
import profilePic from "../../../assets/profile_pic.jpeg";

const Logo = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrolled);

    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`flex items-center gap-3 transition-transform duration-300 hover:scale-[1.01] ${
        scroll ? "opacity-90" : "opacity-100"
      }`}
    >
      <div className="w-10 h-10">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <h1 className="text-white/80 font-semibold text-lg hover:text-white transition-colors duration-300">
        Umer Yousaf
      </h1>
    </a>
  );
};

export default Logo;