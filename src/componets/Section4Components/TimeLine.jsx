import React from "react";
import ExperienceCard from "./ExperienceCards";
import { experiences } from "../../pages/section4/ExperienceData";

const Timeline = () => {
  return (
    <div className="relative mt-20">

      {/* Desktop Vertical Line */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-cyan-400 rounded-full" />

      {experiences.map((experience, index) => {
        const isLeft = index % 2 === 0;

        const borderColor =
          experience.color === "cyan"
            ? "border-cyan-400"
            : experience.color === "violet"
              ? "border-violet-400"
              : experience.color === "emerald"
                ? "border-emerald-400"
                : "border-orange-400";

        const bgColor =
          experience.color === "cyan"
            ? "bg-cyan-400"
            : experience.color === "violet"
              ? "bg-violet-400"
              : experience.color === "emerald"
                ? "bg-emerald-400"
                : "bg-orange-400";

        return (
          <div key={experience.id} className="relative mb-20">

            {/* ========================= DESKTOP ========================= */}

            <div className="hidden lg:grid grid-cols-[1fr_80px_1fr] items-start">

              {/* LEFT */}
              <div className="flex justify-end">
                {isLeft && <ExperienceCard {...experience} />}
              </div>

              {/* CENTER */}
              <div className="relative flex justify-center">

                {/* connector */}
                {isLeft ? (
                  <div className="absolute right-10 top-10 h-[2px] w-10 bg-gray-700" />
                ) : (
                  <div className="absolute left-10 top-10 h-[2px] w-10 bg-gray-700" />
                )}

                {/* glow */}
                <div
                  className={`absolute top-5 h-10 w-10 rounded-full blur-xl ${bgColor}/20`}
                />

                {/* dot */}
                <div
                  className={`relative mt-6 flex h-8 w-8 items-center justify-center rounded-full border-2 ${borderColor} bg-[#060B17]`}
                >
                  <div className={`h-3 w-3 rounded-full ${bgColor}`} />
                </div>

              </div>

              {/* RIGHT */}
              <div className="flex justify-start">
                {!isLeft && <ExperienceCard {...experience} />}
              </div>

            </div>

            {/* ================= MOBILE ================= */}

            <div className="flex lg:hidden gap-6">

              {/* Timeline */}
              <div className="relative flex w-8 shrink-0 justify-center">

                {/* Vertical line */}
                <div className="absolute top-0 bottom-0 w-[3px] rounded-full bg-cyan-400" />

                {/* Dot */}
                <div
                  className={`relative mt-8 flex h-8 w-8 items-center justify-center rounded-full border-2 ${borderColor} bg-[#060B17]`}
                >
                  <div className={`h-3 w-3 rounded-full ${bgColor}`} />
                </div>

                {/* Connector */}
                <div className="absolute left-7 top-12 h-[2px] w-8 bg-gray-700" />
              </div>

              {/* Card */}
              <div className="flex-1 pt-2">
                <ExperienceCard {...experience} />
              </div>

            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Timeline;