"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import FormSubmitCard from "../components/form-submit-card";

const ease = [0.22, 1, 0.36, 1] as const;

const EMAIL = "hei.ryan.3@gmail.com";

const socials = [
  {
    label: "GitHub",
    name: "RyanIaro",
    href: "https://github.com/RyanIaro",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    name: "Ryan Iaro RASAMOELISON",
    href: "https://www.linkedin.com/in/ryan-iaro-rasamoelison-42a752278/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="21" height="21">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    name: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },{
    label: "Phone",
    name: "+261 32 62 914 29",
    href: "tel:+261326291429",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="21" height="21">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.56a1 1 0 0 1-.24 1.02l-2.21 2.21z" />
      </svg>
    ),
  }
];

const cardContents = [
  {
    symbol: "✓",
    cardTitle: "Message sent!",
    cardMessage: "Thanks for reaching out. I'll get back to you as soon as I can.",
    buttonLabel: "Send another →",
    cardType: "sent",
  },
  {
    symbol: "⨉",
    cardTitle: "Message not sent!",
    cardMessage: "Oops! An error occured and we couldn't send your message.",
    buttonLabel: "Try sending again ↺",
    cardType: "error",
  }
]

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const emptyForm = { name: "", email: "", message: "" };
  
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if(errorMessage) {
      setErrorMessage("");
    }
  };

  const validateForm = () => {
    if(!form.name.trim()) return "Name cannot be empty.";
    if(!form.email.trim()) return "Email cannot be empty.";
    if(form.message.trim().length < 10) return "Message must be at least 10 characters.";
    return null;
  }

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }
    
    // setStatus("sending");
    try{
      setStatus("sending");
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(form),
      });

      //Success
      if(res.ok) {  
        setStatus("sent");
      } else {
        //Error
        setStatus("error")
      }
    } catch (e) {
      console.error("Error sending the email: ", e);
      setStatus("error");
    }
    // setStatus("sent");
  };

  const renderForm = () => {
    switch (status) {
      case "sent":
        return (
          <FormSubmitCard
            cardContent={cardContents[0]}
            onButtonClick={() => { setStatus("idle"); setForm(emptyForm); }}
          />
        );
      
      case "error":
        return(
          <FormSubmitCard
            cardContent={cardContents[1]}
            onButtonClick={() => { setStatus("idle"); }}
          />
        );
    
      default:
        return(
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-muted">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className={`${inputClasses} resize-none`}
              />
            </div>

                
            {errorMessage && (
            <p className="text-[12px] text-red-400">
              {errorMessage}
            </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold bg-accent text-[#080808] transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              {status !== "sending" && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

          </form>
        );
    }
  }
  const inputClasses =
    "w-full bg-foreground/4 border border-foreground/10 rounded-xl px-4 py-3 text-[14px] text-foreground placeholder:text-muted outline-none transition-colors duration-200 focus:border-accent/50 focus:bg-foreground/7";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-background py-32 font-outfit overflow-hidden"
    >

      {/* Lime glow blob — bottom right */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-125 h-125 rounded-full dark:opacity-[0.2] light:opacity-[0.4]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[12px] font-semibold tracking-[0.22em] uppercase text-muted mb-6 flex items-center gap-3"
        >
          <span className="inline-block w-6 h-px bg-accent" />
          Contact
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: Headline + text + socials */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="font-syne font-bold text-[clamp(2rem,4vw,3rem)] text-foreground leading-tight mb-6"
            >
              Let's build something{" "}
              <span className="text-accent">together.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2, ease }}
              className="text-[16px] leading-relaxed text-muted mb-10 max-w-md"
            >
              I'm currently open to frontend opportunities — full-time, part-time, internship, or freelance. Whether you have a project in mind or just want to say hi, my inbox is always open.
            </motion.p>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.36, ease }}
              className="flex flex-col md:flex-row md:items-center gap-6"
            >
              {socials.map(({ label, name, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="relative group flex md:flex-col items-center text-center gap-2 text-muted hover:text-accent hover:scale-110 transition-all duration-200"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl border border-foreground/10 group-hover:border-accent/40">
                    {icon}
                  </span>
                  <p className="md:absolute md:top-14 md:w-36 opacity-100 md:opacity-0 md:group-hover:opacity-100">{name}</p>
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            {renderForm()}
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