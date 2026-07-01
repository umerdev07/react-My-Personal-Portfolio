import React from "react";

const HeroState = () => {
  const stats = [
    { number: "4", label: "Internships" },
    { number: "10+", label: "Projects" },
    { number: "2", label: "Certificates" },
  ];

  return (
    <div className="flex items-center w-fit lg:gap-4 md:gap-2">
      {stats.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex-1 text-center px-2">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {item.number}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-400 font-medium">
              {item.label}
            </p>
          </div>
          {index !== stats.length - 1 && (
            <div className="h-8 w-px bg-gray-700 shrink-0"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeroState;