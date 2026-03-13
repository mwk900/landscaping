"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

type InteractiveServiceCardProps = {
  title: string;
  summary: string;
  bestFor: string;
  materials: string;
  outcome: string;
  badge: string;
  image: StaticImageData;
  alt: string;
  featured?: boolean;
};

export function InteractiveServiceCard({
  title,
  summary,
  bestFor,
  materials,
  outcome,
  badge,
  image,
  alt,
  featured = false,
}: InteractiveServiceCardProps) {
  const [revealed, setRevealed] = useState(featured);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={revealed}
      data-revealed={revealed}
      className={`surface-card group relative overflow-hidden text-left transition-shadow duration-200 ${
        featured ? "min-h-full" : ""
      }`}
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(featured)}
      onFocus={() => setRevealed(true)}
      onBlur={() => setRevealed(featured)}
      onClick={() => setRevealed((current) => !current)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setRevealed((current) => !current);
        }
      }}
    >
      <div className={`${featured ? "grid gap-0 lg:grid-cols-[1.08fr_0.92fr]" : ""}`}>
        <div
          className={`relative overflow-hidden ${
            featured
              ? "editorial-frame min-h-[18rem] rounded-none border-0 shadow-none lg:min-h-full"
              : "mx-4 mt-4 rounded-[1.4rem]"
          }`}
        >
          <Image
            src={image}
            alt={alt}
            className={`h-full w-full object-cover transition-transform duration-500 ${
              revealed ? "scale-[1.02]" : "scale-100"
            }`}
            placeholder="blur"
            sizes={featured ? "(max-width: 1024px) 100vw, 38vw" : "(max-width: 1024px) 100vw, 22vw"}
          />
          <span className="badge-soft">{badge}</span>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#152217]/75 via-[#152217]/25 to-transparent" />
          <p className="absolute right-4 bottom-4 rounded-full border border-white/25 bg-[#f7f3e8]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
            Tap for details
          </p>
        </div>

        <div className={`flex flex-col ${featured ? "justify-between p-6 sm:p-8" : "p-5"}`}>
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--forest-500)]">
                  {featured ? "Featured service" : "Service"}
                </p>
                <h3
                  className={`mt-2 font-semibold text-[var(--forest-900)] ${
                    featured ? "text-[1.9rem] leading-tight" : "text-[1.35rem] leading-snug"
                  }`}
                >
                  {title}
                </h3>
              </div>
              <span
                className={`rounded-full border border-[#c3cfbe] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-700)] transition-colors ${
                  revealed ? "bg-[#23392b] text-white" : "bg-[#f6f2e9]"
                }`}
              >
                {revealed ? "Open" : "Details"}
              </span>
            </div>

            <p
              className={`mt-4 max-w-xl leading-7 text-[#4b5e4d] ${
                featured ? "text-base sm:text-[1.02rem]" : "text-[0.95rem]"
              }`}
            >
              {summary}
            </p>
          </div>

          <div
            className={`mt-5 grid gap-2 rounded-[1.35rem] border border-[#d8ded2] bg-[#f7f3ea] p-4 sm:p-5 ${
              featured ? "min-h-[8.4rem]" : "min-h-[8.8rem]"
            }`}
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-500)]">
                Best for
              </p>
              <p className="service-card-detail mt-1 text-sm leading-6 text-[#314635]">
                {bestFor}
              </p>
            </div>
            <div
              className={`service-card-detail transition-all ${
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1 opacity-80 lg:translate-y-2 lg:opacity-0"
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-500)]">
                Materials and finish
              </p>
              <p className="mt-1 text-sm leading-6 text-[#314635]">{materials}</p>
            </div>
            <p className="service-card-detail border-t border-[#d9ded3] pt-3 text-sm leading-6 text-[#425547]">
              <span className="font-semibold text-[var(--forest-900)]">Outcome:</span> {outcome}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
