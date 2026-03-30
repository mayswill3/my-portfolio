'use client';

import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="py-24 text-center"
    >
      <p className="mb-8 font-mono text-sm uppercase tracking-widest text-accent">
        / Contact
      </p>

      <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
        Get In Touch
      </h2>

      <p className="mx-auto mb-10 max-w-lg text-lg text-muted">
        Whether you&apos;re interested in working together, hiring for a senior engineering role, or just want to talk — feel free to reach out.
      </p>

      <a
        href="mailto:mayswill3@hotmail.co.uk"
        className="mb-8 inline-block font-mono text-2xl text-accent transition-colors hover:text-accent/80 md:text-3xl"
      >
        mayswill3@hotmail.co.uk
      </a>

      <div className="mt-8">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/20"
        >
          View Full R&eacute;sum&eacute;
        </a>
      </div>
    </motion.section>
  );
}
