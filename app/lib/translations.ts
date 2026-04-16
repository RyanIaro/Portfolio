export const translations = {
  en: {
    resume: "/resume-en.pdf",

    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
    },

    hero: {
      badge: "Frontend Developer",
      tagline: "Turning your ideas into fast, clean",
      taglineAccent: "and enjoyable experiences.",
      cta: "View Projects",
      ctaContact: "Contact Me",
      openToWork: "Open to work",
      scroll: "scroll",
    },

    about: {
      label: "About me",
      heading: "Quiet by nature,",
      headingAccent: "precise",
      headingSuffix: "by choice.",
      p1: "I'm a frontend developer who enjoys the web because of what it can make people feel. Every interface is a tiny world — and getting that world to feel just right is what keeps me going.",
      p2: "I work calmly and deliberately. I'm not the fastest, but I'm thorough. I'd rather take an extra hour to get something right than ship something I'm not proud of. That streak of perfectionism is something I've learned to embrace.",
      p3: "Outside of work, I draw and play video games — both of which, honestly, have shaped how I think about design. Games especially: the best ones nail immersion, feedback, and delight in a way most apps never achieve.",
      quote: "\"I build for users, not for specs. If it doesn't feel good to use, it isn't done.\"",
      traits: [
        { emoji: "🎮", label: "Gamer", desc: "Video games are my main playground — great UX inspiration lives there." },
        { emoji: "✏️", label: "Artist", desc: "I draw on the side. Attention to visual detail bleeds into everything I build." },
        { emoji: "🎯", label: "Perfectionist", desc: "I might be slow, but I won't ship until I'm genuinely satisfied with the result." },
        { emoji: "🤝", label: "Reserved", desc: "Calm and quiet at first — give me time and I'll open up completely." },
      ],
    },

    skills: {
      label: "Skills & stack",
      heading: "What I build",
      headingAccent: "with.",
      core: "Core stack",
      recent: "Recently learned",
      explored: "Explored",
      foundations: "Foundations",
    },

    projects: {
      label: "Projects",
      heading: "Things I've",
      headingAccent: "shipped.",
      source: "Source",
      items: [
        {
          number: "01",
          name: "E-Shop",
          tagline: "E-commerce · Next.js + Stripe",
          desc: "A modern e-commerce storefront with product listings, detail pages, and a full Stripe-powered checkout flow in sandbox mode. Built with Next.js and Tailwind CSS, deployed live on Vercel.",
          liveLabel: "Live Demo",
        },
        {
          number: "02",
          name: "Habit Tracker",
          tagline: "Mobile app · React Native debut",
          desc: "A full-featured habit tracking mobile app with email auth, daily/weekly/monthly habits, swipe gestures to complete or delete, and a streak-based ranking system. Built with Appwrite as the backend — compiled to a real APK.",
          liveLabel: "Download APK",
        },
        {
          number: "03",
          name: "Pokédex",
          tagline: "Web app · Vanilla JS fundamentals",
          desc: "A Gen 1 Pokédex pulling data from PokéAPI. Filter by name or number, browse details — zero frameworks, just HTML, CSS, and JavaScript. A deliberate exercise in fundamentals.",
          liveLabel: "Live Demo",
        },
      ],
    },

    experience: {
      label: "Experience",
      heading: "Where I've",
      headingAccent: "contributed.",
      items: [
        {
          role: "Frontend Developer Intern",
          org: "Undisclosed Organization",
          period: "Sep – Nov 2024",
          type: "Internship",
          note: "Bachelor's degree requirement",
          tags: ["React", "Next.js", "TypeScript"],
          desc: "Designed and built the interface of an internal employee management application as part of my final-year academic requirement. Worked through the full UI from scratch — component architecture, layout, and interactions.",
        },
        {
          role: "Frontend Developer",
          org: "Construction Company",
          period: "Oct 2025",
          type: "Freelance",
          note: "Delivered & paid",
          tags: ["WordPress", "CSS"],
          desc: "Took on a client brief to improve and modernise an existing company website. Learned and worked within WordPress to deliver the redesign, adapting to the platform's constraints while meeting the client's expectations. Project delivered and approved.",
        },
      ],
    },

    contact: {
      label: "Contact",
      heading: "Let's build something",
      headingAccent: "together.",
      blurb: "I'm currently open to frontend opportunities — part-time(for now), internship, or freelance. Whether you have a project in mind or just want to say hi, my inbox is always open.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "What's on your mind?",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Message sent!",
      successDesc: "Thanks for reaching out. I'll get back to you as soon as I can.",
      successReset: "Send another →",
      failureTitle: "Message not sent!",
      failureDesc: "Oops! An error occured and we couldn't send your message.",
      failureReset: "Try sending again ↺",
      formNote: "* Wire up to Resend, EmailJS, or Formspree.",
      errorName: "Name can't be empty.",
      errorEmail: "Email can't be empty.",
      errorMessage: "Message must be at least 10 characters.",
    },

    footer: {
      copyright: "All rights reserved.",
    },
  },

  fr: {
    resume: "/resume-fr.pdf",

    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
      resume: "CV",
    },

    hero: {
      badge: "Développeur Frontend",
      tagline: "Vos idées transformées en expériences rapides, soignées",
      taglineAccent: "et agréables.",
      cta: "Voir les projets",
      ctaContact: "Me contacter",
      openToWork: "Ouvert aux opportunités",
      scroll: "défiler",
    },

    about: {
      label: "À propos",
      heading: "Calme de nature,",
      headingAccent: "précis",
      headingSuffix: "par choix.",
      p1: "Je suis développeur frontend qui aime web pour ce qu'il peut faire ressentir aux gens. Chaque interface est un petit monde — et faire en sorte que ce monde soit parfaitement ajusté, c'est ce qui me motive.",
      p2: "Je travaille calmement et méthodiquement. Je ne suis pas le plus rapide, mais je suis rigoureux. Je préfère prendre une heure de plus pour bien faire les choses plutôt que de livrer quelque chose dont je ne suis pas fier. Ce perfectionnisme, j'ai appris à l'assumer.",
      p3: "En dehors du travail, je dessine et je joue aux jeux vidéo — deux activités qui ont, honnêtement, façonné ma façon de penser le design. Les jeux surtout : les meilleurs maîtrisent l'immersion, le feedback et le plaisir d'une façon que la plupart des applications n'atteignent jamais.",
      quote: "\"Je construis pour les utilisateurs, pas pour les specs. Si ce n'est pas agréable à utiliser, ce n'est pas terminé.\"",
      traits: [
        { emoji: "🎮", label: "Gamer", desc: "Les jeux vidéo sont mon terrain de jeu principal — une grande source d'inspiration UX." },
        { emoji: "✏️", label: "Artiste", desc: "Je dessine en parallèle. L'attention aux détails visuels se retrouve dans tout ce que je construis." },
        { emoji: "🎯", label: "Perfectionniste", desc: "Je suis peut-être lent, mais je ne livre pas tant que je ne suis pas vraiment satisfait du résultat." },
        { emoji: "🤝", label: "Réservé", desc: "Calme et discret au début — donnez-moi un peu de temps et je m'ouvre complètement." },
      ],
    },

    skills: {
      label: "Compétences & stack",
      heading: "Ce avec quoi",
      headingAccent: "je construis.",
      core: "Stack principale",
      recent: "Récemment appris",
      explored: "Exploré",
      foundations: "Fondamentaux",
    },

    projects: {
      label: "Projets",
      heading: "Ce que j'ai",
      headingAccent: "livré.",
      source: "Code source",
      items: [
        {
          number: "01",
          name: "E-Shop",
          tagline: "E-commerce · Next.js + Stripe",
          desc: "Une vitrine e-commerce moderne avec des listes de produits, des pages de détail et un tunnel de paiement complet via Stripe en mode sandbox. Développé avec Next.js et Tailwind CSS, déployé sur Vercel.",
          liveLabel: "Démo en ligne",
        },
        {
          number: "02",
          name: "Habit Tracker",
          tagline: "Application mobile · Débuts en React Native",
          desc: "Une application mobile de suivi d'habitudes complète avec authentification par email, habitudes quotidiennes/hebdomadaires/mensuelles, gestes de balayage pour compléter ou supprimer, et un système de classement basé sur les séries. Développé avec Appwrite comme backend — compilé en APK.",
          liveLabel: "Télécharger l'APK",
        },
        {
          number: "03",
          name: "Pokédex",
          tagline: "Application web · Fondamentaux JS Vanilla",
          desc: "Un Pokédex de la Gen 1 utilisant la PokéAPI. Filtrer par nom ou numéro, consulter les détails — zéro framework, uniquement HTML, CSS et JavaScript. Un exercice délibéré sur les fondamentaux.",
          liveLabel: "Démo en ligne",
        },
      ],
    },

    experience: {
      label: "Expérience",
      heading: "Là où j'ai",
      headingAccent: "contribué.",
      items: [
        {
          role: "Stagiaire Développeur Frontend",
          org: "Organisation non divulguée",
          period: "Sep – Nov 2024",
          type: "Stage",
          note: "Requis pour l'obtention de la licence",
          tags: ["React", "Next.js", "TypeScript"],
          desc: "Conception et développement de l'interface d'une application interne de gestion des employés dans le cadre de ma dernière année académique. Travail complet de l'interface from scratch — architecture des composants, mise en page et interactions.",
        },
        {
          role: "Développeur Frontend",
          org: "Entreprise de construction",
          period: "Oct 2025",
          type: "Freelance",
          note: "Livré & payé",
          tags: ["WordPress", "CSS"],
          desc: "Mission client pour améliorer et moderniser le site web existant d'une entreprise. Apprentissage et utilisation de WordPress pour livrer la refonte, en m'adaptant aux contraintes de la plateforme tout en répondant aux attentes du client. Projet livré et approuvé.",
        },
      ],
    },

    contact: {
      label: "Contact",
      heading: "Construisons quelque chose",
      headingAccent: "ensemble.",
      blurb: "Je suis actuellement ouvert aux opportunités frontend — temps partiel (pour l'instant), stage ou freelance. Que vous ayez un projet en tête ou que vous vouliez simplement dire bonjour, ma boîte mail est toujours ouverte.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "votre@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Qu'avez-vous en tête ?",
      submit: "Envoyer le message",
      sending: "Envoi en cours…",
      successTitle: "Message envoyé !",
      successDesc: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      successReset: "Envoyer un autre →",
      failureTitle: "Message non envoyé!",
      failureDesc: "Oups! Une erreur est survenue et nous n'avons pas pu envoyé votre message.",
      failureReset: "Réessayer l'envoi ↺",
      errorName: "Le nom ne peut pas être vide.",
      errorEmail: "L'email ne peut pas être vide.",
      errorMessage: "Le message doit contenir au moins 10 caractères.",
    },

    footer: {
      copyright: "Tous droits réservés.",
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations[Lang];
export type Experiences = typeof translations[Lang]["experience"]["items"]