import React from "react";

const SkillNavbarButton = ({
  item,
  activeCategory,
  setActiveCategory,
  theme,
}) => {
  const isActive = activeCategory === item.id;

  return (
    <button
      onClick={() => setActiveCategory(item.id)}
      className={`
        group
        flex
        items-center
        gap-3
        px-6
        mt-2
        py-3
        rounded-full
        border
        transition-all
        duration-300
        backdrop-blur-md
        hover:-translate-y-1
        ${
          isActive
            ? `${theme.button} shadow-lg`
            : "bg-[#09192a] border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-[#0d1d32] hover:text-white"
        }
      `}
    >
      {/* Icon */}
      <i className={`${item.icon} text-lg`}></i>

      {/* Text */}
      <span className="font-medium text-sm md:text-base">
        {item.name}
      </span>
    </button>
  );
};

export default SkillNavbarButton;