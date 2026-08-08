"use client";

import { motion } from "framer-motion";
import {
  Server,
  Network,
  Database,
  Cloud,
  Wrench,
  Brain,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import type { PortfolioData } from "@/types";

const PILLARS = [
  {
    icon: Server,
    title: "Backend",
    desc: "Node.js, Laravel, .NET — APIs robustas y escalables",
  },
  {
    icon: Network,
    title: "Arquitectura",
    desc: "Microservicios, Monolitos, Capas - Arquitectura Escalable",
  },
  {
    icon: Database,
    title: "Bases de datos",
    desc: "MySQL, PostgreSQL, SQL Server, DynamoDB — modelado eficiente",
  },
  {
    icon: Cloud,
    title: "Cloud",
    desc: "AWS, Docker — infraestructura moderna",
  },
  {
    icon: Wrench,
    title: "Resolución",
    desc: "Análisis de problemas y soluciones eficientes",
  },
  {
    icon: Brain,
    title: "Aprendizaje",
    desc: "Constante actualización con las últimas tecnologías",
  },
];

interface AboutProps {
  data: PortfolioData["personal"];
}

export function About({ data }: AboutProps) {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      aria-label="Sobre mí"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Sobre mí"
          title="Quién soy"
          description="Desarrollador apasionado por construir sistemas robustos y escalables"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-white/60 leading-relaxed mb-6">
              {data.longDescription}
            </p>
            <p className="text-white/40 leading-relaxed text-sm">
              Me especializo en el backend pero tengo experiencia sólida en
              todo el stack. Disfruto el trabajo en equipo, la documentación
              clara y el código limpio que otros puedan mantener fácilmente.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Clean Code", "SOLID", "REST", "CI/CD", "Agile"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - pillars grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-3">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <GlassCard hover className="p-4">
                  <pillar.icon
                    size={22}
                    className="text-blue-400 mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="text-white text-sm font-semibold mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
