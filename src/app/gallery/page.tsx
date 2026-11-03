import type { Metadata } from "next";
import Image from "next/image";

import {
  Closing,
  PageHero,
  PageImage,
} from "@/components/sections/primitives";
import {
  activations,
  galleryPhotoSrc,
  schools,
  type GalleryEntry,
} from "@/lib/gallery";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery — Phakamani",
  description:
    "Schools where Phakamani has run resilience and leadership programmes, and the public activations alongside them.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore / Gallery"
        heading={<>The rooms we&rsquo;ve been in.</>}
        intro="Schools where Phakamani has worked with learners and educators, and the public activations alongside them. Each one started the same way: a group of people, and a question about what they could become."
      />
      <PageImage
        src="/photos/schools/shoba-high-school/field-huddle.webp"
        alt="A Phakamani facilitator talking to a line of learners on a school field"
      />

      {/* ---- Schools ---- */}
      <section className="section-x pt-[90px] max-[1000px]:pt-[65px] max-[760px]:pt-[55px]">
        <p className="label mb-7">Schools</p>
        <h2 className="text-title">Where the work starts.</h2>
      </section>

      {schools.map((school, index) => (
        <EntryBlock key={school.id} entry={school} index={index} />
      ))}

      {/* ---- Activations, deliberately set apart from the schools ---- */}
      <section className="section-x border-t border-line pt-[90px] max-[1000px]:pt-[65px] max-[760px]:pt-[55px]">
        <p className="label mb-7">Activations</p>
        <h2 className="text-title">Out in public.</h2>
        <p className="measure mt-6 text-muted-ink">
          Events and partnerships that take the same ideas outside the
          classroom.
        </p>
      </section>

      {activations.map((entry, index) => (
        <EntryBlock key={entry.id} entry={entry} index={index} />
      ))}

      <Closing
        eyebrow="Bring it to your school"
        heading="Start the conversation."
        description="Tell us about your learners, your year plan and what you want them to walk away with."
      />
    </>
  );
}

/** One gallery entry: the description row, then a caption-free photo grid. */
function EntryBlock({
  entry,
  index,
}: {
  entry: GalleryEntry;
  index: number;
}) {
  // The 2x2 lead tile only earns its place when the remaining photos fill
  // whole rows of four (5, 9, 13...). Any other count gets an even three-up
  // grid instead, so no block ends on a lone orphan tile.
  const lead = entry.photos.length >= 5 && (entry.photos.length - 1) % 4 === 0;

  return (
    <section
      id={entry.id}
      /* Alternating grounds keep consecutive blocks from reading as one
         long scroll. */
      className={cn("section-x section-y", index % 2 === 1 && "bg-wash")}
    >
      <div className="mb-[38px] flex items-end justify-between gap-10 max-[760px]:block">
        <div className="min-w-0 max-w-[620px]">
          <span className="number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 font-display text-row">{entry.name}</h3>
          <p className="mt-6 text-muted-ink">{entry.blurb}</p>
        </div>

        <dl className="flex shrink-0 flex-wrap gap-x-10 gap-y-5 max-[760px]:mt-8">
          {entry.meta.map((item) => (
            <div key={item.label} className="min-w-0">
              <dt className="label text-muted-ink">{item.label}</dt>
              <dd className="mt-2 font-bold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Photographs. No captions by design. */}
      {entry.photos.length > 0 ? (
        <ul
          className={cn(
            "grid list-none gap-4 p-0 max-[760px]:grid-cols-2",
            lead ? "grid-cols-4" : "grid-cols-3",
          )}
        >
          {entry.photos.map((photo, photoIndex) => (
            <li
              key={photo.file}
              /* First tile runs 2x2 so the block has a focal point instead
                 of a row of equal squares. */
              className={cn(
                "relative aspect-square overflow-hidden",
                lead && photoIndex === 0 && "col-span-2 row-span-2",
              )}
            >
              <Image
                src={galleryPhotoSrc(entry, photo)}
                alt={photo.alt}
                fill
                sizes={
                  lead && photoIndex === 0
                    ? "(min-width: 760px) 50vw, 90vw"
                    : lead
                      ? "(min-width: 760px) 25vw, 45vw"
                      : "(min-width: 760px) 33vw, 45vw"
                }
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="border border-dashed border-line px-6 py-20 text-center">
          <p className="font-bold">Photographs coming soon</p>
          <p className="mt-2 text-muted-ink">
            Images from this one are still being collected.
          </p>
        </div>
      )}
    </section>
  );
}
