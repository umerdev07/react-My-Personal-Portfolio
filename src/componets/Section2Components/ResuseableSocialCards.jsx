import React from "react";

const ReusableSocialCards = ({ icon, socialName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        flex
        items-center
        justify-center
        gap-3
        p-4
        rounded-2xl
        cursor-pointer
        border
        border-gray-700
        bg-[#0B1220]
        transition-all
        duration-300
        hover:border-cyan-500
        hover:bg-cyan-500/10
        hover:-translate-y-0.5
      "
    >
      <div className="text-cyan-400 text-xl">
        {icon}
      </div>

      <span className="text-sm sm:text-base font-semibold text-[#94a3b8]">
        {socialName}
      </span>
    </button>
  );
};

export default ReusableSocialCards;