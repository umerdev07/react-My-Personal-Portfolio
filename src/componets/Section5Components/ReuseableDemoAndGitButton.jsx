import React from "react";

const ReuseableDemoAndGitButton = ({
  btnText,
  btnIcon,
  textHoverColor = "hover:text-white",
  roundedBtn = "rounded-xl",
  height = "h-10",
  width = "w-fit",
  bgColor = "bg-[#182032]",
  border = "border border-white/10",
  textColor = "text-gray-300",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${roundedBtn}
        ${height}
        ${width}
        ${bgColor}
        ${border}
        ${textColor}
        ${textHoverColor}
        px-4
        text-sm
        font-semibold
        flex
        items-center
        justify-center
        gap-2
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-cyan-400/40
      `}
    >
      {btnIcon && <i className={`${btnIcon} text-base`}></i>}

      <span>{btnText}</span>
    </button>
  );
};

export default ReuseableDemoAndGitButton;