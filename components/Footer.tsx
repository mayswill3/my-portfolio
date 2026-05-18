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

        <div className="text-center text-sm text-muted">
          <p className="font-medium text-body">Mayswill Limited</p>
          <p>Company registered in England and Wales</p>
          <p>Company No. 13191730</p>
          <p>Registered office: 14b Kenworthy Road, London, England, E9 5TD</p>
        </div>

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
