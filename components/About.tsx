'use client';

import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-24"
    >
      <p className="mb-8 font-mono text-sm uppercase tracking-widest text-accent">
        / About
      </p>

      <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
        <p>
          I&apos;m a developer who is always thinking of new ideas, constantly seeking opportunities to solve real-world problems through technology. My passion lies in taking these ideas and turning them into robust, well-crafted solutions that are both effective and user-friendly.
        </p>
        <p>
          Beyond client work, I&apos;m a solo founder — currently building
          {' '}
          <a
            href="https://eroteme.io/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent transition-colors hover:text-accent/80"
          >
            Eroteme
          </a>
          , an AI-powered prediction market on Polygon, and
          {' '}
          <a
            href="https://www.poptheballoonapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent transition-colors hover:text-accent/80"
          >
            Pop the Balloon
          </a>
          , a dating app with 1,000+ users on iOS and Android. I&apos;m also a qualified boxing trainer and manage a property portfolio across London, Essex, and Kent.
        </p>
      </div>
    </motion.section>
  );
}
