"use client"; // Necesario en Next.js App Router para usar animaciones del lado del cliente

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Empieza invisible y un poco más abajo
      whileInView={{ opacity: 1, y: 0 }} // Cuando entra en pantalla, sube y aparece
      viewport={{ once: true, margin: "-100px" }} // 'once: true' para que no se anime cada vez que subes y bajas
      transition={{ duration: 0.4, ease: "easeOut", delay: delay }}
    >
      {children}
    </motion.div>
  );
}