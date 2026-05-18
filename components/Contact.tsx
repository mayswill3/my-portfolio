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
        Whether you&apos;re looking for a development partner, have a project in mind, or just want to learn more about what we do — we&apos;d love to hear from you.
      </p>

      <a
        href="mailto:mayswill3@hotmail.co.uk"
        className="mb-8 inline-block font-mono text-2xl text-accent transition-colors hover:text-accent/80 md:text-3xl"
      >
        mayswill3@hotmail.co.uk
      </a>
    </motion.section>
  );
}
