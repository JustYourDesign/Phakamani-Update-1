import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * The repeating furniture of the reference system. Everything is flat and
 * square; hierarchy comes from rules, scale and the two warm washes.
 */

/** Eyebrow + condensed heading on the left, a short standfirst on the right. */
export function SectionHead({
  eyebrow,
  heading,
  standfirst,
  className,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  standfirst?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-[38px] flex items-end justify-between gap-10 max-[760px]:block",
        className,
      )}
    >
      <div className="min-w-0">
        <p className="label mb-7">{eyebrow}</p>
        <h2 className="text-title">{heading}</h2>
      </div>
      {standfirst && (
        <p className="mb-[5px] max-w-[360px] text-muted-ink max-[760px]:mt-6">
          {standfirst}
        </p>
      )}
    </div>
  );
}

/** Ink opener for every interior page. */
export function PageHero({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  intro: string;
}) {
  return (
    <section className="on-dark bg-forest px-[7%] pb-[60px] pt-[70px] text-paper max-[760px]:px-[6%] max-[760px]:py-[45px]">
      <p className="label mb-7 text-paper">{eyebrow}</p>
      <h1 className="mb-8 max-w-[1000px] text-hero">{heading}</h1>
      <p className="measure text-lead text-on-ink">{intro}</p>
    </section>
  );
}

/** Full-bleed photographic band under a page hero. */
export function PageImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[420px] w-full max-[760px]:h-[280px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover object-[center_40%]"
        priority
      />
    </div>
  );
}

/** The forest closing band that ends every page. */
export function Closing({
  eyebrow = "There is more in you",
  heading = (
    <>
      Where could
      <br />
      more take you?
    </>
  ),
  description = (
    <>
      Tell us where you are and where you want to go.
      <br />
      Let&rsquo;s shape a programme that fits.
    </>
  ),
  ctaLabel = "Start a conversation",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    /* Forest green from the logo mark — this band is the one place the
       brand colour carries a whole section, with a paper CTA on top. */
    <section className="on-dark bg-forest px-[7%] py-[85px] text-center text-paper max-[760px]:px-[6%] max-[760px]:py-[60px]">
      <p className="label mb-7 text-paper">{eyebrow}</p>
      <h2 className="mb-7 text-closing">{heading}</h2>
      <p className="mb-8 text-on-ink">{description}</p>
      <Link href={ctaHref} className={cn(buttonVariants({ variant: "light" }))}>
        {ctaLabel}
      </Link>
    </section>
  );
}

/** Hairline-topped card: serial number, heading, copy. */
export function DetailCard({
  step,
  title,
  description,
  /** The journey band rules in the lighter line colour, not ink. */
  subtle,
}: {
  step: string;
  title: string;
  description: string;
  subtle?: boolean;
}) {
  return (
    <article
      className={cn("border-t pb-0 pt-6", subtle ? "border-line" : "border-ink")}
    >
      <span className="number">{step}</span>
      <h3 className="mt-6 text-subheading">{title}</h3>
      <p className="mt-0 text-muted-ink">{description}</p>
    </article>
  );
}
