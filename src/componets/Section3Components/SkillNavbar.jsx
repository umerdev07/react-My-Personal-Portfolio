import React from "react";
import SkillNavbarButton from "./SkillNavbarButton";
import { skillsData } from "./SkillsData";

const SkillNavbar = ({
  skillNavItems,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <nav className="flex pl-5 pr-5 gap-3 overflow-x-auto scrollbar-hide pb-2 md:flex-wrap md:justify-center">
      {skillNavItems.map((item) => (
        <SkillNavbarButton
          key={item.id}
          item={item}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          theme={skillsData[item.id].theme}
        />
      ))}
    </nav>
  );
};

export default SkillNavbar;