import React from "react";
import "remixicon/fonts/remixicon.css";

const SuccessMessage = () => {
  return (
    <div className="w-full h-[500px] rounded-3xl bg-[#10182c] border border-cyan-400/20 flex items-center justify-center">
      <div className="text-center">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto rounded-3xl bg-[#16323B] border border-cyan-400/20 flex items-center justify-center shadow-lg">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
            <i className="ri-check-line text-4xl text-white"></i>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-white text-4xl font-bold mt-8">
          Message Sent!
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-xl mt-4">
          I'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;