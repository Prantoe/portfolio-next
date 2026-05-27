"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="px-6 md:px-16 py-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-[#1c1e1c] border border-[#1c1e1c] rounded-2xl overflow-hidden bg-[#0f1110]">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center py-8 px-4 hover:bg-[#D4AF37]/5 transition-colors duration-300"
            >
              <span className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-1 tabular-nums">
                {s.value}
              </span>
              <span className="text-[10px] md:text-xs text-[#555c52] uppercase tracking-widest text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
