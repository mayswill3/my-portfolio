'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('RootLayout');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* <DemoBanner /> */}
      {/* <BaseTemplate
        leftNav={(
          <>
            <li>
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('home_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('about_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/counter/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('counter_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('portfolio_link')}
              </Link>
            </li>
            <li>
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </>
        )}
        rightNav={(
          <>
            <li>
              <Link
                href="/sign-in/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('sign_in_link')}
              </Link>
            </li>

            <li>
              <Link
                href="/sign-up/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t('sign_up_link')}
              </Link>
            </li>

            <li>
              <LocaleSwitcher />
            </li>
          </>
        )}
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate> */}
      <div className="mx-auto flex h-screen min-h-screen max-w-screen-xl flex-col px-6 py-12 font-sans md:px-12 md:py-20 lg:flex-row lg:px-24 lg:py-0">
        <div className="sticky top-0 flex h-auto w-full flex-col bg-gray-800 p-6 py-12 text-white lg:h-screen lg:w-6/12 lg:py-24">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl lg:text-5xl">William Mays</h1>
            <h2 className="mt-3 text-base font-medium tracking-tight text-slate-200 sm:text-lg lg:text-xl">Front End Engineer</h2>
            <p className="mt-4 max-w-xs leading-normal">I build digital experiences for the web, focusing on turning unique ideas into accessible, well-crafted projects.</p>
            <ul className="mt-8 w-max lg:mt-16">
              <li>
                <Link onClick={e => handleScroll(e, 'about')} href="#about" className="active group flex items-center py-2 lg:py-3">
                  <span className="nav-indicator mr-2 h-px w-6 bg-slate-600 transition-all group-hover:w-12 group-hover:bg-slate-200 group-focus-visible:w-12 group-focus-visible:bg-slate-200 motion-reduce:transition-none lg:mr-4 lg:w-8 lg:group-hover:w-16 lg:group-focus-visible:w-16"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                </Link>
              </li>
              <li>
                <Link onClick={e => handleScroll(e, 'experience')} href="#experience" className="active group flex items-center py-2 lg:py-3">
                  <span className="nav-indicator mr-2 h-px w-6 bg-slate-600 transition-all group-hover:w-12 group-hover:bg-slate-200 group-focus-visible:w-12 group-focus-visible:bg-slate-200 motion-reduce:transition-none lg:mr-4 lg:w-8 lg:group-hover:w-16 lg:group-focus-visible:w-16"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                </Link>
              </li>
              <li>
                <Link onClick={e => handleScroll(e, 'projects')} href="#projects" className="active group flex items-center py-2 lg:py-3">
                  <span className="nav-indicator mr-2 h-px w-6 bg-slate-600 transition-all group-hover:w-12 group-hover:bg-slate-200 group-focus-visible:w-12 group-focus-visible:bg-slate-200 motion-reduce:transition-none lg:mr-4 lg:w-8 lg:group-hover:w-16 lg:group-focus-visible:w-16"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                </Link>
              </li>
              <li>
                <Link onClick={e => handleScroll(e, 'contact')} href="#contact" className="active group flex items-center py-2 lg:py-3">
                  <span className="nav-indicator mr-2 h-px w-6 bg-slate-600 transition-all group-hover:w-12 group-hover:bg-slate-200 group-focus-visible:w-12 group-focus-visible:bg-slate-200 motion-reduce:transition-none lg:mr-4 lg:w-8 lg:group-hover:w-16 lg:group-focus-visible:w-16"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-auto">
            <ul className="ml-1 mt-4 flex items-center lg:mt-8" aria-label="Social media">
              <li className="mr-4 shrink-0 text-xs lg:mr-5">
                <a
                  className="group block hover:text-teal-300"
                  href="https://github.com/bchiang7"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub (opens in a new tab)"
                  title="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <div
                    className="mx-auto mt-2 size-6 bg-current transition-colors duration-300 group-hover:text-teal-300"
                    style={{
                      mask: `url('/assets/images/github.svg') no-repeat center`,
                      WebkitMask: `url('/assets/images/github.svg') no-repeat center`,
                    }}
                  />
                </a>
              </li>
              <li className="mr-4 shrink-0 text-xs lg:mr-5">
                <a
                  className="group block hover:text-teal-300"
                  href="https://www.linkedin.com/in/bchiang7/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in a new tab)"
                  title="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <div
                    className="mx-auto mt-2 size-6 bg-current transition-colors duration-300 group-hover:text-teal-300"
                    style={{
                      mask: `url('/assets/images/linkedin.svg') no-repeat center`,
                      WebkitMask: `url('/assets/images/linkedin.svg') no-repeat center`,
                    }}
                  />
                </a>
              </li>
              <li className="mr-4 shrink-0 text-xs lg:mr-5">
                <a
                  className="group block hover:text-teal-300"
                  href="https://instagram.com/bchiang7"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram (opens in a new tab)"
                  title="Instagram"
                >
                  <span className="sr-only">Instagram</span>
                  <div
                    className="mx-auto mt-2 size-6 bg-current transition-colors duration-300 group-hover:text-teal-300"
                    style={{
                      mask: `url('/assets/images/instagram.svg') no-repeat center`,
                      WebkitMask: `url('/assets/images/instagram.svg') no-repeat center`,
                    }}
                  />
                </a>
              </li>
              <li className="mr-4 shrink-0 text-xs lg:mr-5">
                <a
                  className="group block hover:text-teal-300"
                  href="https://twitter.com/bchiang7"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Twitter (opens in a new tab)"
                  title="Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <div
                    className="mx-auto mt-2 size-6 bg-current transition-colors duration-300 group-hover:text-teal-300"
                    style={{
                      mask: `url('/assets/images/twitter.svg') no-repeat center`,
                      WebkitMask: `url('/assets/images/twitter.svg') no-repeat center`,
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-8 py-12 lg:py-24">{props.children}</main>
      </div>

    </>
  );
}
