import { inertia } from 'framer-motion';
import React from 'react';
import { useState, useEffect } from 'react'
import HeroButton from "../../componets/Section1Components/leftContent/HeroButton";
import HeroState from '../../componets/Section1Components/leftContent/HeroState';
const LeftContent = () => {

    const texts = ["CS Graduate", "React Developer", "Flutter Developer", "AI Enthusiast"]
    const [index, setIndex] = useState(0)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true)
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length)
                setAnimate(false);
            }, 1000);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 bg-[#09192a] border border-blue-400 px-4 py-2 rounded-full w-fit">

                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_4px_rgba(34, 165, 197, 0.8)] animate-pulse">
                    <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_4px_rgba(34, 165, 197, 0.8)] animate-ping"></div>
                </div>

                <p className="text-xsm font-medium text-blue-500">
                    Open to opportunities
                </p>


            </div>
            {/* Name Title */}
            <div className='mt-10'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl text-white font-extrabold'>Muhammad <br /> <span>Umer</span> <br /><span className='bg-gradient-to-r font-poppins from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text'>Yousaf</span></h1>
            </div>
            <br />
            <div className="flex items-center gap-4 overflow-hidden min-h-10">
                <div className="w-5 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>

                <h1
                    className={`text-lg font-bold text-blue-500/100 transition-all duration-700 ease-in-out ${animate
                        ? "-translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
                        }`}
                >
                    {texts[index]}
                </h1>
            </div>

            <div className="mt-5">
                <p className="mt-5 max-w-xl text-[#7e8ca0] font-medium leading-8 px-4 md:px-0">
                    Passionate CS undergraduate building scalable web, mobile, and AI-powered applications.
                    Turning complex engineering challenges into elegant digital experiences.
                </p>            </div>

            <div className='mt-10 mb-10'>
                <HeroButton />
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <hr className="border-gray-700 mb-6" />
                <HeroState />
            </div>
        </div>
    );
};

export default LeftContent;