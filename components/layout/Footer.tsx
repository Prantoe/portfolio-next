"use client";
import { personal } from "@/data/content";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ borderTop: "1px solid #1c1e1c", backgroundColor: "#0c0e0c", padding: isMobile ? "24px" : "28px 64px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? "8px" : "0" }}>
      <p style={{ fontSize: "13px", color: "#555c52" }}>{personal.name}</p>
      <p style={{ fontSize: "12px", color: "#3a3d38" }}>© 2026 All rights reserved.</p>
    </footer>
  );
}
