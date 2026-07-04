import React from "react";

const colorThemes = {
  cyan: {
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },

  violet: {
    border: "border-violet-500/20",
    text: "text-violet-400",
    bg: "bg-violet-500/10",
  },

  emerald: {
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },

  orange: {
    border: "border-orange-500/20",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
  },
};

const Skills = ({ skills = [], color = "cyan", className = "" }) => {
  const theme = colorThemes[color];

  return (
    <div className={`mt-5 flex flex-wrap gap-2 ${className}`}>
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`
            rounded-full
            border
            ${theme.border}
            ${theme.bg}
            px-3
            py-1
            text-[11px]
            sm:text-xs
            ${theme.text}
          `}
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;