import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { LanguageProvider } from "./lib/LanguageContext";

const syne = Syne({ subsets: ['latin'], variable: '--font-syne' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: "Ryan Iaro RASAMOELISON | Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and Tailwind CSS. Available for part-time, internship, and freelance opportunities.",
  openGraph: {
    title: "Ryan Iaro RASAMOELISON | Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and Tailwind CSS.",
    url: "https://portfolio-ryan-iaro.vercel.app",
    siteName: "Ryan Iaro Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${outfit.variable}`}>
        <ThemeProvider attribute={"class"} defaultTheme="dark">
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
