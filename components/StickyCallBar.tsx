type StickyCallBarProps = {
  phoneNumber: string;
  phoneHref: string;
  quoteHref: string;
};

export function StickyCallBar({ phoneNumber, phoneHref, quoteHref }: StickyCallBarProps) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="grid grid-cols-[0.92fr_1.08fr] gap-2 rounded-[1.45rem] border border-[#c8d3c4] bg-[#fbf8f0]/92 p-2 shadow-[0_16px_32px_rgba(20,41,26,0.24)] backdrop-blur">
        <a
          href={quoteHref}
          className="inline-flex min-h-12 items-center justify-center rounded-[1rem] border border-[#c5d1c1] bg-white/80 px-4 text-sm font-semibold text-[#21442a] transition-colors duration-200 active:scale-[0.98]"
        >
          Get a free quote
        </a>

        <a
          href={`tel:${phoneHref}`}
          aria-label={`Call ${phoneNumber} now`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[1rem] bg-[#21442a] px-4 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(20,41,26,0.28)] transition-transform duration-200 active:scale-[0.98]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M5.2 4.8a2 2 0 0 1 2.2-.5l2.2.9a2 2 0 0 1 1.2 1.8v1.6a2 2 0 0 1-.6 1.4l-1 1a14 14 0 0 0 4.8 4.8l1-1a2 2 0 0 1 1.4-.6H18a2 2 0 0 1 1.8 1.2l.9 2.2a2 2 0 0 1-.5 2.2l-1.1 1.1a3 3 0 0 1-2.8.8 20 20 0 0 1-8.7-5.1 20 20 0 0 1-5.1-8.7 3 3 0 0 1 .8-2.8z" />
          </svg>
          <span>Call now</span>
        </a>
      </div>
    </div>
  );
}
