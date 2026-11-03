import Link from "next/link";

import { SectionHead } from "@/components/sections/primitives";
import { exploreStrands } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Four washed blocks — the public-facing strands. No photography. */
export function Explore({ className }: { className?: string }) {
  return (
    <section id="explore" className={cn("section-x section-y", className)}>
      <SectionHead
        eyebrow="Explore Phakamani"
        heading={
          <>
            Learn. Watch.
            <br />
            Take part.
          </>
        }
        standfirst="Ideas, stories and experiences that help the possibility of more travel further."
      />

      <div className="grid grid-cols-4 gap-6 max-[1000px]:grid-cols-2 max-[760px]:grid-cols-1 max-[1000px]:gap-5">
        {exploreStrands.map((strand) => (
          <Link
            key={strand.href}
            href={strand.href}
            className="flex min-h-[285px] flex-col items-start bg-wash p-8 no-underline hover:bg-wash-deep hover:no-underline max-[760px]:min-h-[250px]"
          >
            <span className="label">{strand.kicker}</span>
            <h3 className="mt-5 text-subheading">{strand.title}</h3>
            <p className="text-muted-ink">{strand.description}</p>
            <span className="label mt-auto border-b border-ink">
              Explore {strand.kicker.toLowerCase()}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
