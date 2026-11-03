import {
  audiences,
  events,
  journeyStages,
  navGroups,
} from "@/lib/site";
import { interiorPages } from "@/lib/pages";
import { activations, schools } from "@/lib/gallery";

export type SearchDoc = {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  /** Extra terms that should match but aren't worth showing. */
  keywords?: string;
};

/**
 * The site is fully static, so search runs entirely in the browser over an
 * index built from the same content the pages render. No backend, no network
 * request — the whole corpus is a few kilobytes.
 */
function buildIndex(): SearchDoc[] {
  const docs: SearchDoc[] = [
    {
      id: "page-home",
      title: "Home",
      description:
        "Be More. A human-performance company helping people, organisations and communities become more capable.",
      href: "/",
      category: "Page",
      keywords: "be more phakamani rise up",
    },
    {
      id: "page-gallery",
      title: "Gallery",
      description:
        "Schools where Phakamani has run resilience, confidence and leadership programmes.",
      href: "/gallery",
      category: "Page",
      keywords: "photos photographs images schools learners",
    },
    {
      id: "page-team",
      title: "Team",
      description:
        "Coaches, psychologists, facilitators and film-makers who deliver every Phakamani programme.",
      href: "/team",
      category: "Page",
      keywords: "people staff who we are crew about ironman nguni rise up",
    },
    {
      id: "page-contact",
      title: "Connect",
      description:
        "Start a conversation about a coaching, workplace, community or school programme.",
      href: "/contact",
      category: "Page",
      keywords: "email phone enquire enquiry get in touch contact",
    },
  ];

  // The nine interior pages, plus each of their "ways to grow".
  for (const page of interiorPages) {
    docs.push({
      id: `page-${page.slug}`,
      title: page.label,
      description: page.intro,
      href: `/${page.slug}`,
      category: "Page",
      keywords: page.eyebrow + " " + page.heading,
    });

    for (const way of page.ways) {
      docs.push({
        id: `way-${page.slug}-${way.step}`,
        title: way.title,
        description: way.description,
        href: `/${page.slug}`,
        category: page.label,
      });
    }
  }

  for (const entry of [...schools, ...activations]) {
    docs.push({
      id: `gallery-${entry.id}`,
      title: entry.name,
      description: entry.blurb,
      href: `/gallery#${entry.id}`,
      category: "Gallery",
      keywords: entry.meta.map((m) => m.value).join(" "),
    });
  }

  for (const stage of journeyStages) {
    docs.push({
      id: `stage-${stage.name}`,
      title: stage.name,
      description: stage.description,
      href: "/#journey",
      category: "The Journey",
    });
  }

  for (const audience of audiences) {
    docs.push({
      id: `audience-${audience.title}`,
      title: audience.title,
      description: audience.description,
      href: audience.href,
      category: "Who We Help",
      keywords: audience.bullets.join(" "),
    });
  }

  for (const event of events) {
    const when = event.date
      ? `${event.date.day} ${event.date.month} ${event.date.year}`
      : "date to be announced";

    docs.push({
      id: `event-${event.id}`,
      title: event.title,
      description: `${event.category} · ${when}`,
      href: "/events",
      category: "Events",
      keywords: event.description + " upcoming diary calendar",
    });
  }

  // Nav destinations that aren't already covered above.
  const seen = new Set(docs.map((d) => d.title.toLowerCase()));
  for (const group of navGroups) {
    for (const link of group.links) {
      if (seen.has(link.label.toLowerCase())) continue;
      seen.add(link.label.toLowerCase());
      docs.push({
        id: `nav-${group.label}-${link.label}`,
        title: link.label,
        description: `${group.label} · ${link.note}`,
        href: link.href,
        category: group.label,
      });
    }
  }

  return docs;
}

export const searchIndex = buildIndex();

const normalise = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // strip combining diacritics

/**
 * Every term must match somewhere (AND), but where it matches decides the
 * score — a title hit outranks a body hit, and a word-start hit outranks a
 * match buried mid-word.
 */
function scoreDoc(doc: SearchDoc, terms: string[]) {
  const title = normalise(doc.title);
  const description = normalise(doc.description);
  const category = normalise(doc.category);
  const keywords = normalise(doc.keywords ?? "");

  let total = 0;

  for (const term of terms) {
    let best = 0;

    if (title === term) best = 120;
    else if (title.startsWith(term)) best = 90;
    else if (new RegExp(`\\b${escapeRegExp(term)}`).test(title)) best = 70;
    else if (title.includes(term)) best = 45;
    else if (category.includes(term)) best = 30;
    else if (new RegExp(`\\b${escapeRegExp(term)}`).test(description)) best = 20;
    else if (description.includes(term)) best = 12;
    else if (keywords.includes(term)) best = 8;

    // One unmatched term disqualifies the document entirely.
    if (best === 0) return 0;
    total += best;
  }

  return total;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function search(query: string, limit = 8): SearchDoc[] {
  const terms = normalise(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  return searchIndex
    .map((doc) => ({ doc, score: scoreDoc(doc, terms) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title))
    .slice(0, limit)
    .map((entry) => entry.doc);
}

/** Shown before the user types anything. */
export const suggestedSearches = [
  "Communities",
  "Endurance",
  "Leadership",
  "Resilience",
  "Retreats",
  "Podcast",
] as const;
