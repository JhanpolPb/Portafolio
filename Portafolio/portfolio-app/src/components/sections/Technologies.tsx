"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Technology } from "@/types";

// SVG icons as inline components (no external icon pack needed)
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, string> = {
    nodejs: "🟩",
    express: "⚫",
    laravel: "🔴",
    php: "🟣",
    dotnet: "🟪",
    react: "🔵",
    nextjs: "⚫",
    tailwind: "🔵",
    javascript: "🟨",
    typescript: "🟦",
    mysql: "🔵",
    postgresql: "🐘",
    sqlserver: "🔴",
    aws: "🟠",
    docker: "🐳",
    git: "🔶",
    github: "⚫",
  };
  return (
    <span className="text-xl leading-none" role="img" aria-label={name}>
      {icons[name.toLowerCase()] || "🔧"}
    </span>
  );
};

const CATEGORIES = [
  { id: "all", label: "Todas" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Bases de datos" },
  { id: "cloud", label: "Cloud" },
  { id: "tools", label: "Herramientas" },
];

interface TechnologiesProps {
  technologies: Technology[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section
      id="technologies"
      className="py-24"
      aria-label="Tecnologías"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Stack técnico"
          title="Tecnologías que uso"
          description="Herramientas y lenguajes con los que trabajo a diario"
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technologies grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
        >
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <GlassCard className="p-4 text-center group cursor-default transition-all duration-300 hover:border-white/20">
                <div className="flex justify-center mb-2">
                  <TechIcon name={tech.icon} />
                </div>
                <p className="text-white/70 group-hover:text-white text-xs font-medium transition-colors">
                  {tech.name}
                </p>
                <div
                  className="mt-2 mx-auto h-0.5 rounded-full w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color || "#3B82F6" }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
