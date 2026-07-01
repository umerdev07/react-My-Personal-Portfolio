import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, theme, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={`
          group
          bg-[#09192a]
          border
          border-gray-700
          rounded-2xl
          p-5
          transition-all
          duration-300
          hover:-translate-y-1
          ${theme.cardBorder}
          ${theme.cardShadow}
        `}
    >
      <div className="flex items-center gap-4">

        {/* Circle */}
        <div
          className={`
              w-12
              h-12
              rounded-full
              flex
              items-center
              justify-center
              font-bold
              text-sm
              border
              transition-all
              duration-300
              ${theme.circle}
            `}
        >
          {skill.short}
        </div>

        {/* Skill Info */}
        <div>
          <h3 className="text-white text-lg font-semibold">
            {skill.name}
          </h3>

        </div>

      </div>
    </motion.div>
  );
};

export default SkillCard;