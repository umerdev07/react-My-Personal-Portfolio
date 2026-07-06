import React from "react";
import resume from "../../../assets/Muhammad_Umer_Yousaf_Software_Engineer.pdf";

const Resumebtn = ({ mobile = false }) => {
  return (
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden border border-cyan-400 rounded-full px-5 py-2 text-cyan-300 text-sm hover:bg-white/10 hover:backdrop-blur-lg hover:scale-95 cursor-pointer transition-all duration-300 ${
        mobile ? "flex justify-center mt-5" : "hidden md:flex"
      }`}
    >
      <i className="ri-file-text-line mr-2"></i>
      View Resume
    </a>
  );
};

export default Resumebtn;