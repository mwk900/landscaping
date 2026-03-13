import Image from "next/image";
import heroGarden from "@/public/images/hero-garden.jpg";

type HeroProps = {
  phoneHref: string;
};

const trustIndicators = [
  "Fully insured and tidy on site",
  "Nottingham crews with 12+ years experience",
  "Rated 4.9/5 by local homeowners",
];

const quickStats = [
  {
    label: "Average lead time",
    value: "2 to 3 weeks",
  },
  {
    label: "Typical projects",
    value: "Patios, planting, full garden builds",
  },
  {
    label: "Latest project",
    value: "West Bridgford patio renewal",
  },
];

export function Hero({ phoneHref }: HeroProps) {
  return (
    <section id="top" className="section-shell pt-2" aria-labelledby="hero-title">
      <div className="surface-panel relative overflow-hidden p-6 sm:p-8 lg:p-12">
        <div className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-[#dbe1d3] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-[#e9dcc0] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-white/70" />

        <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="animate-rise">
            <p className="section-kicker">Lifestyle landscaping for modern homes</p>
            <h1 id="hero-title" className="display-title mt-4 text-[#1f3325]">
              Transform your Nottingham garden into your favourite space at home.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#44584a] sm:text-lg">
              Designed gardens, clean patio lines, durable fencing, and year-round care
              delivered by one specialist team from concept to completion.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Get a free quote
              </a>
              <a href={`tel:${phoneHref}`} className="btn-secondary">
                Call now
              </a>
            </div>

            <ul className="mt-7 grid gap-2 sm:grid-cols-2">
              {trustIndicators.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-start gap-2 rounded-[1rem] border border-white/70 bg-white/78 px-3 py-2 text-sm text-[#334738] shadow-[0_10px_24px_rgba(26,43,31,0.06)] backdrop-blur"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-2 w-2 rounded-full bg-[#2f6a3b]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[35rem] animate-rise delay-1">
            <div className="editorial-frame p-4 sm:p-5">
              <Image
                src={heroGarden}
                alt="Premium landscaped garden seating space"
                className="aspect-[4/5] w-full rounded-[1.55rem] object-cover"
                placeholder="blur"
                priority
                sizes="(max-width: 1024px) 92vw, 36vw"
              />

              <div className="absolute bottom-5 left-5 max-w-[13rem] rounded-[1.35rem] border border-white/20 bg-[rgba(18,29,22,0.76)] p-3 text-[#f5f3ec] shadow-[0_14px_30px_rgba(18,29,22,0.28)] backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8d8c2]">
                  Outdoor living
                </p>
                <p className="mt-2 text-sm leading-6">
                  Designed to feel calm, practical, and easy to use every day.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] border border-[#ced8c7] bg-white/80 px-4 py-4 shadow-[0_12px_28px_rgba(24,39,29,0.09)] backdrop-blur"
                >
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#4f6456]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#233a2b]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
