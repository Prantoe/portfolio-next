"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personal, experience, education, stats, techStack } from "@/data/content";
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiNuxt, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiDjango, SiLaravel, SiPhp,
  SiPostgresql, SiMongodb, SiMysql, SiSupabase, SiDocker, SiElasticsearch,
} from "react-icons/si";
import { useIsMobile } from "@/hooks/useIsMobile";

const iconMap: Record<string, React.ElementType> = {
  SiReact, SiNextdotjs, SiVuedotjs, SiNuxtdotjs: SiNuxt, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiDjango, SiLaravel, SiPhp,
  SiPostgresql, SiMongodb, SiMysql, SiSupabase, SiDocker, SiElasticsearch,
};

const pillars = [
  { icon: "⬡", label: "Fullstack Dev",  desc: "End-to-end web apps from DB schema to pixel-perfect UI." },
  { icon: "◉", label: "System Design",  desc: "Scalable architecture, REST APIs, enterprise backends." },
  { icon: "◻", label: "UI / UX",        desc: "Clean interfaces designed in Figma, built in code." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function About() {
  const isMobile = useIsMobile();
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: sp1 } = useScroll({ target: panel1Ref, offset: ["start start", "end end"] });
  const { scrollYProgress: sp2 } = useScroll({ target: panel2Ref, offset: ["start start", "end end"] });

  const rotateX1 = useTransform(sp1, [0.72, 1], ["0deg", "-22deg"]);
  const scale1   = useTransform(sp1, [0.72, 1], [1, 0.80]);
  const opacity1 = useTransform(sp1, [0.88, 0.98], [1, 0]);

  const rotateX2 = useTransform(sp2, [0.72, 1], ["0deg", "-22deg"]);
  const scale2   = useTransform(sp2, [0.72, 1], [1, 0.80]);
  const opacity2 = useTransform(sp2, [0.88, 0.98], [1, 0]);

  const p = isMobile ? "64px 24px 48px" : "72px 64px 60px";
  const p2 = isMobile ? "72px 24px 48px" : "96px 64px 56px";

  return (
    <>
      {/* ── PANEL 1: About Me ── */}
      <div id="about" ref={panel1Ref} style={{ height: isMobile ? "auto" : "200vh", position: "relative" }}>
        <div style={{ position: isMobile ? "relative" : "sticky", top: 0, height: isMobile ? "auto" : "100dvh", overflow: isMobile ? "visible" : "hidden" }}>
          <motion.div style={isMobile ? {} : { rotateX: rotateX1, scale: scale1, opacity: opacity1, transformPerspective: 1400, transformOrigin: "top center", height: "100%" }}>
            <div className="no-scrollbar" style={{ backgroundColor: "#D4AF37", color: "#0c0e0c", padding: p, height: isMobile ? "auto" : "100%", boxSizing: "border-box", overflowY: isMobile ? "visible" : "auto", scrollbarWidth: "none" }}>
              <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                <motion.p {...fadeUp(0)} style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.4em", color: "rgba(12,14,12,0.45)", marginBottom: "10px", marginTop: "24px" }}>
                  About Me
                </motion.p>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "20px" : "56px", marginBottom: "16px" }}>
                  <motion.h2 {...fadeUp(0.07)} style={{ fontSize: isMobile ? "1.8rem" : "clamp(1.8rem, 3vw, 2.9rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
                    Helping brands stand out through great software.
                  </motion.h2>
                  <motion.div {...fadeUp(0.14)} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(12,14,12,0.65)" }}>{personal.bio}</p>
                    {!isMobile && (
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
                        <button
                          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                          style={{ width: "96px", height: "96px", borderRadius: "50%", backgroundColor: "#0c0e0c", color: "#D4AF37", fontSize: "11px", fontWeight: 700, border: "none", cursor: "pointer", letterSpacing: "0.02em", transition: "transform 0.2s" }}
                          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        >
                          Know More ↗
                        </button>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Stats */}
                <motion.div {...fadeUp(0.18)} style={{ display: "flex", borderTop: "1px solid rgba(12,14,12,0.15)", borderBottom: "1px solid rgba(12,14,12,0.15)", padding: "12px 0", marginBottom: "16px" }}>
                  {stats.map((s, i) => (
                    <div key={i} style={{ paddingRight: isMobile ? "16px" : "32px", borderRight: i < stats.length - 1 ? "1px solid rgba(12,14,12,0.15)" : "none", paddingLeft: i > 0 ? (isMobile ? "16px" : "32px") : "0" }}>
                      <p style={{ fontSize: isMobile ? "20px" : "24px", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em" }}>{s.value}</p>
                      <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(12,14,12,0.5)", marginTop: "2px" }}>{s.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Education + Experience */}
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "24px" : "56px" }}>
                  <div>
                    <motion.p {...fadeUp(0.22)} style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(12,14,12,0.45)", marginBottom: "14px" }}>Education</motion.p>
                    {education.map((edu, i) => (
                      <motion.div key={i} {...fadeUp(0.26 + i * 0.06)} style={{ paddingLeft: "14px", borderLeft: "2px solid rgba(12,14,12,0.2)", marginBottom: "12px" }}>
                        <p style={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(12,14,12,0.45)", marginBottom: "2px" }}>{edu.year}</p>
                        <p style={{ fontWeight: 700, fontSize: "13px", marginBottom: "1px" }}>{edu.degree}</p>
                        <p style={{ fontSize: "12px", color: "rgba(12,14,12,0.6)" }}>{edu.institution}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <motion.p {...fadeUp(0.22)} style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(12,14,12,0.45)", marginBottom: "14px" }}>Experience</motion.p>
                    {experience.map((job, i) => (
                      <motion.div key={i} {...fadeUp(0.26 + i * 0.06)} style={{ paddingLeft: "14px", borderLeft: "2px solid rgba(12,14,12,0.2)", marginBottom: "12px" }}>
                        <p style={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(12,14,12,0.45)", marginBottom: "2px" }}>{job.date}</p>
                        <p style={{ fontWeight: 700, fontSize: "13px", marginBottom: "1px" }}>{job.name}</p>
                        <p style={{ fontSize: "11px", fontWeight: 600, color: "rgba(12,14,12,0.6)", marginBottom: "4px" }}>{job.position}</p>
                        <p style={{ fontSize: "10px", color: "rgba(12,14,12,0.5)", lineHeight: 1.55 }}>{job.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── PANEL 2: What I Do + Tech Stack ── */}
      <div id="skills" ref={panel2Ref} style={{ height: isMobile ? "auto" : "200vh", position: "relative" }}>
        <div style={{ position: isMobile ? "relative" : "sticky", top: 0, height: isMobile ? "auto" : "100dvh", overflow: isMobile ? "visible" : "hidden" }}>
          <motion.div style={isMobile ? {} : { rotateX: rotateX2, scale: scale2, opacity: opacity2, transformPerspective: 1400, transformOrigin: "top center", height: "100%" }}>
            <div style={{ backgroundColor: "#0c0e0c", color: "#e8ebe5", padding: p2, height: isMobile ? "auto" : "100%", boxSizing: "border-box", borderTop: "1px solid #1c1e1c" }}>
              <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                {/* What I Do */}
                <div style={{ marginBottom: "44px" }}>
                  <motion.p {...fadeUp(0)} style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#D4AF37", marginBottom: "14px" }}>What I Do</motion.p>
                  <motion.h2 {...fadeUp(0.07)} style={{ fontSize: isMobile ? "1.6rem" : "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#e8ebe5", marginBottom: "12px" }}>
                    I build both the product{" "}
                    <span style={{ color: "#555c52" }}>and the experience.</span>
                  </motion.h2>
                  <motion.p {...fadeUp(0.13)} style={{ color: "#555c52", fontSize: "13px", lineHeight: 1.65, marginBottom: "20px", maxWidth: "560px" }}>
                    Building products end-to-end, from backend systems to the details users actually see and feel.
                  </motion.p>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "10px" }}>
                    {pillars.map((p, i) => (
                      <motion.div key={i} {...fadeUp(0.1 + i * 0.06)}
                        style={{ padding: "16px", borderRadius: "12px", border: "1px solid #1c1e1c", backgroundColor: "#0f1110", transition: "border-color 0.2s" }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.2)")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "#1c1e1c")}
                      >
                        <span style={{ color: "#D4AF37", fontSize: "16px", display: "block", marginBottom: "8px" }}>{p.icon}</span>
                        <h3 style={{ fontSize: "12px", fontWeight: 600, color: "#e8ebe5", marginBottom: "5px" }}>{p.label}</h3>
                        <p style={{ fontSize: "11px", color: "#555c52", lineHeight: 1.55 }}>{p.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <motion.p {...fadeUp(0.2)} style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#D4AF37", marginBottom: "14px" }}>Tech Stack</motion.p>
                  <motion.h2 {...fadeUp(0.26)} style={{ fontSize: isMobile ? "1.6rem" : "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 900, letterSpacing: "-0.02em", color: "#e8ebe5", marginBottom: "20px" }}>
                    Tools I work with.
                  </motion.h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {techStack.map((group, gi) => (
                      <motion.div key={gi} {...fadeUp(0.1 + gi * 0.09)}>
                        <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555c52", marginBottom: "10px" }}>{group.category}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                          {group.items.map(item => {
                            const Icon = iconMap[item.icon];
                            return (
                              <div key={item.name}
                                style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "8px", border: "1px solid #1c1e1c", backgroundColor: "#0f1110", transition: "border-color 0.2s, background-color 0.2s", cursor: "default" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.25)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(212,175,55,0.04)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1c1e1c"; (e.currentTarget as HTMLElement).style.backgroundColor = "#0f1110"; }}
                              >
                                {Icon ? <Icon size={14} style={{ color: "#555c52" }} /> : <div style={{ width: "14px", height: "14px", borderRadius: "3px", backgroundColor: "#1c1e1c" }} />}
                                <span style={{ fontSize: "11px", color: "#888c85" }}>{item.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
