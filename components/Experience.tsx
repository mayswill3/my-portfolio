'use client';

import { motion } from 'framer-motion';

import { experiences } from '@/data/experience';

import ExperienceItem from './ExperienceItem';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
          }}
          className="mb-12 font-mono text-sm uppercase tracking-widest text-accent"
        >
          / Experience
        </motion.p>

        <div className="relative">
          {experiences.map((entry, index) => (
            <ExperienceItem
              key={entry.company}
              entry={entry}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
