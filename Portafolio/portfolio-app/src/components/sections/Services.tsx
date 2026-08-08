"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Layout,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Service } from "@/types";

const ICON_MAP = {
  server: Server,
  database: Database,
  cloud: Cloud,
  layout: Layout,
};

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section
      id="services"
      className="relative py-24"
      aria-label="Servicios"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Qué ofrezco"
          title="Servicios"
          description="Cómo puedo ayudar a tu proyecto o empresa"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon =
              ICON_MAP[service.icon as keyof typeof ICON_MAP] || Server;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard hover className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 w-fit mb-4">
                    <Icon
                      size={22}
                      className="text-blue-400"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-base mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-blue-500/60 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-white/40 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
