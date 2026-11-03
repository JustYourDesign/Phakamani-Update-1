import Link from "next/link";

import { SectionHead } from "@/components/sections/primitives";
import { approachPillars } from "@/lib/site";

/**
 * The three pillars as a rule-separated list rather than cards — number,
 * condensed heading, description, link, on a tinted ground. Below 760px the
 * four columns fold to two with the number in its own gutter.
 */
export function Approach() {
  return (
    <section id="approach" className="section-x section-y bg-wash">
      <SectionHead
        eyebrow="Our approach"
        heading={
          <>
            Body. Mind.
            <br />
            Human connection.
          </>
        }
        standfirst="Capability grows when we nurture physical, mental and emotional wellbeing together."
      />

      <div>
        {approachPillars.map((pillar) => (
          <Link
            key={pillar.href}
            href={pillar.href}
            className="grid grid-cols-[60px_1fr_1fr_80px] items-center gap-[25px] border-t border-rule-deep py-[30px] no-underline hover:no-underline max-[760px]:grid-cols-[35px_1fr] max-[760px]:gap-3.5"
          >
            <span className="number">{pillar.step}</span>
            <h3 className="font-display text-row">{pillar.title}</h3>
            <p className="text-muted-ink max-[760px]:col-start-2">
              {pillar.description}
            </p>
            <span className="label border-b border-ink max-[760px]:col-start-2 max-[760px]:justify-self-start">
              Explore
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
