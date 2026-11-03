import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { teamImage } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Copy beside a single wide group shot. Paper ground. */
export function Team() {
  return (
    <section
      id="team"
      className="section-x section-y grid grid-cols-2 gap-[70px] pt-5 max-[1000px]:gap-10 max-[760px]:grid-cols-1"
    >
      <div className="min-w-0">
        <p className="label mb-7">The people behind Phakamani</p>
        <h2 className="mb-7 text-title">
          Real people.
          <br />
          Shared belief.
        </h2>
        <p className="mb-8 max-w-[420px] text-muted-ink">
          Coaches, psychologists, facilitators and film-makers bringing human
          performance to life.
        </p>
        <Link href="/team" className={cn(buttonVariants({ variant: "dark" }))}>
          Meet the team
        </Link>
      </div>

      <div className="relative max-h-[400px] min-h-[320px] max-[760px]:h-[300px] max-[760px]:min-h-0">
        <Image
          src={teamImage.src}
          alt={teamImage.alt}
          fill
          loading="lazy"
          sizes="(min-width: 760px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
