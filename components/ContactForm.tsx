type ContactFormProps = {
  phoneNumber: string;
  phoneHref: string;
};

const enquiryNotes = [
  "Reply within one working day for most quote requests.",
  "Site visits arranged around access, measurements, and how you want the space to work.",
  "Written recommendations with practical options on finish, timing, and budget range.",
];

export function ContactForm({ phoneNumber, phoneHref }: ContactFormProps) {
  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-title">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="surface-panel overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(217,226,209,0.55),transparent_65%)]" />
          <p className="section-kicker">Free Quote</p>
          <h2 id="contact-title" className="section-title mt-4">
            Tell us your plan and we will call you back quickly
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#445b4d] sm:text-base">
            Share a few details and we will suggest practical next steps, timeline,
            and rough cost range for your Nottingham project.
          </p>

          <div className="mt-6 space-y-3 text-sm text-[#334738]">
            <p>
              Phone:{" "}
              <a href={`tel:${phoneHref}`} className="font-semibold text-[#21442a]">
                {phoneNumber}
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:hello@verdanceoutdoor.com" className="font-semibold text-[#21442a]">
                hello@verdanceoutdoor.com
              </a>
            </p>
            <p>
              Demo address:{" "}
              <span className="font-semibold text-[#21442a]">Nottingham NG1 1AA</span>
            </p>
          </div>

          <div className="mt-7 rounded-[1.6rem] border border-[#d8ded1] bg-[#f7f3ea] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a7062]">
              What happens next
            </p>
            <ul className="mt-3 grid gap-3">
              {enquiryNotes.map((note) => (
                <li key={note} className="flex items-start gap-3 text-sm leading-6 text-[#324536]">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-2 w-2 rounded-full bg-[#2f6a3b]"
                  />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          className="surface-card rounded-[2rem] p-6 sm:p-8"
          action="#"
          method="post"
          aria-label="Request a landscaping quote"
        >
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a7062]">
                Quote request form
              </p>
              <p className="mt-1 text-sm text-[#445b4d]">
                A few project details is enough for a helpful first call back.
              </p>
            </div>
            <span className="rounded-full border border-[#d1d9cc] bg-[#f6f2e8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#325140]">
              No obligation
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="label-field">
                Name
              </label>
              <input id="name" name="name" type="text" required className="input-field" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="label-field">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" required className="input-field" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="postcode" className="label-field">
                Postcode
              </label>
              <input id="postcode" name="postcode" type="text" required className="input-field" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="label-field">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="input-field resize-y"
                placeholder="Tell us what you want to improve outside your home."
              />
            </div>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
            Request quote
          </button>
        </form>
      </div>
    </section>
  );
}
