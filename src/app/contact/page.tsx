import type { Metadata } from "next";

import { PageHero } from "@/components/sections/primitives";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";

export const metadata: Metadata = {
  title: "Connect — Phakamani",
  description:
    "Tell us where you are and where you want to go. We'll help shape the right programme.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        heading={
          <>
            Let&rsquo;s find
            <br />
            your more.
          </>
        }
        intro="Tell us where you are and where you want to go. We'll help shape the right programme."
      />

      <section className="section-x section-y grid grid-cols-[1.3fr_1fr] gap-[90px] max-[1000px]:gap-10 max-[760px]:grid-cols-1">
        <ContactForm />
        <ContactInfo />
      </section>
    </>
  );
}
