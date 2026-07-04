import React from "react";
import FinalYearLeftContentCard from "./FinalYearLeftContentCard";
import FinalYearRightContentCard from "./FinalYearRightContentCard";

const FinalYearProjects = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-20">
      <div
        className="
          mx-auto
          mt-10
          max-w-7xl
          rounded-3xl
          border
          border-white/10
          bg-[#0f172a]
          p-5
          sm:p-7
          lg:p-10
          flex
          flex-col
          lg:flex-row
          gap-8
          lg:gap-12
          items-start
        "
      >
        <div className="w-full lg:w-3/5">
          <FinalYearLeftContentCard />
        </div>

        <div className="w-full lg:w-2/5">
          <FinalYearRightContentCard />
        </div>
      </div>
    </div>
  );
};

export default FinalYearProjects;