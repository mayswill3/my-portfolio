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
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; 2025 William Mays
        </p>

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
      </div>
    </footer>
  );
}
