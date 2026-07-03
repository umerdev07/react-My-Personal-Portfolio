import React from "react";
import { motion } from "framer-motion";
import { Hammer, Wrench, ArrowLeft } from "lucide-react";

const UnderConstruction = () => {
  return (
    <section className="min-h-screen bg-[#07111f] text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/10 blur-[140px] rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full"
      >
        <div className="bg-[#09192a] border border-cyan-500/20 rounded-3xl p-10 text-center shadow-[0_0_50px_rgba(34,211,238,0.08)]">
          {/* Icon */}
          <motion.div
            animate={{ rotate: [-8, 8, -8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
          >
            <Hammer className="w-10 h-10 text-cyan-400" />
          </motion.div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-6">
            <Wrench size={16} />
            Website Update
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Under <span className="text-cyan-400">Construction</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 leading-8 max-w-xl mx-auto">
            I'm currently improving this section of my portfolio with new
            features, animations, and content to provide a better experience.
            Please check back soon.
          </p>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-cyan-400 mx-auto my-8 rounded-full" />

          {/* Status */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-cyan-500/20 bg-[#07111f]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
              </span>

              <span className="text-gray-300">
                Working on something awesome...
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => window.history.back()}
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default UnderConstruction;