import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ScrollSpyNav } from "@/components/ScrollSpyNav";
import { Services } from "@/components/Services";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Testimonials } from "@/components/Testimonials";
import { Transformations } from "@/components/Transformations";
import { BackToTop } from "@/components/BackToTop";

const serviceAreas = [
  "West Bridgford",
  "Beeston",
  "Arnold",
  "Mapperley",
  "Wollaton",
  "Carlton",
  "Ruddington",
  "Hucknall",
];

const businessPhoneDisplay = "0115 000 0000";
const businessPhoneHref = "01150000000";

const sections = [
  { id: "top", label: "Top" },
  { id: "services", label: "Services" },
  { id: "transformations", label: "Transformations" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "areas", label: "Areas" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <div className="pb-28 md:pb-0">
      <StickyCallBar phoneNumber={businessPhoneDisplay} phoneHref={businessPhoneHref} />
      <ScrollSpyNav sections={sections} />
      <BackToTop />

      <div className="border-b border-[#d4dfcf] bg-[#e8efe4] px-4 py-2 text-center text-[11px] font-medium tracking-[0.04em] text-[#34513d] sm:text-xs">
        Demo website for portfolio purposes - not a real company.
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Verdance home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#21442a] text-sm font-semibold text-white">
            VO
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#21442a]">
            Verdance Nottingham
          </span>
        </a>

        <a href={`tel:${businessPhoneHref}`} className="btn-secondary hidden md:inline-flex">
          Call {businessPhoneDisplay}
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-16 sm:px-6 md:gap-24 lg:px-10">
        <Hero phoneHref={businessPhoneHref} />
        <Services />
        <Transformations />
        <Process />
        <Testimonials />

        <section
          id="areas"
          className="section-shell overflow-hidden rounded-[2rem] bg-[#1f3b28] px-6 py-10 text-[#f4f3ec] sm:px-10"
          aria-labelledby="areas-title"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker text-[#b8d1ba]">Service Areas</p>
              <h2 id="areas-title" className="section-title text-[#f4f3ec]">
                Trusted local teams across Nottingham and Nottinghamshire
              </h2>
              <p className="mt-3 text-sm text-[#d9e7d5] sm:text-base">
                Fast site visits and dependable turnaround for local homeowners in:
              </p>
            </div>
          </div>
          <ul className="mt-7 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[#466b50] bg-[#2c4d35] px-4 py-2 text-sm font-medium text-[#f0f5ef]"
              >
                {area}
              </li>
            ))}
          </ul>
        </section>

        <ContactForm phoneNumber={businessPhoneDisplay} phoneHref={businessPhoneHref} />
        <CTASection phoneNumber={businessPhoneDisplay} phoneHref={businessPhoneHref} />
      </main>

      <Footer phoneNumber={businessPhoneDisplay} phoneHref={businessPhoneHref} />
    </div>
  );
}
