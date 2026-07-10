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
  blue: {
    border: "border-blue-500/40",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.35)]",
  },
  orange: {
    border: "border-orange-500/40",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.35)]",
  },
  red: {
    border: "border-red-500/40",
    bg: "bg-red-500/10",
    text: "text-red-400",
    glow: "shadow-[0_0_20px_rgba(239,68,68,0.35)]",
  },
  teal: {
    border: "border-teal-500/40",
    bg: "bg-teal-500/10",
    text: "text-teal-400",
    glow: "shadow-[0_0_20px_rgba(20,184,166,0.35)]",
  },
  indigo: {
    border: "border-indigo-500/40",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    glow: "shadow-[0_0_20px_rgba(99,102,241,0.35)]",
  },
  lime: {
    border: "border-lime-500/40",
    bg: "bg-lime-500/10",
    text: "text-lime-400",
    glow: "shadow-[0_0_20px_rgba(132,204,22,0.35)]",
  },
  rose: {
    border: "border-rose-500/40",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    glow: "shadow-[0_0_20px_rgba(244,63,94,0.35)]",
  },
  sky: {
    border: "border-sky-500/40",
    bg: "bg-sky-500/10",
    text: "text-sky-400",
    glow: "shadow-[0_0_20px_rgba(14,165,233,0.35)]",
  },
  amber: {
    border: "border-amber-500/40",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.35)]",
  },
  // duplicate "blue" key removed — it was silently overwriting the real
  // blue definition above with amber's glow color
};

const TechBadge = ({ icon, name, color }) => {
  const c = colors[color] || colors.blue; // fallback so an unknown color never crashes

  return (
    <div
      title={name}
      className={`
        flex items-center justify-center gap-0 sm:gap-2
        w-9 h-9 sm:w-auto sm:h-auto
        px-0 sm:px-3 py-0 sm:py-1.5
        rounded-full border backdrop-blur-xl
        transition-all duration-300
        hover:scale-110
        ${c.border} ${c.bg} ${c.glow}
      `}
    >
      <span className="text-base sm:text-sm leading-none">{icon}</span>
      <span
        className={`
          hidden sm:inline
          ${c.text} font-semibold text-xs whitespace-nowrap
        `}
      >
        {name}
      </span>
    </div>
  );
};

export default TechBadge;