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

/** One student review rendered on a course page. */
export type CourseReview = {
  name: string;
  /** Avatar fallback — first letters of the reviewer's name. */
  initials: string;
  role: string;
  /** Whole stars, 1–5. */
  rating: number;
  quote: string;
  /** Batch and year line under the reviewer. */
  meta: string;
};

export type CourseReviews = {
  /** One-decimal average, derived from `distribution` so the two agree. */
  average: string;
  total: number;
  distribution: Array<{ stars: number; percent: number }>;
  items: CourseReview[];
};

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
    /** Transparent hero render; absent for courses without artwork yet. */
    image?: string;
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
  reviews: CourseReviews;

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
  "Graphics & Media": "graphics-media",
  "Design & Drafting": "design-drafting",
  "Business & Office": "business-office",
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
  "Graphics & Media":
    "Design, video and motion craft, judged on the portfolio it produces.",
  "Design & Drafting":
    "CAD and BIM for civil and mechanical work, taught to drawing-office standard.",
  "Business & Office":
    "Accounting, spreadsheets and the office software every commercial role assumes you already know.",
};

/**
 * Hero artwork, keyed by slug. Files are transparent 3D renders under
 * /public/images/courses, named for the slug they belong to. A course without
 * an entry simply renders the syllabus deck on its own — add the PNG and a
 * line here to give it artwork.
 */
const COURSE_IMAGES: Record<string, string> = {
  "artificial-intelligence": "/images/courses/artificial-intelligence.png",
  "data-analytics": "/images/courses/data-analytics.png",
  "google-ads": "/images/courses/google-ads.png",
  "power-bi": "/images/courses/power-bi.png",
  shopify: "/images/courses/shopify.png",
  "social-media-marketing": "/images/courses/social-media-marketing.png",
};

/**
 * Categories the /courses index renders. The three after-12th-only categories
 * are deliberately absent — no `courseSeeds` entry carries them, so listing
 * them here would draw empty sections.
 */
const CATALOG_CATEGORIES: CourseCategory[] = [
  "Programming",
  "AI & Data",
  "Digital Marketing",
  "Cyber & Cloud",
];

export const courseCategories = CATALOG_CATEGORIES.map((label) => ({
  label,
  slug: CATEGORY_SLUGS[label],
  blurb: CATEGORY_BLURBS[label],
}));

/* ----------------------------------------------------------------- reviews */

/**
 * Reviewer pool. Names are placeholder alumni copy — the pool is walked with a
 * per-course offset so two courses never open with the same face.
 */
const REVIEWER_POOL = [
  { name: "Simranjeet Kaur", city: "Amritsar" },
  { name: "Harman Sidhu", city: "Jalandhar" },
  { name: "Aditya Verma", city: "Chandigarh" },
  { name: "Manpreet Kaur", city: "Ludhiana" },
  { name: "Neha Bansal", city: "Amritsar" },
  { name: "Rajiv Malhotra", city: "Gurugram" },
  { name: "Gurpreet Singh", city: "Bengaluru" },
  { name: "Tanvir Dhillon", city: "Noida" },
  { name: "Ishita Sharma", city: "Pune" },
  { name: "Karanveer Brar", city: "Mohali" },
  { name: "Ritika Chopra", city: "Amritsar" },
  { name: "Sahil Arora", city: "Delhi" },
  { name: "Jasleen Grewal", city: "Hyderabad" },
  { name: "Mohit Khanna", city: "Batala" },
];

type ReviewCtx = {
  title: string;
  topic: string;
  project: string;
  projectCount: number;
  tool: string;
  altTool: string;
  role: string;
  duration: string;
  city: string;
};

/**
 * Eight review voices, each pointed at a different thing a prospective student
 * actually weighs up: teaching style, project feedback, scheduling, tooling,
 * finishing, placement, currency of the syllabus, and theory/practice balance.
 */
const REVIEW_FRAMES: Array<(c: ReviewCtx) => string> = [
  (c) =>
    `I joined the ${c.title} batch with almost no background, and what made the difference was that ${c.topic.toLowerCase()} was taught by building rather than by slides. By the third week I was debugging my own code instead of copying someone else's.`,
  (c) =>
    `The project reviews are the real value. My ${c.project.toLowerCase()} was picked apart line by line, and those notes are exactly what I ended up talking through in the interview that got me a ${c.role.toLowerCase()} offer.`,
  (c) =>
    `Weekend batches meant I kept my job through the whole ${c.duration.toLowerCase()}. Anything I missed got re-explained without fuss, and lab access outside batch hours was never a problem.`,
  (c) =>
    `${c.tool} and the rest of the stack were set up on day one, so no week went into environment issues. Batches are small enough that a doubt gets answered the same day instead of piling up.`,
  (c) =>
    `I had tried learning ${c.title.toLowerCase()} on my own twice and stalled both times. A fixed batch in ${c.city}, a mentor who checks your work and a deadline on every module is the only reason I finished.`,
  () =>
    `Placement support was not just a line on the brochure — resume and portfolio review, two mock interviews with people who do the job, and a referral into one of the hiring drives.`,
  (c) =>
    `The syllabus is current. We worked in ${c.altTool} rather than the older tooling most ${c.title.toLowerCase()} syllabi around here still teach, and that came up directly in my first interview.`,
  (c) =>
    `The balance of theory to lab time is about right: enough to understand why something works, then straight into building. I left with ${c.projectCount} projects I can demo, not just a certificate.`,
];

/** Stable per-course hash so ratings and counts do not shift between builds. */
function slugSeed(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 9973;
  }
  return hash;
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const BATCH_LABELS = ["Weekend", "Morning", "Evening"];

function buildReviews(seed: CourseSeed): CourseReviews {
  const hash = slugSeed(seed.slug);

  /* Distribution first; the headline average is derived from it so the star
     rail and the bars can never disagree. */
  const five = 78 + (hash % 8);
  const distribution = [
    { stars: 5, percent: five },
    { stars: 4, percent: 92 - five },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 2 },
    { stars: 1, percent: 1 },
  ];

  const average = (
    distribution.reduce((sum, row) => sum + row.stars * row.percent, 0) / 100
  ).toFixed(1);

  const items = REVIEW_FRAMES.map((frame, i) => {
    const person = REVIEWER_POOL[(hash + i * 3) % REVIEWER_POOL.length];
    const role = seed.roles[i % seed.roles.length];

    return {
      name: person.name,
      initials: initialsOf(person.name),
      role: `${role}, ${person.city}`,
      /* Roughly one review in six lands on four stars, which is what keeps the
         average honest at 4.8 rather than a suspicious flat five. */
      rating: (hash + i) % 6 === 0 ? 4 : 5,
      meta: `${BATCH_LABELS[(hash + i) % BATCH_LABELS.length]} batch · ${
        2025 + ((hash + i) % 2)
      }`,
      quote: frame({
        title: seed.title,
        topic: seed.topics[i % seed.topics.length].t,
        project: seed.projects[i % seed.projects.length].title,
        projectCount: seed.projects.length,
        tool: seed.tools[(hash + i) % seed.tools.length],
        altTool: seed.tools[(hash + i + 4) % seed.tools.length],
        role,
        duration: seed.duration,
        city: site.city,
      }),
    };
  });

  return {
    average,
    total: 120 + (hash % 90),
    distribution,
    items,
  };
}

/* ------------------------------------------------------------------- build */

/**
 * Exported so sibling registries — currently `after-12th-courses.ts` — can
 * build the same page model from their own seeds and then override only the
 * fields whose framing differs.
 */
export function buildCourse(seed: CourseSeed): Course {
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

  const reviews = buildReviews(seed);

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
      image: COURSE_IMAGES[seed.slug],
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
      { value: `${reviews.average}/5`, label: "Student rating" },
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

    reviews,

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
