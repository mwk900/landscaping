type FooterProps = {
  phoneNumber: string;
  phoneHref: string;
};

export function Footer({ phoneNumber, phoneHref }: FooterProps) {
  return (
    <footer className="mt-6 border-t border-[#d4e0cf] bg-[#eff4eb] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#3c5646]">
            Verdance Nottingham
          </p>
          <p className="mt-3 text-sm text-[#4d6456]">
            Premium landscaping, patios, fencing, lawn care, and complete outdoor
            transformation projects for local homeowners.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#3c5646]">
            Contact
          </p>
          <p className="mt-3 text-sm text-[#4d6456]">
            Phone: <a href={`tel:${phoneHref}`}>{phoneNumber}</a>
          </p>
          <p className="mt-1 text-sm text-[#4d6456]">
            Email: <a href="mailto:hello@verdanceoutdoor.com">hello@verdanceoutdoor.com</a>
          </p>
          <p className="mt-1 text-sm text-[#4d6456]">Demo address: Nottingham NG1 1AA</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#3c5646]">
            Disclaimer
          </p>
          <p className="mt-3 text-sm text-[#4d6456]">
            Demo website for portfolio purposes - not a real company.
          </p>
        </div>
      </div>
    </footer>
  );
}
