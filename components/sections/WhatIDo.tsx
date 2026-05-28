"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { primary, primaryRgb, background, foreground, muted, borderColor, subtle } from "@/lib/theme";

const pillars = [
  {
    icon: "⬡",
    label: "Fullstack Development",
    desc: "End-to-end web apps from database schema to pixel-perfect UI.",
  },
  {
    icon: "◈",
    label: "AI Integration",
    desc: "LLM-powered features, RAG pipelines, and AI chat widgets.",
  },
  {
    icon: "◉",
    label: "System Design",
    desc: "Scalable architecture, REST APIs, and enterprise backends.",
  },
  {
    icon: "◻",
    label: "UI / UX",
    desc: "Clean, responsive interfaces designed in Figma and built in code.",
  },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function WhatIDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0.45, 1], ["0deg", "-22deg"]);
  const scale = useTransform(scrollYProgress, [0.45, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.82, 0.98], [1, 0]);

  return (
    <div ref={containerRef} style={{ height: "260vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <motion.section
          style={{
            rotateX,
            scale,
            opacity,
            transformPerspective: 1400,
            transformOrigin: "top center",
            height: "100%",
            backgroundColor: background,
            borderTop: `1px solid ${borderColor}`,
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "44px 64px 40px",
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            {/* Label */}
            <motion.p
              {...fadeIn(0)}
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: primary,
                marginBottom: "0",
              }}
            >
              What I Do
            </motion.p>

            {/* Two-column layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                flex: 1,
                alignItems: "center",
              }}
            >
              {/* Left: heading + description */}
              <div>
                <motion.h2
                  {...fadeIn(0.08)}
                  style={{
                    fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)",
                    fontWeight: 900,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: foreground,
                    marginBottom: "20px",
                  }}
                >
                  I build both the product{" "}
                  <span style={{ color: muted }}>and the experience.</span>
                </motion.h2>
                <motion.p
                  {...fadeIn(0.16)}
                  style={{
                    color: muted,
                    fontSize: "15px",
                    lineHeight: 1.7,
                    maxWidth: "380px",
                  }}
                >
                  From backend architecture to pixel-perfect frontends — I handle
                  the full cycle. Currently focused on AI integrations and
                  enterprise-grade dashboards.
                </motion.p>
              </div>

              {/* Right: 2x2 service cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {pillars.map((p, i) => (
                  <motion.div
                    key={i}
                    {...fadeIn(0.2 + i * 0.08)}
                    whileHover={{ y: -4 }}
                    style={{
                      padding: "22px",
                      borderRadius: "16px",
                      border: `1px solid ${borderColor}`,
                      backgroundColor: subtle,
                      cursor: "default",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={e =>
                      ((e.currentTarget as HTMLElement).style.borderColor = `rgba(${primaryRgb},0.4)`)
                    }
                    onMouseLeave={e =>
                      ((e.currentTarget as HTMLElement).style.borderColor = borderColor)
                    }
                  >
                    <span
                      style={{
                        color: primary,
                        fontSize: "20px",
                        display: "block",
                        marginBottom: "14px",
                      }}
                    >
                      {p.icon}
                    </span>
                    <h3
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: foreground,
                        marginBottom: "8px",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.label}
                    </h3>
                    <p style={{ fontSize: "12px", color: muted, lineHeight: 1.6 }}>
                      {p.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
