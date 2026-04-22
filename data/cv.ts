import { experiences } from './experience';

export const personalInfo = {
  name: 'William Mays',
  title: 'Senior Front-End Engineer',
  phone: '+447833221113',
  email: 'mayswill3@hotmail.co.uk',
  linkedin: 'https://www.linkedin.com/in/william-mays-4926b186/',
  location: 'London, UK',
  website: 'https://www.mayswill.com',
};

export const summary
  = 'Senior Front-End Engineer with 10+ years of experience across all stages of the development cycle for dynamic web projects. Skilled in React, Next.js, TypeScript, and React Native, with a strong background in agile methodologies. Currently building products as a solo founder — including an AI-powered prediction market and a dating app with 1,000+ users. Passionate about turning ideas into fast, accessible, well-crafted products.';

export type CVExperienceEntry = {
  period: string;
  role: string;
  company: string;
  location: string;
  intro?: string;
  bullets: string[];
  technologies: string[];
};

export const founderEntry: CVExperienceEntry = {
  period: '2024 — Present',
  role: 'Founder & Lead Developer',
  company: 'Self-Employed',
  location: 'London, UK',
  intro: 'Building products as a solo founder and taking on freelance frontend projects:',
  bullets: [
    'Built Eroteme (eroteme.io): an AI-powered prediction market on Polygon where five AI models analyse every market, with peer-to-peer USDC settlement and smart contract architecture.',
    'Built Pop the Balloon (poptheballoonapp.com): a dating app for iOS and Android with 1,000+ active users, featuring real-time matching, AI-powered conversation summaries, and a unique interaction mechanic.',
    'Designed and developed Bunnies on the Green (bunniesonthegreen.co.uk): a full website for a Montessori-influenced day nursery in London, featuring gallery, admissions, and Ofsted integration.',
    'Designed and developed Born 4 Sport (born4sport.co.uk): a mobile-first website for a sports coaching brand showcasing coaching programmes.',
  ],
  technologies: ['Next.js', 'TypeScript', 'React Native', 'Solidity', 'Supabase', 'Tailwind', 'Expo', 'Vercel'],
};

export const cvExperiences: CVExperienceEntry[] = [
  founderEntry,
  ...experiences.map((e) => {
    const bullets = [e.description];
    return {
      period: e.period,
      role: e.role,
      company: e.company,
      location: e.company === 'University of East Anglia'
        ? 'Norwich, UK'
        : e.company === 'Anglia Ruskin University'
          ? 'Chelmsford, UK'
          : 'London, UK',
      bullets,
      technologies: e.technologies,
    };
  }),
];

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'University of Hertfordshire',
  year: '2014',
  location: 'Hatfield, UK',
};

export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'React Native',
  'Node.js',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'Sass',
  'Redux',
  'GraphQL',
  'Solidity',
  'Supabase',
  'Git',
  'Responsive Design',
  'Agile / Scrum',
];

export const strengths = [
  {
    title: 'Product Building',
    description: 'Proven ability to take products from zero to launch as a solo founder, handling architecture, development, and deployment end-to-end.',
  },
  {
    title: 'System Modernization',
    description: 'Ability to upgrade and modernize legacy systems, ensuring seamless transitions to contemporary frameworks.',
  },
  {
    title: 'Operational Efficiency',
    description: 'Proven track record of developing solutions that significantly enhance operational efficiency, such as real-time applications and internal tools.',
  },
  {
    title: 'Team Collaboration',
    description: 'Experience working with cross-functional teams to align systems and processes, highlighting strong collaborative and integration skills.',
  },
];

export const certification = 'BCS, The Chartered Institute for IT';

export const passions = 'Enjoy building apps and products, with interests spanning AI, Web3, and the financial sector. Qualified boxing trainer. Always eager to learn new technologies and techniques.';
