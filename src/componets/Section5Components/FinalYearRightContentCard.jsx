import React from "react";

const FinalYearRightContentCard = () => {
  return (
    <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0B1220] overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex gap-5 items-center justify-between px-4 py-3 border-b border-white/10 bg-[#111827]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <div className="rounded-md text-start w-full bg-[#1F2937] px-4 py-1 text-[11px] text-gray-400">
          translate.app / live
        </div>

        <div className="w-10" />
      </div>

      {/* Code */}
      <div className="font-mono text-start text-[13px] leading-7 p-6">
        <div>
          <span className="text-gray-400"> useTranslation </span>
          <span className="text-violet-400">from</span>
          <span className="text-emerald-400"> "./nlp"</span>
        </div>

        <div>
          <span className="text-violet-400">const</span>
          <span className="text-gray-300"> stream = </span>
          <span className="text-violet-400">await</span>
          <span className="text-cyan-400"> webrtc.connect()</span>
        </div>

        <div>
          <span className="text-cyan-400">socket.emit</span>
          <span className="text-white">(</span>
          <span className="text-emerald-400">"translate"</span>
          <span className="text-white">,</span>
          <span className="text-gray-300"> lang:</span>
          <span className="text-amber-300"> "ar"</span>
          <span className="text-white">)</span>
        </div>

        <div>
          <span className="text-white">{"})"}</span>
        </div>

        <div className="mt-6 text-gray-500">
          // NLP pipeline initialized // WebRTC peers: 3 connected
        </div>
      </div>
    </div>
  );
};

export default FinalYearRightContentCard;