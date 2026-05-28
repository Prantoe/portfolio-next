"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { techStack } from "@/data/content";
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiNuxt, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiDjango, SiLaravel, SiPhp,
  SiPostgresql, SiMongodb, SiMysql, SiSupabase, SiDocker, SiElasticsearch,
} from "react-icons/si";
import { primary, primaryRgb, background, foreground, muted, borderColor, subtle } from "@/lib/theme";

const iconMap: Record<string, React.ElementType> = {
  SiReact, SiNextdotjs, SiVuedotjs, SiNuxtdotjs: SiNuxt, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiDjango, SiLaravel, SiPhp,
  SiPostgresql, SiMongodb, SiMysql, SiSupabase, SiDocker, SiElasticsearch,
};

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function TechStack() {
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
          id="skills"
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
            {/* Label + heading */}
            <motion.p
              {...fadeIn(0)}
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: primary,
                marginBottom: "12px",
              }}
            >
              Tech Stack
            </motion.p>
            <motion.h2
              {...fadeIn(0.08)}
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: foreground,
                marginBottom: "32px",
              }}
            >
              Tools I work with.
            </motion.h2>

            {/* 3-column category cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                flex: 1,
              }}
            >
              {techStack.map((group, gi) => (
                <motion.div
                  key={gi}
                  {...fadeIn(0.14 + gi * 0.1)}
                  style={{
                    padding: "24px",
                    borderRadius: "16px",
                    border: `1px solid ${borderColor}`,
                    backgroundColor: subtle,
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: primary,
                      fontWeight: 500,
                    }}
                  >
                    {group.category}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "8px",
                    }}
                  >
                    {group.items.map((item) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <div
                          key={item.name}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "6px",
                            padding: "10px 6px",
                            borderRadius: "10px",
                            border: `1px solid ${borderColor}`,
                            cursor: "default",
                            transition: "border-color 0.2s, background-color 0.2s",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = `rgba(${primaryRgb},0.4)`;
                            (e.currentTarget as HTMLElement).style.backgroundColor = `rgba(${primaryRgb},0.06)`;
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                          }}
                        >
                          {Icon ? (
                            <Icon size={20} style={{ color: muted, transition: "color 0.2s" }} />
                          ) : (
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "4px",
                                backgroundColor: borderColor,
                              }}
                            />
                          )}
                          <span
                            style={{
                              fontSize: "9px",
                              color: muted,
                              textAlign: "center",
                              lineHeight: 1.3,
                              transition: "color 0.2s",
                            }}
                          >
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
