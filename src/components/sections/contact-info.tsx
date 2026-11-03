import { siteConfig } from "@/lib/site";

/** The aside beside the enquiry form: a washed block, no icons, no card. */
export function ContactInfo() {
  return (
    <aside className="self-start bg-wash p-10 max-[760px]:p-7">
      <p className="label mb-7">Get in touch</p>
      <h3 className="text-subheading">
        A real conversation.
        <br />
        A useful first step.
      </h3>

      <a
        href={`mailto:${siteConfig.email}`}
        className="my-5 block break-words underline"
      >
        {siteConfig.email}
      </a>
      <a
        href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
        className="my-5 block underline"
      >
        {siteConfig.phone}
      </a>

      <p className="mb-3">{siteConfig.location}</p>
      <p className="text-muted-ink">
        Share your goals, who the programme is for and any timing you have in
        mind.
      </p>

      <div className="mt-8 flex flex-wrap gap-5 border-t border-rule-deep pt-6">
        {siteConfig.social.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-small font-bold"
          >
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
