# Portfolio — Ryan Iaro RASAMOELISON

A modern, minimal portfolio showcasing my frontend development work. Built with Next.js 14, TypeScript, and Tailwind CSS.

🔗 **[Live Site](https://portfolio-ryan-iaro.vercel.app)**

---

## ✨ Features

- **Bilingual** — Seamless EN/FR language switching with automatic resume swapping
- **Dark/Light themes** — System-aware with manual toggle
- **Responsive design** — Mobile-first approach, optimized for all screen sizes
- **Contact form** — Integrated email handling via Resend API
- **Smooth animations** — Thoughtful micro-interactions using Motion
- **Optimized performance** — Built on Next.js App Router for speed and SEO

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (formerly Framer Motion)
- **Theming:** next-themes
- **Email:** Resend API
- **Deployment:** Vercel

---

## 🎨 Design Philosophy

Clean, minimal aesthetic with strategic use of an electric lime accent. Typography hierarchy uses **Syne** for headings and **Outfit** for body text. Dark mode by default, with carefully crafted hover states and entrance animations.

---

## 📂 Project Structure

```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx                # Home page (sections assembly)
├── sections/               # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
└── api/
    └── contact/
        └── route.ts        # Resend email handler

components/
├── Navbar.tsx              # Navigation with theme/lang toggles
├── Project-card.tsx        # Card for each showcased project
├── Experience-item.tsx     # Element for each professional experience
├── Form-submit-card.tsx    # Simple post-submit card for email form
└── Footer.tsx              # Footer with social links

lib/
├── translations.ts         # EN/FR translation strings
└── LanguageContext.tsx     # Language switching context

public/
├── avatar.jpg
├── resume-en.pdf
└── resume-fr.pdf
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RyanIaro/Portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` and add your Resend API key:
```env
RESEND_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery. To set it up:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add `RESEND_API_KEY` to `.env.local`
4. Update the recipient email in `app/api/contact/route.ts`

---

## 🤝 Connect

- **Portfolio:** [portfolio-ryan-iaro.vercel.app](https://portfolio-ryan-iaro.vercel.app)
- **LinkedIn:** [Ryan Iaro RASAMOELISON](https://www.linkedin.com/in/ryan-iaro-rasamoelison-42a752278)
- **GitHub:** [RyanIaro](https://github.com/RyanIaro)
- **Email:** hei.ryan.3@gmail.com

---

## 📷 Screenshot

![Hero screen](<Hero screen.png>)

---

Built with ☕ and attention to detail.
