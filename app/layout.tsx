import './globals.css';

import type { Metadata } from 'next';
import { DM_Sans, Space_Mono } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'William Mays \u2014 Senior Front-End Engineer',
  description:
    'Senior Front-End Engineer with 7+ years building digital products. Founder of Eroteme and Pop the Balloon.',
  openGraph: {
    title: 'William Mays \u2014 Senior Front-End Engineer',
    description:
      'Senior Front-End Engineer with 7+ years building digital products.',
    url: 'https://www.mayswill.com',
    siteName: 'William Mays',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mayswill3',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body className="bg-background font-sans text-body antialiased">
        {children}
      </body>
    </html>
  );
}
