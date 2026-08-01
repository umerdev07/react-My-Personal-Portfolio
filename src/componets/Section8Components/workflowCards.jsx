import React from "react";
import {
  ClipboardList,
  Palette,
  Network,
  Plug,
  CheckCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description: "Gather goals, users, and constraints.",
    icon: ClipboardList,
    color: "cyan",
  },
  {
    number: "02",
    title: "Design Clean UI/UX",
    description: "Wireframes and intuitive interfaces.",
    icon: Palette,
    color: "sky",
  },
  {
    number: "03",
    title: "Build Scalable Architecture",
    description: "Modular, maintainable codebase.",
    icon: Network,
    color: "blue",
  },
  {
    number: "04",
    title: "Integrate APIs & Features",
    description: "Connect backend services and features.",
    icon: Plug,
    color: "purple",
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description: "Debug, refine, and improve performance.",
    icon: CheckCheck,
    color: "pink",
  },
  {
    number: "06",
    title: "Deliver Reliable Product",
    description: "Ship a polished, production-ready app.",
    icon: Rocket,
    color: "emerald",
  },
];

const colors = {
  cyan: {
    border: "hover:border-cyan-500/50",
    glow: "hover:shadow-[0_0_40px_rgba(34,211,238,.18)]",
    icon: "group-hover:text-cyan-500",
    line: "from-cyan-400 to-cyan-400",
  },
  sky: {
    border: "hover:border-sky-400/50",
    glow: "hover:shadow-[0_0_40px_rgba(56,189,248,.18)]",
    icon: "group-hover:text-sky-400",
    line: "from-sky-400 to-sky-500",
  },
  blue: {
    border: "hover:border-blue-400/50",
    glow: "hover:shadow-[0_0_40px_rgba(96,165,250,.18)]",
    icon: "group-hover:text-blue-400",
    line: "from-blue-400 to-blue-500",
  },
  purple: {
    border: "hover:border-purple-400/50",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,.18)]",
    icon: "group-hover:text-purple-400",
    line: "from-purple-400 to-purple-500",
  },
  pink: {
    border: "hover:border-pink-400/50",
    glow: "hover:shadow-[0_0_40px_rgba(236,72,153,.18)]",
    icon: "group-hover:text-pink-400",
    line: "from-pink-400 to-pink-500",
  },
  emerald: {
    border: "hover:border-emerald-400/50",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,.18)]",
    icon: "group-hover:text-emerald-400",
    line: "from-emerald-400 to-emerald-500",
  },
};

const WorkflowCards = () => {
  return (
    <section className="py-16 m-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {steps.map((step) => {
          const Icon = step.icon;
          const c = colors[step.color];

          return (
            <div
              key={step.number}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:min-h-[270px] ${c.border} ${c.glow}`}
            >
              {/* Top Glow */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.line} scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}
              />

              {/* Icon */}
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-700 bg-[#090B14] transition-all duration-500 group-hover:scale-110">
                  <Icon
                    className={`h-7 w-7 text-slate-300 transition-all duration-500 ${c.icon}`}
                  />
                </div>
              </div>

              {/* Number */}
              <div className="mt-5 text-center transition-all duration-500 group-hover:-translate-y-1">
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-lg font-bold tracking-[0.3em] text-transparent">
                  {step.number}
                </span>
              </div>

              {/* Hidden Content */}
              <div
                className="
mt-5
max-h-40
opacity-100
translate-y-0

md:mt-0
md:max-h-0
md:opacity-0
md:translate-y-4

overflow-hidden
transition-all
duration-500

md:group-hover:mt-5
md:group-hover:max-h-40
md:group-hover:opacity-100
md:group-hover:translate-y-0
"
              >
                <h3 className="text-center text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-center text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkflowCards;
