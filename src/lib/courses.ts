/**
 * Builds the full page model for /courses/[slug] from the compact seeds in
 * `course-data.ts`.
 *
 * Everything a course page renders is derived here so the page component stays
 * declarative and every course — flagship or long-tail — gets the same depth of
 * content. Seeds carry what is course-specific; this module supplies the shared
 * scaffolding (module blurbs, eligibility personas, FAQ shell, stat rail).
 */

import { courseSeeds, type CourseCategory, type CourseSeed, type Topic } from "./course-data";
import { site } from "./content";

export type { CourseCategory, CourseSeed };

/* ------------------------------------------------------------------- types */

export type CourseModule = {
  /** Two-digit index, e.g. "01". */
  code: string;
  title: string;
  blurb: string;
  skills: string[];
  tools: string[];
  deliverable: string;
};

export type CourseFaq = { q: string; a: string };

export type Course = {
  slug: string;
  title: string;
  category: CourseCategory;
  categorySlug: string;
  badge?: string;
  featured: boolean;

  hero: {
    eyebrow: string;
    headline: string;
    /** Trailing words of the headline, rendered in the brand accent. */
    accent: string;
    tagline: string;
    chips: string[];
  };

  /** The "at a glance" spec table beside the overview. */
  spec: Array<{ label: string; value: string }>;
  stats: Array<{ value: string; label: string }>;

  overview: {
    heading: string;
    paragraphs: string[];
    checks: string[];
  };

  modules: CourseModule[];
  tools: string[];
  toolGroups: Array<{ label: string; items: string[] }>;

  audience: Array<{ title: string; body: string; tag: string }>;
  outcomes: Array<{ role: string; blurb: string }>;
  projects: Array<{ title: string; body: string; tags: string[] }>;
  faqs: CourseFaq[];

  closing: string;
};

export type CourseSummary = Pick<
  Course,
  "slug" | "title" | "category" | "badge" | "featured"
> & {
  tagline: string;
  duration: string;
  level: string;
  moduleCount: number;
  tools: string[];
};

/* -------------------------------------------------------------- generators */

/**
 * Six rotating phrasings for module blurbs. Rotating by index keeps a long
 * curriculum from reading like the same sentence eight times, without needing
 * a bespoke blurb in every seed.
 */
const MODULE_FRAMES = [
  (topic: string, course: string) =>
    `${topic} is where the ${course} track gets its footing. You work the concepts in the lab first, then carry them straight into the running project rather than leaving them as isolated exercises.`,
  (topic: string) =>
    `This block turns ${topic.toLowerCase()} from something you have read about into something you can do under time pressure, with a mentor reviewing the work as you go.`,
  (topic: string, course: string) =>
    `By the end of ${topic.toLowerCase()}, you can make the calls a working ${course.toLowerCase()} practitioner makes daily — and explain why you made them.`,
  (topic: string) =>
    `${topic} is taught against realistic, imperfect inputs. The point is not the clean textbook case; it is what you do when the data or the requirement fights back.`,
  (topic: string, course: string) =>
    `Everything in ${topic.toLowerCase()} feeds the next stage of the ${course.toLowerCase()} build, so nothing here is theory you park and forget.`,
  (topic: string) =>
    `You leave ${topic.toLowerCase()} with a reviewed artefact in your portfolio, not just notes — that is the standard every module in this course is held to.`,
];

function moduleBlurb(topic: Topic, index: number, course: string) {
  return MODULE_FRAMES[index % MODULE_FRAMES.length](topic.t, course);
}

function deliverableFor(topic: Topic) {
  if (topic.d) return topic.d;
  const [first, second] = topic.s;
  return `A reviewed piece of work demonstrating ${first.toLowerCase()}${
    second ? ` and ${second.toLowerCase()}` : ""
  }.`;
}

/** Slices the course tool list so each module shows a plausible subset. */
function toolsForModule(tools: string[], index: number, count = 4) {
  const out: string[] = [];
  for (let i = 0; i < count; i += 1) {
    out.push(tools[(index * 2 + i) % tools.length]);
  }
  return Array.from(new Set(out));
}

const CATEGORY_SLUGS: Record<CourseCategory, string> = {
  Programming: "programming",
  "AI & Data": "ai-data",
  "Digital Marketing": "digital-marketing",
  "Cyber & Cloud": "cyber-cloud",
};

const CATEGORY_BLURBS: Record<CourseCategory, string> = {
  Programming:
    "Languages, frameworks and the engineering habits that make code maintainable by someone other than you.",
  "AI & Data":
    "Models, analytics and decision intelligence — built on data you have actually had to clean.",
  "Digital Marketing":
    "Search, social, paid media and analytics, run as one measurable system.",
  "Cyber & Cloud":
    "Secure, resilient infrastructure and the operational discipline to keep it running.",
};

export const courseCategories = (
  Object.keys(CATEGORY_SLUGS) as CourseCategory[]
).map((label) => ({
  label,
  slug: CATEGORY_SLUGS[label],
  blurb: CATEGORY_BLURBS[label],
}));

/* ------------------------------------------------------------------- build */

function buildCourse(seed: CourseSeed): Course {
  const { title, city } = { title: seed.title, city: site.city };

  const modules: CourseModule[] = seed.topics.map((topic, i) => ({
    code: String(i + 1).padStart(2, "0"),
    title: topic.t,
    blurb: moduleBlurb(topic, i, title),
    skills: topic.s,
    tools: toolsForModule(seed.tools, i),
    deliverable: deliverableFor(topic),
  }));

  /* Split the flat tool list into three labelled rails for the stack section. */
  const third = Math.ceil(seed.tools.length / 3);
  const toolGroups = [
    { label: "Core", items: seed.tools.slice(0, third) },
    { label: "Working set", items: seed.tools.slice(third, third * 2) },
    { label: "Shipping", items: seed.tools.slice(third * 2) },
  ].filter((group) => group.items.length > 0);

  return {
    slug: seed.slug,
    title,
    category: seed.category,
    categorySlug: CATEGORY_SLUGS[seed.category],
    badge: seed.badge,
    featured: Boolean(seed.featured),

    hero: {
      eyebrow: `${seed.category} · TechCadd ${city}`,
      headline: `${title} course in`,
      accent: city,
      tagline: seed.tagline,
      chips: [seed.duration, "Classroom & online", seed.level.split(" to ")[0]],
    },

    spec: [
      { label: "Duration", value: seed.duration },
      { label: "Level", value: seed.level },
      { label: "Mode", value: "Classroom & live online" },
      { label: "Batches", value: "Morning, evening & weekend" },
      { label: "Certification", value: "TechCadd industry certificate" },
      { label: "Placement support", value: "Included for every enrolled student" },
    ],

    stats: [
      { value: "4.8/5", label: "Student rating" },
      { value: `${modules.length}`, label: "Structured modules" },
      { value: `${seed.projects.length}+`, label: "Portfolio projects" },
      { value: "Yes", label: "Placement support" },
    ],

    overview: {
      heading: `What the ${title} programme actually covers`,
      paragraphs: [
        seed.focus,
        `The ${title.toLowerCase()} programme at TechCadd ${city} runs across ${seed.duration.toLowerCase()} and is built for students, graduates and working professionals who want a practical route into the field — without relocating to Chandigarh, Delhi or Bangalore for quality training.`,
        `Teaching is delivered by practitioners, in small batches, against a curriculum that is reviewed each intake. Every module ends in something reviewable, so by the end you hold a certificate, a portfolio and the confidence to talk through your own work in an interview.`,
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    modules,
    tools: seed.tools,
    toolGroups,

    audience: [
      {
        title: "Students & final-year candidates",
        tag: "Start early",
        body: `If you are still studying, this is the head start. You finish your degree with a ${title.toLowerCase()} portfolio already built, instead of starting from zero after graduation.`,
      },
      {
        title: "Graduates looking for a first role",
        tag: "Job-focused",
        body: `A degree proves you can learn; a project proves you can build. This programme gives you the second one, along with interview preparation aimed specifically at ${seed.roles[0].toLowerCase()} roles.`,
      },
      {
        title: "Working professionals upskilling",
        tag: "Weekend batches",
        body: `Evening and weekend batches exist for exactly this. Bring the domain knowledge you already have and layer ${title.toLowerCase()} on top of it — that combination is rarer and more valuable than either alone.`,
      },
      {
        title: "Career switchers from other fields",
        tag: "No prior coding needed",
        body: `The programme starts from fundamentals, so a non-technical background is a starting point rather than a disqualification. What it does need is consistency across ${seed.duration.toLowerCase()}.`,
      },
    ],

    outcomes: seed.roles.map((role, i) => ({
      role,
      blurb:
        i === 0
          ? `The most direct destination from this track — the projects you build map onto the day-one expectations of the role.`
          : `A realistic adjacent path once the core ${title.toLowerCase()} skill set is in place and evidenced by your portfolio.`,
    })),

    projects: seed.projects.map((project, i) => ({
      ...project,
      tags: toolsForModule(seed.tools, i + 1, 3),
    })),

    faqs: [
      {
        q: `Do I need prior experience to join the ${title} course?`,
        a: `No. The programme opens at ${seed.level.split(" to ")[0].toLowerCase()} level and assumes no background beyond comfort with a computer. Students who already have some exposure move through the early modules faster and spend the saved time on project work.`,
      },
      {
        q: "How long is the course and how are batches scheduled?",
        a: `It runs across ${seed.duration.toLowerCase()}, with morning, evening and weekend batches. Working professionals usually take the weekend track; full-time students generally take the weekday morning batch.`,
      },
      {
        q: "Is this classroom training or online?",
        a: `Both. The Amritsar campus runs classroom batches with lab access, and the same syllabus is delivered live online for students outside the city. Recordings are available either way for revision.`,
      },
      {
        q: "What certification do I receive?",
        a: `A TechCadd industry certificate on completion, issued against the modules you finished and the projects you submitted — plus an internship letter where the internship track applies.`,
      },
      {
        q: "What kind of projects will I build?",
        a: `${seed.projects.length} portfolio projects, starting with ${seed.projects[0].title.toLowerCase()} and building to a capstone. They are reviewed individually, and the review notes go into your portfolio documentation.`,
      },
      {
        q: "Is placement support included?",
        a: "Yes. Every enrolled student gets resume and portfolio review, mock interviews with practitioners, and access to the hiring drives we run through the year. Support continues after the course ends.",
      },
      {
        q: "Can I pay the fee in instalments?",
        a: "Yes — instalment plans are available and are agreed at the counselling stage. Speak to the Amritsar admissions desk for the current structure for this programme.",
      },
    ],

    closing: `By the end of this ${title.toLowerCase()} programme in ${city}, you will not just understand ${title.toLowerCase()} theoretically — you will have built and reviewed real work, giving you a practical skill set and a portfolio ready for hiring conversations.`,
  };
}

/* --------------------------------------------------------------- accessors */

const built: Course[] = courseSeeds.map(buildCourse);

const bySlug = new Map(built.map((course) => [course.slug, course]));

export const allCourses = built;

export const courseSlugs = built.map((course) => course.slug);

export function getCourse(slug: string): Course | undefined {
  return bySlug.get(slug);
}

export const courseSummaries: CourseSummary[] = courseSeeds.map((seed) => ({
  slug: seed.slug,
  title: seed.title,
  category: seed.category,
  badge: seed.badge,
  featured: Boolean(seed.featured),
  tagline: seed.tagline,
  duration: seed.duration,
  level: seed.level,
  moduleCount: seed.topics.length,
  tools: seed.tools.slice(0, 4),
}));

export function summariesByCategory(category: CourseCategory) {
  return courseSummaries.filter((course) => course.category === category);
}

/**
 * Three sibling courses for the "continue exploring" rail: same category first,
 * topped up from other categories so short categories still fill the row.
 */
export function relatedCourses(slug: string, count = 3): CourseSummary[] {
  const current = bySlug.get(slug);
  if (!current) return courseSummaries.slice(0, count);

  const sameCategory = courseSummaries.filter(
    (course) => course.category === current.category && course.slug !== slug,
  );
  const others = courseSummaries.filter(
    (course) => course.category !== current.category && course.slug !== slug,
  );

  return [...sameCategory, ...others].slice(0, count);
}
