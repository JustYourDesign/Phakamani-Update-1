import Link from "next/link";

import { Brand } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/site";

/** Black footer — the secondary dark ground. Three columns, one below 760px. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink px-[7%] py-[55px] text-small text-on-ink max-[760px]:px-[6%] max-[760px]:py-[45px]">
      <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-[30px] max-[760px]:grid-cols-1">
        <div>
          <Brand className="text-white" />
          <p className="mt-6">Human performance in service of life.</p>
        </div>

        <div>
          <Link href="/team" className="mb-3 block">
            Team
          </Link>
          <Link href="/contact" className="mb-3 block">
            Connect
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mb-3 block break-words"
          >
            {siteConfig.email}
          </a>
          {siteConfig.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mb-3 block"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div>
          <p className="mb-3">{siteConfig.location}</p>
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="mb-3 block"
          >
            {siteConfig.phone}
          </a>
          <p className="mb-3">
            © {year} {siteConfig.name}
          </p>
        </div>
      </div>

      {/* Studio credit — its own rule-separated line under the columns. */}
      <div className="mt-12 border-t border-white/15 pt-7 text-center max-[760px]:mt-9 max-[760px]:text-left">
        <p>
          Designed by{" "}
          <a
            href={siteConfig.designer.href}
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold text-paper"
          >
            {siteConfig.designer.name}
          </a>
          <span className="mx-2 text-white/30" aria-hidden>
            ·
          </span>
          <a
            href={siteConfig.designer.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            justyourdesign.co.za
          </a>
        </p>
      </div>
    </footer>
  );
}
