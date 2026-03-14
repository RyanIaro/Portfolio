"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
    id="about"
    className="relative min-h-screen flex flex-col bg-background px-6 md:px-12 lg:px-20 gap-4 font-outfit"
    >
      <div className="flex items-center gap-2">
        <span className="bg-accent w-5 h-px"/>
        <h2 className="uppercase text-muted">About me</h2>
      </div>
      <h2 className="text-2xl md:text-5xl font-bold font-outfit">
        Quiet by nature,{" "}
        <span style={{ color: "#E8FF47" }}>precise</span>{" "}
        by choice.
      </h2>

      <div className="flex flex-col lg:flex-row justify-center gap-4">
        {/* LEFT: Text */}
        <div className="flex flex-col gap-4 text-muted">
          <p>
            I'm a frontend developer who enjoys the web because of the experiences it can give to people.
            Every interface is a tiny world — and getting that world to feel just right is what keeps me going.
          </p>
          <p>
            I work calmly and deliberately. I'm not the fastest, but I'm thorough.
            I'd rather take an extra hour to get something right than ship something I'm not proud of.
            That streak of perfectionism is something I've learned to embrace.
          </p>
          <p>
            Outside of work, I draw and play video games — both of which have shaped how I think about design.
            Games especially: the best ones nail immersion, feedback, and delight in a way most apps never achieve.
          </p>
          <p className="text-foreground border-l-2 italic border-accent pl-5">
            "I build for users, not for specs. If it doesn't feel good to use, it isn't done."
          </p>
        </div>

        {/* RIGHT: Traits */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              emoji: "🎮",
              trait: "Gamer",
              text: "Video games are my main playground — great UX inspiration lives there.",
            },
            {
              emoji: "✏️",
              trait: "Artist",
              text: "I draw on the side. Attention to visual detail bleeds into everything I build.",
            },
            {
              emoji: "🎯",
              trait: "Perfectionist",
              text: "I might be slow, but I won't ship until I'm genuinely satisfied with the result.",
            },
            {
              emoji: "🤝",
              trait: "Reserved",
              text: "Calm and quiet at first — give me time and I'll open up completely.",
            }
          ].map(({ emoji, trait, text}) => (
            <div 
            key={trait}
            className="group flex flex-col gap-2 items-start p-4 border border-muted/25 rounded-2xl bg-muted/5 hover:border-accent hover:bg-accent/5 transition-colors duration-300"
            >
              <h1 className="text-2xl">{emoji}</h1>
              <h1 className="group-hover:text-accent font-syne font-bold transition-colors duration-300">{trait}</h1>
              <p className="text-[13px] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}