import React from "react";

const HeroState = () => {
  const stats = [
    {
      number: "4+",
      label: "Internships",
    },
    {
      number: "5+",
      label: "Projects",
    },
    {
      number: "6+",
      label: "Certificates",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full mt-8">
      {stats.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex-1 text-center px-2 sm:px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {item.number}
            </h2>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-400 font-medium">
              {item.label}
            </p>
          </div>

          {index !== stats.length - 1 && (
            <div className="h-8 sm:h-10 md:h-12 w-px bg-gray-700"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeroState;