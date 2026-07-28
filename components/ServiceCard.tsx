"use client";

import { motion } from "framer-motion";
import { Wrench, HardHat, Settings, Shield, type LucideIcon } from "lucide-react";
import type { Servico } from "@/lib/company";

const ICONS: Record<string, LucideIcon> = {
  "manutencao-niveladoras": Wrench,
  "instalacao-niveladoras": HardHat,
  "manutencao-equipamentos": Settings,
  "instalacao-equipamentos": Shield,
};

export function ServiceCard({ servico, index }: { servico: Servico; index: number }) {
  const Icon = ICONS[servico.id] ?? Wrench;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-surface flex h-full flex-col p-6"
    >
      <span className="icon-negative">
        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">
        {servico.titulo}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-steel-400">{servico.resumo}</p>
      <ul className="mt-5 space-y-2 border-t border-navy-700 pt-5">
        {servico.itens.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-steel-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-blue-light" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
