import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Ryan Iaro RASAMOELISON",
  description: "Ryan Iaro's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
