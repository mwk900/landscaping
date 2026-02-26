import Image, { StaticImageData } from "next/image";
import serviceDesign from "@/public/images/service-design.jpg";
import servicePatio from "@/public/images/service-patio.jpg";
import serviceFence from "@/public/images/service-fence.jpg";
import serviceLawn from "@/public/images/service-lawn.jpg";
import ctaGarden from "@/public/images/cta-garden.jpg";
import serviceDriveway from "@/public/images/service-driveway-2.jpg";

const services = [
  {
    title: "Landscaping Design",
    summary:
      "Concept layouts, planting plans, and practical material choices tailored to your home.",
    accent: "LD",
    image: serviceDesign,
    alt: "Contemporary landscaped garden design with layered planting",
  },
  {
    title: "Patios and Paving",
    summary:
      "Porcelain, natural stone, and block finishes installed with clean drainage and long life.",
    accent: "PP",
    image: servicePatio,
    alt: "Premium timber patio dining area",
  },
  {
    title: "Fencing",
    summary:
      "Contemporary screens and privacy fencing that define your garden while elevating style.",
    accent: "FN",
    image: serviceFence,
    alt: "Timber garden structure and boundary details",
  },
  {
    title: "Lawn Care",
    summary:
      "Seasonal feeding, scarifying, and turf restoration for consistently healthy lawns.",
    accent: "LC",
    image: serviceLawn,
    alt: "Well-maintained garden lawn and borders",
  },
  {
    title: "Garden Maintenance",
    summary:
      "Reliable upkeep plans for planting beds, hedges, borders, and hardscape detailing.",
    accent: "GM",
    image: ctaGarden,
    alt: "Well-kept garden planting and pathway details",
  },
  {
    title: "Driveways",
    summary:
      "Durable driveway builds with crisp edging and curb appeal designed for heavy use.",
    accent: "DW",
    image: serviceDriveway,
    alt: "Hard landscaping with stone steps and paved access",
  },
] satisfies {
  title: string;
  summary: string;
  accent: string;
  image: StaticImageData;
  alt: string;
}[];

export function Services() {
  return (
    <section id="services" className="section-shell" aria-labelledby="services-title">
      <div className="max-w-2xl">
        <p className="section-kicker">Services</p>
        <h2 id="services-title" className="section-title">
          A complete outdoor transformation team, not a one-trade stop
        </h2>
      </div>

      <div className="-mx-4 mt-7 overflow-x-auto px-4 pb-1 md:hidden">
        <div className="flex snap-x gap-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="surface-card min-w-[82%] snap-center p-5"
              aria-label={service.title}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d8e7d4] text-sm font-semibold text-[#26422d]">
                {service.accent}
              </div>
              <div className="relative mt-4 overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.alt}
                  className="aspect-[4/3] w-full object-cover"
                  placeholder="blur"
                  sizes="80vw"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#22392b]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#476051]">{service.summary}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex rounded-full border border-[#bfd0ba] px-4 py-2 text-sm font-medium text-[#21442a]"
              >
                Request pricing
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 hidden gap-5 md:flex md:flex-col">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="surface-card grid overflow-hidden md:grid-cols-2"
            aria-label={service.title}
          >
            <div className={`p-8 ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4f6758]">
                {service.accent}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#22392b]">{service.title}</h3>
              <p className="mt-3 max-w-md text-base leading-7 text-[#445b4d]">{service.summary}</p>
              <a href="#contact" className="btn-secondary mt-6">
                Plan this service
              </a>
            </div>
            <div
              className={`flex items-center justify-center bg-gradient-to-br from-[#edf4e9] to-[#d6e4cf] p-8 ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.alt}
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-[0_12px_35px_rgba(22,38,27,0.16)]"
                placeholder="blur"
                sizes="(max-width: 768px) 90vw, 36vw"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
