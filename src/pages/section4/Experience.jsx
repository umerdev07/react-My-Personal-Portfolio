import React from "react";
import Timeline from "../../componets/Section4Components/TimeLine";

const Experience = () => {
  return (
    <div className="mt-80 lg:mt-5">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.12)]">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 md:text-sm">
            Experience
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-extrabold md:text-6xl">
          <span className="text-white">
            My Professional{" "}
          </span>

          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Internships and training that shaped my engineering philosophy.
        </p>
      </div>

      {/* Timeline */}
      <Timeline />
    </div>
  );
};

export default Experience;