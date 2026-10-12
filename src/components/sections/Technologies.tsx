"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Technology } from "@/types";
import {
  siNodedotjs,
  siExpress,
  siLaravel,
  siPhp,
  siDotnet,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siJavascript,
  siTypescript,
  siMysql,
  siPostgresql,
  siDocker,
  siGooglecloud,
  siGit,
  siGithub,
  siPostman,
  type SimpleIcon,
} from "simple-icons";

// Iconos que Simple Icons retiró de su librería por reclamos de marca
// (Microsoft y Amazon/AWS). Usamos URLs directas a fuentes alternativas.
const CUSTOM_ICON_URL: Record<string, string> = {
  aws:       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  dynamodb:  "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/aws-dynamodb.svg",
  sqlserver: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
};

// Mapeo de icon key → objeto de Simple Icons (empaquetado, sin CDN)
const ICONS: Record<string, SimpleIcon> = {
  nodejs:      siNodedotjs,
  express:     siExpress,
  laravel:     siLaravel,
  php:         siPhp,
  dotnet:      siDotnet,
  react:       siReact,
  nextjs:      siNextdotjs,
  tailwind:    siTailwindcss,
  javascript:  siJavascript,
  typescript:  siTypescript,
  mysql:       siMysql,
  postgresql:  siPostgresql,
  docker:      siDocker,
  cloud:       siGooglecloud,
  git:         siGit,
  github:      siGithub,
  postman:     siPostman,
};

const CATEGORIES = [
  { key: "all",      label: "Todas"     },
  { key: "backend",  label: "Backend"   },
  { key: "frontend", label: "Frontend"  },
  { key: "database", label: "Bases de datos" },
  { key: "cloud",    label: "Cloud"     },
  { key: "tools",    label: "Herramientas" },
];

interface TechnologiesProps {
  technologies: Technology[];
}

function normalizeHex(color?: string) {
  if (!color) return undefined;
  return color.length === 9 ? color.slice(0, 7) : color;
}

function TechIcon({ icon, color, name }: { icon: string; color?: string; name: string }) {
  // 1) Fuentes alternativas para AWS / DynamoDB / SQL Server
  const customUrl = CUSTOM_ICON_URL[icon];
  if (customUrl) {
    return (
      <img
        src={customUrl}
        alt={name}
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
        loading="lazy"
      />
    );
  }

  // 2) Simple Icons (local, sin red) para el resto
  const iconData = ICONS[icon];
  if (iconData) {
    const fill = normalizeHex(color) ?? `#${iconData.hex}`;
    return (
      <svg role="img" viewBox="0 0 24 24" width={32} height={32} className="w-8 h-8" fill={fill} aria-label={name}>
        <path d={iconData.path} />
      </svg>
    );
  }

  // 3) Fallback: inicial del nombre
  return (
    <div className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold text-white" style={{ background: color ?? "#444" }}>
      {name[0]}
    </div>
  );
}

export function Technologies({ technologies }: TechnologiesProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="technologies" className="relative py-24" aria-label="Tecnologías">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Stack"
          title="Tecnologías"
          description="Herramientas y tecnologías que uso en mis proyectos"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat.key
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
            >
              <GlassCard className="p-4 flex flex-col items-center gap-3 group hover:scale-105 transition-transform duration-200 cursor-default">
                <div className="p-2 rounded-xl" style={{ background: `${normalizeHex(tech.color) ?? "#444"}18` }}>
                  <TechIcon icon={tech.icon} color={tech.color} name={tech.name} />
                </div>
                <span className="text-white/70 text-xs font-medium text-center group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}