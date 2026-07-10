import React from "react";

const SkillCategoryCard = ({
  icon,
  title,
  borderColor,
  bgColor,
  iconColor,
}) => {
  return (

    <div
      className="
        group
        flex
        flex-col
        items-center
        cursor-pointer
        transition-transform
        duration-300
        hover:-translate-y-2
      "
    >
      <div
        className={`
          w-14 h-14
          sm:w-16 sm:h-16
          md:w-20 md:h-20

          rounded-2xl md:rounded-3xl

          border
          flex items-center justify-center

          transition-all
          duration-300

          group-hover:scale-110

          ${borderColor}
          ${bgColor}
        `}
      >
        <i
          className={`
            ${icon}
            ${iconColor}
            text-2xl
            sm:text-3xl
            md:text-4xl

            transition-transform
            duration-300
          `}
        />
      </div>

      <h3
        className="
          mt-3
          text-center
          text-[11px]
          sm:text-sm
          md:text-lg
          font-semibold
          text-gray-300
        "
      >
        {title}
      </h3>
    </div>
  );
};

export default SkillCategoryCard;