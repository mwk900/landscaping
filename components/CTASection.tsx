import Image from "next/image";
import ctaGarden from "@/public/images/cta-garden.jpg";

type CTASectionProps = {
  phoneNumber: string;
  phoneHref: string;
};

export function CTASection({ phoneNumber, phoneHref }: CTASectionProps) {
  return (
    <section className="section-shell" aria-labelledby="final-cta-title">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#c8d8c2] bg-gradient-to-br from-[#24452c] via-[#2b5635] to-[#24422d] px-6 py-10 text-white shadow-[0_18px_40px_rgba(23,43,29,0.28)] sm:px-10 sm:py-12">
        <Image
          src={ctaGarden}
          alt="Landscaped outdoor seating and planting"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          placeholder="blur"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d3a26]/85 via-[#244a2d]/75 to-[#24422d]/55" />

        <div className="relative">
          <p className="section-kicker text-[#b9d2bb]">Ready to start?</p>
          <h2 id="final-cta-title" className="display-title mt-4 text-[#f2f7f0]">
            Book your free Nottingham landscaping consultation this week.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#d6e5d7] sm:text-lg">
            Let us shape a plan that fits your home, your timeline, and your budget.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary bg-[#e8f0e3] text-[#203829] hover:bg-white">
              Get a free quote
            </a>
            <a
              href={`tel:${phoneHref}`}
              className="btn-secondary border-[#a8c2ab] bg-white/10 text-[#f0f6ee] hover:bg-white/20"
            >
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
