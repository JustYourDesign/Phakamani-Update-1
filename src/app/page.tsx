import { Hero } from "@/components/sections/hero";
import { BeliefStrip } from "@/components/sections/belief-strip";
import { Audiences } from "@/components/sections/audiences";
import { Approach } from "@/components/sections/approach";
import { Journey } from "@/components/sections/journey";
import { EducationBand } from "@/components/sections/education-band";
import { Explore } from "@/components/sections/explore";
import { Team } from "@/components/sections/team";
import { Closing } from "@/components/sections/primitives";

/**
 * The client's own running order: hero, belief strip, who we help, how we
 * work, the journey, education, explore, team, closing.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <BeliefStrip />
      <Audiences />
      <Approach />
      <Journey />
      <EducationBand />
      <Explore />
      <Team />
      <Closing />
    </>
  );
}
