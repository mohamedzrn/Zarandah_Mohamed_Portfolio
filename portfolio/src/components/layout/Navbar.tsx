import { useState, useEffect } from 'react';
import type { Theme } from '../../types';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 dark:bg-warm-950/95 backdrop-blur-md shadow-sm border-b border-cream-border/50 dark:border-warm-700/50'
          : 'bg-cream dark:bg-warm-950'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve"
          >
            <span className="font-bold text-xl tracking-tight">
              <span className="text-mauve">Z</span>
              <span className="text-[#333] dark:text-white">RN</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#555] dark:text-warm-300 hover:text-mauve dark:hover:text-mauve-faint hover:bg-mauve/10 dark:hover:bg-mauve/10 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Resume download */}
            <a
              href="/Mohamed_Zarandah_Resume.pdf"
              download
              aria-label="Download resume"
              className="hidden md:flex p-2 rounded-lg text-[#777] dark:text-warm-400 hover:text-mauve dark:hover:text-mauve-faint hover:bg-mauve/10 dark:hover:bg-mauve/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
              </svg>
            </a>

            {/* Theme toggle */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg text-[#777] dark:text-warm-400 hover:text-mauve dark:hover:text-mauve-faint hover:bg-mauve/10 dark:hover:bg-mauve/10 transition-colors"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Hire Me */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-mauve hover:bg-mauve-dark text-cream rounded-lg transition-colors"
            >
              Hire Me
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="md:hidden p-2 rounded-lg text-[#777] dark:text-warm-400 hover:bg-mauve/10 dark:hover:bg-mauve/10 transition-colors"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-cream-border dark:border-warm-700 bg-cream dark:bg-warm-950 pb-4">
            <ul className="flex flex-col gap-1 pt-3 px-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block px-3 py-2.5 text-sm font-medium text-[#555] dark:text-warm-300 hover:text-mauve dark:hover:text-mauve-faint hover:bg-mauve/10 dark:hover:bg-mauve/10 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Mohamed_Zarandah_Resume.pdf"
                  download
                  onClick={handleNavClick}
                  className="block px-3 py-2.5 text-sm font-medium text-[#555] dark:text-warm-300 hover:text-mauve dark:hover:text-mauve-faint hover:bg-mauve/10 dark:hover:bg-mauve/10 rounded-md transition-colors"
                >
                  Download Resume
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="block px-3 py-2.5 text-sm font-medium text-center bg-mauve hover:bg-mauve-dark text-cream rounded-lg transition-colors"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
