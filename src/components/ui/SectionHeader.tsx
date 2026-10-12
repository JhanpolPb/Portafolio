"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
