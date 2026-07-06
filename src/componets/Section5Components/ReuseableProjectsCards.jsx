  import React from "react";
  import Skills from "../Section4Components/Skills";
  import ReuseableDemoAndGitButton from "./ReuseableDemoAndGitButton";

  const themes = {
    emerald: {
      skillsColor: "emerald",
      iconBg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      hoverBorder: "hover:border-emerald-500/20",
    },

    orange: {
      skillsColor: "orange",
      iconBg: "bg-orange-500/10",
      border: "border-orange-500/20",
      hoverBorder: "hover:border-orange-500/20",
    },

    violet: {
      skillsColor: "violet",
      iconBg: "bg-violet-500/10",
      border: "border-violet-500/20",
      hoverBorder: "hover:border-violet-500/20",
    },

    cyan: {
      skillsColor: "cyan",
      iconBg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      hoverBorder: "hover:border-cyan-500/20",
    },

    pink: {
      skillsColor: "pink",
      iconBg: "bg-pink-500/10",
      border: "border-pink-500/20",
      hoverBorder: "hover:border-pink-500/20",
    },

    indigo: {
      skillsColor: "indigo",
      iconBg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      hoverBorder: "hover:border-indigo-500/20",
    },

    amber: {
      skillsColor: "amber",
      iconBg: "bg-amber-500/10",
      border: "border-amber-500/20",
      hoverBorder: "hover:border-amber-500/20",
    },

    rose: {
      skillsColor: "rose",
      iconBg: "bg-rose-500/10",
      border: "border-rose-500/20",
      hoverBorder: "hover:border-rose-500/20",
    },

    sky: {
      skillsColor: "sky",
      iconBg: "bg-sky-500/10",
      border: "border-sky-500/20",
      hoverBorder: "hover:border-sky-500/20",
    },
  };

  const ReuseableProjectsCards = ({
    projectIconImg,
    projectTitle,
    projectDescription,
    projectSkills = [],
    theme = "cyan",
    demoLink,
    githubLink,
  }) => {
    // Fallback to cyan if an invalid theme is passed
    const colors = themes[theme] || themes.cyan;

    return (
      <div
        className={`
          group
          h-full
          flex
          flex-col
          rounded-3xl
          border-2
          border-transparent
          ${colors.hoverBorder}
          bg-[#121324]
          p-6
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
        `}
      >
        {/* Icon */}
        <div
          className={`
            h-14
            w-14
            rounded-2xl
            ${colors.iconBg}
            border
            ${colors.border}
            flex
            items-center
            justify-center
          `}
        >
          <img
            src={projectIconImg}
            alt={projectTitle}
            className="h-8 w-8 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-start text-xl font-bold text-white">
          {projectTitle}
        </h3>

        {/* Description + Skills */}
        <div className="flex-1">
          <p className="mt-4 text-start text-sm leading-7 text-gray-400">
            {projectDescription}
          </p>

          <Skills
            skills={projectSkills}
            color={colors.skillsColor}
            className="mt-5"
          />
        </div>

        {/* Button */}
        <div className="mt-6">
          <ReuseableDemoAndGitButton
            btnText="Code"
            btnIcon="ri-github-fill"
            bgColor="bg-[#182032]"
            border="border border-white/10"
            roundedBtn="rounded-xl"
            height="h-10"
            textColor="text-gray-300"
            onClick={() => githubLink && window.open(githubLink, "_blank")}
          />
        </div>
      </div>
    );
  };

  export default ReuseableProjectsCards;