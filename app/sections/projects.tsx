"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ProjectCard from "../components/project-card";

const ease = [0.22, 1, 0.36, 1] as const;

const featured = {
  number: "01",
  name: "E-Shop",
  tagline: "E-commerce · Next.js + Stripe",
  desc: "A modern e-commerce storefront with product listings, detail pages, and a full Stripe-powered checkout flow in sandbox mode. Built with Next.js and Tailwind CSS, deployed live on Vercel.",
  tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
  github: "https://github.com/RyanIaro/E-shop",
  live: "https://e-shop-ryan-iaros-projects.vercel.app",
  liveLabel: "Live Demo",
};

const rest = [
  {
    number: "02",
    name: "Habit Tracker",
    tagline: "Mobile app · React Native debut",
    desc: "A full-featured habit tracking mobile app with email auth, daily/weekly/monthly habits, swipe gestures to complete or delete, and a streak-based ranking system. Built with Appwrite as the backend — compiled to a real APK.",
    tags: ["React Native", "Expo", "TypeScript", "Appwrite"],
    github: "https://github.com/RyanIaro/Habit-tracking-app",
    live: "https://expo.dev/artifacts/eas/k4FkmEwnL6MgAGnabVFDVB.apk",
    liveLabel: "Download APK",
  },
  {
    number: "03",
    name: "Pokédex",
    tagline: "Web app · Vanilla JS fundamentals",
    desc: "A Gen 1 Pokédex pulling data from PokéAPI. Filter by name or number, browse details — zero frameworks, just HTML, CSS, and JavaScript. A deliberate exercise in fundamentals.",
    tags: ["HTML", "CSS", "JavaScript", "PokéAPI"],
    github: "https://github.com/RyanIaro/Pokedex-project",
    live: "https://ryan-iaros-pokedex.netlify.app",
    liveLabel: "Live Demo",
  },
];

const projects = [featured,...rest]

// function ArrowUpRight() {
//   return (
//     <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
//       <path d="M2 11L11 2M11 2H4M11 2v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// function GithubIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
//       <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
//     </svg>
//   );
// }

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
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
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="font-syne font-bold text-[clamp(2rem,4vw,3rem)] text-foreground leading-tight mb-16"
        >
          Projects I've{" "}
          <span className="text-accent">shipped.</span>
        </motion.h2>

        {/* Featured card */}
        {/* <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="group relative rounded-2xl p-8 md:p-10 mb-5 overflow-hidden cursor-default border border-foreground/10 bg-foreground/4"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "radial-gradient(ellipse at top left, rgba(232,255,71,0.15) 0%, transparent 65%)" }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold tracking-[0.18em] text-accent">
                {featured.number}
              </span>
              <span className="text-[11px] tracking-[0.14em] uppercase text-muted">
                {featured.tagline}
              </span>
            </div>

            <h3 className="font-syne font-bold text-[28px] text-foreground mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
              {featured.name}
            </h3>

            <p className="text-[15px] leading-relaxed text-muted max-w-xl mb-6">
              {featured.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[12px] font-medium border border-foreground/14 text-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={featured.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-accent text-[#080808] transition-all duration-200 hover:brightness-105 hover:scale-[1.02] active:scale-95"
              >
                {featured.liveLabel}
                <ArrowUpRight />
              </a>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold border border-foreground/18 text-muted transition-all duration-200 hover:text-accent active:scale-95"
              >
                <GithubIcon />
                Source
              </a>
            </div>
          </div>
        </motion.div> */}

        {/* Smaller cards row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} i={i}/>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-px opacity-10"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-accent) 40%, transparent)" }}
      />
    </section>
  );
}