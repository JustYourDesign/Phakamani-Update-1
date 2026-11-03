import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { heroImage } from "@/lib/images";
import { cn } from "@/lib/utils";

/**
 * Two-column opener: copy on the forest ground, a full-bleed photograph beside
 * it carrying its own caption. Collapses to a single column below 760px.
 */
export function Hero() {
  return (
    <section className="on-dark grid min-h-[710px] grid-cols-[1.03fr_1fr] bg-forest text-paper max-[760px]:grid-cols-1">
      <div className="flex flex-col justify-center py-[60px] pl-[10%] pr-[8%] pb-9 max-[1000px]:pl-[8%] max-[760px]:px-[6%] max-[760px]:py-10">
        <p className="label text-paper">Human performance. Fuller lives.</p>

        <h1 className="my-8 text-display tracking-[-2px]">
          BE
          <br />
          {/* The full stop is the logo mark's dot — decorative, so the low
              contrast against the forest ground is deliberate. */}
          MORE<span className="text-ink">.</span>
        </h1>

        <p className="max-w-[480px] text-lead text-on-ink">
          Helping individuals, workplaces and communities build capability,
          strengthen wellbeing and live more fully.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="#paths"
            className={cn(buttonVariants({ variant: "light" }))}
          >
            Find your path
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            Start a conversation
          </Link>
        </div>

        <p className="label mt-[55px] text-on-ink-dim max-[760px]:mt-8">
          Rise up. Discover what&rsquo;s possible.
        </p>
      </div>

      <div className="relative min-h-[500px] max-[760px]:min-h-[400px]">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="(min-width: 760px) 50vw, 100vw"
          className="object-cover object-[50%_30%] brightness-[0.82]"
        />
        <div className="absolute inset-x-10 bottom-[26px] text-white max-[760px]:inset-x-6">
          <span className="label">{heroImage.captionKicker}</span>
          <p className="mt-3.5 font-display text-[2.8rem] font-bold leading-[1.05]">
            {heroImage.captionLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
