import { DetailCard, SectionHead } from "@/components/sections/primitives";
import { journeyStages } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Four hairline-topped stages. No photography — this is a text band. */
export function Journey({ className }: { className?: string }) {
  return (
    <section id="journey" className={cn("section-x section-y", className)}>
      <SectionHead
        eyebrow="The Phakamani journey"
        heading={
          <>
            Four stages.
            <br />
            More possibility.
          </>
        }
        standfirst="Every programme follows a shared path. The goal is greater capability — and a fuller life."
      />

      <div className="grid grid-cols-4 gap-[30px] max-[760px]:grid-cols-1 max-[760px]:gap-5">
        {journeyStages.map((stage) => (
          <DetailCard
            key={stage.name}
            step={stage.step}
            title={stage.name}
            description={stage.description}
            subtle
          />
        ))}
      </div>
    </section>
  );
}
