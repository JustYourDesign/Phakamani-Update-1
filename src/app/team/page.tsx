import type { Metadata } from "next";

import {
  Closing,
  PageHero,
  PageImage,
} from "@/components/sections/primitives";
import { teamImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Team — Phakamani",
  description:
    "Coaches, psychologists, facilitators and film-makers who show up in classrooms, boardrooms and at start lines.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        heading={
          <>
            A team.
            <br />
            A shared belief.
          </>
        }
        intro="Coaches, psychologists, facilitators and film-makers who show up in classrooms, boardrooms and at start lines."
      />
      <PageImage src={teamImage.src} alt={teamImage.alt} />

      <section className="section-x section-y max-w-[1050px]">
        <p className="label mb-7">Why we exist</p>
        <h2 className="mb-7 text-title">
          Performance
          <br />
          in service of life.
        </h2>

        <div className="text-lead">
          <p className="mb-5">
            Phakamani is rooted in the Nguni concept meaning &ldquo;rise
            up&rdquo;. Our belief is simple: human beings often have more
            capacity than they realise.
          </p>
          <p className="mb-5">
            The philosophy began with the discovery that perceived limits are
            not always actual limits. Completing an Ironman revealed how
            mindset, habits, preparation and support can make what feels
            impossible become possible.
          </p>
          <p>
            We help people live better, lead better and explore what is
            possible. Performance should expand life.
          </p>
        </div>
      </section>

      <Closing />
    </>
  );
}
