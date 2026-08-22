/**
 * Seed data for every slug under /after-12th-courses/[slug].
 *
 * Deliberately the same shape as `course-data.ts` — these seeds are fed through
 * the same `buildCourse` builder, so an after-12th page gets the identical
 * depth of content as a /courses page. What differs is framing, which lives in
 * the extra fields below (`stream`, `eligibility`, `fee`, `cardBlurb`) and is
 * applied in `after-12th-courses.ts`.
 *
 * The slugs match the "After 12th" mega menu in `content.ts` exactly, so every
 * dropdown link resolves.
 *
 * Copy is placeholder marketing content. Swap the strings; no component needs
 * touching.
 */

import type { CourseSeed } from "./course-data";

/** Stream ids double as the hub-page anchors on /after-12th-courses. */
export type After12StreamId =
  | "six-month"
  | "one-year"
  | "graphics"
  | "civil-mechanical";

export type After12Seed = CourseSeed & {
  stream: After12StreamId;
  /** Short card copy on the hub grid — the tagline is the longer hero line. */
  cardBlurb: string;
  /** Three chips under the card copy. */
  highlights: string[];
  /** Indicative fee range, shown in the spec rail. */
  fee: string;
  /** Entry requirement, shown in the spec rail and the hero stat. */
  eligibility: string;
};

export const after12StreamMeta: Array<{
  id: After12StreamId;
  index: string;
  title: string;
  tagline: string;
  blurb: string;
}> = [
  {
    id: "six-month",
    index: "01",
    title: "6 Month Certificates",
    tagline: "One skill, job-ready in half a year",
    blurb:
      "The shortest honest route to a first salary. One discipline, taught end to end, with a portfolio brief running underneath from the second month.",
  },
  {
    id: "one-year",
    index: "02",
    title: "1 Year Certificates",
    tagline: "Full programmes with an internship track",
    blurb:
      "Two semesters: the first builds the discipline, the second puts you inside a live delivery team with an internship letter at the end of it.",
  },
  {
    id: "graphics",
    index: "03",
    title: "Graphics",
    tagline: "Design, video and motion for screen and print",
    blurb:
      "Craft tracks for students who came out of 12th already making things. Portfolio weight matters more than marks here, and that is what these are built to produce.",
  },
  {
    id: "civil-mechanical",
    index: "04",
    title: "Civil / Mechanical",
    tagline: "Design and drafting for engineering streams",
    blurb:
      "For PCM students heading into a diploma, a B.Tech or straight into a site office. Drafting skill is what gets you paid on day one, whichever of those you pick.",
  },
];

const ANY_STREAM = "12th pass, any stream";
const PCM_PREFERRED = "12th pass, PCM preferred";

export const after12Seeds: After12Seed[] = [
  /* ------------------------------------------------------- 6 month tracks */
  {
    slug: "digital-marketing-communication",
    title: "Digital Marketing & Communication",
    category: "Digital Marketing",
    stream: "six-month",
    badge: "Trending",
    featured: true,
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹24,000 – ₹40,000",
    tagline:
      "Search, social, paid media and analytics run as one measurable system — on a live client account from the second month, not a demo dashboard.",
    focus:
      "Digital marketing is the fastest hire in Punjab for a 12th pass student with a portfolio, because results are provable: every campaign you run leaves numbers a hiring manager can check.",
    cardBlurb:
      "SEO, paid media, social and analytics run as one measurable system on a live client account rather than a demo dashboard.",
    highlights: ["Meta & Google Ads", "SEO and content", "GA4 reporting"],
    topics: [
      { t: "Buyer Psychology & Funnels", s: ["Awareness to purchase stages", "Offer and positioning", "Mapping a funnel to a budget"] },
      { t: "Brand Communication & Writing", s: ["Ad and landing page copy", "Tone for each platform", "Editing your own drafts"] },
      { t: "SEO & Content Marketing", s: ["Keyword research", "On-page and technical basics", "Content calendars"] },
      { t: "Social Media & Meta Ads", s: ["Audience building", "Creative testing", "Campaign structure"] },
      { t: "Google Ads & Search Intent", s: ["Search, display and PMax", "Bidding and budgets", "Negative keyword hygiene"] },
      { t: "Email, CRM & Automation", s: ["List building and segments", "Sequence writing", "Deliverability basics"] },
      { t: "Analytics & Reporting", s: ["GA4 events and funnels", "Attribution in plain terms", "Monthly client report"] },
      { t: "AI Tools in the Workflow", s: ["Briefing an AI assistant", "Creative variation at speed", "Checking what it gets wrong"], d: "An AI-assisted content workflow documented end to end, with the human review steps marked." },
    ],
    tools: ["Meta Ads Manager", "Google Ads", "GA4", "Google Search Console", "Ahrefs", "Canva", "Mailchimp", "WordPress", "Looker Studio", "ChatGPT"],
    roles: ["Digital Marketing Executive", "Performance Marketing Trainee", "SEO Executive", "Social Media Manager", "Freelance Marketing Consultant"],
    projects: [
      { title: "Local Business Growth Campaign", body: "A full-funnel campaign for an Amritsar retailer: audience research, creatives, a live ad budget and a reported outcome." },
      { title: "SEO Rebuild of a Real Site", body: "Audit, keyword map, on-page fixes and a content plan, tracked in Search Console across the course." },
      { title: "Monthly Client Reporting Pack", body: "A Looker Studio dashboard and written commentary of the standard an agency sends a client." },
    ],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    category: "Programming",
    stream: "six-month",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹18,000 – ₹30,000",
    tagline:
      "From your first line of code to a deployed application — the entry point for anyone heading towards data, AI or backend work.",
    focus:
      "Python is the shortest route from beginner to building things that actually run, which is why it is the language every other technical track after 12th builds on.",
    cardBlurb:
      "From first script to a deployed application. The entry point for anyone heading towards data, AI or backend work later.",
    highlights: ["Core Python", "APIs & databases", "Two shipped apps"],
    topics: [
      { t: "Foundations & Syntax", s: ["Variables, types and operators", "Control flow and loops", "Reading the error trace"] },
      { t: "Data Structures in Practice", s: ["Lists, tuples, sets, dicts", "Comprehensions", "Choosing the right structure"] },
      { t: "Functions & Modular Code", s: ["Arguments and scope", "Pure functions", "Writing your own modules"] },
      { t: "Object-Oriented Python", s: ["Classes and instances", "Inheritance and composition", "When not to use a class"] },
      { t: "Files, APIs & Automation", s: ["CSV and file handling", "requests and REST APIs", "Scheduled scripts"] },
      { t: "Databases with Python", s: ["SQL fundamentals", "SQLite and MySQL", "Safe queries"] },
      { t: "Debugging, Testing & Git", s: ["Breakpoint debugging", "pytest basics", "Branching workflow"] },
      { t: "Capstone Application", s: ["Requirement breakdown", "Feature build", "Deployment and demo"] },
    ],
    tools: ["Python 3", "VS Code", "Jupyter", "pip & venv", "Git", "SQLite", "MySQL", "requests", "pytest", "Flask"],
    roles: ["Python Developer (Trainee)", "Automation Executive", "Junior Backend Developer", "Data Analyst", "QA Automation Trainee"],
    projects: [
      { title: "Shop Inventory Automation", body: "A script that reads supplier spreadsheets, reconciles stock and emails a daily exception report." },
      { title: "Booking REST API", body: "A Flask service with authentication, validation and a relational schema behind it." },
      { title: "Scraper & Data Pipeline", body: "A scheduled scraper that cleans, de-duplicates and writes structured records into a database." },
    ],
  },
  {
    slug: "machine-learning-ai",
    title: "Machine Learning & AI",
    category: "AI & Data",
    stream: "six-month",
    badge: "Trending",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹28,000 – ₹42,000",
    tagline:
      "Models built on data you have had to clean yourself, evaluated honestly, and written up the way a hiring manager expects to read them.",
    focus:
      "Most of machine learning is not the model — it is the data work before it and the evaluation after it, which is exactly where this course spends its time.",
    cardBlurb:
      "Models built on data you have had to clean yourself, evaluated honestly, and written up the way a hiring manager expects to read them.",
    highlights: ["Scikit-learn", "Model evaluation", "Capstone notebook"],
    topics: [
      { t: "Python for Data Work", s: ["NumPy arrays", "pandas DataFrames", "Reading messy files"] },
      { t: "Statistics You Actually Use", s: ["Distributions and spread", "Correlation vs causation", "Sampling and bias"] },
      { t: "Data Cleaning & Features", s: ["Missing values", "Encoding and scaling", "Feature engineering"] },
      { t: "Supervised Learning", s: ["Regression and classification", "Train/test discipline", "Overfitting in practice"] },
      { t: "Unsupervised Learning", s: ["Clustering", "Dimensionality reduction", "Reading a segmentation"] },
      { t: "Model Evaluation", s: ["Precision, recall, ROC", "Cross-validation", "Explaining a bad result"] },
      { t: "Intro to Neural Networks", s: ["Perceptrons and layers", "Training loops", "When deep learning is overkill"] },
      { t: "Capstone & Write-up", s: ["Problem framing", "End-to-end notebook", "Presenting to a non-technical room"] },
    ],
    tools: ["Python 3", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter", "Google Colab", "Git", "Streamlit"],
    roles: ["Machine Learning Trainee", "Junior Data Analyst", "AI Associate", "Data Science Intern", "Analytics Executive"],
    projects: [
      { title: "Customer Churn Predictor", body: "A classification model on a deliberately messy dataset, with the cleaning decisions documented." },
      { title: "Price Prediction Notebook", body: "A regression study with feature engineering and an honest error analysis section." },
      { title: "Segmentation Dashboard", body: "Clustering output turned into a Streamlit app a business user can actually operate." },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "Cyber & Cloud",
    stream: "six-month",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹26,000 – ₹40,000",
    tagline:
      "Networking fundamentals, hardening and defensive tooling, practised in a lab environment you are allowed to break.",
    focus:
      "Security work is defensive first: you cannot protect a system you do not understand, so the course builds the network and Linux base before any tooling appears.",
    cardBlurb:
      "Networking fundamentals, hardening and defensive tooling, practised in a lab environment you are allowed to break.",
    highlights: ["Network basics", "Linux hardening", "Incident write-ups"],
    topics: [
      { t: "Networking Fundamentals", s: ["TCP/IP and the OSI model", "DNS, HTTP and TLS", "Reading a packet capture"] },
      { t: "Linux for Security", s: ["Shell and permissions", "Users, groups and sudo", "Log locations"] },
      { t: "Threats & Attack Surface", s: ["Common attack classes", "Phishing and social engineering", "Thinking like an attacker"] },
      { t: "System & Network Hardening", s: ["Patching discipline", "Firewall rules", "Service minimisation"] },
      { t: "Identity & Access", s: ["Authentication factors", "Least privilege", "Password and key hygiene"] },
      { t: "Monitoring & Detection", s: ["Log aggregation", "Alert triage", "Reducing false positives"] },
      { t: "Incident Response", s: ["Containment steps", "Evidence handling", "Post-incident review"], d: "A written incident report for a simulated breach, including timeline and remediation." },
      { t: "Governance & Compliance", s: ["Policies that get followed", "Risk registers", "Audit preparation"] },
    ],
    tools: ["Kali Linux", "Ubuntu Server", "Wireshark", "Nmap", "pfSense", "Splunk", "Metasploit", "Burp Suite", "VirtualBox", "Git"],
    roles: ["SOC Analyst (L1)", "IT Security Trainee", "Network Support Executive", "Systems Administrator", "Compliance Assistant"],
    projects: [
      { title: "Hardened Server Build", body: "A Linux server taken from default install to a documented hardened baseline, with before/after scans." },
      { title: "Network Traffic Investigation", body: "A packet capture analysed to identify and explain suspicious activity." },
      { title: "Simulated Incident Report", body: "A full response write-up for a lab breach: timeline, impact, containment and prevention." },
    ],
  },
  {
    slug: "tally-erp-gst",
    title: "Tally ERP with GST",
    category: "Business & Office",
    stream: "six-month",
    duration: "4 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹9,000 – ₹16,000",
    tagline:
      "Books, inventory, payroll and GST filing on real transaction sets — the fastest hire in the Amritsar trading and export market.",
    focus:
      "Every trading house, unit and clinic in the city runs books, and most of them run them in Tally — which is why this is the shortest gap between a 12th result and a salary.",
    cardBlurb:
      "Books, inventory, payroll and GST filing on real transaction sets — the fastest hire in the Amritsar trading and export market.",
    highlights: ["GST returns", "Payroll entries", "Balance sheets"],
    topics: [
      { t: "Accounting Fundamentals", s: ["Debit and credit logic", "Journal to ledger", "Trial balance"] },
      { t: "Company Setup in Tally", s: ["Masters and groups", "Voucher types", "Data security and backups"] },
      { t: "Day-to-Day Vouchers", s: ["Sales and purchase entries", "Payments and receipts", "Contra and journal"] },
      { t: "Inventory Management", s: ["Stock groups and units", "Batches and godowns", "Reorder levels"] },
      { t: "GST End to End", s: ["Rates and HSN", "GSTR-1 and GSTR-3B", "Reconciliation with 2B"] },
      { t: "Payroll & Statutory", s: ["Employee masters", "Salary structures", "PF, ESI and TDS basics"] },
      { t: "Reports & Finalisation", s: ["P&L and balance sheet", "Ratio analysis", "Year-end closing"], d: "A completed set of finalised books for a simulated trading firm, ready for audit." },
    ],
    tools: ["TallyPrime", "MS Excel", "GST Portal", "Google Sheets", "PDF tools", "Email", "Windows", "Zoho Books (overview)"],
    roles: ["Accounts Assistant", "Tally Operator", "GST Executive", "Billing Executive", "Store & Inventory Clerk"],
    projects: [
      { title: "Trading Firm Book Set", body: "Twelve months of entries for a simulated Amritsar wholesaler, closed and finalised." },
      { title: "GST Return Cycle", body: "A full quarter of GSTR-1 and 3B preparation, including a reconciliation exercise." },
      { title: "Payroll Run", body: "A monthly payroll with statutory deductions, payslips and the accounting entries behind them." },
    ],
  },
  {
    slug: "computer-basics-excel",
    title: "Computer Basics & MS Excel",
    category: "Business & Office",
    stream: "six-month",
    duration: "3 months",
    level: "Absolute beginner to confident",
    eligibility: ANY_STREAM,
    fee: "₹6,000 – ₹12,000",
    tagline:
      "The floor everything else stands on: file discipline, formulas, pivots and dashboards good enough to hand to a manager.",
    focus:
      "Almost every office role assumes this and almost no school teaches it properly, so three months here removes the single most common reason a first application is rejected.",
    cardBlurb:
      "The floor everything else stands on: file discipline, formulas, pivots and dashboards good enough to hand to a manager.",
    highlights: ["Formulas & pivots", "Dashboards", "Typing speed"],
    topics: [
      { t: "Computer & OS Basics", s: ["Files, folders and naming", "Shortcuts that save hours", "Safe browsing and backups"] },
      { t: "Word Processing", s: ["Styles and templates", "Tables and mail merge", "Print-ready documents"] },
      { t: "Excel Foundations", s: ["Cells, ranges and references", "Formatting for readability", "Sorting and filtering"] },
      { t: "Formulas & Functions", s: ["Absolute vs relative refs", "IF, VLOOKUP and XLOOKUP", "Text and date functions"] },
      { t: "Pivot Tables & Analysis", s: ["Building a pivot", "Grouping and slicers", "Summarising for a manager"] },
      { t: "Charts & Dashboards", s: ["Choosing the right chart", "Conditional formatting", "A one-screen dashboard"], d: "A single-sheet dashboard summarising a real dataset, ready to email." },
      { t: "Presentations & Email", s: ["Slide structure", "Professional email writing", "Calendar and scheduling"] },
    ],
    tools: ["MS Excel", "MS Word", "PowerPoint", "Google Sheets", "Google Docs", "Outlook", "Windows", "Typing tutor"],
    roles: ["Office Assistant", "Data Entry Executive", "MIS Assistant", "Front Office Executive", "Back Office Associate"],
    projects: [
      { title: "Sales MIS Workbook", body: "A monthly reporting workbook with lookups, pivots and a summary sheet a manager can read in a minute." },
      { title: "Attendance & Payroll Sheet", body: "An automated tracker with formulas that flag anomalies instead of needing manual checks." },
      { title: "Business Presentation Pack", body: "A documented, formatted deck and covering letter produced to office standard." },
    ],
  },

  /* -------------------------------------------------------- 1 year tracks */
  {
    slug: "generative-ai",
    title: "Generative AI",
    category: "AI & Data",
    stream: "one-year",
    badge: "Trending",
    featured: true,
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹52,000 – ₹75,000",
    tagline:
      "Prompting, retrieval, agents and evaluation — built into working products instead of stopping at a chat window.",
    focus:
      "Anyone can prompt a model; the employable skill is building something reliable on top of one, which means retrieval, guardrails and evaluation you can defend.",
    cardBlurb:
      "Prompting, retrieval, agents and evaluation — built into working products instead of stopping at a chat window.",
    highlights: ["RAG pipelines", "Agent workflows", "Evaluation harnesses"],
    topics: [
      { t: "Python & Working with APIs", s: ["Core Python refresher", "REST and JSON", "Keys and rate limits"] },
      { t: "How Language Models Work", s: ["Tokens and context", "Sampling and temperature", "Why models hallucinate"] },
      { t: "Prompt Engineering", s: ["Instruction structure", "Few-shot patterns", "Prompt versioning"] },
      { t: "Embeddings & Vector Search", s: ["Chunking strategies", "Similarity search", "Index maintenance"] },
      { t: "Retrieval-Augmented Generation", s: ["Grounding answers", "Citation handling", "Failure modes"] },
      { t: "Agents & Tool Use", s: ["Tool definitions", "Multi-step planning", "Stopping conditions"] },
      { t: "Evaluation & Guardrails", s: ["Building an eval set", "Regression testing prompts", "Safety filtering"], d: "An evaluation harness that scores your assistant against a fixed question set on every change." },
      { t: "Deployment & Cost Control", s: ["Serving an app", "Caching and batching", "Watching the token bill"] },
      { t: "Internship Capstone", s: ["Client requirement", "Build and iterate", "Handover documentation"] },
    ],
    tools: ["Python 3", "Claude API", "LangChain", "Chroma", "FastAPI", "Streamlit", "Hugging Face", "Git", "Docker", "Postman"],
    roles: ["Generative AI Associate", "AI Application Developer", "Prompt Engineer", "AI Automation Executive", "Junior ML Engineer"],
    projects: [
      { title: "Document Q&A Assistant", body: "A RAG application over a real document set, with citations and a measured accuracy baseline." },
      { title: "Support Triage Agent", body: "A tool-using agent that classifies incoming queries and drafts replies for human approval." },
      { title: "Evaluation Harness", body: "A scored test suite that catches quality regressions before they reach a user." },
    ],
  },
  {
    slug: "cloud-computing-devops",
    title: "Cloud Computing & DevOps",
    category: "Cyber & Cloud",
    stream: "one-year",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹48,000 – ₹72,000",
    tagline:
      "Provision it, containerise it, automate the deploy — then keep it alive when something fails at 2am.",
    focus:
      "Cloud work is judged on what happens under failure, so the course puts you on call for your own environments long before the certificate is in sight.",
    cardBlurb:
      "Provision it, containerise it, automate the deploy, then keep it alive when something fails at 2am.",
    highlights: ["Linux & networking", "Docker & CI/CD", "Monitoring"],
    topics: [
      { t: "Linux & Shell", s: ["File system and permissions", "Process management", "Shell scripting"] },
      { t: "Networking for Cloud", s: ["IP, DNS and routing", "Load balancing", "TLS certificates"] },
      { t: "Cloud Fundamentals", s: ["Compute, storage, network", "Regions and availability", "Billing and quotas"] },
      { t: "Containers with Docker", s: ["Images and layers", "Compose files", "Registry workflow"] },
      { t: "Orchestration Basics", s: ["Pods and services", "Deployments and scaling", "Config and secrets"] },
      { t: "Infrastructure as Code", s: ["Declarative provisioning", "State and drift", "Reusable modules"] },
      { t: "CI/CD Pipelines", s: ["Build, test, deploy stages", "Environment promotion", "Rollback strategy"] },
      { t: "Monitoring & Incidents", s: ["Metrics, logs, traces", "Alert design", "Runbooks"], d: "A monitored service with alerts and a runbook another student can follow at 2am." },
      { t: "Internship Capstone", s: ["Environment build", "Automated delivery", "Handover documentation"] },
    ],
    tools: ["Ubuntu Linux", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Prometheus", "Grafana", "Bash"],
    roles: ["Cloud Support Associate", "DevOps Trainee", "Site Reliability Trainee", "Linux Administrator", "Build & Release Assistant"],
    projects: [
      { title: "Containerised Web Platform", body: "A multi-service application built, containerised and deployed behind a load balancer." },
      { title: "Automated Delivery Pipeline", body: "A CI/CD pipeline that tests, builds and ships to staging and production with a rollback path." },
      { title: "Observability Stack", body: "Metrics, dashboards and alerting for a running service, with a written incident runbook." },
    ],
  },
  {
    slug: "ai-data-science",
    title: "AI & Data Science",
    category: "AI & Data",
    stream: "one-year",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹50,000 – ₹74,000",
    tagline:
      "Statistics, wrangling, modelling and visual storytelling — the full path from a messy CSV to a decision someone acts on.",
    focus:
      "Data science is a communication job with maths attached: the model matters, but the person who can explain it to a room is the one who gets hired.",
    cardBlurb:
      "Statistics, wrangling, modelling and visual storytelling — the full path from a messy CSV to a decision someone acts on.",
    highlights: ["Pandas & SQL", "Statistical modelling", "Power BI"],
    topics: [
      { t: "Python for Analysis", s: ["pandas and NumPy", "Notebook discipline", "Reproducible workflows"] },
      { t: "SQL & Data Sources", s: ["Joins and aggregations", "Window functions", "Query performance"] },
      { t: "Statistics & Probability", s: ["Descriptive statistics", "Hypothesis testing", "Confidence intervals"] },
      { t: "Cleaning & Feature Work", s: ["Missing and dirty data", "Outlier handling", "Feature engineering"] },
      { t: "Machine Learning Models", s: ["Regression and classification", "Tree-based models", "Model selection"] },
      { t: "Visual Storytelling", s: ["Chart choice", "Dashboard layout", "Narrative structure"] },
      { t: "Business Intelligence Tools", s: ["Power BI data model", "DAX basics", "Scheduled refresh"] },
      { t: "Communicating Results", s: ["Executive summaries", "Handling pushback", "Documenting assumptions"], d: "A decision memo written from your own analysis, defensible under questioning." },
      { t: "Internship Capstone", s: ["Real client dataset", "End-to-end analysis", "Presented recommendation"] },
    ],
    tools: ["Python 3", "pandas", "scikit-learn", "SQL", "MySQL", "Power BI", "Tableau", "Excel", "Jupyter", "Git"],
    roles: ["Data Analyst", "Business Analyst (Trainee)", "MIS Executive", "Reporting Analyst", "Junior Data Scientist"],
    projects: [
      { title: "Retail Sales Analysis", body: "A full analysis of a year of transactions ending in three recommendations with numbers behind them." },
      { title: "Power BI Executive Dashboard", body: "A refreshable model and report built for a non-technical audience." },
      { title: "Predictive Capstone", body: "A model trained, evaluated and presented with its limitations stated plainly." },
    ],
  },
  {
    slug: "machine-learning-deep-learning",
    title: "Machine Learning & Deep Learning",
    category: "AI & Data",
    stream: "one-year",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹52,000 – ₹75,000",
    tagline:
      "Classical ML first, neural networks second, with vision and language projects trained on hardware you have access to.",
    focus:
      "Deep learning is taught after classical models on purpose — knowing when a simpler model wins is the judgement that separates a practitioner from a tutorial follower.",
    cardBlurb:
      "Classical ML first, neural networks second, with vision and language projects trained on hardware you have access to.",
    highlights: ["Neural networks", "Vision & NLP", "Model deployment"],
    topics: [
      { t: "Maths You Will Actually Use", s: ["Vectors and matrices", "Gradients in plain terms", "Probability basics"] },
      { t: "Classical Machine Learning", s: ["Linear and tree models", "Ensembles", "Baseline discipline"] },
      { t: "Neural Network Foundations", s: ["Layers and activations", "Backpropagation", "Optimisers and schedules"] },
      { t: "Training in Practice", s: ["Batching and epochs", "Regularisation", "Reading a loss curve"] },
      { t: "Computer Vision", s: ["Convolutions", "Transfer learning", "Augmentation"] },
      { t: "Sequences & Language", s: ["Embeddings", "Attention intuition", "Fine-tuning a small model"] },
      { t: "Model Deployment", s: ["Serialising a model", "Serving an API", "Latency and cost"] },
      { t: "Responsible ML", s: ["Bias in training data", "Explainability", "Documenting limitations"], d: "A model card covering intended use, measured performance and known failure cases." },
      { t: "Internship Capstone", s: ["Dataset selection", "Training and iteration", "Deployed demo"] },
    ],
    tools: ["Python 3", "PyTorch", "TensorFlow", "scikit-learn", "Google Colab", "Hugging Face", "OpenCV", "FastAPI", "Git", "Docker"],
    roles: ["Junior ML Engineer", "Deep Learning Associate", "Computer Vision Trainee", "AI Research Assistant", "Data Scientist (Entry)"],
    projects: [
      { title: "Image Classifier with Transfer Learning", body: "A vision model fine-tuned on a small custom dataset, with augmentation and error analysis." },
      { title: "Text Classification Service", body: "A language model fine-tuned and served behind an API with measured latency." },
      { title: "Deployed Capstone Demo", body: "A trained model wrapped in an interface someone outside the class can use unaided." },
    ],
  },
  {
    slug: "cybersecurity-ethical-hacking",
    title: "Cybersecurity & Ethical Hacking",
    category: "Cyber & Cloud",
    stream: "one-year",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹48,000 – ₹72,000",
    tagline:
      "Offensive technique taught alongside the defensive job it exists to serve — inside an isolated lab, under written authorisation.",
    focus:
      "Every offensive technique in this course is taught with the fix beside it, and every exercise runs in an isolated lab against targets we own, because that is the only way this work is legal or employable.",
    cardBlurb:
      "Offensive technique taught alongside the defensive job it exists to serve, inside an isolated lab with written authorisation.",
    highlights: ["Recon & scanning", "Web app testing", "Report writing"],
    topics: [
      { t: "Networking & Linux Base", s: ["TCP/IP in depth", "Shell fluency", "Service configuration"] },
      { t: "Law, Scope & Authorisation", s: ["Rules of engagement", "Written scope documents", "Reporting obligations"] },
      { t: "Reconnaissance", s: ["Passive information gathering", "Service enumeration", "Attack surface mapping"] },
      { t: "Vulnerability Assessment", s: ["Scanning and validation", "Ranking by real risk", "Avoiding false positives"] },
      { t: "Web Application Testing", s: ["Injection classes", "Broken access control", "Session handling"] },
      { t: "Network & System Testing", s: ["Service misconfiguration", "Privilege escalation paths", "Lateral movement concepts"] },
      { t: "Defensive Counterparts", s: ["Patch and config fixes", "Detection rules", "Verifying the fix"] },
      { t: "Reporting & Communication", s: ["Executive summary", "Technical detail", "Remediation priority"], d: "A full assessment report of the standard a client would receive and act on." },
      { t: "Internship Capstone", s: ["Scoped lab engagement", "Testing and evidence", "Debrief presentation"] },
    ],
    tools: ["Kali Linux", "Nmap", "Burp Suite", "Metasploit", "Wireshark", "OWASP ZAP", "Nessus", "John the Ripper", "VirtualBox", "Git"],
    roles: ["Security Analyst (Trainee)", "VAPT Associate", "SOC Analyst", "Application Security Trainee", "IT Security Executive"],
    projects: [
      { title: "Authorised Lab Assessment", body: "A scoped engagement against lab targets, from recon to a written remediation report." },
      { title: "Web Application Audit", body: "A deliberately vulnerable application tested, documented and then fixed by you." },
      { title: "Detection Rule Set", body: "Alerting built to catch the exact techniques you used earlier in the course." },
    ],
  },
  /* ------------------------------------------------------- graphics tracks */
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    category: "Graphics & Media",
    stream: "graphics",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹22,000 – ₹36,000",
    tagline:
      "Type, layout, colour and print production, taught against real briefs with a critique session every week.",
    focus:
      "Design is a craft judged on output, so the course runs on briefs and critique from week two — software training alone produces operators, not designers.",
    cardBlurb:
      "Type, layout, colour and print production, taught against real briefs with a critique session every week.",
    highlights: ["Photoshop & Illustrator", "Print production", "Brand kits"],
    topics: [
      { t: "Design Principles", s: ["Hierarchy and balance", "Grids and alignment", "Whitespace as a tool"] },
      { t: "Typography", s: ["Type anatomy and pairing", "Spacing and rhythm", "Setting long copy"] },
      { t: "Colour & Composition", s: ["Colour systems", "Contrast and accessibility", "Building a palette"] },
      { t: "Photoshop for Designers", s: ["Non-destructive editing", "Masking and retouching", "Export discipline"] },
      { t: "Vector Work in Illustrator", s: ["Paths and shapes", "Logo construction", "Scalable assets"] },
      { t: "Layout & Print Production", s: ["Bleed, trim and safe area", "CMYK vs RGB", "Press-ready PDFs"], d: "A press-ready file pack that a local printer accepts without a single query." },
      { t: "Brand Identity Systems", s: ["Logo suites", "Usage rules", "Applying a system consistently"] },
      { t: "Portfolio & Client Work", s: ["Case study writing", "Presenting to a client", "Handling revisions"] },
    ],
    tools: ["Photoshop", "Illustrator", "InDesign", "Figma", "Canva", "CorelDRAW", "Adobe Bridge", "Pantone guides", "Google Fonts", "Behance"],
    roles: ["Graphic Designer", "Junior Visual Designer", "DTP Operator", "Brand Design Assistant", "Freelance Designer"],
    projects: [
      { title: "Full Brand Identity", body: "Logo, palette, type system and usage guide for a real Amritsar business, presented to the owner." },
      { title: "Print Campaign Set", body: "Poster, flyer and hoarding artwork produced to press specification and proofed." },
      { title: "Social Design System", body: "A reusable template kit that keeps a brand consistent across a month of posts." },
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    category: "Graphics & Media",
    stream: "graphics",
    duration: "4 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹18,000 – ₹30,000",
    tagline:
      "Cut, grade, mix and deliver — long form for YouTube and vertical edits for the feeds that actually pay in Punjab.",
    focus:
      "Editing is pacing and sound before it is effects, which is why the first month is spent on rhythm and audio rather than transitions.",
    cardBlurb:
      "Cut, grade, mix and deliver — long form for YouTube and vertical edits for the feeds that actually pay in Punjab.",
    highlights: ["Premiere Pro", "Colour & audio", "Short-form delivery"],
    topics: [
      { t: "Footage & Project Setup", s: ["Ingest and naming", "Sequence settings", "Proxy workflow"] },
      { t: "The Craft of the Cut", s: ["Pacing and rhythm", "Cutting on action", "Building a story from rushes"] },
      { t: "Audio That Carries a Video", s: ["Dialogue cleanup", "Music and ducking", "Loudness for platforms"] },
      { t: "Colour Correction & Grading", s: ["Scopes and exposure", "Matching shots", "Building a look"] },
      { t: "Motion Graphics Basics", s: ["Titles and lower thirds", "Keyframes and easing", "Simple animated logos"] },
      { t: "Short-Form Editing", s: ["Vertical framing", "Hook in three seconds", "Captions and subtitles"], d: "A set of three vertical edits cut from one long-form piece, each with burnt-in captions." },
      { t: "Delivery & Client Handover", s: ["Export presets", "Versioning and feedback rounds", "Archiving a project"] },
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Audition", "Media Encoder", "CapCut", "Frame.io", "YouTube Studio"],
    roles: ["Video Editor", "Social Media Editor", "Post-Production Assistant", "Motion Graphics Trainee", "Freelance Editor"],
    projects: [
      { title: "Brand Story Film", body: "A two-minute film cut from provided rushes, graded, mixed and delivered to spec." },
      { title: "Short-Form Content Batch", body: "Ten vertical edits from one shoot, captioned and formatted for three platforms." },
      { title: "Event Highlights Reel", body: "A paced highlights edit with music sync, colour matching and a clean audio bed." },
    ],
  },
  {
    slug: "animation",
    title: "2D / 3D Animation",
    category: "Graphics & Media",
    stream: "graphics",
    duration: "1 year",
    level: "Beginner to advanced",
    eligibility: ANY_STREAM,
    fee: "₹45,000 – ₹70,000",
    tagline:
      "Timing and weight first, software second. You finish with a reel, not a folder of half-rendered scenes.",
    focus:
      "Studios hire off a reel, and a reel is judged on movement rather than render quality — so the fundamentals of timing and weight come before any software feature.",
    cardBlurb:
      "Timing and weight first, software second. You finish with a reel, not a folder of half-rendered scenes.",
    highlights: ["After Effects", "Blender basics", "Showreel"],
    topics: [
      { t: "Principles of Animation", s: ["Timing and spacing", "Anticipation and follow-through", "Weight and arcs"] },
      { t: "Drawing & Storyboarding", s: ["Thumbnails", "Shot planning", "Animatics"] },
      { t: "2D Motion Graphics", s: ["Keyframes and graph editor", "Shape layers", "Kinetic typography"] },
      { t: "Character Rigging in 2D", s: ["Puppet tools", "Parenting and hierarchy", "Walk cycles"] },
      { t: "3D Modelling Basics", s: ["Polygon modelling", "UVs and materials", "Scene organisation"] },
      { t: "Lighting & Rendering", s: ["Three-point lighting", "Render settings", "Render passes"] },
      { t: "3D Animation & Camera", s: ["Keyframing in 3D", "Camera moves", "Physics and simulation basics"] },
      { t: "Sound, Edit & Reel", s: ["Sound design", "Editing a sequence", "Reel structure and order"], d: "A 60-second showreel ordered so the strongest six seconds play first." },
      { t: "Internship Capstone", s: ["Client brief", "Production schedule", "Final delivery"] },
    ],
    tools: ["After Effects", "Blender", "Adobe Animate", "Premiere Pro", "Photoshop", "Audition", "Krita", "Mixamo", "DaVinci Resolve"],
    roles: ["2D Animator", "Motion Graphics Designer", "3D Generalist (Junior)", "Explainer Video Artist", "Freelance Animator"],
    projects: [
      { title: "Animated Explainer", body: "A 60-second explainer from script and storyboard through to sound-designed final cut." },
      { title: "3D Product Turntable", body: "A modelled, textured and lit product render sequence built to client-approval standard." },
      { title: "Personal Showreel", body: "A cut reel of your best work, ordered and paced the way studios expect to receive it." },
    ],
  },
  {
    slug: "ui-ux-figma",
    title: "UI/UX Design with Figma",
    category: "Graphics & Media",
    stream: "graphics",
    badge: "Trending",
    featured: true,
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹26,000 – ₹42,000",
    tagline:
      "Research, flows, components and handoff — design a developer can build without asking you twenty questions.",
    focus:
      "UI/UX is judged on decisions, not screens: the portfolio that gets hired shows why a layout changed after testing, not just how it looks.",
    cardBlurb:
      "Research, flows, components and handoff — design that a developer can build without asking you twenty questions.",
    highlights: ["Figma systems", "Prototyping", "Usability tests"],
    topics: [
      { t: "UX Foundations", s: ["User needs and goals", "Problem framing", "Competitive teardown"] },
      { t: "Research & Interviews", s: ["Writing good questions", "Synthesis into insights", "Personas that are useful"] },
      { t: "Information Architecture", s: ["Card sorting", "Navigation structure", "User flows"] },
      { t: "Wireframing", s: ["Low-fidelity speed", "Layout options", "Reviewing before polishing"] },
      { t: "Visual UI Design", s: ["Spacing and type scales", "Colour and contrast", "States and empty screens"] },
      { t: "Design Systems in Figma", s: ["Components and variants", "Auto layout", "Tokens and libraries"] },
      { t: "Prototyping & Testing", s: ["Interactive prototypes", "Moderated usability tests", "Iterating on findings"], d: "A tested prototype with a written list of what changed after real users touched it." },
      { t: "Developer Handoff", s: ["Specs and redlines", "Naming that survives", "Working with a developer"] },
    ],
    tools: ["Figma", "FigJam", "Maze", "Notion", "Photoshop", "Illustrator", "Google Forms", "Loom", "Zeplin", "Framer"],
    roles: ["UI/UX Designer", "Product Design Trainee", "Interaction Designer", "Design System Assistant", "Freelance Product Designer"],
    projects: [
      { title: "App Redesign Case Study", body: "An existing app redesigned from research through to tested prototype, written up as a case study." },
      { title: "Design System Library", body: "A component library with variants, tokens and documentation another designer can pick up." },
      { title: "End-to-End Product Flow", body: "A complete signup-to-checkout flow, usability tested and revised twice." },
    ],
  },

  /* ------------------------------------------------ civil / mechanical CAD */
  {
    slug: "autocad",
    title: "AutoCAD",
    category: "Design & Drafting",
    stream: "civil-mechanical",
    duration: "3 months",
    level: "Beginner to job-ready",
    eligibility: PCM_PREFERRED,
    fee: "₹9,000 – ₹16,000",
    tagline:
      "2D drafting to drawing-office standard: layers, blocks, dimensioning and plot sets that print correctly the first time.",
    focus:
      "A drawing is a legal document on a site, so the course is as strict about layer discipline and title blocks as it is about the geometry itself.",
    cardBlurb:
      "2D drafting to drawing-office standard: layers, blocks, dimensioning and plot sets that print correctly the first time.",
    highlights: ["2D drafting", "Layouts & plotting", "Site drawings"],
    topics: [
      { t: "Interface & Drawing Setup", s: ["Units and limits", "Templates", "Command line fluency"] },
      { t: "Drawing & Editing Tools", s: ["Precision drawing", "Trim, offset, array", "Object snaps"] },
      { t: "Layers & Standards", s: ["Layer naming conventions", "Line types and weights", "Drawing standards"] },
      { t: "Blocks & Attributes", s: ["Reusable blocks", "Dynamic blocks", "Attribute extraction"] },
      { t: "Dimensioning & Annotation", s: ["Dimension styles", "Text and leaders", "Annotative scaling"] },
      { t: "Layouts, Viewports & Plotting", s: ["Paper space", "Viewport scales", "Plot styles and PDF sets"], d: "A plotted drawing set at correct scale with a completed title block, ready to issue." },
      { t: "Working Drawings", s: ["Plans, sections, elevations", "Cross-referencing", "Revision control"] },
    ],
    tools: ["AutoCAD", "AutoCAD LT", "DWG TrueView", "MS Excel", "PDF plotting", "Windows", "Layer standards", "Plotter"],
    roles: ["CAD Draughtsman", "Junior Draughtsman", "Site Documentation Assistant", "Design Office Trainee", "Freelance Drafter"],
    projects: [
      { title: "Residential Floor Plan Set", body: "Plans, sections and elevations for a two-storey house, fully dimensioned and plotted to scale." },
      { title: "Mechanical Part Drawing", body: "An orthographic detail drawing with tolerances and a complete title block." },
      { title: "Site Layout Drawing", body: "A plot layout with levels, services and a revision history maintained across the course." },
    ],
  },
  {
    slug: "solidworks",
    title: "SolidWorks",
    category: "Design & Drafting",
    stream: "civil-mechanical",
    duration: "4 months",
    level: "Beginner to job-ready",
    eligibility: PCM_PREFERRED,
    fee: "₹16,000 – ₹28,000",
    tagline:
      "Parametric part and assembly modelling for mechanical work, finishing with a fully detailed assembly drawing set.",
    focus:
      "Parametric modelling is design intent made explicit — a model built badly works once and breaks the moment a dimension changes, so the course teaches sketch discipline first.",
    cardBlurb:
      "Parametric part and assembly modelling for mechanical work, finishing with a fully detailed assembly drawing set.",
    highlights: ["Part modelling", "Assemblies", "Drawing sheets"],
    topics: [
      { t: "Sketching & Constraints", s: ["Fully defined sketches", "Relations and dimensions", "Design intent"] },
      { t: "Part Modelling", s: ["Extrude, revolve, sweep", "Fillets and drafts", "Feature order"] },
      { t: "Advanced Features", s: ["Patterns and mirrors", "Configurations", "Equations and design tables"] },
      { t: "Assemblies", s: ["Mates and degrees of freedom", "Sub-assemblies", "Interference detection"] },
      { t: "Sheet Metal & Weldments", s: ["Flanges and bends", "Flat patterns", "Structural members"] },
      { t: "Engineering Drawings", s: ["Views and sections", "GD&T basics", "Bill of materials"], d: "A complete assembly drawing set with exploded view, BOM and balloons." },
      { t: "Rendering & Presentation", s: ["Appearances", "Exploded views", "Presentation renders"] },
    ],
    tools: ["SolidWorks", "SolidWorks Drawings", "eDrawings", "AutoCAD", "MS Excel", "3D printing (overview)", "Windows", "PDF"],
    roles: ["Mechanical Design Trainee", "Product Design Assistant", "CAD Engineer (Junior)", "Tool Room Draughtsman", "R&D Assistant"],
    projects: [
      { title: "Parametric Component", body: "A part driven by a design table so a size change regenerates the whole model cleanly." },
      { title: "Multi-Part Assembly", body: "A working assembly with mates, motion check and interference detection." },
      { title: "Production Drawing Pack", body: "A drawing set with sections, tolerances and a bill of materials a workshop could quote from." },
    ],
  },
  {
    slug: "3ds-max",
    title: "3ds Max",
    category: "Design & Drafting",
    stream: "civil-mechanical",
    duration: "6 months",
    level: "Beginner to job-ready",
    eligibility: ANY_STREAM,
    fee: "₹24,000 – ₹38,000",
    tagline:
      "Architectural visualisation — model, light, texture and render interiors and exteriors clients approve from.",
    focus:
      "Visualisation sells a design before it is built, so the course is judged on whether a render reads as believable to a client, not on how many features you touched.",
    cardBlurb:
      "Architectural visualisation — model, light, texture and render interiors and exteriors clients approve from.",
    highlights: ["Modelling", "Lighting & materials", "Render output"],
    topics: [
      { t: "Interface & Scene Setup", s: ["Units and scale", "Scene organisation", "Importing CAD plans"] },
      { t: "Architectural Modelling", s: ["Walls, floors, openings", "Modifiers", "Modelling from a plan"] },
      { t: "Materials & Texturing", s: ["Material editor", "UVW mapping", "Realistic surfaces"] },
      { t: "Lighting", s: ["Daylight systems", "Interior lighting", "Mood and exposure"] },
      { t: "Cameras & Composition", s: ["Framing an interior", "Lens and perspective", "Two-point verticals"] },
      { t: "Rendering & Post", s: ["Render settings", "Render elements", "Photoshop post-production"], d: "A finished interior render, post-processed and presented at client resolution." },
      { t: "Walkthrough Animation", s: ["Camera paths", "Timing a walkthrough", "Batch rendering"] },
    ],
    tools: ["3ds Max", "V-Ray", "Corona", "AutoCAD", "Photoshop", "SketchUp", "Premiere Pro", "Substance (overview)"],
    roles: ["3D Visualiser", "Architectural Rendering Artist", "Interior Visualisation Trainee", "Walkthrough Artist", "Freelance 3D Artist"],
    projects: [
      { title: "Interior Visualisation", body: "A living room modelled, furnished, lit and rendered from a supplied floor plan." },
      { title: "Exterior Elevation Render", body: "A daylight exterior with landscaping and believable materials, post-processed for presentation." },
      { title: "Walkthrough Animation", body: "A 30-second camera walkthrough rendered, cut and delivered with sound." },
    ],
  },
  {
    slug: "revit",
    title: "Revit",
    category: "Design & Drafting",
    stream: "civil-mechanical",
    duration: "4 months",
    level: "Beginner to job-ready",
    eligibility: PCM_PREFERRED,
    fee: "₹16,000 – ₹28,000",
    tagline:
      "BIM workflow end to end, from the structural model to schedules and coordinated construction documentation.",
    focus:
      "BIM replaces drawing with modelling: change the model and every plan, section and schedule updates — which is why offices that adopt it stop hiring pure drafters.",
    cardBlurb:
      "BIM workflow end to end, from the structural model to schedules and coordinated construction documentation.",
    highlights: ["BIM modelling", "Families", "Documentation"],
    topics: [
      { t: "BIM Concepts & Setup", s: ["Model vs drawing", "Project templates", "Levels and grids"] },
      { t: "Architectural Modelling", s: ["Walls, floors, roofs", "Doors and windows", "Stairs and railings"] },
      { t: "Structural Elements", s: ["Columns and beams", "Foundations", "Structural coordination"] },
      { t: "Families & Parameters", s: ["Loadable families", "Type vs instance", "Shared parameters"] },
      { t: "Schedules & Quantities", s: ["Schedule creation", "Material takeoff", "Keeping schedules honest"] },
      { t: "Documentation Set", s: ["Sheets and title blocks", "Views and annotation", "Printing a full set"], d: "A coordinated construction documentation set issued from a single model." },
      { t: "Coordination & Collaboration", s: ["Linked models", "Clash awareness", "Worksharing basics"] },
    ],
    tools: ["Revit", "AutoCAD", "Navisworks", "BIM 360", "MS Excel", "Enscape (overview)", "PDF", "Windows"],
    roles: ["BIM Modeller", "Revit Draughtsman", "Architectural Assistant", "BIM Coordinator (Trainee)", "Documentation Assistant"],
    projects: [
      { title: "Residential BIM Model", body: "A two-storey house modelled with architectural and structural elements coordinated in one file." },
      { title: "Custom Family Set", body: "Parametric families built to project standards and tested at several sizes." },
      { title: "Construction Document Set", body: "Plans, sections, elevations and schedules issued as a coordinated sheet set." },
    ],
  },
];
