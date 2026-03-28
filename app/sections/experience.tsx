"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ExperienceItem from "../components/experience-item";

const ease = [0.22, 1, 0.36, 1] as const;

const experiences = [
  {
    role: "Frontend Developer Intern",
    org: "Undisclosed Organization",
    period: "Sep – Nov 2024",
    duration: "3 months",
    type: "Internship",
    desc: "Designed and built the interface of an internal employee management application as part of my final-year academic requirement. Worked through the full UI from scratch — component architecture, layout, and interactions.",
    tags: ["React", "Next.js", "TypeScript"],
    note: "Bachelor's degree requirement",
  },
  {
    role: "Frontend Developer",
    org: "Construction Company",
    period: "Oct 2025",
    duration: "Freelance",
    type: "Freelance",
    desc: "Took on a client brief to improve and modernise an existing company website. Learned and worked within WordPress to deliver the redesign, adapting to the platform's constraints while meeting the client's expectations. Project delivered and approved.",
    tags: ["WordPress", "CSS"],
    note: "Delivered & paid",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
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
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="font-syne font-bold text-[clamp(2rem,4vw,3rem)] text-foreground leading-tight mb-20"
        >
          Where I've{" "}
          <span className="text-accent">contributed.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-foreground/10 origin-top hidden md:block"
          />

          <div className="flex flex-col gap-14">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.role + exp.period} experiences={experiences} exp={exp} i={i}/>
            ))}
          </div>
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