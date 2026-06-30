import React from "react";
import AboutMeTitleSubTitleBadge from "../../componets/Section2Components/AboutMeTitleSubTitleBadge";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const AboutMe = () => {
  return (
    <div className="max-w-7xl mt-100 mx-auto">
      <AboutMeTitleSubTitleBadge />

      <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};

export default AboutMe;