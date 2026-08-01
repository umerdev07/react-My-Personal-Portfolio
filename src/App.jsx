import React, { useState } from "react";
import Section1 from "./pages/section1/Section1";
import Section2 from "./pages/section2/Section2";
import Section3 from "./pages/section3/Section3";
import Navbar from "./componets/Section1Components/navbar/Navbar";
import Section4 from "./pages/section4/Section4";
import Section5 from "./pages/section5/Section5";
import Section6 from "./pages/section6/Section6";
import Section7 from "./pages/section7/Section7";
import Section8 from "./pages/section8/Section8";
import ScrollProgress from "./pages/ScrollProgress";
import Footer from "./pages/Footer";

const App = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative min-h-screen bg-[#07091a]"
      onMouseMove={(e) =>
        setMouse({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(350px circle at ${mouse.x}px ${mouse.y}px,
          rgba(34,211,238,0.1),
          transparent 40%)`,
        }}
      />

      {/* Website Content */}
      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />

        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section8 />
        <Section5 />
        <Section6 />
        <Section7 />

        <Footer />
      </div>
    </div>
  );
};

export default App;