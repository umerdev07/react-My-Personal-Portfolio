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

  pink: {
    border: "border-pink-500/20",
    text: "text-pink-400",
    bg: "bg-pink-500/10",
  },

  green: {
    border: "border-green-500/20",
    text: "text-green-400",
    bg: "bg-green-500/10",
  },

  blue: {
    border: "border-blue-500/20",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
  },
};

const Skills = ({
  skills = [],
  color = "cyan",
  className = "",
}) => {
  const theme = colorThemes[color] || colorThemes.cyan;

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
            ${theme.text}
            px-3
            py-1
            text-[11px]
            sm:text-xs
            font-medium
            whitespace-nowrap
          `}
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skills;