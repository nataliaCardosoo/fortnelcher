"use client";

import { motion } from "framer-motion";

/**
 * Elemento assinatura da marca: um diagrama lateral animado do
 * funcionamento de uma niveladora de doca -- a plataforma nervurada
 * se ergue, avança e se apoia sobre a carroceria do caminhão,
 * formando a ponte entre a doca e o veículo.
 */
export function DockLevelerDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 360"
      className={className}
      role="img"
      aria-label="Ilustração do funcionamento de uma niveladora de doca, formando uma ponte entre a doca e o caminhão"
    >
      <defs>
        <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E2C46" />
          <stop offset="100%" stopColor="#0E1524" />
        </linearGradient>
      </defs>

      {/* piso */}
      <rect x="0" y="300" width="640" height="4" fill="#2A3D5F" />

      {/* parede da doca */}
      <rect x="40" y="140" width="130" height="160" fill="url(#floorGrad)" stroke="#2A3D5F" />
      <rect x="40" y="130" width="130" height="14" fill="#2F6FE0" opacity="0.9" />

      {/* caminhão */}
      <motion.g
        initial={{ x: 40 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <rect x="430" y="220" width="180" height="14" fill="#151E32" stroke="#2A3D5F" />
        <rect x="450" y="150" width="150" height="72" rx="4" fill="#1E2C46" stroke="#2A3D5F" />
        <circle cx="470" cy="240" r="14" fill="#0E1524" stroke="#2A3D5F" />
        <circle cx="580" cy="240" r="14" fill="#0E1524" stroke="#2A3D5F" />
      </motion.g>

      {/* plataforma niveladora (nervurada) */}
      <motion.g
        initial={{ rotate: -18, y: -10 }}
        whileInView={{ rotate: 0, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        style={{ transformOrigin: "180px 230px" }}
      >
        <rect x="178" y="222" width="260" height="16" rx="2" fill="#6FA8FF" />
        {Array.from({ length: 11 }).map((_, i) => (
          <rect
            key={i}
            x={188 + i * 22}
            y={224}
            width="6"
            height="12"
            fill="#0E1524"
            opacity="0.5"
          />
        ))}
        {/* pestana articulada */}
        <rect x="428" y="222" width="26" height="10" rx="2" fill="#2F6FE0" />
      </motion.g>

      {/* cilindro hidráulico */}
      <motion.line
        x1="200"
        y1="300"
        x2="230"
        y2="238"
        stroke="#2F6FE0"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.2 }}
      />
      <circle cx="200" cy="300" r="7" fill="#151E32" stroke="#2F6FE0" strokeWidth="2" />
    </svg>
  );
}
