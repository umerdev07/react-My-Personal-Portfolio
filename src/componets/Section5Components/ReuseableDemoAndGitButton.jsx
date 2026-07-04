import React from "react";
import "remixicon/fonts/remixicon.css";


const ReuseableDemoAndGitButton = ({
  btnText,
  btnIcon,
  textHoverColor,
  roundedBtn,
  bgColor,
  height,
  width,
  border,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${roundedBtn}
        ${bgColor}
        ${height}
        ${textHoverColor}
        ${border}
        ${width}
        px-4
        border
        border-cyan-500/20
        text-white
        text-sm
        font-semibold
        transition-all
        duration-300
        flex
        items-center
        justify-center
        gap-2
      `}
    >
      {btnIcon && <i className={btnIcon}></i>}
      <span>{btnText}</span>
    </button>
  );
};

export default ReuseableDemoAndGitButton;