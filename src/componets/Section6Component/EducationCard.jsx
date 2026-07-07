import React from "react";
import Skills from "../Section4Components/Skills";

const EducationCard = () => {
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6">

          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#172033] border border-cyan-400/20 flex items-center justify-center">
              <img
                src='src\assets\educationHat.png'
                alt="Education"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">

            {/* Desktop */}
            <div className="hidden md:flex justify-between items-start gap-6">
              <div>
                <h2 className="text-3xl text-start font-bold text-white">
                  Bachelor of Science in Computer Science
                </h2>

                <h3 className="mt-2 text-start text-xl font-semibold text-cyan-400">
                  University of Engineering and Technology, Lahore
                </h3>
              </div>

              <div className="flex flex-col gap-3 items-end">
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 whitespace-nowrap">
                  2021–2025
                </span>

                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 whitespace-nowrap">
                  Expected Jun 2025
                </span>
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <h2 className="text-3xl text-start font-bold text-white leading-tight">
                Bachelor of Science in Computer Science
              </h2>

              <h3 className="mt-2 text-lg text-start font-semibold text-cyan-400 leading-snug">
                University of Engineering and Technology, Lahore
              </h3>

              <div className="mt-4 flex flex-col gap-2">
                <span className="w-fit text-start rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs font-semibold text-cyan-400">
                  2021–2025
                </span>

                <span className="w-fit text-start rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1 text-xs font-semibold text-green-400">
                  Expected Jun 2025
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-start text-gray-400 text-base sm:text-lg leading-8">
              Comprehensive study of computer science fundamentals including
              data structures, algorithms, software engineering, databases,
              operating systems, and artificial intelligence. Active
              participant in university tech societies and national hackathons.
            </p>

            {/* Skills */}
            <div className="mt-6">
              <Skills
                skills={[
                  "Data Structures",
                  "Algorithms",
                  "Software Engineering",
                  "AI / ML",
                  "Databases",
                  "Computer Networks",
                  "OS",
                ]}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;