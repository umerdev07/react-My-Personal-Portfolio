import React from "react";

const colors = {
  cyan: {
    border: "border-cyan-500/40",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.35)]",
  },
  purple: {
    border: "border-purple-500/40",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.35)]",
  },
  green: {
    border: "border-green-500/40",
    bg: "bg-green-500/10",
    text: "text-green-400",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.35)]",
  },
  yellow: {
    border: "border-yellow-500/40",
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    glow: "shadow-[0_0_20px_rgba(250,204,21,0.35)]",
  },
  pink: {
    border: "border-pink-500/40",
    bg: "bg-pink-500/10",
    text: "text-pink-400",
    glow: "shadow-[0_0_20px_rgba(236,72,153,0.35)]",
  },
};

const TechBadge = ({ icon, name, color }) => {
  const c = colors[color];

  return (
    <div
      className={`
        flex items-center gap-2 px-3 py-1.5
        rounded-full border backdrop-blur-xl
        transition-all duration-300
        hover:scale-110
        ${c.border} ${c.bg} ${c.glow}
      `}
    >
      <span>{icon}</span>
      <span className={`${c.text} font-semibold text-xs whitespace-nowrap`}>
        {name}
      </span>
    </div>
  );
};

export default TechBadge;