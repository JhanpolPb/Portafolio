"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Education as EducationType } from "@/types";

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-24" aria-label="Educación">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Formación"
          title="Educación"
          description="Mi formación académica y base teórica"
        />

        <div className="max-w-3xl mx-auto grid gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard hover className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                    <GraduationCap
                      size={22}
                      className="text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-base mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-white/40 text-sm mb-3">{edu.field}</p>
                    <div className="flex flex-wrap gap-4 text-white/30 text-xs">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} aria-hidden="true" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} aria-hidden="true" />
                        {edu.location}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-white/40 text-xs mt-3 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
