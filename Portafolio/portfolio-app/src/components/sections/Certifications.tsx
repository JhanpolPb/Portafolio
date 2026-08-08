"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Certification } from "@/types";

const CATEGORY_COLORS: Record<Certification["category"], string> = {
  cloud: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  development: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  database: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  other: "text-white/50 bg-white/5 border-white/10",
};

const CATEGORY_LABELS: Record<Certification["category"], string> = {
  cloud: "Cloud",
  development: "Desarrollo",
  database: "Base de datos",
  other: "Otro",
};

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section
      id="certifications"
      className="py-24"
      aria-label="Certificaciones"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Credenciales"
          title="Certificaciones"
          description="Certificaciones y reconocimientos obtenidos"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard
                hover
                className={`p-5 h-full flex flex-col ${
                  cert.url ? "cursor-pointer" : ""
                }`}
              >
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border ${
                      CATEGORY_COLORS[cert.category]
                    }`}
                  >
                    {CATEGORY_LABELS[cert.category]}
                  </span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver certificación ${cert.name}`}
                      className="text-white/30 hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Icon */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4">
                  <Award size={22} className="text-white/60" aria-hidden="true" />
                </div>

                {/* Info */}
                <h3 className="text-white font-semibold text-sm mb-1 flex-1">
                  {cert.name}
                </h3>
                <p className="text-blue-400 text-xs mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-1.5 text-white/30 text-xs">
                  <Calendar size={11} aria-hidden="true" />
                  {cert.date}
                </div>

                {cert.credentialId && (
                  <p className="text-white/20 text-xs mt-1 font-mono truncate">
                    ID: {cert.credentialId}
                  </p>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
