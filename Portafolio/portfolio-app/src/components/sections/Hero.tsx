"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, GitBranch, ExternalLink, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { PortfolioData } from "@/types";

const ICON_MAP = {
  github: GitBranch,
  linkedin: ExternalLink,
  mail: Mail,
  "message-circle": MessageCircle,
};

interface HeroProps {
  data: PortfolioData["personal"];
  social: PortfolioData["social"];
}

export function Hero({ data, social }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Sección de presentación"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            {data.available && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Disponible para nuevas oportunidades
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-lg mb-2"
            >
              Hola, soy
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-4"
            >
              {data.firstName}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                {data.lastName}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-white/80 mb-2"
            >
              {data.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["Node.js", ".NET", "Laravel", "AWS", "React"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/50 text-base leading-relaxed mb-8 max-w-lg"
            >
              {data.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Button size="lg" onClick={scrollToProjects} className="group">
                Ver proyectos
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </Button>

              <Button variant="secondary" size="lg" onClick={scrollToContact}>
                <Mail size={16} />
                Contactarme
              </Button>

              {data.cvUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a href={data.cvUrl} download aria-label="Descargar CV">
                    <Download size={16} />
                    Descargar CV
                  </a>
                </Button>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3"
            >
              {social.map((link) => {
                const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP];
                if (!Icon) return null;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-2xl scale-110" />

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 ring-1 ring-white/5">
                {data.avatar ? (
                  <Image
                    src={data.avatar}
                    alt={`Foto de ${data.name}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 288px, 320px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/30 to-violet-600/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/40">
                      {data.firstName[0]}
                      {data.lastName[0]}
                    </span>
                  </div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-4 top-8 bg-[#0f0f1a] border border-white/10 rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-white/40 text-xs">Especialidad</p>
                <p className="text-white text-sm font-semibold">Backend Dev</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -left-4 bottom-12 bg-[#0f0f1a] border border-white/10 rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-white/40 text-xs">Ubicación</p>
                <p className="text-white text-sm font-semibold">{data.location}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scrollear hacia abajo"
            className="flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors animate-bounce"
          >
            <ArrowDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
