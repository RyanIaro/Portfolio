"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ProjectCard from "../components/project-card";
import { useLanguage } from "../lib/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

const featured = {
  tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
  github: "https://github.com/RyanIaro/E-shop",
  image: "/e-shop.png",
  live: "https://e-shop-ryan-iaros-projects.vercel.app",
};

const rest = [
  {
    tags: ["React Native", "Expo", "TypeScript", "Appwrite"],
    github: "https://github.com/RyanIaro/Habit-tracking-app",
    image: "/habit-tracker.jpg",
    live: "https://expo.dev/artifacts/eas/k4FkmEwnL6MgAGnabVFDVB.apk",
  },
  {
    tags: ["HTML", "CSS", "JavaScript", "PokéAPI"],
    github: "https://github.com/RyanIaro/Pokedex-project",
    image: "/pokedex.png",
    live: "https://ryan-iaros-pokedex.netlify.app",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const projects = [
    {...featured,...t.projects.items[0]},
    {...rest[0],...t.projects.items[1]},
    {...rest[1],...t.projects.items[2]},
  ]

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
          {t.projects.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="font-syne font-bold text-[clamp(2rem,4vw,3rem)] text-foreground leading-tight mb-16"
        >
          {t.projects.heading}{" "}
          <span className="text-accent">{t.projects.headingAccent}</span>
        </motion.h2>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} i={i}/>
          ))}
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