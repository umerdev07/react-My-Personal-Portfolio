import React from "react";

const colorThemes = {
  cyan: {
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    hover: "hover:border-cyan-400/40",
  },

  violet: {
    border: "border-violet-500/20",
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    hover: "hover:border-violet-400/40",
  },

  emerald: {
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    hover: "hover:border-emerald-400/40",
  },

  orange: {
    border: "border-orange-500/20",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    hover: "hover:border-orange-400/40",
  },
};

const ExperienceCard = ({
  type,
  duration,
  title,
  company,
  description,
  skills = [],
  color = "cyan",
}) => {
  const theme = colorThemes[color];

  return (
    <div
      className={`
        group
        w-full
        max-w-md
        rounded-2xl lg:rounded-3xl
        border
        ${theme.border}
        ${theme.hover}
        bg-[#0B1220]
        p-4 sm:p-5 lg:p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={`
            rounded-full
            border
            ${theme.border}
            ${theme.bg}
            px-3 py-1
            text-[10px] sm:text-xs
            font-semibold
            tracking-wider
            ${theme.text}
          `}
        >
          {type}
        </span>

        <span className="rounded-full border border-[#22324A] bg-[#111827] px-3 py-1 text-[10px] sm:text-xs lg:text-sm text-gray-300 whitespace-nowrap">
          {duration}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
        {title}
      </h3>

      {/* Company */}
      <p className={`mt-2 text-base lg:text-lg font-semibold ${theme.text}`}>
        {company}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm lg:text-base leading-7 text-gray-400">
        {description}
      </p>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`
              rounded-full
              border
              ${theme.border}
              ${theme.bg}
              px-3 py-1
              text-[11px] sm:text-xs
              ${theme.text}
            `}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;