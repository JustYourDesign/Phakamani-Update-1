import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Closing,
  DetailCard,
  PageHero,
  PageImage,
} from "@/components/sections/primitives";
import { Journey } from "@/components/sections/journey";
import { buttonVariants } from "@/components/ui/button";
import { getInteriorPage, interiorPages, audiencePaths } from "@/lib/pages";
import { pageHeroImages, type PageHeroKey } from "@/lib/images";
import { cn } from "@/lib/utils";

/**
 * The nine interior pages — three approach pillars, three audiences, three
 * explore strands — all share this shape. Static routes (/gallery, /team,
 * /contact) resolve before this segment, and dynamicParams is off so any
 * other slug 404s rather than rendering an empty shell.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return interiorPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getInteriorPage(slug);
  if (!page) return {};

  return {
    title: `${page.label} — Phakamani`,
    description: page.intro,
  };
}

export default async function InteriorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getInteriorPage(slug);
  if (!page) notFound();

  const image = pageHeroImages[page.image as PageHeroKey];

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        heading={page.heading}
        intro={page.intro}
      />
      <PageImage src={image.src} alt={image.alt} />

      <section className="section-x section-y">
        <p className="label mb-7">{page.waysTitle}</p>
        <div className="grid grid-cols-3 gap-6 max-[760px]:grid-cols-1 max-[1000px]:gap-5">
          {page.ways.map((way) => (
            <DetailCard
              key={way.step}
              step={way.step}
              title={way.title}
              description={way.description}
            />
          ))}
        </div>

        {page.link && (
          <p className="mt-9">
            <Link href={page.link.href} className="underline">
              {page.link.label}
            </Link>
          </p>
        )}
      </section>

      {page.showPaths && (
        <section className="section-x section-y pt-0">
          <h2 className="mb-7 text-title">Find your path.</h2>
          <div className="flex flex-wrap items-center gap-6">
            {audiencePaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className={cn(buttonVariants({ variant: "dark" }))}
              >
                {path.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {page.showJourney && <Journey className="pt-0" />}

      <Closing />
    </>
  );
}
