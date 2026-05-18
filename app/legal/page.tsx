import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Company Information | Mayswill Limited',
  description:
    'Company registration details, registered office address, and legal information for Mayswill Limited.',
};

export default function LegalPage() {
  return (
    <main>
      <Navigation />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <p className="mb-8 font-mono text-sm uppercase tracking-widest text-accent">
          / Company Information
        </p>

        <h1 className="mb-12 text-4xl font-bold text-white md:text-5xl">
          Mayswill Limited
        </h1>

        <div className="space-y-10 text-lg leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              About
            </h2>
            <p>
              Mayswill Limited is a London-based software studio specialising in
              AI-powered consumer products and bespoke front-end engineering. We
              design, build, and ship digital products for businesses of all
              sizes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Company Details
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-body">Company Name</dt>
                <dd>Mayswill Limited</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-body">Company Number</dt>
                <dd>13191730</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-body">Incorporated</dt>
                <dd>10 February 2021</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-body">Jurisdiction</dt>
                <dd>England and Wales</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Registered Office
            </h2>
            <address className="not-italic">
              14b Kenworthy Road
              <br />
              London
              <br />
              England
              <br />
              E9 5TD
            </address>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Contact
            </h2>
            <p>
              <a
                href="mailto:mayswill3@hotmail.co.uk"
                className="text-accent transition-colors hover:text-accent/80"
              >
                mayswill3@hotmail.co.uk
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://www.mayswill.com"
                className="text-accent transition-colors hover:text-accent/80"
              >
                www.mayswill.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
