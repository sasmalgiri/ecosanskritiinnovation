'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import FluxMandala from './FluxMandala';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/founder', label: 'Founder & Team' },
  { href: '/legal/terms', label: 'Legal' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="wrap nav__row">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <FluxMandala animated={false} className="brand__mark" title="EcoSanskriti Innovations" />
          <span className="brand__name">
            Eco<span>Sanskriti</span>
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="nav__links" data-open={open}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="nav__link"
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="nav__cta">
              <Link href="/contact" className="btn btn--gold" onClick={() => setOpen(false)}>
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
