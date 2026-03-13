import { InteractiveServiceCard } from "@/components/InteractiveServiceCard";
import serviceDesign from "@/public/images/service-design.jpg";
import servicePatio from "@/public/images/service-patio.jpg";
import serviceFence from "@/public/images/service-fence.jpg";
import serviceLawn from "@/public/images/service-lawn.jpg";
import serviceDriveway from "@/public/images/service-driveway-2.jpg";

const services = [
  {
    title: "Full garden redesigns",
    summary:
      "Layout planning, hard landscaping, planting, and finishing handled by one team from first visit to final tidy.",
    bestFor: "Homeowners reworking a tired, awkward, or underused garden into a space that feels properly joined up.",
    materials: "Porcelain, natural stone, timber screening, feature planting, and low-maintenance border structure.",
    outcome: "A garden that looks more considered, works better day to day, and adds long-term value.",
    badge: "Design and build",
    image: serviceDesign,
    alt: "Contemporary landscaped garden design with layered planting",
    featured: true,
  },
  {
    title: "Patios and paving",
    summary:
      "Clean outdoor dining and seating areas built with proper levels, edging, and drainage.",
    bestFor: "Rear gardens needing a practical entertaining zone close to the house.",
    materials: "Porcelain, natural stone, step details, and crisp edge restraint.",
    outcome: "A smarter, easier-to-use surface that feels polished rather than pieced together.",
    badge: "Outdoor living",
    image: servicePatio,
    alt: "Premium timber patio dining area",
  },
  {
    title: "Driveways",
    summary:
      "Durable frontage builds designed to improve kerb appeal and stand up to regular use.",
    bestFor: "Homes where the front approach needs stronger structure, parking space, or cleaner lines.",
    materials: "Block paving, resin-style finishes, edging, steps, and drainage detailing.",
    outcome: "A frontage that looks sharper on arrival and performs properly in bad weather.",
    badge: "Frontage",
    image: serviceDriveway,
    alt: "Hard landscaping with stone steps and paved access",
  },
  {
    title: "Fencing and screening",
    summary:
      "Boundary work that improves privacy, framing, and the overall finish of the garden.",
    bestFor: "Plots that need shelter, a neater perimeter, or a more contemporary backdrop.",
    materials: "Timber fencing, slatted screening, posts, gravel boards, and gates.",
    outcome: "A more secure garden with stronger definition and a cleaner visual edge.",
    badge: "Privacy",
    image: serviceFence,
    alt: "Timber garden structure and boundary details",
  },
  {
    title: "Lawns and garden upkeep",
    summary:
      "Seasonal lawn restoration, border care, and maintenance support to keep finished gardens looking settled.",
    bestFor: "Busy households that want the garden to stay tidy, healthy, and well kept through the year.",
    materials: "Feeding, scarifying, selective turf repair, hedge work, and planting-bed upkeep.",
    outcome: "Less patchiness, stronger presentation, and better long-term value from the original build.",
    badge: "Aftercare",
    image: serviceLawn,
    alt: "Well-maintained garden lawn and borders",
  },
];

export function Services() {
  const [featuredService, ...supportingServices] = services;

  return (
    <section id="services" className="section-shell" aria-labelledby="services-title">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker">Services</p>
          <h2 id="services-title" className="section-title">
            A complete outdoor transformation team, not a one-trade stop
          </h2>
          <p className="section-lead mt-4 max-w-xl">
            Landscaping, paving, and structured aftercare delivered as one joined-up service for
            Nottingham homeowners.
          </p>
        </div>

        <a href="#contact" className="btn-secondary self-start md:self-auto">
          Request a tailored quote
        </a>
      </div>

      <div className="mt-7 grid gap-5">
        <InteractiveServiceCard {...featuredService} />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {supportingServices.map((service) => (
            <InteractiveServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
