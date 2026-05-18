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
          Mayswill Limited is a London-based software studio specialising in AI-powered consumer products and bespoke front-end engineering. We partner with businesses of all sizes to design, build, and ship digital products that are fast, accessible, and built to last.
        </p>
        <p>
          We also develop our own products. Our current portfolio includes
          {' '}
          <a
            href="https://eroteme.io/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent transition-colors hover:text-accent/80"
          >
            Eroteme
          </a>
          , an AI-powered prediction market built on Polygon with peer-to-peer USDC settlement, and
          {' '}
          <a
            href="https://www.poptheballoonapp.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent transition-colors hover:text-accent/80"
          >
            Pop the Balloon
          </a>
          , a mobile dating app with over 1,000 users on iOS and Android.
        </p>
        <p>
          Our expertise spans React, Next.js, TypeScript, React Native, and Web3, from concept through to deployment and ongoing support.
        </p>
      </div>
    </motion.section>
  );
}
