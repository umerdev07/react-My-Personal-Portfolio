import React from "react";

const Button = ({
  children,
  icon,
  variant = "primary",
  onClick,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-sky-500 to-purple-500 text-white hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]",

    secondary:
      "bg-[#111827] border border-gray-700 text-gray-300 hover:bg-[#1f2937] hover:text-white",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        px-7 py-4
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;