"use client";

import { useEffect, useState } from "react";

function getReducedMotionPreference() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        const prefersReducedMotion = getReducedMotionPreference();

        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        })
      }}
      className="fixed right-3 bottom-22 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#bcd1b8] bg-white/95 text-[#21442a] shadow-[0_10px_22px_rgba(21,41,27,0.22)] backdrop-blur md:right-6 md:bottom-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m6 15 6-6 6 6" />
      </svg>
    </button>
  );
}
