'use client';

import { motion } from 'framer-motion';

import type { ExperienceEntry } from '@/data/experience';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ExperienceItem({
  entry,
  isLast,
}: {
  entry: ExperienceEntry;
  isLast: boolean;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 size-3 rounded-full border-2 border-accent bg-background" />

      {/* Timeline line */}
      {!isLast && (
        <div className="absolute bottom-0 left-[5px] top-5 w-px bg-accent/20" />
      )}

      <div className="pb-12">
        <p className="mb-1 font-mono text-xs uppercase tracking-wider text-muted">
          {entry.period}
        </p>

        <h3 className="mb-1 text-lg font-bold text-white">
          {entry.role}
        </h3>

        <a
          href={entry.url}
          target="_blank"
          rel="noreferrer noopener"
          className="mb-3 inline-block text-sm text-accent transition-colors hover:text-accent/80"
        >
          {entry.company}
        </a>

        <p className="mb-4 text-sm leading-relaxed text-muted">
          {entry.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {entry.technologies.map(tech => (
            <span
              key={tech}
              className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
