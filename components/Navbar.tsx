'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/#projects', label: 'PROJECTS' },
  { href: '/cv', label: 'CV' },
  { href: '/#contact', label: 'CONTACT' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[var(--bg)]/90 border-b border-[var(--border)]">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-xl tracking-tight">
          MyatThiri<span className="text-accent">Maung</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            className="hidden sm:inline-flex bg-accent text-white font-bold text-sm px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            RESUME
          </a>
        </div>
      </nav>
    </header>
  );
}
