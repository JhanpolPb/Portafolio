"use client";

import { motion } from "framer-motion";
import { ArrowUp, GitBranch, ExternalLink, Mail, MessageCircle } from "lucide-react";
import type { SocialLink } from "@/types";

const ICON_MAP = {
  github: GitBranch,
  linkedin: ExternalLink,
  mail: Mail,
  "message-circle": MessageCircle,
};

interface FooterProps {
  name: string;
  social: SocialLink[];
}

export function Footer({ name, social }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/[0.06] bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <span className="text-white font-bold text-lg">
              <span className="text-blue-400">{"<"}</span>
              {name.split(" ")[0]}
              <span className="text-blue-400">{" />"}</span>
            </span>
            <p className="text-white/30 text-sm mt-1">Full Stack Developer</p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-4" aria-label="Redes sociales">
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
                  className="p-2 text-white/30 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </nav>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            aria-label="Volver arriba"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white border border-white/10 transition-colors"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} {name}. Construido con Next.js &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
