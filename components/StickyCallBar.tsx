type StickyCallBarProps = {
  phoneNumber: string;
  phoneHref: string;
};

export function StickyCallBar({ phoneNumber, phoneHref }: StickyCallBarProps) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <a
        href={`tel:${phoneHref}`}
        className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#21442a] px-6 text-base font-semibold text-white shadow-[0_10px_30px_rgba(20,41,26,0.35)] transition-transform duration-200 active:scale-[0.98]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5.2 4.8a2 2 0 0 1 2.2-.5l2.2.9a2 2 0 0 1 1.2 1.8v1.6a2 2 0 0 1-.6 1.4l-1 1a14 14 0 0 0 4.8 4.8l1-1a2 2 0 0 1 1.4-.6H18a2 2 0 0 1 1.8 1.2l.9 2.2a2 2 0 0 1-.5 2.2l-1.1 1.1a3 3 0 0 1-2.8.8 20 20 0 0 1-8.7-5.1 20 20 0 0 1-5.1-8.7 3 3 0 0 1 .8-2.8z" />
        </svg>
        <span>Call now {phoneNumber}</span>
      </a>
    </div>
  );
}
