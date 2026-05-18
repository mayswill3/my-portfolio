export type Project = {
  title: string;
  url: string;
  category: string;
  status: string;
  description: string;
  tech: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    title: 'Eroteme',
    url: 'https://eroteme.io/',
    category: 'AI \u00B7 Web3 \u00B7 Prediction Market',
    status: 'LIVE \u00B7 BETA',
    description:
      'Eroteme is an AI-powered prediction market built on Polygon. Five AI models (Claude, GPT-4, Gemini, Grok, and Perplexity) analyse every market. If the AI is wrong, users get refunded. Peer-to-peer betting with instant USDC settlement, no house edge. Designed, built, and operated by Mayswill Limited.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Polygon', 'USDC', 'Solidity', 'Vercel'],
    accent: '#00ff41',
  },
  {
    title: 'Pop the Balloon',
    url: 'https://www.poptheballoonapp.com/',
    category: 'Mobile App \u00B7 Dating',
    status: 'LIVE \u00B7 1,000+ Users',
    description:
      'Pop the Balloon is a mobile dating app for iOS and Android with over 1,000 active users. Developed and operated by Mayswill Limited. Features include real-time matching, AI-powered conversation summaries, and a unique balloon-pop interaction mechanic that replaces the swipe.',
    tech: ['React Native', 'Supabase', 'TypeScript', 'Vercel', 'Resend', 'Expo'],
    accent: '#ff6b6b',
  },
  {
    title: 'Bunnies on the Green',
    url: 'https://www.bunniesonthegreen.co.uk/',
    category: 'Client Work \u00B7 Web Design',
    status: 'LIVE',
    description:
      'Full website design and build for Bunnies on the Green, a Montessori-influenced day nursery in Stockwell, London, established in 1991. We built this with Next.js, featuring gallery, admissions information, Ofsted report integration, and a warm, child-friendly UI.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    accent: '#4ade80',
  },
  {
    title: 'Born 4 Sport',
    url: 'https://www.born4sport.co.uk/',
    category: 'Client Work \u00B7 Sports',
    status: 'LIVE',
    description:
      'Website design and development for Born 4 Sport, a sports coaching brand with the motto \u201CBelieve, Achieve, Succeed.\u201D We built a high-energy, mobile-first React application to showcase their coaching programmes and engage young athletes and their parents.',
    tech: ['React', 'JavaScript', 'CSS'],
    accent: '#3b82f6',
  },
];
