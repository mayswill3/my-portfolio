'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative block rounded-xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:border-white/10"
      whileHover={{ scale: 1.02 }}
      style={{
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${project.accent}20, 0 0 60px ${project.accent}10`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 font-mono text-xs font-medium"
            style={{ backgroundColor: `${project.accent}15`, color: project.accent }}
          >
            {project.category}
          </span>
          <span
            className="rounded-full px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
          >
            {project.status}
          </span>
        </div>
        <ExternalLink
          size={16}
          className="shrink-0 text-muted transition-colors group-hover:text-accent"
        />
      </div>

      <h3
        className="mb-3 text-xl font-bold text-white"
      >
        {project.title}
      </h3>

      <p className="mb-6 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map(tech => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
