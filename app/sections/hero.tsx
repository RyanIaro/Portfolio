"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useLanguage } from "../lib/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const},
});

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 light:opacity-[0.1] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob — top left */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-120 h-120 rounded-full dark:opacity-[0.2] light:opacity-[0.4]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 flex flex-col-reverse md:flex-row items-center gap-16 md:gap-12">
        {/* ── LEFT: Text ── */}
        <div className="flex-1 flex flex-col items-start gap-6">
          {/* Role badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.18em] uppercase font-outfit text-muted">
              <span
                className="inline-block w-2 h-2 rounded-full bg-accent"
              />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Name */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-1 leading-none">
            <h1 className="font-syne font-bold md:text-[clamp(2.8rem,6vw,5rem)] text-[clamp(2rem,6vw,4rem)] text-foreground tracking-tight">
              Ryan Iaro
            </h1>
            <h1 className="font-syne font-bold md:text-[clamp(2.8rem,6vw,5rem)] text-[clamp(2rem,6vw,4rem)] tracking-tight text-accent">
              RASAMOELISON
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.35)}
            className="max-w-md text-[17px] leading-relaxed text-muted font-outfit"
          >
            {t.hero.tagline}{" "}
            <span className="text-foreground font-medium">
              {t.hero.taglineAccent}
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold font-outfit text-[#080808] bg-accent transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-95"
            >
              {t.hero.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ button>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold font-outfit text-foreground border border-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:scale-[1.03] active:scale-95"
            >
              {t.hero.ctaContact}
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.62)} className="flex items-center gap-5 pt-1">
            {[
              {
                label: "GitHub",
                href: "https://github.com/RyanIaro",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/ryan-iaro-rasamoelison-42a752278",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="25" height="25">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0 w-70 md:w-[320px] lg:w-90"
        >
          {/* Accent square — offset behind */}
          <div
            className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-accent opacity-[0.3]"
          />
          {/* Second offset layer */}
          <div
            className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border border-accent opacity-[0.4]"
          />

          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-3/4 shadow-2xl">
            <Image
              src="/avatar.jpg"
              alt="Ryan Iaro RASAMOELISON"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
            {/* Subtle gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, var(--color-background) 0%, transparent 100%)",
                opacity: 0.35,
              }}
            />
          </div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -left-8 top-10 flex items-center gap-2 px-3 py-2 rounded-lg bg-accent text-[#080808] text-[12px] font-semibold font-outfit shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#080808] animate-pulse" />
            {t.hero.openToWork}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase text-foreground font-outfit">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
}