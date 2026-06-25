"use client"; // Required in Next.js App Router to use client-side animations

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Starts invisible and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Rises and fades in once it enters the viewport
      viewport={{ once: true, margin: "-100px" }} // 'once: true' so it doesn't replay on every scroll up/down
      transition={{ duration: 0.4, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
}