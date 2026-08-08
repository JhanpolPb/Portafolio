"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Experience as ExperienceType } from "@/types";

const TYPE_LABELS: Record<ExperienceType["type"], string> = {
  "full-time": "Tiempo completo",
  "part-time": "Medio tiempo",
  freelance: "Freelance",
  internship: "Práctica",
};

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="relative py-24"
      aria-label="Experiencia laboral"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Trayectoria"
          title="Experiencia laboral"
          description="Mi recorrido profesional como desarrollador"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-5 top-6 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    exp.current
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-white/20 bg-white/5"
                  }`}
                >
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </div>

                <GlassCard className="p-6" hover>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold text-lg">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <Badge variant="success">Actual</Badge>
                        )}
                      </div>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline">
                      {TYPE_LABELS[exp.type]}
                    </Badge>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-white/40 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} aria-hidden="true" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} aria-hidden="true" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} aria-hidden="true" />
                      {TYPE_LABELS[exp.type]}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-emerald-500 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <p className="text-white/50 text-xs">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
