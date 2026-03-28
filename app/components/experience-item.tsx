"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

interface experience {
  role: string,
  org: string,
  period: string,
  duration: string,
  type: string,
  desc: string,
  tags: string[],
  note: string,
}


export default function experienceItem({ experiences, exp, i } : { experiences: experience[], exp: experience, i: number}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return(
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={!inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.3 + i * 0.15, ease }}
      className="relative md:pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-[6px] hidden md:flex items-center justify-center">
        <div className="w-[15px] h-[15px] rounded-full border-2 border-accent bg-background" />
      </div>

      <div className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-12">

        {/* Left: date column */}
        <div className="shrink-0 md:w-36">
          <p className="text-[12px] font-semibold text-muted tracking-wide">
            {exp.period}
          </p>
          <span
            className="inline-block mt-2 px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-[0.12em] uppercase bg-accent/10 text-accent border border-accent/20"
          >
            {exp.type}
          </span>
        </div>

        {/* Right: content */}
        <div className="flex-1 pb-2">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
            <h3 className="font-syne font-bold text-[20px] text-foreground leading-tight">
              {exp.role}
            </h3>
            <span className="text-[14px] text-muted">
              @ {exp.org}
            </span>
          </div>

          {/* Note badge */}
          <p className="text-[11px] text-muted/70 mb-4 tracking-wide">
            {exp.note}
          </p>

          <p className="text-[15px] leading-relaxed text-muted mb-5 max-w-2xl">
            {exp.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[12px] font-medium border border-foreground/[0.14] text-foreground/55"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Separator — not after last item */}
      {i < experiences.length - 1 && (
        <div className="mt-14 md:ml-10 h-px bg-foreground/6" />
      )}
    </motion.div>
  );
}