import { ContactForm } from "@/components/ContactForm";
import { DesktopContactDock } from "@/components/DesktopContactDock";
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
const businessEmail = "hello@verdanceoutdoor.com";
const openingHours = [
  "Mon-Fri: 8:00-18:00",
  "Saturday: 9:00-13:00",
  "Sunday: Closed",
];

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
    <div className="pb-40 md:pb-0">
      <StickyCallBar
        phoneNumber={businessPhoneDisplay}
        phoneHref={businessPhoneHref}
        quoteHref="#contact"
      />
      <DesktopContactDock
        phoneNumber={businessPhoneDisplay}
        phoneHref={businessPhoneHref}
        email={businessEmail}
        openingHours={openingHours}
      />
      <ScrollSpyNav sections={sections} />
      <BackToTop />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-5 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3 text-center" aria-label="Verdance home">
          <span className="inline-flex h-10 w-10 items-center justify-center text-[var(--forest-900)]">
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-[2rem] w-[2rem]"
              fill="currentColor"
            >
              <path d="M15.95 4.5 22 12h-3.05l3.85 4.9h-3.15l4.1 5.3H18.3V27h-4.6v-4.8H8.2l4.15-5.3H9.2L13 12H10l5.95-7.5Z" />
              <path d="M6.5 12.5 10.2 17H8.3l2.5 3.25H7.9V24H5.1v-3.75H2.2L4.75 17H2.8l3.7-4.5Z" />
              <path d="M25.5 12.5 29.2 17h-1.9l2.5 3.25h-2.9V24h-2.8v-3.75h-2.9L23.75 17H21.8l3.7-4.5Z" />
            </svg>
          </span>
          <div className="text-left">
            <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-[var(--forest-900)]">
              Verdance Nottingham
            </span>
            <span className="block text-[11px] uppercase tracking-[0.12em] text-[var(--forest-500)]">
              Premium Landscaping Demo
            </span>
          </div>
        </a>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-[4.5rem] px-4 pb-16 sm:px-6 md:gap-24 lg:px-10">
        <Hero phoneHref={businessPhoneHref} />
        <Services />
        <Transformations />
        <Process />
        <Testimonials />

        <section
          id="areas"
          className="section-shell overflow-hidden rounded-[2.2rem] border border-[#36503b] bg-[linear-gradient(135deg,#203427,#2c4834)] px-6 py-10 text-[#f4f3ec] shadow-[0_26px_60px_rgba(20,35,25,0.2)] sm:px-10 sm:py-12"
          aria-labelledby="areas-title"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(206,219,196,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(229,216,189,0.18),transparent_34%)]" />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker text-[#b9d0bc]">Service Areas</p>
              <h2 id="areas-title" className="section-title !text-white">
                Trusted local teams across Nottingham and Nottinghamshire
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#e6eee3] sm:text-base">
                Fast site visits, clear written quotes, and dependable turnaround for local
                homeowners in:
              </p>
            </div>
          </div>
          <ul className="relative mt-7 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-[#4c6d52] bg-white/8 px-4 py-2 text-sm font-medium text-[#f0f5ef] backdrop-blur"
              >
                {area}
              </li>
            ))}
          </ul>
        </section>

        <ContactForm phoneNumber={businessPhoneDisplay} phoneHref={businessPhoneHref} />
      </main>

      <Footer phoneNumber={businessPhoneDisplay} phoneHref={businessPhoneHref} />
    </div>
  );
}
