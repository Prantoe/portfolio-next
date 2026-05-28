"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/content";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { primary, primaryRgb, background, foreground, muted, borderColor, subtle, backgroundRgb } from "@/lib/theme";

export default function Projects() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 0.8", "start 0.2"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { scrollYProgress: exitProgress } = useScroll({ target: sectionRef, offset: ["end 0.7", "end 0"] });
  const headerY = useTransform(exitProgress, [0, 1], [0, -160]);
  const headerOpacity = useTransform(exitProgress, [0, 0.6], [1, 0]);

  return (
    <section id="projects" ref={sectionRef} style={{ padding: isMobile ? "60px 24px 72px" : "80px 64px 96px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "240px 1fr", gap: isMobile ? "32px" : "64px", alignItems: "start" }}>

        {/* ── LEFT: sticky header ── */}
        <div style={{ position: isMobile ? "relative" : "sticky", top: isMobile ? "auto" : "80px" }}>
          <motion.div style={isMobile ? {} : { y: headerY, opacity: headerOpacity }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: primary, marginBottom: "16px" }}
          >
            Selected Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.07 }}
            style={{ fontSize: "clamp(2.2rem, 3vw, 3.2rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1, color: foreground, marginBottom: "20px" }}
          >
            Projects
          </motion.h2>

          {/* animated line */}
          <div style={{ height: "1px", backgroundColor: borderColor, overflow: "hidden", marginBottom: "20px" }}>
            <motion.div style={{ height: "100%", backgroundColor: primary, width: lineWidth }} />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ fontSize: "11px", fontFamily: "monospace", color: muted, letterSpacing: "0.05em" }}
          >
            {String(projects.length).padStart(2, "0")} projects
          </motion.p>
          </motion.div>
        </div>

        {/* ── RIGHT: cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px" }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.65, delay: (i % 2) * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ borderRadius: "16px", overflow: "hidden", backgroundColor: subtle, cursor: "default" }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden", backgroundColor: borderColor }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.7s ease" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, rgba(${backgroundRgb},0.92) 0%, rgba(${backgroundRgb},0.1) 55%, transparent 100%)` }} />

                <div style={{ position: "absolute", top: "12px", left: "14px", fontSize: "10px", fontFamily: "monospace", color: `rgba(${backgroundRgb},0.5)`, letterSpacing: "0.1em" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div style={{ position: "absolute", top: "10px", right: "12px", backgroundColor: `rgba(${backgroundRgb},0.85)`, color: muted, fontSize: "10px", fontWeight: 500, padding: "3px 9px", borderRadius: "99px", backdropFilter: "blur(6px)", border: `1px solid rgba(${primaryRgb},0.15)` }}>
                  {p.year}
                </div>

                <div style={{ position: "absolute", bottom: "14px", left: "14px", backgroundColor: primary, color: foreground, fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "4px" }}>
                  {p.name}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "16px 18px 20px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "8px", gap: "10px" }}>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: foreground, marginBottom: "2px" }}>{p.name}</p>
                    <p style={{ fontSize: "11px", color: muted }}>{p.client} · {p.category}</p>
                  </div>
                  {p.visit && (
                    <a
                      href={p.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ padding: "6px 14px", backgroundColor: primary, color: foreground, fontSize: "10px", fontWeight: 700, borderRadius: "4px", textDecoration: "none", flexShrink: 0, transition: "background-color 0.2s" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = foreground)}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = primary)}
                    >
                      Visit ↗
                    </a>
                  )}
                </div>

                <p style={{ fontSize: "11px", color: muted, lineHeight: 1.65, marginBottom: "12px" }}>
                  {p.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {p.technologies.map(t => (
                    <span key={t} style={{ fontSize: "9px", padding: "2px 8px", borderRadius: "99px", border: `1px solid ${borderColor}`, color: muted, backgroundColor: background }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
