import React from 'react';
import { useState, useEffect } from 'react';
import HeroButton from "../../componets/Section1Components/leftContent/HeroButton";
import HeroState from '../../componets/Section1Components/leftContent/HeroState';

const LeftContent = () => {
  const texts = [
    "Software Engineer",
    "React Developer",
    "Flutter Developer",
    "AI Enthusiast",
  ]; const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setAnimate(false);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-1/2 flex flex-col items-start text-left px-4 sm:px-6 lg:px-0 py-6">

      {/* Open to opportunities badge */}
      <div className="flex items-center gap-2 bg-[#09192a] border border-cyan-500/30 rounded-full px-4 py-2 w-fit">
        <div className="relative w-3 h-3">
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        </div>
        <p className="text-xs font-medium text-blue-500">Open to opportunities</p>
      </div>

      {/* Name */}
      <div className="mt-8">
        <h1 className="font-extrabold leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Muhammad <br />
          <span>Umer</span> <br />
          <span className="bg-gradient-to-r font-poppins from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Yousaf
          </span>
        </h1>
      </div>

      {/* Animated role */}
      <div className="flex items-center gap-4 overflow-hidden min-h-10 mt-4">
        <div className="w-5 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shrink-0"></div>
        <h2
          className={`text-lg font-bold text-blue-500 transition-all duration-700 ease-in-out ${animate ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
            }`}
        >
          {texts[index]}
        </h2>
      </div>

      {/* Description */}
      <p className="mt-5 max-w-xl text-[#7e8ca0] font-medium leading-8">
        Software Engineer passionate about building modern web,
        mobile, and AI-powered applications. Dedicated to creating
        clean, responsive, and high-performance digital experiences
        while solving real-world problems through technology.</p>
        {/* Buttons */}
        <div className="mt-8 mb-10 w-full">
          <HeroButton />
        </div>

        {/* Stats */}
        <div className="w-full border-t border-gray-700 pt-6">
          <HeroState />
        </div>

    </div>
  );
};

export default LeftContent;