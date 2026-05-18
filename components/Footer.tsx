import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/mayswill3', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/william-mays-4926b186/', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com/mayswill3', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/mayswill3/', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
              className="text-muted transition-colors hover:text-accent"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted">
          Mayswill Limited &middot; Company No. 13191730 &middot; Registered in England and Wales
          {' '}
          &middot;
          {' '}
          <a href="/legal" className="text-accent transition-colors hover:text-accent/80">
            Company Information
          </a>
        </p>

        <p className="text-sm text-muted">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Mayswill Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
