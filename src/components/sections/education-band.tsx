import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Full-bleed black band, photograph flush to the left edge. The one place on
 * the home page where an image carries half the width.
 */
export function EducationBand() {
  return (
    <section
      id="education"
      className="on-dark grid grid-cols-2 bg-ink text-paper max-[760px]:grid-cols-1"
    >
      <div className="relative min-h-[500px] max-h-[650px] max-[760px]:h-[350px] max-[760px]:min-h-0">
        <Image
          src="/photos/schools/phillip-mtywaku/classroom.webp"
          alt="Learners at wooden desks with hands raised during a session"
          fill
          sizes="(min-width: 760px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-[12%] py-[65px] max-[1000px]:px-[8%] max-[1000px]:py-[50px] max-[760px]:px-[6%] max-[760px]:py-[45px]">
        <p className="label mb-7 text-paper">Possibility starts early</p>
        <h2 className="mb-7 text-title">
          A foundation
          <br />
          for a fuller life.
        </h2>
        <p className="mb-8 max-w-[420px] text-on-ink">
          Confidence, resilience and leadership can begin in the classroom. Our
          work with students and educators helps young people recognise what
          they could become.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/education"
            className={cn(buttonVariants({ variant: "light" }))}
          >
            Explore education
          </Link>
          <Link
            href="/gallery"
            className={cn(buttonVariants({ variant: "light" }))}
          >
            See the gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
