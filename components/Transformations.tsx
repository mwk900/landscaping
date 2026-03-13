import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import beforeOne from "@/public/images/before-1.jpg";
import afterOne from "@/public/images/service-driveway-2.jpg";
import beforeTwo from "@/public/images/before-2.jpg";
import afterTwo from "@/public/images/after-2.jpg";
import beforeThree from "@/public/images/before-3.jpg";
import afterThree from "@/public/images/after-3.jpg";

const transformations = [
  {
    title: "Sloped lawn to structured entertaining levels",
    projectType: "Rear garden redesign",
    timeframe: "3 weeks",
    materials: "Porcelain paving, retaining walls, oak sleepers",
    problem: "Patchy lawn, poor access, and very limited use in wet weather.",
    result: "Clear entertaining terraces with stronger drainage, better movement, and layered planting.",
    beforeImage: beforeOne,
    afterImage: afterOne,
    featured: true,
  },
  {
    title: "Underused side plot to social patio garden",
    projectType: "Compact patio build",
    timeframe: "8 days",
    materials: "Paving setts, raised planters, seating zone details",
    problem: "A basic route with minimal seating and weak visual balance.",
    result: "Defined seating space with stronger layout lines and a more useful garden corner.",
    beforeImage: beforeTwo,
    afterImage: afterTwo,
  },
  {
    title: "Tired patio edge to cleaner stone terrace",
    projectType: "Patio refresh",
    timeframe: "1 week",
    materials: "Natural stone paving, gravel edging, refreshed border detailing",
    problem: "Crowded planting and dated surfacing left the seating edge feeling messy and underused.",
    result: "A clearer terrace line with easier upkeep and a cleaner finish outside the house.",
    beforeImage: beforeThree,
    afterImage: afterThree,
  },
];

export function Transformations() {
  const [featuredProject, ...supportingProjects] = transformations;

  return (
    <section
      id="transformations"
      className="section-shell overflow-hidden rounded-[2.2rem] border border-[#33503b] bg-[linear-gradient(145deg,#1b2d21,#274131)] px-5 py-10 text-[#f4f2eb] shadow-[0_28px_70px_rgba(18,32,23,0.22)] sm:px-7 sm:py-12 lg:px-10"
      aria-labelledby="transformations-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(223,230,212,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(232,217,191,0.14),transparent_30%)]" />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker text-[#d8e4d7]">Before and After</p>
          <h2 id="transformations-title" className="section-title !text-white">
            Real transformations that improve both beauty and daily use
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#edf3eb]">
            The strongest projects solve practical problems as well as appearance, from drainage
            and access to cleaner layouts for dining, planting, and day-to-day use.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex self-start rounded-full border border-[#5f7a65] bg-white/8 px-5 py-3 text-sm font-semibold text-[#f4f2eb] backdrop-blur transition-colors duration-200 hover:bg-white/14"
        >
          Talk through your project
        </a>
      </div>

      <div className="relative mt-8 grid gap-5">
        <article className="surface-card grid gap-6 p-5 text-[#203126] sm:p-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:p-8">
          <div>
            <BeforeAfterSlider
              beforeImage={featuredProject.beforeImage}
              afterImage={featuredProject.afterImage}
              beforeLabel="Before"
              afterLabel="After"
              alt={featuredProject.title}
              priority
              aspectRatio="aspect-[5/4] sm:aspect-[7/5]"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--forest-500)]">
                Featured case study
              </p>
              <h3 className="mt-3 text-[1.9rem] font-semibold leading-tight text-[var(--forest-900)]">
                {featuredProject.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#44574a]">
                A more dramatic change in levels, layout, and usability, completed with the sort
                of clean detailing local homeowners expect from a premium finish.
              </p>
            </div>

            <dl className="mt-6 grid gap-4 rounded-[1.6rem] border border-[#d8ded1] bg-[#f7f3ea] p-5">
              <div className="grid gap-1 sm:grid-cols-[8.5rem_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-500)]">
                  Project type
                </dt>
                <dd className="text-sm leading-6 text-[#2f4434]">{featuredProject.projectType}</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[8.5rem_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-500)]">
                  Timeframe
                </dt>
                <dd className="text-sm leading-6 text-[#2f4434]">{featuredProject.timeframe}</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[8.5rem_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-500)]">
                  Materials
                </dt>
                <dd className="text-sm leading-6 text-[#2f4434]">{featuredProject.materials}</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[8.5rem_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-500)]">
                  Problem solved
                </dt>
                <dd className="text-sm leading-6 text-[#2f4434]">{featuredProject.problem}</dd>
              </div>
              <div className="grid gap-1 border-t border-[#dde2d7] pt-4 sm:grid-cols-[8.5rem_1fr]">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-500)]">
                  Result
                </dt>
                <dd className="text-sm leading-6 text-[#2f4434]">{featuredProject.result}</dd>
              </div>
            </dl>
          </div>
        </article>

        <div className="grid gap-5 lg:grid-cols-2">
          {supportingProjects.map((project) => (
            <article key={project.title} className="surface-card grid gap-5 p-5 text-[#203126] sm:p-6">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeLabel="Before"
                afterLabel="After"
                alt={project.title}
                defaultPosition={50}
                aspectRatio="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />

              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#d6ddd1] bg-[#f7f3ea] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-700)]">
                    {project.projectType}
                  </span>
                  <span className="rounded-full border border-[#d6ddd1] bg-[#f7f3ea] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--forest-700)]">
                    {project.timeframe}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-[var(--forest-900)]">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#44574a]">
                  <span className="font-semibold text-[var(--forest-900)]">Problem:</span>{" "}
                  {project.problem}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#44574a]">
                  <span className="font-semibold text-[var(--forest-900)]">Result:</span>{" "}
                  {project.result}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#44574a]">
                  <span className="font-semibold text-[var(--forest-900)]">Materials:</span>{" "}
                  {project.materials}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
