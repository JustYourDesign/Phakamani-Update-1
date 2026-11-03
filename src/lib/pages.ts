/* --------------------------------------------------------------------------
   Interior pages
   The client's own structure: three approach pillars, three audiences, three
   explore strands. Every one of them is the same shape — opener, three "ways
   to grow", then either the audience router or the four-stage journey — so
   they share one template at src/app/[slug]/page.tsx rather than nine files
   that drift apart. Add a page by adding an entry here.
   -------------------------------------------------------------------------- */

export type Way = {
  step: string;
  title: string;
  description: string;
};

export type InteriorPage = {
  slug: string;
  /** Nav label and <title>. */
  label: string;
  eyebrow: string;
  heading: string;
  intro: string;
  /** Key into pageHeroImages. */
  image: string;
  waysTitle: string;
  waysHeading: string;
  ways: readonly Way[];
  /** The Workplace / Communities / Individuals router. */
  showPaths?: boolean;
  /** Discover → Develop → Perform → Live. */
  showJourney?: boolean;
  /** An extra link under the ways grid. */
  link?: { label: string; href: string };
};

export const interiorPages: readonly InteriorPage[] = [
  /* ---------------------------------------------------------------- approach */
  {
    slug: "movement",
    label: "Movement",
    eyebrow: "Our Approach / Movement",
    heading: "Build a stronger relationship with your body.",
    intro:
      "From endurance training to everyday movement, physical capability grows through preparation, recovery and consistent habits.",
    image: "movement",
    waysTitle: "Ways to Grow",
    waysHeading: "Three ways movement builds capability.",
    ways: [
      {
        step: "01",
        title: "Physical wellbeing",
        description:
          "Strength, stamina and everyday movement that support the life you want to live.",
      },
      {
        step: "02",
        title: "Habits and recovery",
        description:
          "Make progress sustainable with practical routines and space to recover.",
      },
      {
        step: "03",
        title: "Sport and adventure",
        description:
          "Discover what is possible through challenge, preparation and meaningful experience.",
      },
    ],
    showPaths: true,
  },
  {
    slug: "mind",
    label: "Mind",
    eyebrow: "Our Approach / Mind",
    heading: "Capability starts with how you see possibility.",
    intro:
      "Psychology-informed coaching helps people question perceived limits, process setbacks and build the emotional tools to keep moving forward.",
    image: "mind",
    waysTitle: "Ways to Grow",
    waysHeading: "Three ways mindset changes the ceiling.",
    ways: [
      {
        step: "01",
        title: "Resilience",
        description:
          "Develop the tools to respond to pressure, change and setbacks.",
      },
      {
        step: "02",
        title: "Focus and mindset",
        description:
          "Build awareness of the beliefs and habits that shape performance.",
      },
      {
        step: "03",
        title: "Emotional wellbeing",
        description:
          "Create space to process experience and grow with support.",
      },
    ],
    showPaths: true,
  },
  {
    slug: "connect",
    label: "Connect",
    eyebrow: "Our Approach / Connect",
    heading: "More belonging. More meaning.",
    intro:
      "Relationships, purpose and shared experiences make performance human. Connection is part of what capability is for.",
    image: "connect",
    waysTitle: "Ways to Grow",
    waysHeading: "Three ways connection carries the work.",
    ways: [
      {
        step: "01",
        title: "Relationships",
        description:
          "Build stronger connections with the people around you.",
      },
      {
        step: "02",
        title: "Belonging",
        description:
          "Create experiences where people can participate, contribute and grow together.",
      },
      {
        step: "03",
        title: "Shared experiences",
        description:
          "Use retreats, workshops and adventure to open space for discovery.",
      },
    ],
    showPaths: true,
  },

  /* ------------------------------------------------------------ who we help */
  {
    slug: "workplace",
    label: "Workplace",
    eyebrow: "Who We Help / Workplace",
    heading: "Help your people lead, collaborate and perform better.",
    intro:
      "Build a workplace where capability and wellbeing grow together, through coaching, workshops and long-term partnership.",
    image: "workplace",
    waysTitle: "Ways to Grow",
    waysHeading: "Where we start with organisations.",
    ways: [
      {
        step: "01",
        title: "Leadership development",
        description:
          "Support leaders to build awareness, confidence and the habits that help others perform.",
      },
      {
        step: "02",
        title: "Team performance",
        description:
          "Workshops that strengthen collaboration, shared purpose and practical ways of working.",
      },
      {
        step: "03",
        title: "Culture and wellbeing",
        description:
          "Mental, emotional and physical wellness programmes tailored to your people and pace.",
      },
    ],
    showJourney: true,
  },
  {
    slug: "communities",
    label: "Communities",
    eyebrow: "Who We Help / Communities",
    heading: "Create more possibility, together.",
    intro:
      "Partnerships and shared experiences help people discover their capacity, build confidence and contribute to the communities around them.",
    image: "communities",
    waysTitle: "Ways to Grow",
    waysHeading: "Where we start with communities.",
    ways: [
      {
        step: "01",
        title: "Community partnerships",
        description:
          "Shape programmes around the people, context and goals of your community.",
      },
      {
        step: "02",
        title: "Participation and connection",
        description:
          "Bring people together through movement, challenge and meaningful experiences.",
      },
      {
        step: "03",
        title: "Youth and schools",
        description:
          "Explore education programmes that help learners and educators build confidence and resilience.",
      },
    ],
    link: { label: "Explore school and youth programmes", href: "/education" },
    showJourney: true,
  },
  {
    slug: "individuals",
    label: "Individuals",
    eyebrow: "Who We Help / Individuals",
    heading: "Discover what more looks like for you.",
    intro:
      "Personal performance coaching for people ready to grow in health, career or life. Start with where you are and build from there.",
    image: "individuals",
    waysTitle: "Ways to Grow",
    waysHeading: "Where we start with individuals.",
    ways: [
      {
        step: "01",
        title: "Personal coaching",
        description:
          "One-to-one support to recognise possibility and turn it into practical action.",
      },
      {
        step: "02",
        title: "Mental and emotional resilience",
        description:
          "Build focus, confidence and the tools to process setbacks.",
      },
      {
        step: "03",
        title: "Habits and recovery",
        description:
          "Develop routines that support your energy, wellbeing and long-term growth.",
      },
    ],
    showJourney: true,
  },

  /* ---------------------------------------------------------------- explore */
  {
    slug: "education",
    label: "Education",
    eyebrow: "Explore / Education",
    heading: "The earlier the discovery, the further it travels.",
    intro:
      "Programmes for students and educators that build confidence, resilience, leadership and future potential.",
    image: "education",
    waysTitle: "Ways to Grow",
    waysHeading: "What we bring into a school.",
    ways: [
      {
        step: "01",
        title: "Student resilience",
        description:
          "Help learners develop self-belief and tools for navigating pressure and change.",
      },
      {
        step: "02",
        title: "Confidence and leadership",
        description:
          "Create opportunities to discover strengths, participate and take responsibility.",
      },
      {
        step: "03",
        title: "Educator support",
        description:
          "Support the people who help young people develop every day.",
      },
    ],
    link: { label: "See the schools we've worked with", href: "/gallery" },
    showJourney: true,
  },
  {
    slug: "media",
    label: "Media",
    eyebrow: "Explore / Media",
    heading: "Stories that open up possibility.",
    intro:
      "Phakamani Media is developing films, podcasts and conversations about human potential, performance and living fully.",
    image: "media",
    waysTitle: "What's Taking Shape",
    waysHeading: "In development.",
    ways: [
      {
        step: "01",
        title: "Documentaries",
        description: "Real transformation journeys. In development.",
      },
      {
        step: "02",
        title: "Podcasts and conversations",
        description:
          "Ideas and perspectives on becoming more capable. In development.",
      },
      {
        step: "03",
        title: "Short films",
        description:
          "Human stories of challenge, discovery and growth. In development.",
      },
    ],
  },
  {
    slug: "events",
    label: "Events",
    eyebrow: "Explore / Events",
    heading: "A start line for every kind of possibility.",
    intro:
      "Movement, learning and shared experiences bring the Phakamani philosophy to life. Dates and venues will be announced when confirmed.",
    image: "events",
    waysTitle: "What's Taking Shape",
    waysHeading: "Dates to be announced.",
    ways: [
      {
        step: "01",
        title: "Endurance Race Weekend",
        description:
          "Race preparation, participation and recovery. Date and venue to be announced.",
      },
      {
        step: "02",
        title: "Inter-School Challenge",
        description:
          "Sport and problem-solving experiences for learners. Date and venue to be announced.",
      },
      {
        step: "03",
        title: "Be More. Live",
        description:
          "An evening of transformation stories and shared challenge. Date and venue to be announced.",
      },
    ],
  },
] as const;

export function getInteriorPage(slug: string) {
  return interiorPages.find((page) => page.slug === slug);
}

/* --------------------------------------------------------------------------
   The audience router that sits at the foot of every approach page.
   -------------------------------------------------------------------------- */

export const audiencePaths = [
  {
    label: "Workplace",
    href: "/workplace",
    description: "Leadership, culture and teams",
  },
  {
    label: "Communities",
    href: "/communities",
    description: "Partnerships that help people rise",
  },
  {
    label: "Individuals",
    href: "/individuals",
    description: "Your potential, your path",
  },
] as const;
