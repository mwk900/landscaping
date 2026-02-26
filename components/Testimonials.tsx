import Image from "next/image";
import leafTexture from "@/public/images/texture-leaf.jpg";

const testimonials = [
  {
    quote:
      "They reshaped our entire garden into separate zones that now work properly for family evenings and summer hosting.",
    name: "T. Jenkins",
    location: "West Bridgford",
  },
  {
    quote:
      "Design and build felt fully managed. The paving finish is excellent and the team kept everything tidy.",
    name: "R. Patel",
    location: "Beeston",
  },
  {
    quote:
      "Our front boundary, driveway edge and planting now look properly considered rather than pieced together.",
    name: "S. Morgan",
    location: "Mapperley",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell" aria-labelledby="testimonials-title">
      <div className="max-w-2xl">
        <p className="section-kicker">Social Proof</p>
        <h2 id="testimonials-title" className="section-title">
          Local homeowners recommend us for quality, clarity, and finish
        </h2>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-5">
        <article className="surface-card relative overflow-hidden p-6 md:col-span-3 md:p-8">
          <Image
            src={leafTexture}
            alt="Garden texture background"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-10"
            placeholder="blur"
            sizes="(max-width: 768px) 90vw, 42vw"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a7062]">
              Average rating 4.9/5
            </p>
            <blockquote className="mt-4 text-2xl leading-tight text-[#243b2d]">
              &quot;{testimonials[0].quote}&quot;
            </blockquote>
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d5e5cf] text-sm font-semibold text-[#1f3a2a]">
                TJ
              </span>
              <p className="text-sm font-medium text-[#3f5547]">
                {testimonials[0].name}, {testimonials[0].location}
              </p>
            </div>
          </div>
        </article>

        <article className="surface-card p-6 md:col-span-2 md:mt-10">
          <blockquote className="text-lg leading-7 text-[#2a4132]">
            &quot;{testimonials[1].quote}&quot;
          </blockquote>
          <div className="mt-4 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d5e5cf] text-xs font-semibold text-[#1f3a2a]">
              RP
            </span>
            <p className="text-sm font-medium text-[#445b4d]">
              {testimonials[1].name}, {testimonials[1].location}
            </p>
          </div>
        </article>

        <article className="surface-card p-6 md:col-span-2 md:-mt-10">
          <blockquote className="text-lg leading-7 text-[#2a4132]">
            &quot;{testimonials[2].quote}&quot;
          </blockquote>
          <div className="mt-4 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d5e5cf] text-xs font-semibold text-[#1f3a2a]">
              SM
            </span>
            <p className="text-sm font-medium text-[#445b4d]">
              {testimonials[2].name}, {testimonials[2].location}
            </p>
          </div>
        </article>

        <div className="section-shell rounded-3xl border border-[#c7d7c2] bg-[#21442a] p-6 text-[#eef5ec] md:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#b7d0b9]">
            Why this matters
          </p>
          <p className="mt-3 max-w-xl text-base leading-7">
            Most projects reach us after separate one-off jobs. A single design-to-build
            team creates cleaner timelines, stronger finishes, and better value.
          </p>
        </div>
      </div>
    </section>
  );
}
