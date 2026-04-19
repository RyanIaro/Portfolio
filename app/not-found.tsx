"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./lib/LanguageContext";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[180px] md:text-[240px] font-bold leading-none text-accent/10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-accent text-5xl md:text-6xl font-bold">
              {t.not_found.headline}
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-lg md:text-xl text-muted mb-8 max-w-md mx-auto">
          {t.not_found.message}
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {t.not_found.back}
        </Link>

        {/* Make them feel a little stupid, just a little */}
        <p className="mt-8 text-sm text-muted">
          {t.not_found.loadingTip}
        </p>
      </div>
    </div>
  );
}