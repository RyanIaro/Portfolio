'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useLanguage } from '../lib/LanguageContext';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [ mounted, setMounted ] = useState(false);
  const [ scrolled, setScrolled ] = useState(false);
  const [ menuOpen, setMenuOpen ] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = theme === 'dark';

  const NAV_LINKS = [
    { label: t.nav.about,      id: 'about' },
    { label: t.nav.skills,     id: 'skills' },
    { label: t.nav.projects,   id: 'projects' },
    { label: t.nav.experience, id: 'experience' },
    { label: t.nav.contact,    id: 'contact' },
  ] as const;

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLang = () => setLang(lang === 'en' ? 'fr' : 'en');

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-400
        ${scrolled
          ? 'border-b border-white/[0.07] dark:border-white/[0.07] backdrop-blur-md bg-background/80'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="max-w-290 mx-auto px-8 lg:h-18 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-baseline gap-0 group"
        >
          <span className="font-syne font-extrabold lg:text-2xl text-2l tracking-tight text-foreground transition-colors">
            Ryan Iaro
          </span>
          <span className="text-accent text-4xl leading-none mb-0.5 transition-transform group-hover:scale-130 duration-200">
            .
          </span>
        </button>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-link font-outfit text-[17px] tracking-wide text-muted hover:text-foreground transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-muted" />

          {/* Language toggle */}
          {mounted && (
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="w-[37px] h-[37px] rounded-full flex items-center justify-center
                bg-muted/20 hover:bg-muted/50 font-outfit font-bold text-[12px] tracking-widest
                text-muted hover:text-accent transition-all duration-200"
            >
              {lang === 'en' ? 'EN' : 'FR'}
            </button>
          )}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="w-[37px] h-[37px] rounded-full flex items-center justify-center
                bg-muted/20 hover:bg-muted/50
                transition-all duration-200 hover:rotate-20 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          )}

          {/* Resume CTA */}
          <a
            href={t.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-outfit text-[15px] text-center font-medium
              tracking-[0.06em] uppercase lg:w-24 px-[18px] py-2 rounded-sm border
              border-muted/80 text-foreground transition-all duration-200
              hover:bg-accent hover:text-[#080808] hover:border-accent"
          >
            {t.nav.resume}
          </a>
        </div>

        {/* ── Mobile: lang + theme + hamburger ── */}
        <div className="flex md:hidden items-center gap-4">

          {/* Language toggle */}
          {mounted && (
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="font-outfit font-bold text-[12px] tracking-widest text-muted hover:text-accent transition-colors duration-200"
            >
              {lang === 'en' ? 'EN' : 'FR'}
            </button>
          )}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="w-8 h-8 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] items-end"
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-[6.5px]' : 'w-5'}`} />
            <span className={`block h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-3.5'}`} />
            <span className={`block h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-[6.5px]' : 'w-5'}`} />
          </button>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-[1.5px] w-[35%]" style={{ background: 'linear-gradient(90deg, #E8FF47 60%, transparent)' }} />

      {/* ── Mobile menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-background px-8 py-6 flex flex-col gap-5 border-t border-white/6">
          {NAV_LINKS.map(({ label, id }, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-outfit text-sm tracking-wide text-muted hover:text-foreground text-left transition-colors duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {label}
            </button>
          ))}
          <a
            href={t.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-outfit text-xs font-medium tracking-[0.06em] uppercase mt-2
              px-4 py-2 rounded-sm border border-muted text-foreground text-center
              hover:bg-accent hover:text-[#080808] hover:border-accent transition-all duration-200 w-fit"
          >
            {t.nav.resume}
          </a>
        </div>
      </div>
    </nav>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6C925" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" className="text-muted">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}