"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type SectionLink = {
  id: string;
  label: string;
};

type ScrollSpyNavProps = {
  sections: SectionLink[];
};

const ACTIVE_LINE_RATIO = 0.33;
const SCROLL_OFFSET_PX = 20;
const NAV_LOCK_TIMEOUT_MS = 900;

function getReducedMotionPreference() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScrollSpyNav({ sections }: ScrollSpyNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "top");
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const sectionElementsRef = useRef<HTMLElement[]>([]);
  const navigationLockRef = useRef<string | null>(null);
  const navigationTimeoutRef = useRef<number | null>(null);

  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const sectionMap = useMemo(
    () => new Map(sections.map((section) => [section.id, section])),
    [sections]
  );

  const setActiveIfChanged = useCallback((nextSectionId: string) => {
    setActiveSection((current) =>
      current === nextSectionId ? current : nextSectionId
    );
  }, []);

  const resolveActiveSection = useCallback(() => {
    const nodes = sectionElementsRef.current;

    if (!nodes.length) {
      return;
    }

    const activationLine = window.innerHeight * ACTIVE_LINE_RATIO;
    let nextSectionId = nodes[0].id;

    for (const node of nodes) {
      const top = node.getBoundingClientRect().top - SCROLL_OFFSET_PX;

      if (top <= activationLine) {
        nextSectionId = node.id;
      }
    }

    const nearPageBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 2;

    if (nearPageBottom) {
      nextSectionId = nodes[nodes.length - 1].id;
    }

    const lockTarget = navigationLockRef.current;

    if (lockTarget && nextSectionId !== lockTarget) {
      const targetNode = document.getElementById(lockTarget);

      if (targetNode) {
        const targetDistance = Math.abs(
          targetNode.getBoundingClientRect().top - SCROLL_OFFSET_PX
        );

        if (targetDistance > 14) {
          setActiveIfChanged(lockTarget);
          return;
        }
      }

      navigationLockRef.current = null;
    }

    setActiveIfChanged(nextSectionId);
  }, [setActiveIfChanged]);

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    sectionElementsRef.current = nodes;

    if (!nodes.length) {
      return;
    }

    resolveActiveSection();

    const observer = new IntersectionObserver(
      () => {
        resolveActiveSection();
      },
      {
        root: null,
        rootMargin: "-10% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 0.85, 1],
      }
    );

    nodes.forEach((node) => observer.observe(node));

    const handleResize = () => resolveActiveSection();
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("hashchange", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", handleResize);

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [resolveActiveSection, sectionIds]);

  const onNavigate = useCallback(
    (sectionId: string) => {
      const target = document.getElementById(sectionId);

      if (!target) {
        return;
      }

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }

      navigationLockRef.current = sectionId;
      navigationTimeoutRef.current = window.setTimeout(() => {
        navigationLockRef.current = null;
      }, NAV_LOCK_TIMEOUT_MS);

      setActiveIfChanged(sectionId);

      const prefersReducedMotion = getReducedMotionPreference();
      const top =
        window.scrollY + target.getBoundingClientRect().top - SCROLL_OFFSET_PX;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      window.history.replaceState(null, "", `#${sectionId}`);
    },
    [setActiveIfChanged]
  );

  const activeLabel = sectionMap.get(activeSection)?.label ?? "Sections";

  return (
    <>
      <div className="fixed bottom-[5rem] left-3 z-[45] md:hidden">
        <button
          type="button"
          className="inline-flex h-11 min-h-11 items-center gap-2 rounded-full border border-[#bfd2bc] bg-[#f8fbf7]/95 px-4 text-sm font-semibold text-[#24452f] shadow-[0_10px_22px_rgba(20,39,26,0.18)] backdrop-blur transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6a3b]"
          onClick={() => setMobileExpanded((current) => !current)}
          aria-label={mobileExpanded ? "Close section navigation" : "Open section navigation"}
          aria-expanded={mobileExpanded}
          aria-controls="scrollspy-mobile-panel"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#d8e6d4] text-[11px] transition-colors duration-200">
            {activeLabel.slice(0, 1)}
          </span>
          <span>{activeLabel}</span>
        </button>

        <div
          id="scrollspy-mobile-panel"
          className={`absolute bottom-full left-0 mb-3 w-[13.5rem] rounded-2xl border border-[#c5d6c2] bg-white/96 p-2 shadow-[0_16px_30px_rgba(19,35,24,0.22)] backdrop-blur transition-all duration-250 ease-out ${
            mobileExpanded
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          <div className="mb-1 flex items-center justify-between px-2 py-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#4a6355]">
              Quick Nav
            </p>
            <button
              type="button"
              className="rounded-full px-2 py-1 text-xs font-medium text-[#335141] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6a3b]"
              onClick={() => setMobileExpanded(false)}
              aria-label="Close section navigation"
            >
              Close
            </button>
          </div>
          <nav aria-label="Page sections">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = section.id === activeSection;

                return (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate(section.id)}
                      aria-label={`Go to ${section.label} section`}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex min-h-11 w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors duration-250 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6a3b] ${
                        isActive
                          ? "bg-[#21442a] text-white shadow-[0_6px_14px_rgba(18,38,25,0.2)]"
                          : "text-[#30483a] hover:bg-[#edf4ea]"
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <nav
        aria-label="Page sections"
        className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 rounded-2xl border border-[#c5d6c2] bg-white/90 p-2 shadow-[0_14px_26px_rgba(19,35,24,0.16)] backdrop-blur md:block"
      >
        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = section.id === activeSection;

            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(section.id)}
                  aria-label={`Go to ${section.label} section`}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex min-h-11 w-full rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-250 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6a3b] ${
                    isActive
                      ? "bg-[#21442a] text-white shadow-[0_6px_14px_rgba(18,38,25,0.2)]"
                      : "text-[#2e493a] hover:bg-[#edf4ea]"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
