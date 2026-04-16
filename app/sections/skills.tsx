"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";

const core = [
  { name: "JavaScript", sub: "/TypeScript", color: "#F7DF1E", textColor: "#000" },
  { name: "React", sub: "UI Library", color: "#61DAFB", textColor: "#000" },
  { name: "Next.js", sub: "Framework", color: "var(--color-foreground)", textColor: "#080808" },
  { name: "Tailwind CSS", sub: "Styling", color: "#38BDF8", textColor: "#000" },
];

const recent = [
  { name: "React Native", note: "Mobile" },
  { name: "Expo", note: "Tooling" },
];

const explored = [
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "PostgreSQL" },
];

const foundations = ["HTML", "CSS", "Git", "GitHub"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-background py-32 overflow-hidden font-outfit"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[12px] font-semibold tracking-[0.22em] uppercase text-muted mb-6 flex items-center gap-3"
        >
          <span className="inline-block w-6 h-px bg-accent" />
          {t.skills.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="font-syne font-bold text-[clamp(2rem,4vw,3rem)] text-foreground leading-tight mb-16"
        >
          {t.skills.heading}{" "}
          <span className="text-accent">{t.skills.headingAccent}</span>
        </motion.h2>

        {/* ── CORE STACK ── */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-5"
          >
            {t.skills.core}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {core.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease }}
                className="group relative p-5 border border-muted/25 bg-muted/5 rounded-xl cursor-default overflow-hidden"
              >
                {/* Color dot */}
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full mb-4"
                  style={{ background: tech.color }}
                />
                <p className="font-syne font-bold text-[17px] text-foreground leading-tight mb-1">
                  {tech.name}
                </p>
                <p className="text-[12px] text-muted">
                  {tech.sub}
                </p>

                {/* Hover color wash */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${tech.color} 10%, transparent) 0%, transparent 70%)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RECENTLY LEARNED + EXPLORED side by side ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">

          {/* Recently learned */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-5"
            >
              {t.skills.recent}
            </motion.p>

            <div className="flex flex-col gap-3">
              {recent.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.4 + i * 0.08, ease }}
                  className="flex items-center justify-between px-5 py-4 border border-muted/25 bg-muted/5 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <p className="font-syne font-bold text-[15px] text-foreground">
                      {tech.name}
                    </p>
                    <span className="text-[11px] text-muted">
                      {tech.note}
                    </span>
                  </div>
                  {/* NEW badge */}
                  <span
                    className="text-[10px] font-bold tracking-[0.14em] px-2 py-0.5 border dark:border-accent/25 light:border-accent rounded-md text-accent dark:bg-accent/12 light:bg-accent/24"
                  >
                    NEW
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Explored / rarely used */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.38 }}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-5"
            >
              {t.skills.explored}
            </motion.p>

            <div className="flex flex-col gap-3">
              {explored.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.43 + i * 0.08, ease }}
                  className="flex items-center px-5 py-4 rounded-xl border border-muted/25 bg-muted/5"
                >
                  <p
                    className="font-syne font-bold text-[15px] text-foreground/70"
                  >
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOUNDATIONS ── */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-5"
          >
            {t.skills.foundations}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.6, ease }}
            className="flex flex-wrap gap-2"
          >
            {foundations.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-[13px] font-medium"
                style={{
                  border: "1px solid color-mix(in srgb, var(--color-foreground) 12%, transparent)",
                  color: "color-mix(in srgb, var(--color-foreground) 50%, transparent)",
                }}
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-px opacity-50"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-accent) 40%, transparent)" }}
      />
    </section>
  );
}