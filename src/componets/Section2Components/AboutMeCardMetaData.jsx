import React from "react";

const AboutMeCardMetaData = () => {
  return (
    <div className="bg-[#0B1220]   border
        border-gray-700
        transition-all
        duration-300
        hover:border-cyan-500
        hover:-translate-y-0.5
        rounded-3xl p-6
        hover:shadow-[0_0_10px_rgba(34,211,238,0.25)]">

      {/* Profile */}
      <div className="flex items-center gap-4">

        <img
          src="/src/assets/profile_pic.jpeg"
          alt="Profile"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover flex-shrink-0"
        />

        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Muhammad Umer Yousaf
          </h2>

          <h3 className="mt-1 text-sm sm:text-base font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            CS Graduate • React • Flutter • AI
          </h3>

          <p className="mt-2 flex items-center gap-2 text-[#94a3b8] text-sm">
            <i className="ri-map-pin-line text-cyan-400"></i>
            Lahore, Pakistan
          </p>
        </div>

      </div>

      {/* Description */}

      <div className="mt-6">
        <p className="text-[#94a3b8] leading-7 text-sm sm:text-base">

          I'm a Computer Science graduate with a passion for building digital
          products that solve real-world problems. From crafting modern React
          interfaces to developing cross-platform Flutter applications and
          exploring Artificial Intelligence, I enjoy working where design meets
          engineering.

          <br />
          <br />

          My Final Year Project is an AI-powered real-time translation platform
          that combines NLP, WebRTC, and modern web technologies to break
          language barriers during live video communication.

        </p>
      </div>

    </div>
  );
};

export default AboutMeCardMetaData;