"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  GitBranch,
  ExternalLink,
  MessageCircle,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import type { PortfolioData } from "@/types";

const ICON_MAP = {
  github: GitBranch,
  linkedin: ExternalLink,
  mail: Mail,
  "message-circle": MessageCircle,
};

interface ContactProps {
  personal: PortfolioData["personal"];
  social: PortfolioData["social"];
}

type FormState = "idle" | "loading" | "success" | "error";

export function Contact({ personal, social }: ContactProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Jhanpol",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormState("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="relative py-24" aria-label="Contacto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Hablemos"
          title="Contacto"
          description="¿Tienes un proyecto en mente? Me encantaría escucharte"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <GlassCard className="p-6">
              <h3 className="text-white font-semibold mb-4">Información de contacto</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
                  aria-label={`Enviar correo a ${personal.email}`}
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={16} className="text-blue-400" aria-hidden="true" />
                  </div>
                  <span className="text-sm">{personal.email}</span>
                </a>

                {personal.whatsapp && (
                  <a
                    href={`https://wa.me/${personal.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
                    aria-label="Contactar por WhatsApp"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                      <MessageCircle size={16} className="text-emerald-400" aria-hidden="true" />
                    </div>
                    <span className="text-sm">{personal.whatsapp}</span>
                  </a>
                )}

                <div className="flex items-center gap-3 text-white/40">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <MapPin size={16} aria-hidden="true" />
                  </div>
                  <span className="text-sm">{personal.location}</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-white/60 text-sm font-medium mb-4">Encuéntrame en</h3>
              <div className="space-y-2">
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
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      <Icon size={16} aria-hidden="true" />
                      <span className="text-sm">{link.name}</span>
                      {link.username && (
                        <span className="ml-auto text-xs text-white/30">@{link.username}</span>
                      )}
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6">
              <h3 className="text-white font-semibold mb-6">Envíame un mensaje</h3>

              {formState === "success" ? (
                <div className="py-12 text-center">
                  <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-white font-medium mb-2">¡Mensaje enviado!</p>
                  <p className="text-white/50 text-sm">Te responderé lo antes posible.</p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-6 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-white/50 text-sm mb-2">Nombre *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Tu nombre completo"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white/50 text-sm mb-2">Correo electrónico *</label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="jhanpolparra@gmail.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white/50 text-sm mb-2">Mensaje *</label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Cuéntame sobre tu proyecto..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200 resize-none"
                        aria-required="true"
                      />
                    </div>

                    {formState === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle size={16} aria-hidden="true" />
                        Error al enviar. Por favor intenta de nuevo.
                      </div>
                    )}

                    <Button type="submit" size="lg" disabled={formState === "loading"} className="w-full">
                      {formState === "loading" ? (
                        <>
                          <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
