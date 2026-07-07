import React from "react";

const ReuseableAboutmeCards = ({
  icon,
  iconType = "element",
  title,
  subtitle,
  description,
  circleBg,
  hoverBg,
  hoverBorder,
  circleBorder,
}) => {
  return (
    <div
      className={`
        group
        ${hoverBg || ""}
        ${hoverBorder || ""}
        mb-4
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-gray-700
        bg-[#0B1220]
        p-4
        sm:p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      `}
    >

      {/* Icon */}
      <div
        className={`
          ${circleBg || ""}
          ${circleBorder || ""}
          flex
          h-12
          w-12
          sm:h-14
          sm:w-14
          flex-shrink-0
          items-center
          justify-center
          rounded-full
          border
        `}
      >
        {iconType === "image" ? (
          <img
            src={icon}
            alt={title}
            className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
          />
        ) : (
          icon
        )}
      </div>


      {/* Content */}
      <div className="flex-1 text-left">

        <h2 className="text-base sm:text-lg font-bold text-white">
          {title}
        </h2>

        <p className="mt-1 text-sm leading-6 text-[#94a3b8]">
          {subtitle}
        </p>

        {description && (
          <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-5">
            {description}
          </p>
        )}

      </div>

    </div>
  );
};

export default ReuseableAboutmeCards;