import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

interface project {
  number: string,
  name: string,
  tagline: string,
  desc: string,
  tags: string[],
  github: string,
  live: string,
  liveLabel: string
}

function ArrowUpRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 11L11 2M11 2H4M11 2v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function ProjectCard({ project, i } : { project: project, i: number}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={!inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.28 + i * 0.1, ease }}
      className="group relative rounded-2xl p-7 overflow-hidden cursor-default flex flex-col justify-between min-h-70 border border-foreground/10 bg-foreground/4"
    >
      {/* Lime glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(ellipse at top left, rgba(232,255,71,0.15) 0%, transparent 65%)" }}
      />

      <div className="relative z-10">
        {/* Number + tagline */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-bold tracking-[0.18em] text-accent">
            {project.number}
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-muted">
            {project.tagline}
          </span>
        </div>

        <h3 className="font-syne font-bold text-[22px] text-foreground mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>

        <p className="text-[14px] leading-relaxed text-muted mb-5">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[11px] font-medium border border-foreground/14 text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="relative z-10 flex items-center gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold bg-accent text-[#080808] transition-all duration-200 hover:brightness-105 hover:scale-[1.02] active:scale-95"
          >
            {project.liveLabel}
            <ArrowUpRight />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold border border-foreground/18 text-muted transition-all duration-200 hover:text-accent active:scale-95"
          >
            <GithubIcon />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}