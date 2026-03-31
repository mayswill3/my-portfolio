'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const techPills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Polygon/Web3', 'React Native'];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
        >
          Hello, I&apos;m William Mays
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Senior Front-End Engineer
          <br />
          <span className="text-accent">&amp; Founder</span>
          <span className="animate-blink ml-1 text-accent">|</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 max-w-2xl text-lg text-muted md:text-xl"
        >
          I build digital experiences for the web — turning ideas into fast, accessible, well-crafted products.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/20"
          >
            View Projects
          </a>
          <a
            href="/cv"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-body transition-all hover:border-white/40"
          >
            View R&eacute;sum&eacute;
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2"
        >
          {techPills.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={20} className="animate-bounce text-muted" />
        </a>
      </motion.div>
    </section>
  );
}
