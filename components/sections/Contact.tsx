"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/content";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useIsMobile } from "@/hooks/useIsMobile";
import { primary } from "@/lib/theme";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Contact() {
  const isMobile = useIsMobile();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  const waLink = `https://wa.me/${personal.whatsapp}?text=Hi%20Pranto%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#0c0e0c", borderTop: "1px solid #1c1e1c", padding: isMobile ? "140px 24px 64px" : "160px 64px 120px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "48px" : "80px", alignItems: "start" }}>

        {/* ── LEFT ── */}
        <div>
          <motion.p {...fadeUp(0)} style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: primary, marginBottom: "24px" }}>
            Let&apos;s Work Together
          </motion.p>

          <motion.h2 {...fadeUp(0.08)} style={{ fontSize: isMobile ? "clamp(2rem, 8vw, 2.8rem)" : "clamp(2.8rem, 5vw, 5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#e8ebe5", marginBottom: "40px" }}>
            Have a project<br />
            in mind?{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: primary }}>
              Let&apos;s build it.
            </span>
          </motion.h2>

          {/* Contact icons row */}
          <motion.div {...fadeUp(0.16)} style={{ display: "flex", alignItems: "center", gap: "24px", paddingTop: "30px" }}>
            <a
              href={`mailto:${personal.email}`}
              style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#555c52", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e8ebe5")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555c52")}
            >
              <FiMail size={16} />
              <span style={{ fontSize: "13px" }}>{personal.email}</span>
            </a>

            <span style={{ width: "1px", height: "16px", backgroundColor: "#2a2e28" }} />

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#555c52", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#25d366")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555c52")}
            >
              <FaWhatsapp size={16} />
              <span style={{ fontSize: "13px" }}>WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: Form ── */}
        <motion.form
          {...fadeUp(0.18)}
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "12px" }}>
            {(["name", "email"] as const).map(field => (
              <div key={field} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#555c52" }}>
                  {field === "name" ? "Your Name" : "Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "example name" : "you@example.com"}
                  value={form[field]}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  required
                  style={{ backgroundColor: "#0f1110", border: "1px solid #1c1e1c", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#e8ebe5", outline: "none", transition: "border-color 0.2s" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#1c1e1c")}
                />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#555c52" }}>
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
              rows={6}
              style={{ backgroundColor: "#0f1110", border: "1px solid #1c1e1c", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#e8ebe5", outline: "none", resize: "none", transition: "border-color 0.2s", fontFamily: "inherit" }}
              onFocus={e => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)")}
              onBlur={e => (e.currentTarget.style.borderColor = "#1c1e1c")}
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            style={{ padding: "16px 32px", backgroundColor: status === "sent" ? "#1c1e1c" : primary, color: status === "sent" ? primary : "#0c0e0c", fontWeight: 700, fontSize: "14px", letterSpacing: "0.04em", border: status === "sent" ? "1px solid #2a2e28" : "none", borderRadius: "10px", cursor: status !== "idle" ? "default" : "pointer", opacity: status === "sending" ? 0.7 : 1, transition: "background-color 0.2s" }}
            onMouseEnter={e => { if (status === "idle") (e.currentTarget.style.backgroundColor = "#ffffff"); }}
            onMouseLeave={e => { if (status === "idle") (e.currentTarget.style.backgroundColor = primary); }}
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message →"}
          </button>
        </motion.form>

      </div>
    </section>
  );
}
