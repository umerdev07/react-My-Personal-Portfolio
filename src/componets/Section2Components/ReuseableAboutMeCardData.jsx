import React from "react";
import "remixicon/fonts/remixicon.css";
import ReuseableAboutmeCards from "./ReuseableAboutmeCards";

const cards = [
  {
    icon: <i className="ri-graduation-cap-fill text-cyan-400 text-2xl"></i>,
    title: "CS Undergraduate",
    subtitle: "Pursuing B.Sc. Computer Science with focus on software engineering and AI.",
    hoverBg: "hover:bg-[#0d1d32]/10",
    hoverBorder: "hover:border-[#0d1d32]",
    circleBorder: "border-[#0A182C]",
    circleBg: "bg-[#0d1d32]",
  },
  {
    icon: <i className="ri-bar-chart-box-fill text-purple-400 text-2xl"></i>,
    title: "Techlogix Internship",
    subtitle: "Frontend web development at one of Pakistan's leading IT & consulting companies.",
    hoverBg: "hover:bg-[#131832]/20",
    hoverBorder: "hover:border-[#131832]",
    circleBorder: "border-[#131832]",
    circleBg: "bg-[#131832]",
  },
  {
    icon: <i className="ri-space-ship-2-fill text-green-400 text-2xl"></i>,
    title: "Final Year Project",
    subtitle: "AI-Powered Real-Time Translation Platform — WebRTC + NLP + FastAPI.",
    hoverBg: "hover:bg-[#0d1f2b]/20",
    hoverBorder: "hover:border-[#0d1f2b]",
    circleBorder: "border-[#0d1f2b]",
    circleBg: "bg-[#0d1f2b]",
  },
  {
    icon: <i className="ri-flutter-fill text-orange-400 text-2xl"></i>,
    title: "Flutter Development",
    subtitle: "Cross-platform mobile apps with clean architecture, BLoC/Provider, and smooth UX.",
    hoverBg: "hover:bg-[#1a1c22]/20",
    hoverBorder: "hover:border-[#1a1c22]",
    circleBorder: "border-[#1a1c22]",
    circleBg: "bg-[#1a1c22]",
  },
  {
    icon: <i className="ri-reactjs-line text-pink-400 text-2xl"></i>,
    title: "React Development",
    subtitle: "Modern web applications with React, TypeScript, Next.js, and performance-first code.",
    hoverBg: "hover:bg-[#19152b]/20",
    hoverBorder: "hover:border-[#19152b]",
    circleBorder: "border-[#19152b]",
    circleBg: "bg-[#19152b]",
  },
    {
    icon: <i className="ri-robot-3-fill text-blue-900 text-2xl"></i>,
    title: "AI Research",
    subtitle: "Exploring NLP, computer vision, RAG pipelines, and AI-powered app development.   ",
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