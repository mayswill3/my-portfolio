import type { Metadata } from 'next';

import PrintButton from '@/components/PrintButton';
import {
  certification,
  cvExperiences,
  education,
  passions,
  personalInfo,
  skills,
  strengths,
  summary,
} from '@/data/cv';

export const metadata: Metadata = {
  title: 'William Mays — CV',
  description: 'CV for William Mays, Senior Front-End Engineer and Founder.',
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-gray-300 pb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
      {children}
    </h2>
  );
}

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Print button - hidden when printing */}
      <div className="no-print fixed right-6 top-6 z-50">
        <PrintButton />
      </div>

      {/* CV Content */}
      <div className="mx-auto max-w-[850px] px-8 py-10 font-sans print:max-w-none print:p-0">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {personalInfo.name}
          </h1>
          <p className="mt-1 text-lg font-medium text-emerald-600">
            {personalInfo.title}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600">
            <span>
              {personalInfo.phone}
            </span>
            <a href={`mailto:${personalInfo.email}`} className="underline decoration-gray-300 hover:text-emerald-600">
              {personalInfo.email}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer noopener" className="underline decoration-gray-300 hover:text-emerald-600">
              LinkedIn
            </a>
            <span>
              {personalInfo.location}
            </span>
          </div>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-[1fr_280px] gap-8 print:gap-6">
          {/* Left column — main content */}
          <div className="min-w-0">
            {/* Summary */}
            <section className="mb-6">
              <SectionHeading>Summary</SectionHeading>
              <p className="text-sm leading-relaxed text-gray-700">
                {summary}
              </p>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <SectionHeading>Experience</SectionHeading>
              <div className="space-y-5">
                {cvExperiences.map(entry => (
                  <div key={`${entry.company}-${entry.period}`} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="text-sm font-bold text-gray-900">
                        {entry.role}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-3 text-sm">
                      <span className="font-medium text-emerald-600">
                        {entry.company}
                      </span>
                      <span className="text-gray-500">
                        {entry.period}
                      </span>
                      <span className="text-gray-400">
                        {entry.location}
                      </span>
                    </div>
                    {entry.intro && (
                      <p className="mt-1.5 text-sm text-gray-700">
                        {entry.intro}
                      </p>
                    )}
                    <ul className="mt-1.5 space-y-1">
                      {entry.bullets.map(bullet => (
                        <li key={bullet.slice(0, 40)} className="flex text-sm text-gray-700">
                          <span className="mr-2 mt-1.5 size-1 shrink-0 rounded-full bg-gray-400" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="break-inside-avoid">
              <SectionHeading>Education</SectionHeading>
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap gap-x-3 text-sm">
                  <span className="font-medium text-emerald-600">
                    {education.institution}
                  </span>
                  <span className="text-gray-500">
                    {education.year}
                  </span>
                  <span className="text-gray-400">
                    {education.location}
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Right column — sidebar */}
          <div className="min-w-0">
            {/* Strengths */}
            <section className="mb-6">
              <SectionHeading>Strengths</SectionHeading>
              <div className="space-y-3">
                {strengths.map(s => (
                  <div key={s.title}>
                    <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-gray-600">{s.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-6">
              <SectionHeading>Skills</SectionHeading>
              <div className="flex flex-wrap gap-1.5">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 print:border print:border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Certification */}
            <section className="mb-6">
              <SectionHeading>Certification</SectionHeading>
              <p className="text-sm text-gray-700">{certification}</p>
            </section>

            {/* Passions */}
            <section>
              <SectionHeading>Passions</SectionHeading>
              <p className="text-xs leading-relaxed text-gray-600">{passions}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
