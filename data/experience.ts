export type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  url: string;
  description: string;
  technologies: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    period: '2024 — 2024',
    role: 'Senior Frontend Engineer',
    company: 'Landworth',
    url: 'https://www.landworth.org/',
    description:
      'Developing and maintaining responsive web interfaces, enhancing user experience through modern frontend technologies.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Figma'],
  },
  {
    period: '2022 — 2024',
    role: 'Senior Frontend Engineer',
    company: 'University of East Anglia',
    url: 'https://www.uea.ac.uk/',
    description:
      'Led the development of the \'Course Catalogue\' system, streamlining course creation and student application processes for over 10,000 students. Reduced application processing time by 30%.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'StoryBlock', 'Algolia'],
  },
  {
    period: '2022 — 2022',
    role: 'Senior Frontend Engineer',
    company: 'Nimbletank',
    url: 'https://www.nimbletank.com/',
    description:
      'Developed an advertising platform for NatWest that connects customers with business experts across a range of topics, providing valuable insights and personalised guidance.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Theme UI', 'Cypress', 'Storybook'],
  },
  {
    period: '2021 — 2022',
    role: 'Senior Frontend Engineer',
    company: 'Future Platforms',
    url: 'https://www.futureplatforms.com/',
    description:
      'Led the integration of Garashield Ltd\'s digital garage platform, migrating pages to a modern framework with a 25% improvement in user interaction. Also worked on aligning systems for EE\'s merger with BT.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Material UI', 'Redux'],
  },
  {
    period: '2018 — 2020',
    role: 'Senior Frontend Engineer',
    company: 'Entain',
    url: 'https://www.entaingroup.com/',
    description:
      'Spearheaded the upgrade of a 20-year-old till system to a modern real-time application for handling bets and payouts. Developed multiple internal real-time applications.',
    technologies: ['JavaScript', 'Sass', 'React', 'Redux'],
  },
  {
    period: '2017 — 2018',
    role: 'Senior Frontend Engineer',
    company: 'Oliver Wyman',
    url: 'https://www.oliverwyman.com/',
    description:
      'Worked on Enercity (gas & electric company, Angular 2), Oliver Wyman\'s main site (KO.js), and Credit Studio (banking app).',
    technologies: ['JavaScript', 'KOjs', 'VueJS', 'Angular 2'],
  },
  {
    period: '2015 — 2017',
    role: 'Frontend Engineer',
    company: 'The White Company',
    url: 'https://www.thewhitecompany.com/uk/',
    description:
      'Key role in the implementation and launch of the Hybris ecommerce CMS platform. Managed BAU content updates across multiple devices.',
    technologies: ['Hybris CMS', 'HTML', 'CSS', 'jQuery', 'JavaScript'],
  },
  {
    period: '2014 — 2014',
    role: 'Junior Frontend Developer / QA Tester',
    company: 'Hogarth Worldwide',
    url: 'https://www.hogarth.com/',
    description:
      'Developed and tested pages for clients including Betfair, Santander, and Pfizer. Combined QA Tester and Front-End Developer role.',
    technologies: ['HTML5', 'JavaScript', 'Photoshop'],
  },
];
