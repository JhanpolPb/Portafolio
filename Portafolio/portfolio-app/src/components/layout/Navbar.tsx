"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Tecnologías", href: "#technologies" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contacto", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="text-white font-bold text-xl tracking-tight hover:text-blue-400 transition-colors"
              aria-label="Ir al inicio"
            >
              <span className="text-blue-400">{"<"}</span>
              {name.split(" ")[0]}
              <span className="text-blue-400">{" />"}</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm transition-all duration-200",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                Contactar
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
              >
                Contactar
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
