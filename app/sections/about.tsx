"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const { t } = useLanguage();
  return (
    <section
    id="about"
    ref={ref}
    className="relative bg-background py-32 font-outfit overflow-hidden"
    >
      {/* Faint accent top line */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-px opacity-50"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-accent) 40%, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 , delay: 0.05}}
          className="text-[12px] font-semibold tracking-[0.22em] uppercase text-muted mb-6 flex items-center gap-3"
        >
          <span className="inline-block bg-accent w-6 h-px"/>
          {t.about.label}
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT: Headline + bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24}}
              animate={inView ? { opacity: 1, y: 0} : {}}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const}}
              className="text-[clamp(2rem,4vw,3.2rem)] font-bold font-syne leading-tight mb-8"
            >
              {t.about.heading}{" "}
              <span className="text-accent">{t.about.headingAccent}</span>{" "}
              {t.about.headingSuffix}
            </motion.h2>

            <div className="flex flex-col gap-5">
              {[
                t.about.p1,
                t.about.p2,
                t.about.p3
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 18}}
                  animate={inView ? { opacity: 1, y: 0 }: {}}
                  transition={{ duration: 0.55, delay: 0.2 + i *0.1, ease: [0.22, 1., 0.36, 1] as const}}
                  className="text-[16px] leading-relaxed text-muted"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Quote me on this */}
            <motion.blockquote
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1., 0.36, 1] as const }}
              className="mt-10 pl-5 border-l-2 border-accent"
            >
              <p className="text-[15px] text-foreground italic">
                {t.about.quote}
              </p>
            </motion.blockquote>
          </div>

          {/* RIGHT: Trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pt-2">
            {t.about.traits.map(({ emoji, label, desc }, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.18 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const }}
                className="group items-start p-5 cursor-default border border-muted/25 rounded-xl bg-muted/5 hover:border-accent dark:hover:bg-accent/5 light:hover:bg-accent/20 hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl mb-3 w-1 block group-hover:animate-[spin_0.2s_ease-in-out_1]">{emoji}</span>
                <h3 className="group-hover:text-accent font-syne font-bold text-[15px] transition-colors duration-300">{label}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Faint accent bottom line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-px opacity-50"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-accent) 40%, transparent)" }}
      />
    </section>
  );
}