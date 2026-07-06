import React from "react";
import Skills from "../Section4Components/Skills";
import ReuseableDemoAndGitButton from "./ReuseableDemoAndGitButton";

const ReuseableProjectsCards = ({
  projectIconImg,
  projectTitle,
  projectDescription,
  projectSkills = [],
  skillsColor = "cyan",

  iconBgColor = "bg-cyan-500/10",
  borderColor = "border-cyan-500/20",
  cardBorderColor = "border-white/10",

  demoLink,
  githubLink,
}) => {
  return (
    <div
      className={`
        group
        h-fit
        rounded-3xl
        border
        ${cardBorderColor}
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
          ${iconBgColor}
          border
          ${borderColor}
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

      {/* Description */}
      <p className="mt-4 text-start text-sm leading-7 text-gray-400">
        {projectDescription}
      </p>

      {/* Skills */}
      <Skills
        skills={projectSkills}
        color={skillsColor}
        className="mt-5"
      />

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">

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