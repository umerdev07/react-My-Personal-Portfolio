import React from "react";

const ReusableSocialCards = ({
  icon,
  socialName,
  onClick,
  width = "w-full",
  height = "h-20",
  rounded = "rounded-[28px]",
  iconOnly = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${width}
        ${height}
        ${rounded}
        bg-[#151d33]
        border border-white/10
        flex items-center
        ${iconOnly ? "justify-center" : "justify-start gap-5 px-7"}
        transition-all duration-300
        hover:border-cyan-400
        hover:bg-[#1b2642]
        hover:-translate-y-1
      `}
    >
      <div className="text-cyan-400 text-2xl">
        {icon}
      </div>

      {!iconOnly && (
        <p className="text-[16px] font-semibold text-gray-300">
          {socialName}
        </p>
      )}
    </button>
  );
};

export default ReusableSocialCards;