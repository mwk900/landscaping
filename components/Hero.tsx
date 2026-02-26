import Image from "next/image";
import heroGarden from "@/public/images/hero-garden.jpg";

type HeroProps = {
  phoneHref: string;
};

const trustIndicators = [
  "Fully insured and safety certified",
  "Nottingham crews with 12+ years experience",
  "Rated 4.9/5 by local homeowners",
];

export function Hero({ phoneHref }: HeroProps) {
  return (
    <section id="top" className="section-shell pt-2" aria-labelledby="hero-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#d9e4d4] bg-[#f8fbf5] p-6 shadow-[0_18px_45px_rgba(34,61,39,0.08)] sm:p-8 lg:p-12">
        <div className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-[#dbe8d5] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#e9e2cf] blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
                  className="inline-flex items-start gap-2 rounded-xl bg-white/80 px-3 py-2 text-sm text-[#334738]"
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

          <div className="relative mx-auto w-full max-w-md animate-rise delay-1">
            <div className="rounded-[1.7rem] border border-[#cad8c2] bg-gradient-to-br from-[#edf3e8] to-[#dce8d6] p-4 shadow-[0_15px_45px_rgba(18,33,23,0.18)]">
              <Image
                src={heroGarden}
                alt="Premium landscaped garden seating space"
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
                placeholder="blur"
                priority
                sizes="(max-width: 1024px) 90vw, 34vw"
              />
            </div>

            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-[#d0ddca] bg-white px-4 py-3 shadow-[0_12px_26px_rgba(20,41,26,0.12)]">
              <p className="text-xs uppercase tracking-[0.08em] text-[#4f6456]">Latest project</p>
              <p className="mt-1 text-sm font-semibold text-[#233a2b]">West Bridgford patio renewal</p>
            </div>

            <div className="absolute -top-6 right-4 rounded-2xl border border-[#d0ddca] bg-white px-4 py-3 shadow-[0_12px_26px_rgba(20,41,26,0.12)]">
              <p className="text-xs uppercase tracking-[0.08em] text-[#4f6456]">Average lead time</p>
              <p className="mt-1 text-sm font-semibold text-[#233a2b]">2 to 3 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
