import React from "react";
import "remixicon/fonts/remixicon.css";
import ReuseableAboutmeCards from "./ReuseableAboutmeCards";

const cards = [
  {
    icon: <i className="ri-graduation-cap-fill text-cyan-400 text-2xl"></i>,
    title: "Computer Science Graduate",
    subtitle: "Strong foundation in software engineering, object-oriented programming, databases, and application development.",
    hoverBg: "hover:bg-[#0d1d32]/10",
    hoverBorder: "hover:border-[#0d1d32]",
    circleBorder: "border-[#0A182C]",
    circleBg: "bg-[#0d1d32]",
  },
  {
    icon: <i className="ri-bar-chart-box-fill text-purple-400 text-2xl"></i>,
    title: "Techlogix Internship",
    subtitle: "Contributed to enterprise-level digital banking solutions using Java, REST APIs, Oracle Database, and frontend/backend development.",
    hoverBg: "hover:bg-[#131832]/20",
    hoverBorder: "hover:border-[#131832]",
    circleBorder: "border-[#131832]",
    circleBg: "bg-[#131832]",
  },
  {
    icon: <i className="ri-space-ship-2-fill text-green-400 text-2xl"></i>,
    title: "Final Year Project",
    subtitle: "SpeakSync – A real-time bilingual video conferencing platform built with React, FastAPI, WebRTC, Socket.io, and Hugging Face NLLB-200.",
    hoverBg: "hover:bg-[#0d1f2b]/20",
    hoverBorder: "hover:border-[#0d1f2b]",
    circleBorder: "border-[#0d1f2b]",
    circleBg: "bg-[#0d1f2b]",
  },
  {
    icon: <i className="ri-flutter-fill text-orange-400 text-2xl"></i>,
    title: "Flutter Development",
    subtitle: "Building cross-platform mobile applications using Flutter, Dart, Firebase, GetX, state management, and REST APIs with responsive and user-friendly interfaces.",
    hoverBg: "hover:bg-[#1a1c22]/20", 
    hoverBorder: "hover:border-[#1a1c22]",
    circleBorder: "border-[#1a1c22]",
    circleBg: "bg-[#1a1c22]",
  },
  {
    icon: <i className="ri-reactjs-line text-pink-400 text-2xl"></i>,
    title: "React Development",
    subtitle: "Building responsive web applications using React, JavaScript, Tailwind CSS, and reusable component-based architecture.",
    hoverBg: "hover:bg-[#19152b]/20",
    hoverBorder: "hover:border-[#19152b]",
    circleBorder: "border-[#19152b]",
    circleBg: "bg-[#19152b]",
  },
    {
    icon: <i className="ri-robot-3-fill text-blue-900 text-2xl"></i>,
    title: "AI Development",
    subtitle: "Building AI-powered applications using NLP, LLMs, RAG, and n8n automation. Developed projects including sentiment analysis, text summarization, AI agents, and real-time translation solutions.",
    hoverBg: "hover:bg-[#14182e]/20",
    hoverBorder: "hover:border-[#14182e]",
    circleBorder: "border-[#14182e]",
    circleBg: "bg-[#14182e]",
  },
];

const ReuseableAboutMeCardData = () => {
  return (
    <>
      {cards.map((card, index) => (
        <ReuseableAboutmeCards
          key={index}
          {...card}
        />
      ))}
    </>
  );
};

export default ReuseableAboutMeCardData;