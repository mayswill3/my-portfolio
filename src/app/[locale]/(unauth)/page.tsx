import Image from 'next/image';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Index = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('Index');

  return (
    <>
      {/* <p>
        {`Follow `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://twitter.com/ixartz"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Ixartz on Twitter
        </a>
        {` for updates and more information about the boilerplate.`}
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for Your Next.js Project with Tailwind CSS
      </h2>
      <p className="text-base">
        Next.js Boilerplate is a developer-friendly starter code for Next.js projects, built with Tailwind CSS and TypeScript.
        {' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>
        {' '}
        Designed with developer experience in mind, it includes:
      </p>
      <ul className="mt-3 text-base">
        <li>🚀 Next.js with App Router support</li>
        <li>🔥 TypeScript for type checking</li>
        <li>💎 Tailwind CSS integration</li>
        <li>
          🔒 Authentication with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://clerk.com?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=nextjs-boilerplate"
          >
            Clerk
          </a>
          {' '}
          (includes passwordless, social, and multi-factor auth)
        </li>
        <li>📦 ORM with DrizzleORM (PostgreSQL, SQLite, MySQL support)</li>
        <li>
          🌐 Multi-language support (i18n) with next-intl and
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://l.crowdin.com/next-js"
          >
            Crowdin
          </a>
        </li>
        <li>🔴 Form handling (React Hook Form) and validation (Zod)</li>
        <li>📏 Linting and formatting (ESLint, Prettier)</li>
        <li>🦊 Git hooks and commit linting (Husky, Commitlint)</li>
        <li>🦺 Testing suite (Vitest, React Testing Library, Playwright)</li>
        <li>🎉 Storybook for UI development</li>
        <li>
          🚨 Error monitoring (
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://sentry.io/for/nextjs/?utm_source=github&amp;utm_medium=paid-community&amp;utm_campaign=general-fy25q1-nextjs&amp;utm_content=github-banner-nextjsboilerplate-logo"
          >
            Sentry
          </a>
          ) and logging (Pino.js)
        </li>
        <li>🖥️ Monitoring as Code (Checkly)</li>
        <li>🤖 SEO optimization (metadata, JSON-LD, Open Graph tags)</li>
        <li>⚙️ Development tools (VSCode config, bundler analyzer, changelog generation)</li>
      </ul>
      <p className="text-base">
        Our sponsors&apos; exceptional support has made this project possible.
        Their services integrate seamlessly with the boilerplate, and we
        recommend trying them out.
      </p> */}
      {/* <h2 className="mt-5 text-2xl font-bold">{t('sponsors_title')}</h2>
      <Sponsors /> */}
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        {/* <h2 className="text-3xl font-bold mb-4">About Me</h2> */}
        <p className="mb-4">
          I'm a developer who is always thinking of new ideas, constantly seeking opportunities to solve real-world problems through technology. My passion lies in taking these ideas and turning them into robust, well-crafted solutions that are both effective and user-friendly.
        </p>

        <p className="mb-4">
          Currently, I'm working on&nbsp;
          <a
            href="https://www.crowdfighter.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            aria-label="Senior Frontend Engineer · University of East Anglia (opens in a new tab)"
          >
            Crowdfighter
          </a>
          , a platform designed to empower professional fighters to crowdfund their fights. I'm focused on developing major plans to take Crowdfighter further, with the aim of expanding its reach and making a significant impact in the world of boxing.
        </p>

        <p className="mb-4">In the past, I've had the opportunity to develop software across a variety of settings — including advertising agencies, large corporations, start-ups, and small digital product studios. I also have a keen interest in cryptocurrency and am fascinated by how it could impact our daily lives in the future.</p>

        <p className="mb-4">
          In my spare time, you can usually find me helping out at the boxing gym, playing computer games, or exploring new places through travel.
        </p>
      </section>

      <section id="experience" className="mb-16">
        {/* <h2 className="text-3xl font-bold mb-4">Experience</h2> */}
        <div>
          <ol className="group/list">
            {/* Experience Item 1 */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                  2024 — 2024
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://www.landworth.org/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="Senior Frontend Engineer, Landworth"
                      >
                        Senior Frontend Engineer · Landworth
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    at Landworth Developing and maintaining responsive web interfaces, enhancing user experience through modern frontend technologies.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Figma
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience Item 2 */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to 2024">
                  2022 — 2024
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://www.uea.ac.uk/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="Senior Frontend Engineer · University of East Anglia (opens in a new tab)"
                      >
                        Senior Frontend Engineer · University of East Anglia
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    I led the development of the 'Course Catalogue' system, streamlining course creation and student application processes for over 10,000 students. By collaborating with cross-functional teams to ensure seamless integration with legacy systems, we successfully reduced application processing time by 30%.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        StoryBlock
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Algolia
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to 2024">
                  2022 — 2022
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://www.nimbletank.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="Senior Frontend Engineer · University of East Anglia (opens in a new tab)"
                      >
                        Senior Frontend Engineer · Nimbletank
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    I developed an advertising platform for NatWest that connects customers with business experts across a range of topics and categories, providing valuable insights and personalized guidance.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Theme UI
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        E2E Testing Cypress
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Storybook Js
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to 2024">
                  2021 — 2022
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://www.nimbletank.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="Senior Frontend Engineer · University of East Anglia (opens in a new tab)"
                      >
                        Senior Frontend Engineer · Future Platforms
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    I developed an advertising platform for NatWest that connects customers with business experts across a range of topics and categories, providing valuable insights and personalized guidance.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Material UI
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Redux
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience Item 3 */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to 2024">
                  2018 — 2020
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://www.entaingroup.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="Senior Frontend Engineer · Entain (opens in a new tab)"
                      >
                        Senior Frontend Engineer · Entain
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    I spearheaded the upgrade of a 20-year-old till system to a modern real-time application for handling bets and payouts. Additionally, I developed and launched multiple applications that enabled internal teams to receive real-time updates, significantly improving operational efficiency.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Sass
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Redux
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Experience Item 4 */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to 2024">
                  2017 — 2018
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://www.oliverwyman.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="Senior Frontend Engineer · University of East Anglia (opens in a new tab)"
                      >
                        Senior Frontend Engineer · Oliver Wyman
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    I worked on various projects, including Enercity, where I developed key features for a gas and electric company in Hannover using Angular 2; Oliver Wyman's main site, where I made improvements using KO.js; and Credit Studio, where I developed a banking app for Oliver Wyman.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        KOjs
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        VueJS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Angular 2
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* Experience Item 5 */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to 2024">
                  2015 — 2017
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://www.thewhitecompany.com/uk/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="Frontend Engineer · The White Company  (opens in a new tab)"
                      >
                        Frontend Engineer · The White Company
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    I played a key role in the implementation and launch of the Hybris ecommerce CMS platform. Additionally, I managed the business-as-usual (BAU) side, updating and creating site content while ensuring an optimal user experience across multiple devices.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Hybris CMS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        HTML & CSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        CSS
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JQuery
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* Experience Item 6 */}
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to 2024">
                  2014 — 2014
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        href="https://www.hogarth.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        aria-label="Frontend Engineer · Hogarth Worldwide (opens in a new tab)"
                      >
                        Junior FrontEnd Developer/QA Tester · Hogarth Worldwide
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    I developed and tested pages for top-tier clients, including Betfair, Santander, and Pfizer. Additionally, I delivered digital marketing solutions while taking on a combined role of QA Tester and Front-End Developer.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        HTML 5
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Photoshop
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Add more experience items as needed */}
          </ol>

        </div>
      </section>

      <section id="projects" className="mb-16">
        {/* <h2 className="text-3xl font-bold mb-4">Projects</h2> */}
        <div>
          <ul className="group/list">
            {/* Project Item 1 */}
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      href="https://www.crowdfighter.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      aria-label="Crowdfighter (opens in a new tab)"
                    >
                      Crowdfighter
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Crowdfighter is a platform that allows fans to fund combat sports events by backing specific fighters. If a fight reaches its funding goal, it goes ahead, and backers receive rewards like exclusive content or tickets.
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        MongoDB
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        TypeScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Tailwind
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Railway
                      </div>
                    </li>
                  </ul>
                </div>
                <Image
                  alt="Build a Spotify Connected App Newline course marketing card"
                  loading="lazy"
                  width="200"
                  height="48"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src="/assets/images/crowdfighter.png"
                  style={{ color: 'transparent' }}
                />
              </div>
            </li>

            {/* Project Item 2 */}
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      href="https://eroteme.io/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      aria-label="Eroteme (opens in a new tab)"
                    >
                      Eroteme
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Eroteme.io is a decentralized platform that enables users to trade valuable information through question-and-answer markets. Users can mint and sell informative NFTs, ask questions, and participate in a marketplace to collect and sell knowledge.
                  </p>
                  {/* <a
                href="https://github.com/bchiang7/spotify-profile"
                target="_blank"
                rel="noreferrer noopener"
                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                aria-label="658 stars on GitHub (opens in a new tab)"
              >
                <span>GitHub Stars: 658</span>
              </a> */}
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        React
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Tailwind
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Solidity
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Next.js
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        JavaScript
                      </div>
                    </li>
                    <li className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        Vercel
                      </div>
                    </li>
                  </ul>
                </div>
                <Image
                  alt="Eroteme"
                  loading="lazy"
                  width="200"
                  height="48"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src="/assets/images/eroteme.png"
                  style={{ color: 'transparent' }}
                />
              </div>
            </li>

            {/* Add more project items as needed */}
          </ul>
        </div>
      </section>

      <section id="contact">
        <h2 className="mb-4 text-3xl font-bold">Contact</h2>
        <p>If you'd like to get in touch, feel free to reach out to me.</p>
        <p>Email: mayswill3@hotmail.co.uk</p>
      </section>

    </>
  );
};

export default Index;
