"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Users, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { LANGUAGE_COLORS } from "@/lib/utils";
import type { GitHubUser, GitHubRepo } from "@/types";

interface GitHubSectionProps {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  username: string;
}

export function GitHubSection({ user, repos, username }: GitHubSectionProps) {
  return (
    <section
      id="github"
      className="py-24"
      aria-label="Perfil de GitHub"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Open Source"
          title="GitHub"
          description="Mis contribuciones y repositorios públicos"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-6 h-full">
              {user ? (
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={user.avatar_url}
                      alt={`Avatar de ${user.name || user.login}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-1">
                    {user.name || user.login}
                  </h3>
                  <p className="text-blue-400 text-sm mb-3">@{user.login}</p>

                  {user.bio && (
                    <p className="text-white/40 text-xs leading-relaxed mb-4">
                      {user.bio}
                    </p>
                  )}

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 w-full mb-6">
                    <div className="text-center">
                      <p className="text-white font-bold text-xl">
                        {user.public_repos}
                      </p>
                      <p className="text-white/30 text-xs flex items-center justify-center gap-1 mt-0.5">
                        <BookOpen size={10} aria-hidden="true" />
                        Repos
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-xl">
                        {user.followers}
                      </p>
                      <p className="text-white/30 text-xs flex items-center justify-center gap-1 mt-0.5">
                        <Users size={10} aria-hidden="true" />
                        Seguidores
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold text-xl">
                        {user.following}
                      </p>
                      <p className="text-white/30 text-xs flex items-center justify-center gap-1 mt-0.5">
                        <Users size={10} aria-hidden="true" />
                        Siguiendo
                      </p>
                    </div>
                  </div>

                  <Button variant="secondary" size="sm" asChild className="w-full">
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver perfil de GitHub"
                    >
                      <ExternalLink size={14} />
                      Ver perfil
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center py-8 text-white/30">
                  <p className="text-sm">Perfil no disponible</p>
                  <Button variant="secondary" size="sm" asChild className="mt-4">
                    <a
                      href={`https://github.com/${username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en GitHub
                    </a>
                  </Button>
                </div>
              )}
            </GlassCard>
          </motion.div>

          {/* Repos */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
            {repos.length > 0 ? (
              repos.map((repo, i) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <GlassCard hover className="p-4 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white text-sm font-semibold leading-tight flex-1 mr-2">
                        {repo.name}
                      </h4>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver repositorio ${repo.name}`}
                        className="text-white/30 hover:text-white transition-colors shrink-0"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    {repo.description && (
                      <p className="text-white/40 text-xs leading-relaxed mb-3 flex-1">
                        {repo.description.length > 80
                          ? repo.description.slice(0, 80) + "..."
                          : repo.description}
                      </p>
                    )}

                    <div className="flex items-center gap-4 mt-auto">
                      {repo.language && (
                        <span className="flex items-center gap-1.5 text-xs text-white/40">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                LANGUAGE_COLORS[repo.language] || "#6B7280",
                            }}
                            aria-hidden="true"
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        <Star size={12} aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        <GitFork size={12} aria-hidden="true" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))
            ) : (
              <div className="sm:col-span-2 text-center py-12 text-white/30">
                <p className="text-sm">Repositorios no disponibles</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
