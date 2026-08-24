/**
 * Seed data for every slug under /internship-training/[slug].
 *
 * Same shape as `course-data.ts` and `after-12th-data.ts`, so these programmes
 * are fed through the same `buildCourse` builder and get the identical depth of
 * content as a /courses page. What differs is that a course is a *subject* and
 * these are *formats* — a duration and a delivery contract, inside which the
 * student picks their own discipline. The framing that carries that difference
 * lives in the extra fields below and is applied in `training.ts`.
 *
 * The slugs match the "Internship & Training" mega menu in `content.ts`
 * exactly, so every dropdown link resolves.
 *
 * Copy is placeholder marketing content. Swap the strings; no component needs
 * touching.
 */

import type { CourseSeed } from "./course-data";

/** Track ids double as the hub-page anchors on /internship-training. */
export type TrainingTrackId = "short-term" | "long-term" | "programmes";

export type TrainingSeed = CourseSeed & {
  track: TrainingTrackId;
  /** Short card copy on the hub grid — the tagline is the longer hero line. */
  cardBlurb: string;
  /** Three chips under the card copy. */
  highlights: string[];
  /** Indicative fee range, shown in the spec rail and the fee FAQ. */
  fee: string;
  /** Who the format is open to, shown in the spec rail. */
  eligibility: string;
  /**
   * What the format is formally accepted *as* — the reason a student picks a
   * duration rather than a subject. Shown in the spec rail.
   */
  credential: string;
  /**
   * How the duration is actually spent. A course page derives its stages from
   * the module list, but on a format page the calendar *is* the product, so
   * each span is stated outright rather than inferred.
   */
  plan: Array<{ span: string; title: string; body: string }>;
};

export const trainingTrackMeta: Array<{
  id: TrainingTrackId;
  index: string;
  title: string;
  tagline: string;
  blurb: string;
}> = [
  {
    id: "short-term",
    index: "01",
    title: "Short Term",
    tagline: "Summer, winter and university-mandated batches",
    blurb:
      "The formats colleges ask for by name. Long enough to build one real thing properly, short enough to finish inside a vacation.",
  },
  {
    id: "long-term",
    index: "02",
    title: "Long Term",
    tagline: "Deeper tracks that finish with a live project",
    blurb:
      "Four to six months, which is where a single build becomes a body of work — two live briefs, a capstone, and time to be genuinely good at the toolchain.",
  },
  {
    id: "programmes",
    index: "03",
    title: "Programmes",
    tagline: "Industrial training and internship placements",
    blurb:
      "Documentation-led formats. You sit inside a delivery team, and you leave with the letter your university or your CV actually needs.",
  },
];

/** The shared toolchain every training format runs on, whatever the discipline. */
const CORE_TOOLCHAIN = [
  "Git",
  "VS Code",
  "Postman",
  "Notion",
  "Figma",
  "Google Sheets",
  "Canva",
  "Docker",
];

export const trainingSeeds: TrainingSeed[] = [
  /* ------------------------------------------------------------ short term */
  {
    slug: "45-days",
    title: "45 Days Training",
    category: "Internship & Training",
    track: "short-term",
    badge: "Trending",
    featured: true,
    duration: "45 days · 6 weeks",
    level: "Beginner to project-ready",
    fee: "₹8,000 – ₹15,000",
    eligibility: "12th pass, graduates, final-year students and working professionals",
    credential: "Certificate + internship letter",
    tagline:
      "A six-week sprint built around a live client brief — the format Punjab universities accept for summer training, and recruiters accept as evidence.",
    focus:
      "Forty-five days is long enough to build one real thing properly, and too short to waste on theory. You spend the first fortnight on fundamentals and the toolchain, then move onto a live brief from our own delivery pipeline for the rest of it.",
    cardBlurb:
      "Two weeks of fundamentals, then four weeks on a live client brief with daily trainer review and a portfolio write-up at the end.",
    highlights: ["Live client brief", "Internship letter", "Weekday or weekend"],
    plan: [
      { span: "Weeks 1 – 2", title: "Foundations & toolchain", body: "Environment, editor and version control set up from nothing, then the fundamentals of your chosen discipline worked daily with a trainer looking at the output." },
      { span: "Weeks 3 – 4", title: "The live client brief", body: "A real requirement from the delivery pipeline. You scope it, build it in daily increments and act on review notes that arrive whether or not you agree with them." },
      { span: "Weeks 5 – 6", title: "Testing, portfolio & placement", body: "Test and harden what you built, write it up to portfolio standard, then a CV pass and a mock interview before the certificate and letter are issued." },
    ],
    topics: [
      { t: "Foundations & Toolchain Setup", s: ["Environment and editor setup", "Version control from day one", "Reading documentation properly"] },
      { t: "Core Concepts in Practice", s: ["Working the fundamentals", "Debugging your own output", "File and naming hygiene"] },
      { t: "Real Inputs, Real Constraints", s: ["Messy real-world inputs", "Industry file standards", "Building to a written spec"] },
      { t: "The Live Client Brief", s: ["Scoping the requirement", "Build, review, iterate", "Daily trainer sign-off"] },
      { t: "Testing & Iteration", s: ["Finding your own faults first", "Reviewing against the brief", "Handover documentation"], d: "A tested deliverable with its review history and handover notes attached." },
      { t: "Portfolio, CV & Interview Prep", s: ["Writing the project up", "CV and portfolio pass", "Mock interview with feedback"], d: "A portfolio entry and a CV a hiring manager can read in ninety seconds." },
    ],
    tools: CORE_TOOLCHAIN,
    roles: ["Trainee Executive", "Junior Developer", "Junior Analyst", "Freelance Consultant"],
    projects: [
      { title: "Fundamentals Build", body: "Your first working piece, applying weeks one and two end to end rather than as isolated exercises." },
      { title: "Real-World Data Challenge", body: "The same class of task again, this time against messy real inputs with the awkward edge cases left in." },
      { title: "Live Client Brief", body: "A genuine requirement pulled from the TechCadd delivery pipeline, scoped and built to a real deadline." },
      { title: "Portfolio Capstone", body: "A project you specify yourself, taken through to deployment and written up for your portfolio." },
    ],
  },
  {
    slug: "6-weeks",
    title: "6 Weeks Training",
    category: "Internship & Training",
    track: "short-term",
    badge: "Trending",
    duration: "6 weeks",
    level: "Beginner to project-ready",
    fee: "₹8,000 – ₹15,000",
    eligibility: "Final-year students, graduates and 12th pass students",
    credential: "Certificate + internship letter",
    tagline:
      "The six-week slot most Punjab colleges mandate, run as a real project cycle rather than a certificate you collect at the end.",
    focus:
      "Most colleges write six weeks into the syllabus and leave students to find something to do with it. This is that slot used properly: a fortnight of tooling, then a brief with a deadline and a reviewer.",
    cardBlurb:
      "Built for the six-week industrial slot in a Punjab college syllabus — a real brief, a real reviewer and the letter your department asks for.",
    highlights: ["University accepted", "One live brief", "Letter on file"],
    plan: [
      { span: "Weeks 1 – 2", title: "Orientation & fundamentals", body: "Toolchain, Git and the review loop, then the core concepts compressed into a fortnight of worked examples and your first reviewed artefact." },
      { span: "Weeks 3 – 4", title: "Specified project build", body: "A brief handed over as a written spec, built against a daily trainer sign-off using the file and version conventions the job would expect." },
      { span: "Weeks 5 – 6", title: "Submission & documentation", body: "Testing before handover, then the report written in your department's format alongside a portfolio entry you can actually show a recruiter." },
    ],
    topics: [
      { t: "Orientation & Toolchain", s: ["Editor and environment", "Git and branching basics", "How the review loop works"] },
      { t: "Fundamentals at Speed", s: ["Core concepts, compressed", "Worked examples daily", "Your first reviewed artefact"] },
      { t: "Standards & Real Files", s: ["Industry conventions", "Working from a supplied spec", "Version discipline"] },
      { t: "Project Build", s: ["Scope and plan", "Build in daily increments", "Trainer review at each step"] },
      { t: "Submission & Documentation", s: ["Testing before handover", "Report writing for college", "Portfolio write-up"], d: "A submission pack in the format a university department expects, plus a portfolio entry." },
    ],
    tools: CORE_TOOLCHAIN,
    roles: ["Trainee Engineer", "Junior Developer", "Trainee Analyst", "Intern"],
    projects: [
      { title: "Toolchain Warm-Up", body: "A small end-to-end build in week two that proves the environment, the workflow and the review loop all work." },
      { title: "Specified Project Build", body: "A brief handed to you as a written spec, built in daily increments against a trainer sign-off." },
      { title: "College Submission Pack", body: "The project documented to the standard a Punjab university department accepts for industrial training credit." },
    ],
  },

  /* ------------------------------------------------------------- long term */
  {
    slug: "4-months",
    title: "4 Months Training",
    category: "Internship & Training",
    track: "long-term",
    duration: "4 months",
    level: "Beginner to job-ready",
    fee: "₹18,000 – ₹40,000",
    eligibility: "Graduates, final-year students and career changers",
    credential: "Certificate + internship letter",
    tagline:
      "Long enough to stop being a beginner. Two live briefs, a capstone, and the toolchain habits that survive a real job.",
    focus:
      "Four months is the first duration where you stop rehearsing and start working. One brief teaches you the process; the second is where you are expected to run it yourself, with the trainer reviewing rather than steering.",
    cardBlurb:
      "Two live briefs instead of one, with the second run largely by you — plus a capstone and a placement-readiness block at the end.",
    highlights: ["Two live briefs", "Capstone project", "Placement prep"],
    plan: [
      { span: "Month 1", title: "Foundations & environment", body: "The toolchain from scratch and the fundamentals in depth — including the common failure modes, so you can review your own work before anyone else does." },
      { span: "Month 2", title: "First live brief", body: "A real requirement scoped with your trainer and delivered against a client-facing deadline, with a debrief on what you would do differently." },
      { span: "Month 3", title: "Second brief, run by you", body: "The same again, except you own the scope and the schedule. The trainer reviews rather than steers, which is the actual difference between training and working." },
      { span: "Month 4", title: "Capstone & placement prep", body: "Your own specification taken to deployment and documented, then CV and portfolio review, mock interviews and realistic role and salary expectations." },
    ],
    topics: [
      { t: "Foundations & Environment", s: ["Toolchain from scratch", "Version control properly", "Reading and writing docs"] },
      { t: "Core Discipline Skills", s: ["The fundamentals in depth", "Common failure modes", "Reviewing your own work"] },
      { t: "Working to Industry Standards", s: ["Conventions and structure", "Handling real, imperfect inputs", "Estimating small tasks"] },
      { t: "First Live Brief", s: ["Guided scoping", "Build with daily review", "Handover and debrief"] },
      { t: "Second Live Brief", s: ["You scope it", "You run the schedule", "Trainer reviews, does not steer"] },
      { t: "Collaboration & Handover", s: ["Working against someone else's code", "Written handover", "Code and file review"] },
      { t: "Capstone Build", s: ["Your own specification", "Deployment or delivery", "Documented decisions"], d: "A deployed capstone with a written record of the decisions behind it." },
      { t: "Placement Readiness", s: ["CV and portfolio pass", "Mock interviews", "Salary and role expectations"] },
    ],
    tools: CORE_TOOLCHAIN,
    roles: ["Junior Developer", "Analyst", "Executive", "Freelance Consultant", "Trainee Engineer"],
    projects: [
      { title: "Guided Live Brief", body: "Your first real requirement, scoped with the trainer and built against a client-facing deadline." },
      { title: "Self-Run Live Brief", body: "The second brief, where you own the scope and the schedule and the trainer only reviews." },
      { title: "Inherited Codebase Task", body: "A change request on work someone else wrote — the task every junior actually gets in month one." },
      { title: "Portfolio Capstone", body: "A specification of your own, taken to deployment and documented well enough to walk an interviewer through." },
    ],
  },
  {
    slug: "6-months",
    title: "6 Months Training",
    category: "Internship & Training",
    track: "long-term",
    featured: true,
    duration: "6 months",
    level: "Beginner to job-ready",
    fee: "₹18,000 – ₹40,000",
    eligibility: "Graduates, final-year students and career changers",
    credential: "Certificate + internship letter",
    tagline:
      "The full route: a discipline learned properly, three live briefs, and the last six weeks spent inside a delivery team rather than a classroom.",
    focus:
      "Six months is what it actually takes to be hireable without an asterisk. The first half builds the discipline; the second puts you on real delivery work with an internship letter to show for it.",
    cardBlurb:
      "Three live briefs, a capstone and a final internship block inside a delivery team — the longest and most complete training format we run.",
    highlights: ["Internship block", "Three live briefs", "Placement drives"],
    plan: [
      { span: "Months 1 – 2", title: "Discipline foundations", body: "Toolchain, conventions and the fundamentals in depth, plus the habits — self-review, documentation, version discipline — that decide whether you are employable." },
      { span: "Month 3", title: "First live brief", body: "Guided scoping on a real requirement, built in daily increments with a debrief and rework cycle at the end of it." },
      { span: "Month 4", title: "Second brief & team work", body: "You scope and schedule this one, then take a change request on someone else's code — the task every junior actually gets in their first month." },
      { span: "Month 5", title: "Internship block", body: "Placed on live delivery work with real deadlines and real stakeholders. The internship letter is drafted from what you did here, not from your attendance." },
      { span: "Month 6", title: "Capstone & placement cycle", body: "A capstone on your own specification, then portfolio review, mock interview rounds and drives with hiring partners that continue after the batch ends." },
    ],
    topics: [
      { t: "Foundations & Toolchain", s: ["Environment and editor", "Git, branches and reviews", "Documentation habits"] },
      { t: "Core Discipline Skills", s: ["Fundamentals in depth", "Debugging under pressure", "Self-review before submission"] },
      { t: "Industry Standards & Structure", s: ["Conventions that scale", "Imperfect real inputs", "Task estimation"] },
      { t: "First Live Brief", s: ["Guided scoping", "Daily increments", "Debrief and rework"] },
      { t: "Second Live Brief", s: ["Independent scoping", "Owning the schedule", "Review, not supervision"] },
      { t: "Working in a Team", s: ["Someone else's code", "Handover documents", "Review etiquette"] },
      { t: "Capstone Build", s: ["Own specification", "Deployment and delivery", "Decision log"] },
      { t: "Internship Block", s: ["Placed on live delivery", "Real deadlines and stakeholders", "Documented internship letter"], d: "A signed internship letter describing the delivery work you actually did." },
      { t: "Placement & Interview Cycle", s: ["Portfolio and CV review", "Mock interview rounds", "Hiring partner drives"] },
    ],
    tools: CORE_TOOLCHAIN,
    roles: ["Junior Developer", "Analyst", "Executive", "Trainee Engineer", "Freelance Consultant"],
    projects: [
      { title: "Guided Live Brief", body: "The first real requirement, scoped with a trainer and delivered against a client deadline." },
      { title: "Self-Run Live Brief", body: "A second brief you scope, schedule and deliver yourself, reviewed rather than supervised." },
      { title: "Team Delivery Task", body: "Work inside an existing codebase and an existing team, with a written handover at the end." },
      { title: "Portfolio Capstone", body: "Your own specification taken to deployment, documented well enough to defend in an interview." },
    ],
  },

  /* ------------------------------------------------------------ programmes */
  {
    slug: "industrial-training",
    title: "Industrial Training",
    category: "Internship & Training",
    track: "programmes",
    badge: "Trending",
    duration: "6 weeks – 6 months",
    level: "Beginner to project-ready",
    fee: "₹8,000 – ₹40,000",
    eligibility: "B.Tech, BCA, MCA, B.Sc and diploma students",
    credential: "Certificate + university-format training letter",
    tagline:
      "The industrial training your university requires, run as actual industry work — with the paperwork done in the format your department accepts.",
    focus:
      "Industrial training fails when it becomes a signature on a form. Here you are given a real brief, a real reviewer and a real deadline, and the documentation is produced alongside the work rather than invented at the end.",
    cardBlurb:
      "Any duration your syllabus mandates, delivered as real project work with the report and letter your department expects.",
    highlights: ["Any mandated length", "Department paperwork", "Real brief"],
    plan: [
      { span: "Week 1", title: "Scope & department requirements", body: "We read your syllabus brief and agree a deliverable that satisfies both your department and a real requirement, so the work counts twice." },
      { span: "Middle stretch", title: "Supervised build", body: "The build itself against a real deadline, with a weekly supervisor review and a progress log that becomes the evidence in your report." },
      { span: "Final fortnight", title: "Report, viva & letter", body: "Testing evidence gathered, the training report written in your department's format, viva preparation, then the signed letter and certificate." },
    ],
    topics: [
      { t: "Scope & Department Requirements", s: ["Reading your syllabus brief", "Mapping it to real work", "Agreeing the deliverable"] },
      { t: "Toolchain & Working Standards", s: ["Environment setup", "Version control", "Conventions and structure"] },
      { t: "Supervised Build Phase", s: ["Real requirement, real deadline", "Weekly supervisor review", "Recorded progress log"] },
      { t: "Testing & Verification", s: ["Testing before submission", "Evidence of what works", "Fixing what does not"] },
      { t: "Report & Documentation", s: ["University report format", "Diagrams and evidence", "Viva preparation"], d: "A training report in your department's format, with evidence you can defend in a viva." },
      { t: "Letter & Certification", s: ["Attendance record", "Signed training letter", "Industry certificate"] },
    ],
    tools: CORE_TOOLCHAIN,
    roles: ["Trainee Engineer", "Industrial Trainee", "Junior Developer", "Junior Analyst"],
    projects: [
      { title: "Scoped Training Brief", body: "A requirement matched to your syllabus deliverable so the work counts twice — for us and for your department." },
      { title: "Supervised Build", body: "The build itself, with a weekly supervisor review and a progress log that becomes your report evidence." },
      { title: "University Training Report", body: "The report written in your department's format, with diagrams, testing evidence and a viva-ready summary." },
    ],
  },
  {
    slug: "internship-program",
    title: "Internship Program",
    category: "Internship & Training",
    track: "programmes",
    duration: "2 – 6 months",
    level: "Project-ready to job-ready",
    fee: "₹12,000 – ₹35,000",
    eligibility: "Graduates, final-year students and course alumni",
    credential: "Documented internship letter + certificate",
    tagline:
      "Not a shadowing exercise. You are placed on live delivery work with a reviewer, a deadline and a letter that describes what you actually did.",
    focus:
      "Most internship letters say nothing, because most internships involve nothing. This one puts you on work that ships, which is the only reason the letter is worth reading.",
    cardBlurb:
      "A placement inside the delivery team on work that ships, ending in a letter that names the projects rather than the dates.",
    highlights: ["Live delivery work", "Named in the letter", "2 – 6 months"],
    plan: [
      { span: "Weeks 1 – 2", title: "Onboarding & first task", body: "How the team works, the review standard, and a small scoped change on live work — enough to learn the bar without being able to break anything." },
      { span: "Middle stretch", title: "Owning a feature", body: "You scope a feature, build it against the team's actual deadline and defend it in review, talking to the person whose requirement it is." },
      { span: "Final weeks", title: "Handover & letter", body: "Test your own work, write the handover that lets someone else pick it up, then a reviewer debrief — which is what the letter is drafted from." },
    ],
    topics: [
      { t: "Onboarding & Standards", s: ["How the team works", "Version control and review", "What good enough means here"] },
      { t: "First Assigned Task", s: ["A small scoped change", "Review and rework", "Shipping it"] },
      { t: "Owning a Feature", s: ["Scope it yourself", "Build against a deadline", "Handle the review notes"] },
      { t: "Working With Stakeholders", s: ["Reading a real requirement", "Asking the right questions", "Reporting progress honestly"] },
      { t: "Delivery & Handover", s: ["Testing your own work", "Written handover", "Debrief with the reviewer"], d: "Shipped work with a written handover and a recorded reviewer debrief." },
      { t: "Letter, Portfolio & Next Role", s: ["Internship letter drafted from real tasks", "Portfolio write-up", "Interview preparation"] },
    ],
    tools: CORE_TOOLCHAIN,
    roles: ["Intern", "Junior Developer", "Junior Analyst", "Trainee Executive"],
    projects: [
      { title: "First Scoped Task", body: "A small, real change on live work — enough to learn the review standard without being able to break anything." },
      { title: "Owned Feature", body: "A feature you scope, build and defend in review, delivered against the team's actual deadline." },
      { title: "Handover Pack", body: "The written handover and debrief that let someone else pick your work up — and that your letter is drafted from." },
    ],
  },
];
