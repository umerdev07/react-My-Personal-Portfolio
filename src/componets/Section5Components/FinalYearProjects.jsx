import React from "react";
import FinalYearLeftContentCard from "./FinalYearLeftContentCard";
import FinalYearRightContentCard from "./FinalYearRightContentCard";
import OthersProjectsCards from "./OthersProjectsCards";

const FinalYearProjects = () => {
  return (
    <div className="mt-10">

      {/* Featured Project */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-[#0F172A]
            p-6
            sm:p-8
            lg:p-10
            flex
            flex-col
            lg:flex-row
            gap-10
            items-center
          "
        >
          <div className="w-full lg:w-1/2">
            <FinalYearLeftContentCard />
          </div>

          <div className="w-full lg:w-1/2">
            <FinalYearRightContentCard />
          </div>
        </div>
      </div>

        <OthersProjectsCards />
      </div>
  );
};

export default FinalYearProjects;