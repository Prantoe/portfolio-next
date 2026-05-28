"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/content";
import { FiGithub, FiLinkedin, FiInstagram, FiFileText } from "react-icons/fi";
import ScrambleText from "@/components/ui/ScrambleText";
import { useIsMobile } from "@/hooks/useIsMobile";

const socialLinks = [
  { href: personal.links.github, Icon: FiGithub, label: "GitHub" },
  { href: personal.links.linkedin, Icon: FiLinkedin, label: "LinkedIn" },
  { href: personal.links.instagram, Icon: FiInstagram, label: "Instagram" },
  { href: personal.links.resume, Icon: FiFileText, label: "Resume" },
];

export default function Hero() {
  const [photoHovered, setPhotoHovered] = useState(false);
  const isMobile = useIsMobile();
  const scroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const [onGold, setOnGold] = useState(false);
  const [scanRunning, setScanRunning] = useState(false);
  const photoContainerRef = useRef<HTMLDivElement>(null);
  const scanY = useMotionValue(-20);

  useEffect(() => {
    const check = () => {
      const el = document.querySelector("#about") as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = window.innerHeight / 2;
      setOnGold(rect.top < mid && rect.bottom > mid);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loop = async () => {
      if (cancelled) return;
      setScanRunning(true);
      const h = photoContainerRef.current?.offsetHeight ?? 600;
      scanY.set(-20);
      await animate(scanY, h + 20, { duration: 3.5, ease: "linear" });
      if (cancelled) return;
      setScanRunning(false);
      await new Promise<void>(r => setTimeout(r, 4000 + Math.random() * 3000));
      loop();
    };
    const t = setTimeout(loop, 3800 + Math.random() * 300);
    return () => { cancelled = true; clearTimeout(t); setScanRunning(false); };
  }, [scanY]);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 65% 75% at 80% 50%, rgba(80,120,20,0.22) 0%, transparent 65%)" }}
      />
      {/* Dark gradient */}
      <div className="pointer-events-none absolute z-0"
        style={{ bottom: 0, right: 0, width: "90%", height: "75%", background: "radial-gradient(ellipse at bottom right, rgba(0,0,0,0.75) 0%, transparent 70%)" }}
      />

      {/* ── Photo ── */}
      <div
        className="relative z-10"
        style={{
          width: isMobile ? "100%" : "42%",
          height: isMobile ? "70vw" : "100dvh",
          maxHeight: isMobile ? "480px" : "none",
          paddingTop: isMobile ? "80px" : "108px",
          paddingBottom: isMobile ? "0" : "60px",
          marginLeft: isMobile ? "0" : "100px",
          paddingRight: isMobile ? "0" : "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
          position: "relative",
          width: isMobile ? "min(220px, 60vw)" : "min(400px, calc(100% - 8px))",
          height: "100%",
          flexShrink: 0,
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "#D4AF37", clipPath: "polygon(20% 0%, 100% 0%, 100% 83%, 80% 100%, 0% 100%, 0% 20%)" }} />
          <div
            ref={photoContainerRef}
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", clipPath: "polygon(20% 0%, 100% 0%, 100% 83%, 80% 100%, 0% 100%, 0% 20%)" }}
            onMouseEnter={() => setPhotoHovered(true)}
            onMouseLeave={() => setPhotoHovered(false)}
          >
            <Image
              src="/assets/me.png"
              alt="Pranto Soearno"
              fill
              style={{ filter: photoHovered ? "grayscale(70%)" : "grayscale(100%)", objectFit: "cover", objectPosition: "center top", transition: "filter 0.5s ease" }}
              priority
            />
            <motion.div style={{ position: "absolute", left: 0, right: 0, top: scanY, height: 14, backgroundColor: "#D4AF37", mixBlendMode: "difference", boxShadow: "0 0 12px rgba(212,175,55,0.8), 0 0 32px rgba(212,175,55,0.4)", pointerEvents: "none", zIndex: 5 }} />
          </div>

          {/* Corner brackets — sync with scan */}
          <AnimatePresence>
            {scanRunning && [
              { style: { top: 0, left: 0 },     d: "M 0 50 L 0 0 L 50 0" },
              { style: { bottom: 0, right: 0 }, d: "M 50 0 L 50 50 L 0 50" },
            ].map(({ style, d }, i) => (
              <motion.svg
                key={i}
                width={44} height={44} viewBox="0 0 44 44" overflow="visible"
                style={{ position: "absolute", ...style, zIndex: 6, pointerEvents: "none" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: i * 0.08 }}
              >
                <motion.path
                  d={d}
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{
                    pathLength: [0, 0.35, 0.35, 0],
                    pathOffset: [0, 0,    0.65, 1],
                  }}
                  transition={{
                    pathLength: { duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", times: [0, 0.25, 0.75, 1] },
                    pathOffset: { duration: 1.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", times: [0, 0.25, 0.75, 1] },
                  }}
                />
              </motion.svg>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{
          flex: 1,
          paddingLeft: isMobile ? "24px" : "56px",
          paddingRight: isMobile ? "24px" : "48px",
          paddingTop: isMobile ? "32px" : "0",
          paddingBottom: isMobile ? "48px" : "0",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}>
          <h1 className="font-black text-white leading-none tracking-tight" style={{ fontSize: isMobile ? "2.2rem" : "clamp(2rem, 4.5vw, 3.5rem)" }}>
            <ScrambleText className="text-[#555]" />{" "}There!
          </h1>
          <h1 className="font-black text-white leading-none tracking-tight" style={{ fontSize: isMobile ? "2.2rem" : "clamp(2rem, 4.5vw, 3.5rem)" }}>
            I'm{" "}
            <span className="italic text-[#D4AF37]" style={{ fontFamily: "var(--font-serif)", fontSize: isMobile ? "2rem" : "60px", fontWeight: 400 }}>
              Pranto Soearno
            </span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
          style={{ marginTop: "20px", marginBottom: "24px", maxWidth: "440px", color: "#c8ccc5", fontSize: isMobile ? "14px" : "17px", lineHeight: "1.65" }}
        >
          A passionate Fullstack Developer with creative thinking. Loves
          creating sleek designs and best softwares out of the box. I always
          wanna make products the best and most efficient.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.52, ease: "easeOut" }}
          style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap" }}
        >
          <button onClick={() => scroll("#projects")}
            style={{ padding: isMobile ? "12px 24px" : "16px 32px", backgroundColor: "#D4AF37", color: "#0c0e0c", fontWeight: "700", fontSize: "14px", letterSpacing: "0.05em", border: "2px solid #D4AF37", cursor: "pointer", transition: "background-color 0.2s, color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#0c0e0c"; e.currentTarget.style.color = "#ffffff"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#D4AF37"; e.currentTarget.style.color = "#0c0e0c"; }}
          >
            My Projects
          </button>
          <button onClick={() => scroll("#about")}
            style={{ padding: isMobile ? "12px 24px" : "16px 32px", backgroundColor: "transparent", color: "#ffffff", fontWeight: "700", fontSize: "14px", letterSpacing: "0.05em", border: "2px solid #D4AF37", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#D4AF37"; e.currentTarget.style.color = "#0c0e0c"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#ffffff"; }}
          >
            About Me
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.66, ease: "easeOut" }}
          style={{ display: "flex", gap: "8px" }}
        >
          {socialLinks.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ width: isMobile ? "40px" : "48px", height: isMobile ? "40px" : "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #2a2e28", backgroundColor: "#111", color: "#888", transition: "all 0.2s", textDecoration: "none" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37"; (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2a2e28"; (e.currentTarget as HTMLElement).style.color = "#888"; }}
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Floating chat button */}
      <motion.button
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        onClick={() => scroll("#contact")}
        style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 50, width: "48px", height: "48px", borderRadius: "50%", backgroundColor: onGold ? "#0c0e0c" : "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: onGold ? "0 0 28px rgba(0,0,0,0.4)" : "0 0 28px rgba(212,175,55,0.55)", border: onGold ? "2px solid #D4AF37" : "none", cursor: "pointer", transition: "background-color 0.3s, box-shadow 0.3s, border 0.3s" }}
        aria-label="Contact"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={onGold ? "#D4AF37" : "#0c0e0c"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </section>
  );
}
