import React, { useState } from "react";

import {
  skillNavItems,
  skillsData,
} from "../../componets/Section3Components/SkillsData";

import SkillNavbar from "../../componets/Section3Components/SkillNavbar";
import SkillCard from "../../componets/Section3Components/SkillCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming_languages");

  const currentCategory = skillsData[activeCategory];

  return (
    <section className="w-full py-20">

      {/* Badge */}
      <div className="flex justify-center">
        <div className="flex items-center gap-3 rounded-full border border-cyan-500/30 bg-[#09192a]/80 px-6 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.12)]">

          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 md:text-sm">
            Technical Skills
          </p>

        </div>
      </div>

      {/* Heading */}
      <div className="mt-8 text-center">

        <h2 className="text-4xl font-extrabold md:text-6xl">

          <span className="text-white">
            What I{" "}
          </span>

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
            Build With
          </span>

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 p-5">
          A collection of technologies, frameworks, and tools I use to build modern web, mobile, and AI-powered applications.
        </p>

      </div>

      {/* Skill Navbar */}
      <div className="mt-14">

        <SkillNavbar
          skillNavItems={skillNavItems}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

      </div>

      {/* Skill Cards */}
      <div className="mt-8 mb-8 m-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {currentCategory.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            theme={currentCategory.theme}
          />
        ))}

      </div>

    </section>
  );
};

export default Skills;