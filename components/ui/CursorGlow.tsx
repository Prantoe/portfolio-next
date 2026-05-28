"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { primary } from "@/lib/theme";

export default function CursorGlow() {
  const isMobile = useIsMobile();
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (isMobile) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setDragging(true);
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const size = dragging ? 88 : 64;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(140,192,235,0.06), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: primary,
          mixBlendMode: "difference",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}
