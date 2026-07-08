import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress((window.scrollY / totalHeight) * 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999]">
      <motion.div
        className="h-full rounded-r-full bg-gradient-to-r from-violet-400 via-sky-500 to-violet-900 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default ScrollProgress;