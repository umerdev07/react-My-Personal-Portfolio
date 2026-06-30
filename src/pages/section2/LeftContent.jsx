import React from "react";
import "remixicon/fonts/remixicon.css";
import CallingReuseableSocialCards from "../../componets/Section2Components/CallingReuseableSocialCards";
import AboutMeCardMetaData from "../../componets/Section2Components/AboutMeCardMetaData";

const LeftContent = () => {
  return (
    <div className="w-full lg:w-[45%] flex flex-col gap-6">
      <AboutMeCardMetaData />

      <CallingReuseableSocialCards />
    </div>
  );
};

export default LeftContent;