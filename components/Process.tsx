const steps = [
  {
    name: "Consultation",
    detail:
      "We visit, measure, and map how your outdoor space should function for your home.",
  },
  {
    name: "Design",
    detail:
      "Materials, planting, and layout are defined into a clear visual plan and project scope.",
  },
  {
    name: "Build",
    detail:
      "Our team handles groundwork, hardscaping, structures, and finishing with managed timelines.",
  },
  {
    name: "Completion",
    detail:
      "Final detailing, quality check, and a handover walkthrough so you know how to maintain results.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-shell" aria-labelledby="process-title">
      <div className="max-w-2xl">
        <p className="section-kicker">Process</p>
        <h2 id="process-title" className="section-title">
          A guided build journey that keeps decisions clear at every stage
        </h2>
      </div>

      <ol className="mt-8 grid gap-4 sm:gap-5">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className={`relative rounded-3xl border border-[#d5dfd0] bg-white px-5 py-6 shadow-[0_12px_28px_rgba(27,45,33,0.08)] sm:px-7 ${
              index % 2 === 1 ? "md:ml-14" : "md:mr-14"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#d6e5d1] text-sm font-semibold text-[#22412c]">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[#22392b]">{step.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#476051] sm:text-base">{step.detail}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
