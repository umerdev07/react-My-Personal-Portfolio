import React, { useEffect, useRef } from "react";
import TechBadge from "./TechBadge";
import orbitData from "./OrbitData";

const RING_RADII = {
  inner: 0.225,
  middle: 0.35,
  outer: 0.50,
};

const HeroOrbit = () => {
  const containerRef = useRef(null);
  const elapsedRef = useRef({ inner: 0, middle: 0, outer: 0 });
  const lastTimeRef = useRef(null);

  // Pre-compute each badge's fixed starting angle within its ring
  const baseAngles = orbitData.map((tech) =>
    (2 * Math.PI * tech.ringIdx) / tech.ringTotal
  );

  useEffect(() => {
    let animationId;

    const animate = (ts) => {
      const container = containerRef.current;
      if (!container) return;

      if (!lastTimeRef.current) lastTimeRef.current = ts;
      const dt = (ts - lastTimeRef.current) / 1000;
      lastTimeRef.current = ts;

      // Each ring has one shared speed — all badges on the same ring move together
      const speeds = {};
      orbitData.forEach((tech) => {
        speeds[tech.ring] = tech.speed;
      });

      Object.keys(speeds).forEach((ring) => {
        elapsedRef.current[ring] += dt * speeds[ring];
      });

      const size = container.offsetWidth;

      const items = container.querySelectorAll(".orbit-item");
      items.forEach((el, index) => {
        const tech = orbitData[index];
        const radius = size * RING_RADII[tech.ring];
        const angle =
          2 * Math.PI * elapsedRef.current[tech.ring] + baseAngles[index];

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative mx-auto flex items-center justify-center
        w-[280px] h-[280px]
        sm:w-[380px] sm:h-[380px]
        md:w-[500px] md:h-[500px]
        lg:w-[650px] lg:h-[650px]
      "
    >
      {/* Rings */}
      <div className="absolute w-full h-full rounded-full border border-cyan-500/20" />
      <div className="absolute w-[70%] h-[70%] rounded-full border border-blue-500/20" />
      <div className="absolute w-[45%] h-[45%] rounded-full border border-blue-400/10" />

      {/* Glow */}
      <div className="absolute w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Center */}
      <div className="relative flex items-center justify-center rounded-[28px] border border-white/10 bg-gradient-to-br from-[#27496d] to-[#2b2f68] shadow-[0_0_70px_rgba(59,130,246,.25)] w-20 h-20 sm:w-36   sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52">
        <h1 className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-3xl sm:text-5xl lg:text-6xl">
          UY
        </h1>
      </div>

      {/* Orbit Items */}
      {orbitData.map((tech) => (
        <div
          key={tech.id}
          className="orbit-item absolute left-1/2 top-1/2"
        >
          <TechBadge icon={tech.icon} name={tech.name} color={tech.color} />
        </div>
      ))}
    </div>
  );
};

export default HeroOrbit;