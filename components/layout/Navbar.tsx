"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import LogoIcon from "@/components/ui/LogoIcon";
import { primary } from "@/lib/theme";

const menuItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const { scrollY } = useScroll();
  const logoSize = useTransform(scrollY, [0, 120], isMobile ? [72, 48] : [100, 72]);

  useEffect(() => {
    const check = () => {
      const el = document.querySelector("#about") as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = window.innerHeight / 2;
      setOnLight(rect.top < mid && rect.bottom > mid);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 320);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "12px 20px" : "20px 32px",
        }}
      >
        <button
          onClick={() => scrollTo("#home")}
          aria-label="Home"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
        >
          <motion.div style={{ width: logoSize, overflow: "visible" }}>
            <LogoIcon color={onLight ? "#0c0e0c" : primary} />
          </motion.div>
        </button>

        {/* MENU / CLOSE button — lime green pill */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            padding: "10px 28px",
            borderRadius: "9999px",
            backgroundColor: open ? "#0c0e0c" : primary,
            color: open ? primary : "#0c0e0c",
            border: open ? `1px solid ${primary}` : "none",
            fontWeight: "700",
            fontSize: "13px",
            letterSpacing: "0.12em",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </header>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 30,
                backgroundColor: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Lime green menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                zIndex: 40,
                height: "100%",
                width: "clamp(260px, 35%, 420px)",
                backgroundColor: primary,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "96px 64px",
                borderTopLeftRadius: "16px",
                borderBottomLeftRadius: "16px",
              }}
            >
              <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, ease: "easeOut" }}
                    onClick={() => scrollTo(item.href)}
                    style={{
                      textAlign: "left",
                      fontWeight: "900",
                      color: "#0c0e0c",
                      lineHeight: "1.1",
                      padding: "6px 0",
                      fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "padding-left 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.paddingLeft = "16px")}
                    onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0px")}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  position: "absolute",
                  bottom: "48px",
                  left: "64px",
                  display: "flex",
                  gap: "16px",
                  fontSize: "13px",
                  color: "rgba(12,14,12,0.5)",
                }}
              >
                <a href="https://github.com/Prantoe" target="_blank" rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#0c0e0c")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(12,14,12,0.5)")}>
                  GitHub
                </a>
                <span>·</span>
                <a href="https://www.linkedin.com/in/pranto-suwarno-59b014165/" target="_blank" rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#0c0e0c")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(12,14,12,0.5)")}>
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
