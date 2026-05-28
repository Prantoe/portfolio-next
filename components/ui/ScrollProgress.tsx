"use client";

import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        scaleX: scrollYProgress,
        transformOrigin: "left",
        backgroundColor: "#D4AF37",
        mixBlendMode: "difference",
        zIndex: 100,
      }}
    />
  );
}
