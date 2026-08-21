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

const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.";

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
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "AI",
    href: "/courses/artificial-intelligence",
    sparkle: true,
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
    children: [
      { label: "Programming", href: "/courses#programming" },
      { label: "AI & Data", href: "/courses#ai-data" },
      { label: "Digital Marketing", href: "/courses#digital-marketing" },
      { label: "Cyber & Cloud", href: "/courses#cyber-cloud" },
      { label: "IT Courses", href: "/courses/it-courses" },
    ],
  },
  { label: "Internship & Training", href: "/internship-training" },
  { label: "After 12th", href: "/after-12th-courses" },
  {
    label: "Resources",
    href: "/blogs",
    children: [
      { label: "Blogs", href: "/blogs" },
      { label: "Placement Support", href: "/#why-us" },
      { label: "Student Reviews", href: "/#testimonials" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: `TechCadd ${site.city}`,
  eyebrowMeta: site.tagline,
  /** Rendered line-by-line; `accent` words render in brand blue. */
  headingLines: [
    { text: "Build The Skills That Turn", accent: [] },
    { text: "You Into A", accent: [] },
    { text: "Job-Ready Engineer", accent: ["Job-Ready", "Engineer"] },
    { text: "In AI & Software Engineering", accent: [], code: true },
  ] as Array<{ text: string; accent: string[]; code?: boolean }>,
  body: LOREM_LONG,
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
        { label: "Student Reviews", href: "/#testimonials" },
        { label: "FAQs", href: "/#faq" },
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
