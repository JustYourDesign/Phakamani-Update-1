export const siteConfig = {
  name: "Phakamani",
  tagline: "BE MORE.",
  description:
    "Phakamani is a human-performance company helping individuals, organisations and communities become more capable, elevate performance and live fully.",
  email: "admin@phakamani.io",
  phone: "+27 82 390 3419",
  location: "Johannesburg, South Africa",
  designer: { name: "Just Your Design", href: "https://justyourdesign.co.za" },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/phakamani_performance" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

/* --------------------------------------------------------------------------
   Navigation
   Three disclosure dropdowns, each a short list of destinations with a
   one-line note, then Team and an ink Connect button. No mega-panel.
   -------------------------------------------------------------------------- */

export type NavLink = { label: string; href: string; note: string };

export type NavGroup = {
  label: string;
  links: readonly NavLink[];
};

export const navGroups = [
  {
    label: "Our Approach",
    links: [
      { label: "Movement", href: "/movement", note: "Body, health and adventure" },
      { label: "Mind", href: "/mind", note: "Resilience and emotional wellbeing" },
      { label: "Connect", href: "/connect", note: "Relationships and belonging" },
    ],
  },
  {
    label: "Who We Help",
    links: [
      { label: "Workplace", href: "/workplace", note: "Leadership, culture and teams" },
      { label: "Communities", href: "/communities", note: "Partnerships that help people rise" },
      { label: "Individuals", href: "/individuals", note: "Your potential, your path" },
    ],
  },
  {
    label: "Explore",
    links: [
      { label: "Education", href: "/education", note: "Confidence and future potential" },
      { label: "Gallery", href: "/gallery", note: "Schools we have worked with" },
      { label: "Media", href: "/media", note: "Stories of human possibility" },
      { label: "Events", href: "/events", note: "Experiences that bring us together" },
    ],
  },
] as const;

/** Links that sit directly in the bar, no panel. */
export type NavDirect = { label: string; href: string; emphasis?: boolean };

export const navDirect: readonly NavDirect[] = [
  { label: "Team", href: "/team" },
  { label: "Connect", href: "/contact", emphasis: true },
] as const;

/* --------------------------------------------------------------------------
   Content
   -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
   Upcoming events
   One per arena. A null `date` renders as "Date to be announced" rather than
   inventing one — fill in day/month/year and venue as each is confirmed, and
   the card switches to the dated layout automatically.
   -------------------------------------------------------------------------- */

export type EventDate = { day: string; month: string; year: string };

export type PhakamaniEvent = {
  id: string;
  category: "Wellness" | "Communities" | "Culture";
  title: string;
  description: string;
  image: string;
  date: EventDate | null;
  location: string;
  href: string;
};

export const events: readonly PhakamaniEvent[] = [
  {
    id: "endurance-weekend",
    category: "Wellness",
    image: "/photos/medal-moment.webp",
    title: "Endurance Race Weekend",
    description:
      "A full weekend built around a start line — race preparation, the event itself, and the recovery session that turns one finish into a habit.",
    date: null,
    location: "Venue to be confirmed",
    href: "/activities#wellness",
  },
  {
    id: "inter-school-challenge",
    category: "Communities",
    image: "/photos/school-assembly.webp",
    title: "Inter-School Challenge",
    description:
      "Teams from across the province in sport and problem-solving events — designed so every learner gets a start line, not just the first team.",
    date: null,
    location: "Venue to be confirmed",
    href: "/activities#communities",
  },
  {
    id: "be-more-live",
    category: "Culture",
    image: "/photos/team.webp",
    title: "Be More. Live",
    description:
      "An evening on stage: real transformation stories told by the people who lived them, with a challenge zone open before and after.",
    date: null,
    location: "Venue to be confirmed",
    href: "/activities#culture",
  },
];

export const journeyStages = [
  {
    step: "01",
    name: "Discover",
    description:
      "Recognise possibility. Curiosity, awareness, purpose and self-belief begin here — what might I be capable of?",
  },
  {
    step: "02",
    name: "Develop",
    description:
      "Build capability across health, fitness, mental resilience, emotional wellbeing, skills, habits and leadership.",
  },
  {
    step: "03",
    name: "Perform",
    description:
      "Turn potential into action. Individuals perform. Teams perform. Organisations and communities perform.",
  },
  {
    step: "04",
    name: "Live",
    description:
      "Performance in service of life — adventure, contribution, connection, meaning and joy. It should expand life, not consume it.",
  },
] as const;

export const activities = [
  {
    id: "wellness",
    kicker: "01 — Wellness",
    title: "Wellness",
    lede: "It starts with how people are actually doing.",
    description:
      "Endurance, team sport and adventure are where Phakamani's philosophy was forged. Completing an Ironman proved that perceived limits are not always actual limits — and that discovery is what every sporting programme we run is built to recreate.",
    items: [
      {
        title: "Endurance & Racing",
        description:
          "Training blocks, race preparation and the mental scaffolding that gets people to a start line they never thought they'd stand on.",
      },
      {
        title: "Team Performance Camps",
        description:
          "Multi-day camps for clubs and squads — conditioning, cohesion and the recovery habits that make a season sustainable.",
      },
      {
        title: "Athlete Coaching",
        description:
          "One-to-one work on mindset, load management and the return-from-setback skills that separate long careers from short ones.",
      },
      {
        title: "Adventure & Expeditions",
        description:
          "Guided challenges — summits, ocean crossings, multi-day trails — designed as a controlled encounter with your own ceiling.",
      },
    ],
  },
  {
    id: "communities",
    kicker: "02 — Communities",
    title: "Communities",
    lede: "The earlier the discovery, the further it travels.",
    description:
      "A learner who finds out at fifteen that there is more in them carries that for decades. We work with schools and academic institutions on confidence, resilience and leadership — before life's pressures set the ceiling.",
    items: [
      {
        title: "Student Resilience",
        description:
          "Programmes that build focus, emotional tools and the ability to process setbacks — during exams and long after them.",
      },
      {
        title: "Inter-School Challenges",
        description:
          "Team events across sport and problem-solving that give every learner a version of the start line, not just the first team.",
      },
      {
        title: "Sports Academies",
        description:
          "Structured development for school athletes covering conditioning, nutrition, recovery and the mental side of competing.",
      },
      {
        title: "Educator Support",
        description:
          "Workshops for teachers and coaches — because staff wellbeing is the quiet foundation of a school's performance.",
      },
    ],
  },
  {
    id: "culture",
    kicker: "03 — Culture",
    title: "Culture",
    lede: "Performance, staged for a crowd.",
    description:
      "Human performance is worth watching. We build live experiences, festival activations and stage moments that carry the Be More. idea to audiences — energetic, well-produced and unmistakably African.",
    items: [
      {
        title: "Live Events & Stages",
        description:
          "Conference stages, awards and brand events where the keynote is an experience rather than a slide deck.",
      },
      {
        title: "Festivals & Activations",
        description:
          "Physical challenge zones, recovery lounges and participation formats that turn a crowd into participants.",
      },
      {
        title: "Speaking & Keynotes",
        description:
          "Talks on resilience, endurance and human potential — built on real stories, not motivational filler.",
      },
      {
        title: "Retreats & Experiences",
        description:
          "Immersive multi-day experiences combining movement, recovery, learning and genuine downtime.",
      },
    ],
  },
] as const;

export type ActivityId = (typeof activities)[number]["id"];

export const territories = [
  {
    code: "MOVE",
    title: "Move",
    description: "Physical performance, movement, sport, health and adventure.",
    expanded:
      "From endurance training to everyday movement, we help people rebuild their relationship with their bodies. Programmes draw on real athletic experience — not generic fitness advice — to build strength, stamina and the discipline that carries into every other part of life.",
  },
  {
    code: "MIND",
    title: "Mind",
    description: "Psychology, resilience, mindset and emotional wellbeing.",
    expanded:
      "Coaching rooted in psychology helps people question the limits they've placed on themselves. We build focus, resilience and the emotional tools to process setbacks — because a capable mind is the foundation every other kind of performance is built on.",
  },
  {
    code: "WORK",
    title: "Work",
    description: "Leadership, workplace performance, culture and teams.",
    expanded:
      "Teams perform when their people are led well and supported properly. We work with leaders and organisations to build cultures where performance doesn't come at the cost of wellbeing — through workshops, coaching and long-term partnership.",
  },
  {
    code: "LIVE",
    title: "Live",
    description: "Purpose, relationships, lifestyle, travel and meaningful experience.",
    expanded:
      "Performance should expand life, not consume it. This territory is about what all the capability-building is for — deeper relationships, real adventure, and a life with more meaning and joy in it, not just more achievement.",
  },
  {
    code: "YOUTH",
    title: "Youth",
    description: "Education, opportunity, confidence and future potential.",
    expanded:
      "The earlier someone discovers there's more in them, the further they can go. We work with students and educators to build confidence, resilience and leadership before life's pressures set in — laying a foundation for the rest of their journey.",
  },
  {
    code: "STORIES",
    title: "Stories",
    description: "Transformation, human achievement and remarkable journeys.",
    expanded:
      "Every programme produces a story worth telling. Through Phakamani Media — documentaries, interviews and digital content — we share real transformation journeys that show what's possible when someone chooses to rise up.",
  },
] as const;

export type TerritoryCode = (typeof territories)[number]["code"];

/** The "Be More. More ___" campaign system from the brand brief. */
export const beMoreWords = [
  "capable",
  "resilient",
  "courageous",
  "intentional",
  "connected",
  "confident",
  "curious",
  "alive",
  "human",
  "purposeful",
] as const;

export const wellnessPillars = [
  {
    title: "Mental Wellness",
    description:
      "Psychology-informed coaching that builds focus, resilience and a mindset capable of questioning its own limits.",
  },
  {
    title: "Emotional Wellness",
    description:
      "Space to process, connect and grow — because performance is human before it is productive.",
  },
  {
    title: "Physical Wellness",
    description:
      "Movement, recovery and habit-building drawn from real endurance-sport experience, not generic fitness advice.",
  },
] as const;

export const audiences = [
  {
    title: "Workplace",
    href: "/workplace",
    description:
      "Build leadership, stronger teams and a culture where wellbeing supports performance.",
    bullets: [
      "Leadership development",
      "Team performance workshops",
      "Culture & wellbeing programmes",
    ],
  },
  {
    title: "Communities",
    href: "/communities",
    description:
      "Create shared experiences and partnerships that help people discover their potential.",
    bullets: [
      "Community partnerships",
      "Participation & connection",
      "Youth & school programmes",
    ],
  },
  {
    title: "Individuals",
    href: "/individuals",
    description:
      "Develop the confidence, resilience and habits to grow in health, career and life.",
    bullets: [
      "Personal performance coaching",
      "Mental & emotional resilience",
      "Habit & recovery design",
    ],
  },
] as const;

/* --------------------------------------------------------------------------
   The three approach pillars, as they appear on the home page.
   Full detail lives on each pillar's own page in lib/pages.ts.
   -------------------------------------------------------------------------- */
export const approachPillars = [
  {
    step: "01",
    title: "Movement",
    href: "/movement",
    description: "Body, health and adventure",
    image: "/photos/schools/shoba-high-school/field-huddle.webp",
  },
  {
    step: "02",
    title: "Mind",
    href: "/mind",
    description: "Resilience and emotional wellbeing",
    image: "/photos/schools/shoba-high-school/feelings-zones.webp",
  },
  {
    step: "03",
    title: "Connect",
    href: "/connect",
    description: "Relationships and belonging",
    image: "/photos/schools/shoba-high-school/circle-session.webp",
  },
] as const;

/* --------------------------------------------------------------------------
   The "Explore Phakamani" router on the home page.
   -------------------------------------------------------------------------- */
export const exploreStrands = [
  {
    kicker: "Education",
    title: "A stronger start.",
    description: "Programmes for learners and educators.",
    href: "/education",
    image: "/photos/schools/phillip-mtywaku/classroom.webp",
  },
  {
    kicker: "Gallery",
    title: "The rooms we've been in.",
    description: "Schools and activations.",
    href: "/gallery",
    image: "/photos/schools/shoba-high-school/school-sign.webp",
  },
  {
    kicker: "Media",
    title: "Human stories.",
    description: "Films and conversations in development.",
    href: "/media",
    image: "/photos/studio-camera.webp",
  },
  {
    kicker: "Events",
    title: "Shared possibility.",
    description: "Challenges and live experiences.",
    href: "/events",
    image: "/photos/activations/mzansi-speedway/aerial.webp",
  },
] as const;

export const services = [
  {
    title: "Performance Coaching",
    description:
      "1:1 coaching that turns perceived limits into real capability — built on the belief that there is more in you.",
  },
  {
    title: "Corporate Human Performance",
    description:
      "Team and leadership programmes that help organisations perform without burning their people out.",
  },
  {
    title: "Wellness Programmes",
    description:
      "Mental, emotional and physical wellness work tailored to the people and pace of your organisation.",
  },
  {
    title: "Youth & School Development",
    description:
      "Programmes for students and educators focused on confidence, resilience and future potential.",
  },
  {
    title: "Speaking & Workshops",
    description:
      "Talks and workshops on human performance, resilience and the Be More. philosophy for teams and events.",
  },
  {
    title: "Retreats & Experiences",
    description:
      "Immersive experiences that create the same discovery Phakamani was built on — that more is possible.",
  },
] as const;

export const faqs = [
  {
    id: "faq-1",
    question: "Who is Phakamani for?",
    answer:
      "Individuals, professionals, corporate teams, schools and communities — anyone who believes there is more possible in how they perform and live.",
  },
  {
    id: "faq-2",
    question: "What does a typical programme look like?",
    answer:
      "Every programme moves through the same journey: Discover, Develop, Perform, Live. The format — coaching, workshops, retreats or team sessions — is shaped around your goals.",
  },
  {
    id: "faq-3",
    question: "Do you only work with athletes?",
    answer:
      "No. Phakamani's philosophy started with endurance sport, but human performance shows up everywhere — in classrooms, boardrooms, and everyday life.",
  },
  {
    id: "faq-4",
    question: "Can Phakamani work with our organisation long-term?",
    answer:
      "Yes. Many of our corporate and school partnerships run as ongoing programmes rather than once-off sessions, so growth compounds over time.",
  },
  {
    id: "faq-5",
    question: "How do we get started?",
    answer:
      "Reach out through the contact page with a little about your goals, and we'll set up a conversation to shape the right programme for you.",
  },
] as const;

export const partners = [
  { name: "Barloworld", logo: "/partners/barloworld.webp" },
  { name: "Rand Water", logo: "/partners/rand-water.webp" },
  { name: "Transnet", logo: "/partners/transnet.webp" },
  { name: "Momentum Health", logo: "/partners/momentum-health.webp" },
  { name: "IRONMAN", logo: "/partners/ironman.webp" },
] as const;
