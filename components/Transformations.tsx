import Image, { StaticImageData } from "next/image";
import beforeOne from "@/public/images/before-1.jpg";
import afterOne from "@/public/images/service-driveway-2.jpg";
import beforeTwo from "@/public/images/before-2.jpg";
import afterTwo from "@/public/images/after-2.jpg";
import beforeThree from "@/public/images/before-4.jpg";
import afterThree from "@/public/images/after-4.jpg";

const transformations = [
  {
    title: "Sloped lawn to structured entertaining levels",
    before: "Patchy lawn and limited practical use in wet weather.",
    after: "Retaining walls, clear access steps, and planted hardscape zones.",
    beforeImage: beforeOne,
    afterImage: afterOne,
  },
  {
    title: "Underused side plot to social patio garden",
    before: "Basic route with minimal seating and poor visual balance.",
    after: "Defined seating zone, stronger layout lines, and improved planting rhythm.",
    beforeImage: beforeTwo,
    afterImage: afterTwo,
  },
  {
    title: "Tired frontage to formal kerb-appeal garden",
    before: "Unstructured frontage with weak planting impact.",
    after: "Layered borders, shaped shrubs, and a cleaner arrival path.",
    beforeImage: beforeThree,
    afterImage: afterThree,
  },
] satisfies {
  title: string;
  before: string;
  after: string;
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
}[];

export function Transformations() {
  return (
    <section id="transformations" className="section-shell" aria-labelledby="transformations-title">
      <div className="max-w-2xl">
        <p className="section-kicker">Before and After</p>
        <h2 id="transformations-title" className="section-title">
          Real transformations that improve both beauty and daily use
        </h2>
      </div>

      <div className="mt-7 grid gap-5">
        {transformations.map((item, index) => (
          <article key={item.title} className="surface-card p-5 sm:p-7">
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl font-semibold text-[#22392b]">{item.title}</h3>
                <dl className="mt-4 space-y-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5a7062]">
                      Before
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[#476051]">{item.before}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5a7062]">
                      After
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-[#476051]">{item.after}</dd>
                  </div>
                </dl>
              </div>

              <div className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl border border-[#d4e0cf]">
                  <span className="badge-soft">Before</span>
                  <Image
                    src={item.beforeImage}
                    alt={`${item.title} before image`}
                    className="aspect-[3/4] w-full object-cover"
                    placeholder="blur"
                    sizes="(max-width: 1024px) 42vw, 19vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-[#cbdbc6]">
                  <span className="badge-soft bg-[#2f6a3b] text-white">After</span>
                  <Image
                    src={item.afterImage}
                    alt={`${item.title} after image`}
                    className="aspect-[3/4] w-full object-cover"
                    placeholder="blur"
                    sizes="(max-width: 1024px) 42vw, 19vw"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
