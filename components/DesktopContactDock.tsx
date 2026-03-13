"use client";

import { useEffect, useRef, useState } from "react";

type DesktopContactDockProps = {
  phoneNumber: string;
  phoneHref: string;
  email: string;
  openingHours: string[];
};

export function DesktopContactDock({
  phoneNumber,
  phoneHref,
  email,
  openingHours,
}: DesktopContactDockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!shellRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      <div ref={shellRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="desktop-contact-panel"
          aria-label={isOpen ? "Collapse contact details" : "Open contact details"}
          className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#21442a] text-white shadow-[0_18px_32px_rgba(20,41,26,0.22)] transition-[transform,background-color,box-shadow] duration-250 ease-out hover:bg-[#19351f] hover:shadow-[0_20px_36px_rgba(20,41,26,0.26)]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[1.125rem] w-[1.125rem]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M5.2 4.8a2 2 0 0 1 2.2-.5l2.2.9a2 2 0 0 1 1.2 1.8v1.6a2 2 0 0 1-.6 1.4l-1 1a14 14 0 0 0 4.8 4.8l1-1a2 2 0 0 1 1.4-.6H18a2 2 0 0 1 1.8 1.2l.9 2.2a2 2 0 0 1-.5 2.2l-1.1 1.1a3 3 0 0 1-2.8.8 20 20 0 0 1-8.7-5.1 20 20 0 0 1-5.1-8.7 3 3 0 0 1 .8-2.8z" />
          </svg>
        </button>

        <div
          id="desktop-contact-panel"
          className={`absolute bottom-0 left-[calc(100%+0.75rem)] w-[17.5rem] rounded-[1.45rem] border border-[#c8d3c4] bg-[#fbf8f0]/96 shadow-[0_20px_36px_rgba(20,41,26,0.18)] backdrop-blur transition-[opacity,transform] duration-300 ease-out ${
            isOpen
              ? "translate-x-0 scale-100 opacity-100"
              : "pointer-events-none translate-x-[-0.35rem] scale-[0.98] opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#506656]">
                  Contact details
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1f3325]">
                  Speak with the Nottingham team
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full px-2 py-1 text-xs font-medium text-[#405646] transition-colors duration-200 hover:bg-[#f2eee4]"
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm text-[#3f5547]">
              <p>
                <span className="font-semibold text-[#1f3325]">Phone:</span>{" "}
                <a href={`tel:${phoneHref}`} className="hover:text-[#1f3325]">
                  {phoneNumber}
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#1f3325]">Email:</span>{" "}
                <a href={`mailto:${email}`} className="hover:text-[#1f3325]">
                  {email}
                </a>
              </p>
            </div>

            <div className="mt-4 rounded-[1.1rem] border border-[#d7ddd1] bg-[#f6f2e8] p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#506656]">
                Opening hours
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#3f5547]">
                {openingHours.map((hours) => (
                  <li key={hours}>{hours}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
