import Link from "next/link";

import { SectionHead } from "@/components/sections/primitives";
import { audiences } from "@/lib/site";

/**
 * The starting-point router. Three hairline-topped cards that shift right
 * and take the warm wash on hover — the reference's one piece of motion.
 */
export function Audiences() {
  return (
    <section id="paths" className="section-x section-y">
      <SectionHead
        eyebrow="Who we help"
        heading={
          <>
            Find your
            <br />
            starting point.
          </>
        }
        standfirst={
          <>
            Different people. Different goals.
            <br />
            The same belief: there is more in you.
          </>
        }
      />

      <div className="grid grid-cols-3 gap-6 max-[760px]:grid-cols-1 max-[1000px]:gap-5">
        {audiences.map((audience, index) => (
          <Link
            key={audience.href}
            href={audience.href}
            className="flex min-h-[300px] flex-col items-start border-t border-ink py-[25px] pl-0 pr-6 no-underline transition-[padding,background] hover:bg-wash-deep hover:pl-[15px] hover:no-underline max-[760px]:min-h-[230px] max-[760px]:pt-5"
          >
            <span className="number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-10 text-[2rem] max-[760px]:mt-6">
              {audience.title}
            </h3>
            <p className="text-muted-ink">{audience.description}</p>
            <span className="label mt-auto border-b border-ink">
              Explore {audience.title.toLowerCase()}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
