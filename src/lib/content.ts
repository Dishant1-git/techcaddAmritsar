/**
 * Single source of truth for every string rendered on the homepage.
 *
 * Body copy is placeholder (lorem ipsum) by design — this pass is a layout
 * skeleton. Navigation labels, eyebrows and section headings are kept
 * functional so the page stays navigable while the layout is reviewed.
 * Swap the strings here to drop in real marketing copy; no JSX needs touching.
 */

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.";

const LOREM_MED =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";

/* ------------------------------------------------------------------ site */

export const site = {
  name: "TechCadd",
  city: "Amritsar",
  wordmark: "TECHCADD",
  wordmarkAccent: "AMRITSAR",
  tagline: "AI & Software Training",
  email: "info@techcadd.com",
  phone: "+91 98881 22255",
  phoneHref: "tel:+919888122255",
  blurb: LOREM_MED,
  copyright: "© 2026 techcadd. Built in Amritsar",
} as const;

/* ------------------------------------------------------------- navigation */

export type NavChild = { label: string; href: string; badge?: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  sparkle?: boolean;
  /**
   * Desktop-only: render the named full-width mega menu instead of the narrow
   * dropdown. `children` is still used by the mobile drawer.
   */
  mega?: MegaKey;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    mega: "about",
    children: [
      { label: "About Techcadd", href: "/about" },
      { label: "Mission and Vision", href: "/about/mission-vision" },
      { label: "Our Founder", href: "/about#founder" },
    ],
  },
  {
    label: "AI",
    href: "/courses/artificial-intelligence",
    sparkle: true,
    mega: "ai",
    children: [
      { label: "Generative AI", href: "/courses/generative-ai" },
      { label: "Artificial Intelligence (AI)", href: "/courses/artificial-intelligence" },
      { label: "Prompt Engineering", href: "/courses/prompt-engineering" },
      { label: "ChatGPT & AI Tools", href: "/courses/chatgpt-ai-tools", badge: "Hot" },
      { label: "Agentic AI", href: "/courses/agentic-ai", badge: "Hot" },
      { label: "AI-Powered Marketing", href: "/courses/ai-powered-marketing", badge: "Hot" },
      { label: "RAG Development", href: "/courses/rag-development" },
      { label: "AI-Powered Courses", href: "/courses/ai-powered-courses" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    mega: "courses",
    children: [
      { label: "Programming", href: "/courses#programming" },
      { label: "AI & Data", href: "/courses#ai-data" },
      { label: "Digital Marketing", href: "/courses#digital-marketing" },
      { label: "Cyber & Cloud", href: "/courses#cyber-cloud" },
      { label: "Generative AI", href: "/courses/generative-ai" },
      { label: "IT Foundation Programme", href: "/courses/it-courses" },
      { label: "All courses", href: "/courses" },
    ],
  },
  {
    label: "Internship & Training",
    href: "/internship-training",
    mega: "training",
    children: [
      { label: "45 Days Training", href: "/internship-training/45-days" },
      { label: "6 Weeks Training", href: "/internship-training/6-weeks" },
      { label: "4 Months Training", href: "/internship-training/4-months" },
      { label: "6 Months Training", href: "/internship-training/6-months" },
      { label: "Industrial Training", href: "/internship-training/industrial-training" },
      { label: "Internship Program", href: "/internship-training/internship-program" },
    ],
  },
  {
    label: "After 12th",
    href: "/after-12th-courses",
    mega: "after12",
    children: [
      { label: "6 Month Certificates", href: "/after-12th-courses#six-month" },
      { label: "1 Year Certificates", href: "/after-12th-courses#one-year" },
      { label: "Graphics", href: "/after-12th-courses#graphics" },
      { label: "Civil / Mechanical", href: "/after-12th-courses#civil-mechanical" },
    ],
  },
  {
    label: "Resources",
    href: "/blogs",
    mega: "resources",
    children: [
      { label: "Blogs", href: "/blogs" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
      { label: "Reviews", href: "/reviews" },
      { label: "College Partnerships", href: "/college-partnerships" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

/* ---------------------------------------------------------- mega menu data */

/** Menus rendered by the shared numbered-column panel. */
export type ColumnMegaKey = "courses" | "training" | "after12";
/** Every mega menu, including the bespoke AI and Resources panels. */
export type MegaKey = ColumnMegaKey | "ai" | "about" | "resources";

export type MegaColumn = {
  /** Rendered as the 01, 02, … index above the column title. */
  index: string;
  title: string;
  href: string;
  blurb: string;
  links: NavChild[];
};

export type MegaMenu = {
  columns: MegaColumn[];
  quote: { text: string; author: string };
  cta: { label: string; href: string };
};

const PROGRAMMING_QUOTE = {
  text: "Everybody should learn to program a computer, because it teaches you how to think.",
  author: "Steve Jobs",
};

const coursesMenu: MegaMenu = {
  columns: [
    {
      index: "01",
      title: "Programming",
      href: "/courses#programming",
      blurb: "Core languages and full-stack engineering",
      links: [
        { label: "Python", href: "/courses/python" },
        { label: "Java", href: "/courses/java" },
        { label: "C & C++", href: "/courses/c-cpp" },
        { label: "Kotlin", href: "/courses/kotlin" },
        { label: "Web Designing", href: "/courses/web-designing" },
        { label: "Web Development", href: "/courses/web-development" },
        { label: "MERN Stack", href: "/courses/mern-stack" },
        { label: "MEAN Stack", href: "/courses/mean-stack" },
        { label: "PHP Full Stack", href: "/courses/php-full-stack" },
        { label: "IT Foundation Programme", href: "/courses/it-courses" },
      ],
    },
    {
      index: "02",
      title: "AI & Data",
      href: "/courses#ai-data",
      blurb: "Models, analytics and decision intelligence",
      links: [
        { label: "Artificial Intelligence", href: "/courses/artificial-intelligence" },
        { label: "Machine Learning", href: "/courses/machine-learning" },
        { label: "Deep Learning", href: "/courses/deep-learning" },
        { label: "Data Science", href: "/courses/data-science" },
        { label: "Data Analytics", href: "/courses/data-analytics" },
        { label: "Power BI", href: "/courses/power-bi" },
        { label: "Tableau", href: "/courses/tableau" },
      ],
    },
    {
      index: "03",
      title: "Digital Marketing",
      href: "/courses#digital-marketing",
      blurb: "Growth, performance and commerce",
      links: [
        { label: "Digital Marketing", href: "/courses/digital-marketing" },
        { label: "Social Media Marketing", href: "/courses/social-media-marketing" },
        { label: "Google Ads", href: "/courses/google-ads" },
        { label: "SEO", href: "/courses/seo" },
        { label: "WordPress", href: "/courses/wordpress" },
        { label: "Shopify", href: "/courses/shopify" },
      ],
    },
    {
      index: "04",
      title: "Cyber & Cloud",
      href: "/courses#cyber-cloud",
      blurb: "Secure, resilient infrastructure",
      links: [
        { label: "Cybersecurity", href: "/courses/cybersecurity" },
        { label: "Ethical Hacking", href: "/courses/ethical-hacking" },
        { label: "Cloud Computing", href: "/courses/cloud-computing" },
        { label: "Linux", href: "/courses/linux" },
      ],
    },
    {
      index: "05",
      title: "Generative AI",
      href: "/courses#ai-data",
      blurb: "Build with language models and agents",
      links: [
        { label: "Generative AI", href: "/courses/generative-ai", badge: "Hot" },
        { label: "Prompt Engineering", href: "/courses/prompt-engineering" },
        { label: "ChatGPT & AI Tools", href: "/courses/chatgpt-ai-tools", badge: "Hot" },
        { label: "Agentic AI", href: "/courses/agentic-ai", badge: "Hot" },
        { label: "RAG Development", href: "/courses/rag-development" },
        { label: "AI-Powered Marketing", href: "/courses/ai-powered-marketing" },
        { label: "AI-Powered Career Track", href: "/courses/ai-powered-courses" },
      ],
    },
  ],
  quote: PROGRAMMING_QUOTE,
  cta: { label: "Browse all courses", href: "/courses" },
};

const trainingMenu: MegaMenu = {
  columns: [
    {
      index: "01",
      title: "Short Term",
      href: "/internship-training#short-term",
      blurb: "Summer, winter and university-mandated batches",
      links: [
        { label: "45 Days Training", href: "/internship-training/45-days", badge: "Trending" },
        { label: "6 Weeks Training", href: "/internship-training/6-weeks", badge: "Trending" },
      ],
    },
    {
      index: "02",
      title: "Long Term",
      href: "/internship-training#long-term",
      blurb: "Deeper tracks that finish with a live project",
      links: [
        { label: "4 Months Training", href: "/internship-training/4-months" },
        { label: "6 Months Training", href: "/internship-training/6-months" },
      ],
    },
    {
      index: "03",
      title: "Programmes",
      href: "/internship-training#programmes",
      blurb: "Industry placement and internship letters",
      links: [
        {
          label: "Industrial Training",
          href: "/internship-training/industrial-training",
          badge: "Trending",
        },
        {
          label: "Internship Program",
          href: "/internship-training/internship-program",
        },
      ],
    },
  ],
  quote: PROGRAMMING_QUOTE,
  cta: { label: "See all training formats", href: "/internship-training" },
};

const after12Menu: MegaMenu = {
  columns: [
    {
      index: "01",
      title: "6 Month Certificates",
      href: "/after-12th-courses#six-month",
      blurb: "One skill, job-ready in half a year",
      links: [
        {
          label: "Digital Marketing & Communication",
          href: "/after-12th-courses/digital-marketing-communication",
        },
        { label: "Python Programming", href: "/after-12th-courses/python-programming" },
        {
          label: "Machine Learning & AI",
          href: "/after-12th-courses/machine-learning-ai",
          badge: "Trending",
        },
        { label: "Cybersecurity", href: "/after-12th-courses/cybersecurity" },
        { label: "Tally ERP with GST", href: "/after-12th-courses/tally-erp-gst" },
        {
          label: "Computer Basics & MS Excel",
          href: "/after-12th-courses/computer-basics-excel",
        },
      ],
    },
    {
      index: "02",
      title: "1 Year Certificates",
      href: "/after-12th-courses#one-year",
      blurb: "Full programmes with an internship track",
      links: [
        {
          label: "Generative AI",
          href: "/after-12th-courses/generative-ai",
          badge: "Trending",
        },
        {
          label: "Cloud Computing & DevOps",
          href: "/after-12th-courses/cloud-computing-devops",
        },
        { label: "AI & Data Science", href: "/after-12th-courses/ai-data-science" },
        {
          label: "Machine Learning & Deep Learning",
          href: "/after-12th-courses/machine-learning-deep-learning",
        },
        {
          label: "Cybersecurity & Ethical Hacking",
          href: "/after-12th-courses/cybersecurity-ethical-hacking",
        },
      ],
    },
    {
      index: "03",
      title: "Graphics",
      href: "/after-12th-courses#graphics",
      blurb: "Design, video and motion for screen and print",
      links: [
        { label: "Graphic Designing", href: "/after-12th-courses/graphic-designing" },
        { label: "Video Editing", href: "/after-12th-courses/video-editing" },
        { label: "2D / 3D Animation", href: "/after-12th-courses/animation" },
        {
          label: "UI/UX Design with Figma",
          href: "/after-12th-courses/ui-ux-figma",
          badge: "Trending",
        },
      ],
    },
    {
      index: "04",
      title: "Civil / Mechanical",
      href: "/after-12th-courses#civil-mechanical",
      blurb: "Design and drafting for engineering streams",
      links: [
        { label: "AutoCAD", href: "/after-12th-courses/autocad" },
        { label: "SolidWorks", href: "/after-12th-courses/solidworks" },
        { label: "3ds Max", href: "/after-12th-courses/3ds-max" },
        { label: "Revit", href: "/after-12th-courses/revit" },
      ],
    },
  ],
  quote: PROGRAMMING_QUOTE,
  cta: { label: "Browse After 12th courses", href: "/after-12th-courses" },
};

export const megaMenus: Record<ColumnMegaKey, MegaMenu> = {
  courses: coursesMenu,
  training: trainingMenu,
  after12: after12Menu,
};

/**
 * The AI menu gets its own panel: two icon-led link groups, a featured course
 * card and a gradient promo rail, rather than the numbered columns above.
 */
export const aiMenu = {
  title: "Learn AI Skills.",
  body: "Build projects with machine learning, data science, automation, and generative AI.",
  groups: [
    {
      label: "AI Fundamentals",
      icon: "sparkles" as const,
      links: [
        { label: "Generative AI", href: "/courses/generative-ai" },
        { label: "Artificial Intelligence (AI)", href: "/courses/artificial-intelligence" },
        { label: "Prompt Engineering", href: "/courses/prompt-engineering" },
        { label: "ChatGPT & AI Tools", href: "/courses/chatgpt-ai-tools", badge: "Hot" },
      ] as NavChild[],
    },
    {
      label: "AI Development",
      icon: "bolt" as const,
      links: [
        { label: "Agentic AI", href: "/courses/agentic-ai", badge: "Hot" },
        { label: "AI-Powered Marketing", href: "/courses/ai-powered-marketing", badge: "Hot" },
        { label: "RAG (Retrieval-Augmented Generation)", href: "/courses/rag-development" },
        { label: "Machine Learning", href: "/courses/machine-learning" },
      ] as NavChild[],
    },
  ],
  featured: {
    eyebrow: "Featured AI Course",
    title: `Artificial Intelligence Training in ${site.city}`,
    href: "/courses/artificial-intelligence",
  },
  promo: {
    body: "Start with AI fundamentals, then move into real projects and career-ready tools.",
    cta: { label: "Explore AI", href: "/courses/artificial-intelligence" },
  },
};

/**
 * Rail menus: a category rail beside three featured cards. Both the Resources
 * and About Us panels share this shape and are rendered by `RailMega`.
 *
 * `image` is an optional path under /public — cards fall back to a tinted
 * gradient tile until real photography lands.
 */
export type RailMenu = {
  categoriesLabel: string;
  featuredLabel: string;
  categories: NavChild[];
  featured: Array<{
    title: string;
    href: string;
    /** Small pill chip, e.g. "Story". */
    chip: string;
    /** Muted caption beside the chip, e.g. "Since 2016". */
    meta: string;
    /** Tailwind gradient stops for the placeholder tile. */
    tone: string;
    image?: string;
  }>;
};

export const resourcesMenu: RailMenu = {
  categoriesLabel: "Categories",
  featuredLabel: "Featured",
  categories: [
    { label: "Blogs", href: "/blogs" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Reviews", href: "/reviews" },
    { label: "College Partnerships", href: "/college-partnerships" },
  ],
  featured: [
    {
      title: "Blogs",
      href: "/blogs",
      chip: "Articles",
      meta: "Latest",
      tone: "from-brand-700 via-brand-500 to-brand-400",
    },
    {
      title: "FAQ",
      href: "/faq",
      chip: "Answers",
      meta: "Admissions",
      tone: "from-accent via-brand-700 to-brand-500",
    },
    {
      title: "Gallery",
      href: "/gallery",
      chip: "Campus",
      meta: "Photos",
      tone: "from-brand-900 via-brand-600 to-brand-400",
    },
  ],
};

/** About Us menu: the institute story, its direction and the founder. */
export const aboutMenu: RailMenu = {
  categoriesLabel: "Categories",
  featuredLabel: "Featured",
  categories: [
    { label: "About Techcadd", href: "/about" },
    { label: "Mission and Vision", href: "/about/mission-vision" },
    { label: "Our Founder", href: "/about#founder" },
  ],
  featured: [
    {
      title: "About Techcadd",
      href: "/about",
      chip: "Story",
      meta: "Since 2016",
      tone: "from-brand-500 via-brand-600 to-brand-700",
    },
    {
      title: "Mission and Vision",
      href: "/about/mission-vision",
      chip: "Purpose",
      meta: "Our direction",
      tone: "from-violet-400 via-violet-500 to-brand-600",
    },
    {
      title: "Our Founder",
      href: "/about#founder",
      chip: "Profile",
      meta: "Gourav Gupta",
      tone: "from-cyan-400 via-sky-500 to-brand-600",
    },
  ],
};

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: `TechCadd ${site.city}`,
  eyebrowMeta: site.tagline,
  /**
   * Two-line display headline. The `muted` line renders in a dimmed white so
   * the pair reads as a statement and its echo.
   */
  headingLines: [
    { text: "Build job-ready skills.", muted: false },
    { text: "Launch a tech career.", muted: true },
  ] as Array<{ text: string; muted: boolean }>,
  body: LOREM_MED,
  primaryCta: { label: "Start your career", href: "/contact" },
  secondaryCta: { label: "Explore courses", href: "/courses" },
  stats: [
    { title: "Industry Mentors", detail: "Taught by working engineers" },
    { title: "Done For You", detail: "Live projects, end to end" },
    { title: "The Best Placements", detail: "500+ active hiring partners" },
  ],
  panel: {
    title: "Learn AI Skills.",
    body: LOREM_SHORT,
    groups: [
      {
        label: "AI Fundamentals",
        items: [
          { label: "Generative AI", badge: null },
          { label: "Artificial Intelligence (AI)", badge: null },
          { label: "Prompt Engineering", badge: null },
          { label: "ChatGPT & AI Tools", badge: "Hot" },
        ],
      },
      {
        label: "AI Development",
        items: [
          { label: "Agentic AI", badge: "Hot" },
          { label: "AI-Powered Marketing", badge: "Hot" },
          { label: "RAG Development", badge: null },
          { label: "AI-Powered Courses", badge: null },
        ],
      },
    ],
    featured: {
      eyebrow: "Featured AI Course",
      title: `Artificial Intelligence Training in ${site.city}`,
      body: LOREM_SHORT,
      cta: { label: "Explore AI", href: "/courses/artificial-intelligence" },
    },
  },
};

/* ------------------------------------------------------------------- about */

export const about = {
  heading: "Built for modern engineering careers",
  accent: ["engineering", "careers"],
  intro: LOREM_SHORT,
  /**
   * Three media tiles. The middle one renders taller than its neighbours; each
   * carries one floating chip, positioned per `chip.at`. Gradients stand in for
   * photography until real assets land.
   */
  media: [
    {
      icon: "boxes",
      gradient: "from-slate-400 via-slate-600 to-ink-soft",
      chip: { at: "bottom-left" as const, label: "Modern Labs" },
    },
    {
      icon: "graduation",
      gradient: "from-brand-500 via-brand-600 to-accent",
      chip: {
        at: "bottom-left" as const,
        label: "100+ Mentors",
        /** Single letters: the circles overlap, so two would be clipped. */
        avatars: ["A", "S", "R"],
      },
    },
    {
      icon: "bot",
      gradient: "from-brand-700 via-accent to-ink",
      chip: { at: "top-right" as const, label: "AI Automation" },
    },
  ],
  /** Segments marked `strong` render in bold ink, as in the reference. */
  mission: [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " },
    { text: "eiusmod tempor", strong: true },
    { text: " incididunt ut labore et dolore magna aliqua, ut enim ad " },
    { text: "minim veniam", strong: true },
    { text: " quis nostrud exercitation." },
  ] as Array<{ text: string; strong?: boolean }>,
  stats: [
    { value: "45 Days", label: "Summer & winter industrial training" },
    { value: "6 Weeks", label: "University-mandated training" },
    { value: "6 Months", label: "Industrial training with internship" },
    { value: "9 Months", label: "Expert track with client projects" },
  ],
};

/* ------------------------------------------------------------ how it works */

export const howItWorks = {
  eyebrow: "How it works",
  heading: "From your first counselling call to your first offer",
  accent: ["first", "offer"],
  steps: [
    { n: "01", title: "Career counselling", body: LOREM_SHORT },
    { n: "02", title: "Classroom & lab", body: LOREM_SHORT },
    { n: "03", title: "Live project & internship", body: LOREM_SHORT },
    { n: "04", title: "Placement drives", body: LOREM_SHORT },
  ],
};

/* -------------------------------------------------------------- categories */

export const categories = {
  eyebrow: "Categories",
  heading: "Crafting careers with technology that works for you",
  accent: ["careers", "technology"],
  /** First entry is the reset filter; the rest match an item's `group`. */
  filters: ["All categories", "IT Courses", "AI & Data", "Design", "Marketing"],
  items: [
    { title: "IT Courses", group: "IT Courses", body: LOREM_SHORT, href: "/courses/it-courses", count: "18 programmes" },
    { title: "AI & Data", group: "AI & Data", body: LOREM_SHORT, href: "/courses#ai-data", count: "12 programmes" },
    { title: "Design & CAD", group: "Design", body: LOREM_SHORT, href: "/courses#design", count: "9 programmes" },
    { title: "Digital Marketing", group: "Marketing", body: LOREM_SHORT, href: "/courses#digital-marketing", count: "6 programmes" },
    { title: "Cyber & Cloud", group: "IT Courses", body: LOREM_SHORT, href: "/courses#cyber-cloud", count: "8 programmes" },
    { title: "Programming", group: "IT Courses", body: LOREM_SHORT, href: "/courses#programming", count: "14 programmes" },
  ],
};

/* --------------------------------------------------------- featured course */

export const featured = {
  eyebrow: "Featured Courses",
  heading: "Courses that get you hired",
  accent: ["hired"],
  body: LOREM_SHORT,
  cta: { label: "Browse all courses", href: "/courses" },
  cybersecurity: {
    title: "Cybersecurity & Ethical Hacking",
    body: LOREM_SHORT,
    href: "/courses/cybersecurity",
    bullets: ["Live pentest labs", "CEH-aligned syllabus", "Lorem ipsum dolor sit"],
  },
  dataScience: {
    title: "Data Science & Analytics",
    body: LOREM_SHORT,
    href: "/courses/data-science",
    liveLabel: "Live",
    delta: "+38%",
    /** Bar heights as percentages, one per year label. */
    bars: [38, 52, 46, 68, 82, 100],
    years: ["2020", "2021", "2022", "2023", "2024", "2025"],
  },
  aiml: {
    title: "AI & Machine Learning",
    badge: "AI",
    body: LOREM_MED,
    href: "/courses/machine-learning",
  },
  fullStack: {
    title: "Full-Stack Development",
    body: LOREM_MED,
    href: "/courses/mern-stack",
    stat: { value: "92%", label: "placement rate, 2025 batches" },
    rows: [
      { name: "React & Next.js", role: "Frontend", delta: "+42%" },
      { name: "Node & Express", role: "Backend", delta: "+31%" },
      { name: "MongoDB & SQL", role: "Database", delta: "+27%" },
    ],
  },
  digitalMarketing: {
    title: "Digital Marketing",
    body: LOREM_SHORT,
    href: "/courses/digital-marketing",
    alerts: [
      { label: "New batch alert", detail: "Digital Marketing starts Monday" },
      { label: "Placement drive", detail: "14 companies hiring this month" },
    ],
  },
};

/* ------------------------------------------------------------------ why us */

export const whyUs = {
  eyebrow: "Why TechCadd?",
  heading: "The TechCadd Difference",
  accent: ["Difference"],
  body: LOREM_MED,
  primaryCta: { label: "Call Now", href: site.phoneHref },
  secondaryCta: { label: "Book a Free Demo", href: "/contact" },
  items: [
    { icon: "layers", title: "Industry-Built Curriculum", body: LOREM_SHORT },
    { icon: "badge", title: "Certified Trainers", body: LOREM_SHORT },
    { icon: "briefcase", title: "Placement Support", body: LOREM_SHORT },
    { icon: "clock", title: "Flexible Batches", body: LOREM_SHORT },
  ],
};

/* ------------------------------------------------------------ testimonials */

export type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  role: string;
};

export const testimonials = {
  eyebrow: "Testimonials",
  heading: "What our students say about TechCadd",
  accent: ["students", "say"],
  stats: [
    { value: "4.9/5", label: "Rating" },
    { value: "750+", label: "Reviews" },
    { value: "15K+", label: "Alumni network" },
  ],
  rowOne: [
    { quote: LOREM_MED, initials: "SK", name: "Simranjeet Kaur", role: "Frontend Developer, Mohali" },
    { quote: LOREM_MED, initials: "HS", name: "Harman Sidhu", role: "Data Analyst, Gurugram" },
    { quote: LOREM_MED, initials: "AV", name: "Aditya Verma", role: "Python Developer, Chandigarh" },
    { quote: LOREM_MED, initials: "MK", name: "Manpreet Kaur", role: "QA Engineer, Pune" },
  ] as Testimonial[],
  rowTwo: [
    { quote: LOREM_MED, initials: "NB", name: "Neha Bansal", role: "Digital Marketing Lead, Ludhiana" },
    { quote: LOREM_MED, initials: "RM", name: "Rajiv Malhotra", role: "Engineering Manager, hiring partner" },
    { quote: LOREM_MED, initials: "GS", name: "Gurpreet Singh", role: "Security Analyst, Bengaluru" },
    { quote: LOREM_MED, initials: "TD", name: "Tanvir Dhillon", role: "Cloud Engineer, Noida" },
  ] as Testimonial[],
};

/* ----------------------------------------------------------------- modules */

export const modules = {
  eyebrow: "Modules",
  heading: "Included with every programme we run",
  accent: ["every", "programme"],
  body: LOREM_SHORT,
  items: [
    { n: "01", title: "Industry certificate", body: LOREM_SHORT },
    { n: "02", title: "Internship letter", body: LOREM_SHORT },
    { n: "03", title: "Live client projects", body: LOREM_SHORT },
    { n: "04", title: "Doubt-clearing sessions", body: LOREM_SHORT },
    { n: "05", title: "Interview preparation", body: LOREM_SHORT },
  ],
};

/* ------------------------------------------------------------ technologies */

export const technologies = {
  eyebrow: "Technologies",
  heading: "Technologies We Master",
  accent: ["Master"],
  body: LOREM_MED,
  cta: { label: "Explore all technologies", href: "/courses" },
  footnote: { value: "100+ technologies", label: "taught and growing" },
  tabs: [
    {
      label: "Programming",
      items: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "Go", "Rust", "PHP", "Swift", "Kotlin"],
    },
    {
      label: "Frameworks",
      items: ["React", "Next.js", "Angular", "Vue", "Node.js", "Express", "Django", "Flask", "Laravel", "Spring Boot", ".NET", "Svelte"],
    },
    {
      label: "AI & ML",
      items: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "Hugging Face", "LangChain", "OpenCV", "Pandas", "NumPy", "Jupyter", "Streamlit", "MLflow"],
    },
    {
      label: "CAD / CAM",
      items: ["AutoCAD", "SolidWorks", "CATIA", "Creo", "Fusion 360", "Revit", "STAAD Pro", "ANSYS", "3ds Max", "SketchUp"],
    },
    {
      label: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Oracle", "SQL Server", "Firebase", "Supabase", "Elasticsearch"],
    },
    {
      label: "DevOps",
      items: ["Docker", "Kubernetes", "Jenkins", "Git", "GitHub Actions", "Terraform", "Ansible", "Nginx", "Prometheus", "Grafana"],
    },
    {
      label: "Cloud",
      items: ["AWS", "Azure", "Google Cloud", "Vercel", "Netlify", "Cloudflare", "DigitalOcean", "Heroku", "Linode", "Render"],
    },
  ],
};

/* ------------------------------------------------------------ capabilities */

export const capabilities = {
  eyebrow: "Capabilities",
  heading: "Best-in-class technology, engineered into your solution",
  accent: ["engineered"],
  items: [
    {
      label: "AI & Machine Learning",
      body: LOREM_MED,
      stack: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "Hugging Face", "LangChain", "OpenCV", "Pandas", "NumPy", "Jupyter"],
    },
    {
      label: "Full-Stack Engineering",
      body: LOREM_MED,
      stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "GraphQL", "Tailwind CSS", "Vite"],
    },
    {
      label: "Data & Analytics",
      body: LOREM_MED,
      stack: ["Power BI", "Tableau", "Pandas", "Apache Spark", "Airflow", "dbt", "Snowflake", "BigQuery", "Excel", "SQL"],
    },
    {
      label: "Cloud & DevOps",
      body: LOREM_MED,
      stack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Nginx", "Ansible", "Grafana"],
    },
    {
      label: "Cybersecurity",
      body: LOREM_MED,
      stack: ["Kali Linux", "Metasploit", "Burp Suite", "Wireshark", "Nmap", "Splunk", "OWASP ZAP", "Snort", "John the Ripper"],
    },
    {
      label: "Digital Marketing",
      body: LOREM_MED,
      stack: ["Google Ads", "Meta Ads", "GA4", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Canva", "Search Console"],
    },
  ],
};

/* -------------------------------------------------------------------- blog */

export const blog = {
  eyebrow: "Blogs",
  heading: "Notes from the classroom and the codebase",
  accent: ["classroom", "codebase"],
  cta: { label: "Read all posts", href: "/blogs" },
  posts: [
    { date: "12 Aug 2026", tag: "AI", title: "Lorem ipsum dolor sit amet consectetur", excerpt: LOREM_SHORT, href: "/blogs" },
    { date: "04 Aug 2026", tag: "Careers", title: "Sed do eiusmod tempor incididunt ut labore", excerpt: LOREM_SHORT, href: "/blogs" },
    { date: "27 Jul 2026", tag: "Full-Stack", title: "Ut enim ad minim veniam quis nostrud", excerpt: LOREM_SHORT, href: "/blogs" },
  ],
};

/* ---------------------------------------------------------------- final cta */

export const finalCta = {
  eyebrow: "Get started today",
  heading: "Start building your career today.",
  accent: ["career"],
  body: LOREM_SHORT,
  inputLabel: "Mobile number",
  placeholder: "98765 43210",
  submitLabel: "Enquire Now",
  secondaryCta: { label: "Book Demo", href: "/contact" },
};

/* ------------------------------------------------------------------ footer */

export const footer = {
  columns: [
    {
      title: "Courses",
      links: [
        { label: "Programming", href: "/courses#programming" },
        { label: "AI & Data", href: "/courses#ai-data" },
        { label: "Digital Marketing", href: "/courses#digital-marketing" },
        { label: "Cyber & Cloud", href: "/courses#cyber-cloud" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "AI", href: "/courses/artificial-intelligence" },
        { label: "Resources", href: "/blogs" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Placement Support", href: "/#why-us" },
        { label: "Student Reviews", href: "/reviews" },
        { label: "FAQs", href: "/faq" },
        { label: "Enquire Now", href: "/contact" },
      ],
    },
  ],
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
};
