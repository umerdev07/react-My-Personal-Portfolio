import React from "react";
import Experience from "./Experience";

const Section4 = () => {
  return (
    <section
      id="experience"
      className="relative py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6">
        <Experience />
      </div>
    </section>
  );
};

export default Section4;