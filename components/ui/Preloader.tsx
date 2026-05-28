"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { primary } from "@/lib/theme";
import LogoIcon from "@/components/ui/LogoIcon";

export default function Preloader() {
  const [phase, setPhase] = useState<"drawing" | "filling" | "done">("drawing");
  const isMobile = useIsMobile();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("filling"), 1900);
    const t2 = setTimeout(() => setPhase("done"), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#0c0e0c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Polygon + logo */}
          <div style={{ position: "relative", width: isMobile ? 180 : 280, height: isMobile ? 180 : 280 }}>
            <svg viewBox="0 0 200 200" width={isMobile ? 180 : 280} height={isMobile ? 180 : 280} style={{ position: "absolute", inset: 0 }}>
              <motion.path
                d="M 40 0 L 200 0 L 200 166 L 160 200 L 0 200 L 0 40 Z"
                stroke={primary}
                strokeWidth="2"
                style={{ fill: primary }}
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{
                  pathLength: 1,
                  fillOpacity: phase === "filling" ? 1 : 0,
                }}
                transition={{
                  pathLength: { duration: 1.6, ease: "easeInOut" },
                  fillOpacity: { duration: 0.4, ease: "easeIn" },
                }}
              />
            </svg>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "filling" ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LogoIcon
                color="#0c0e0c"
                size={isMobile ? 120 : 180}
              />
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            style={{ position: "absolute", bottom: 0, left: 0, height: "2px", backgroundColor: primary }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.7, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
