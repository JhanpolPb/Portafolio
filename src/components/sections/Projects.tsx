"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, Star, CheckCircle2, Layers } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

const STATUS_CONFIG = {
  completed: {
    label: "Completado",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  "in-progress": {
    label: "En progreso",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  archived: {
    label: "Archivado",
    className: "bg-white/5 text-white/40 border-white/10",
  },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [showFeatures, setShowFeatures] = useState(false);
  const statusCfg = STATUS_CONFIG[project.status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group"
    >
      <GlassCard className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-white/15 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-black/20">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/20 to-violet-900/20">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Screenshot del proyecto ${project.name}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Layers size={40} className="text-white/20" aria-hidden="true" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />

          {project.featured && (
            <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30">
              <Star size={12} className="text-amber-400 fill-amber-400" aria-hidden="true" />
            </div>
          )}

          <div className="absolute bottom-3 left-3">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${statusCfg.className}`}>
              {statusCfg.label}
            </span>
          </div>

          {project.year && (
            <div className="absolute bottom-3 right-3">
              <span className="text-xs text-white/30">{project.year}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-white font-semibold text-base mb-2">{project.name}</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/30 text-xs">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {project.features && project.features.length > 0 && (
            <button
              onClick={() => setShowFeatures(!showFeatures)}
              className="text-blue-400 hover:text-blue-300 text-xs mb-3 text-left transition-colors"
            >
              {showFeatures ? "Ocultar características" : "Ver características"}
            </button>
          )}

          <AnimatePresence>
            {showFeatures && project.features && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1.5 mb-4 overflow-hidden"
              >
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-white/40 text-xs">{feature}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <div className="flex gap-2 mt-auto">
            {project.githubUrl && (
              <Button variant="secondary" size="sm" asChild className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.name} en GitHub`}>
                  <GitBranch size={14} />
                  Código
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="outline" size="sm" asChild className="flex-1">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${project.name}`}>
                  <ExternalLink size={14} />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

const FILTERS = [
  { id: "all", label: "Todos" },
  { id: "featured", label: "Destacados" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
];

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [filter, setFilter] = useState("all");

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.featured;
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-24" aria-label="Proyectos">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portafolio"
          title="Proyectos"
          description="Algunos de los proyectos que he construido"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f.id
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/30">
            No hay proyectos en esta categoría aún.
          </div>
        )}
      </div>
    </section>
  );
}
