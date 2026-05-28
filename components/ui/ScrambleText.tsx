"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const GREETINGS = [
  "Hello",          // English
  "こんにちは",      // Japanese
  "Bonjour",        // French
  "你好",            // Chinese
  "Hola",           // Spanish
  "السلام عليكم",   // Arabic
  "Ciao",           // Italian
  "Halo",            // Indonesian
  "Привет",         // Russian
  "Olá",            // Portuguese
  "Merhaba",        // Turkish
  "안녕하세요",       // Korean
  "Hi",
  "नमस्ते",         // Hindi
  "Hallo",          // German
  "สวัสดี",         // Thai
  "Xin chào"       // Vietnamese
];

function scramble(target: string, progress: number): string {
  return target
    .split("")
    .map((char, i) => {
      if (i < Math.floor(progress * target.length)) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

export default function ScrambleText({ className }: { className?: string }) {
  const [display, setDisplay] = useState(GREETINGS[0]);
  const greetingIndex = useRef(0);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runScramble = (target: string) => {
    let start: number | null = null;
    const duration = 800;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(scramble(target, progress));
      if (progress < 1) {
        frameRef.current = setTimeout(() => tick(performance.now()), 30);
      } else {
        setDisplay(target);
      }
    };

    tick(performance.now());
  };

  useEffect(() => {
    const cycle = () => {
      greetingIndex.current = (greetingIndex.current + 1) % GREETINGS.length;
      runScramble(GREETINGS[greetingIndex.current]);
    };

    const interval = setInterval(cycle, 2800);
    return () => {
      clearInterval(interval);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, []);

  return <span className={className}>{display}</span>;
}
