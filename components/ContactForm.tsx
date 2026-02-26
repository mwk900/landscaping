type ContactFormProps = {
  phoneNumber: string;
  phoneHref: string;
};

const nearbyTowns = [
  "West Bridgford",
  "Beeston",
  "Arnold",
  "Mapperley",
  "Wollaton",
  "Carlton",
];

export function ContactForm({ phoneNumber, phoneHref }: ContactFormProps) {
  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-title">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#d5e1d1] bg-[#f8fbf6] p-6 sm:p-8">
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

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a7062]">
              Also serving
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {nearbyTowns.map((town) => (
                <li
                  key={town}
                  className="rounded-full bg-[#e4eee0] px-3 py-1.5 text-xs font-medium text-[#2a4333]"
                >
                  {town}
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
