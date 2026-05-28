"use client";
import { personal } from "@/data/content";
import { useIsMobile } from "@/hooks/useIsMobile";
import { background, muted, borderColor } from "@/lib/theme";

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ borderTop: `1px solid ${borderColor}`, padding: isMobile ? "14px 16px" : "28px 64px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <p style={{ fontSize: "13px", color: muted }}>{personal.name}</p>
      <p style={{ fontSize: "12px", color: muted, opacity: 0.6 }}>© 2026 All rights reserved.</p>
    </footer>
  );
}
