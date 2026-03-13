"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    name: "Consultation",
    detail:
      "We visit, measure, and map how your outdoor space should function for your home.",
  },
  {
    name: "Design",
    detail:
      "Materials, planting, and layout are defined into a clear visual plan and project scope.",
  },
  {
    name: "Build",
    detail:
      "Our team handles groundwork, hardscaping, structures, and finishing with managed timelines.",
  },
  {
    name: "Completion",
    detail:
      "Final detailing, quality check, and a handover walkthrough so you know how to maintain results.",
  },
];

function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Process() {
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter((node): node is HTMLLIElement => Boolean(node));

    if (!nodes.length || prefersReducedMotion()) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section-shell" aria-labelledby="process-title">
      <div className="max-w-2xl">
        <p className="section-kicker">Process</p>
        <h2 id="process-title" className="section-title">
          A guided build journey that keeps decisions clear at every stage
        </h2>
        <p className="section-lead mt-4 max-w-xl">
          Clear next steps, realistic timing, and one team carrying the work from design notes to
          final handover.
        </p>
      </div>

      <div className="relative mt-8 pl-4 sm:pl-6">
        <div className="absolute top-4 bottom-4 left-[1.1rem] w-px bg-[linear-gradient(180deg,rgba(91,113,90,0.2),rgba(91,113,90,0.65),rgba(91,113,90,0.18))] sm:left-[1.6rem]" />

        <ol className="grid gap-5">
          {steps.map((step, index) => (
            <li
              key={step.name}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className="process-step relative pl-7 sm:pl-10"
            >
              <span className="absolute left-0 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c6d1c2] bg-[#f9f6ee] text-sm font-semibold text-[var(--forest-900)] shadow-[0_10px_22px_rgba(23,38,28,0.1)] sm:h-11 sm:w-11">
                {index + 1}
              </span>

              <div className="surface-card p-5 sm:p-6 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--forest-500)]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-[1.4rem] font-semibold text-[var(--forest-900)]">
                    {step.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#44574a] sm:text-base lg:mt-0">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
