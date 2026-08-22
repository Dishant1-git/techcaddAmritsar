/**
 * Seed data for every slug under /courses/[slug].
 *
 * Each entry is deliberately compact: it carries only what is *specific* to the
 * course. Everything shared across courses — eligibility personas, FAQ shell,
 * hero stat rail, module blurbs — is composed in `courses.ts` from these seeds,
 * so adding a course means adding one object here and nothing else.
 *
 * Copy is placeholder marketing content for the Amritsar site. Swap the strings;
 * no component needs touching.
 */

/**
 * The four catalogue categories, plus three that exist only in the after-12th
 * registry (`after-12th-data.ts`), which reuses this seed shape. Keeping them
 * in one union means both registries build through the same `Course` model;
 * `courses.ts` decides which of them the /courses index renders.
 */
export type CourseCategory =
  | "Programming"
  | "AI & Data"
  | "Digital Marketing"
  | "Cyber & Cloud"
  | "Graphics & Media"
  | "Design & Drafting"
  | "Business & Office";

/** One curriculum unit: a title plus the concrete skills it leaves behind. */
export type Topic = {
  t: string;
  s: string[];
  /** Optional bespoke deliverable; generated from `s` when omitted. */
  d?: string;
};

export type CourseSeed = {
  slug: string;
  title: string;
  category: CourseCategory;
  /** One line under the hero headline. */
  tagline: string;
  /** Sentence that opens the overview — what the course is really about. */
  focus: string;
  duration: string;
  level: string;
  topics: Topic[];
  tools: string[];
  roles: string[];
  projects: Array<{ title: string; body: string }>;
  badge?: "Hot" | "Trending" | "New";
  /** Surfaced on the /courses index as a large card. */
  featured?: boolean;
};

export const courseSeeds: CourseSeed[] = [
  /* ------------------------------------------------------------ programming */
  {
    slug: "python",
    title: "Python Programming",
    category: "Programming",
    tagline:
      "The language that opens automation, analytics, backend engineering and AI — learned by writing code from week one.",
    focus:
      "Python is the shortest route from beginner to building things that actually run, which is why every AI, data and automation track at TechCadd starts here.",
    duration: "3 – 6 months",
    level: "Beginner to advanced",
    featured: true,
    topics: [
      { t: "Python Foundations & Syntax", s: ["Variables, types and operators", "Control flow and loops", "Reading the error trace"] },
      { t: "Data Structures in Practice", s: ["Lists, tuples, sets, dicts", "Comprehensions", "Choosing the right structure"] },
      { t: "Functions & Modular Design", s: ["Arguments and scope", "Pure functions", "Building your own modules"] },
      { t: "Object-Oriented Python", s: ["Classes and instances", "Inheritance and composition", "Dunder methods"] },
      { t: "Files, APIs & Automation", s: ["File and CSV handling", "requests and REST APIs", "Scheduled scripts"] },
      { t: "Databases with Python", s: ["SQL fundamentals", "SQLite and MySQL drivers", "ORM basics"] },
      { t: "Testing, Debugging & Git", s: ["pytest basics", "Breakpoint debugging", "Branching workflow"] },
      { t: "Capstone Application", s: ["Requirement breakdown", "Feature build", "Deployment and demo"] },
    ],
    tools: ["Python 3", "VS Code", "Jupyter", "pip & venv", "Git", "SQLite", "MySQL", "requests", "pytest", "Flask"],
    roles: ["Python Developer", "Automation Engineer", "Backend Developer", "Data Analyst", "QA Automation Engineer"],
    projects: [
      { title: "Inventory Automation Tool", body: "A command-line tool that reads supplier spreadsheets, reconciles stock and emails a daily exception report." },
      { title: "REST API for a Booking App", body: "A Flask service with authentication, validation and a relational schema behind it." },
      { title: "Web Scraper & Data Pipeline", body: "A scheduled scraper that cleans, de-duplicates and writes structured records into a database." },
    ],
  },
  {
    slug: "java",
    title: "Java Development",
    category: "Programming",
    tagline:
      "Core Java through to Spring Boot services — the stack that still runs banking, enterprise and Android systems.",
    focus:
      "Java rewards engineers who understand memory, types and structure, so the course spends real time on fundamentals before touching frameworks.",
    duration: "4 – 6 months",
    level: "Beginner to advanced",
    topics: [
      { t: "Java Language Core", s: ["JVM, JDK and JRE", "Types and operators", "Control structures"] },
      { t: "Object-Oriented Programming", s: ["Encapsulation and abstraction", "Interfaces", "Polymorphism in practice"] },
      { t: "Collections & Generics", s: ["List, Set, Map", "Comparators", "Type-safe containers"] },
      { t: "Exceptions & File I/O", s: ["Checked vs unchecked", "try-with-resources", "Streams and readers"] },
      { t: "Multithreading & Concurrency", s: ["Threads and executors", "Synchronisation", "Concurrent collections"] },
      { t: "JDBC & Databases", s: ["Connections and statements", "Prepared queries", "Transactions"] },
      { t: "Spring Boot REST Services", s: ["Controllers and services", "Dependency injection", "JPA repositories"] },
      { t: "Build, Test & Deploy", s: ["Maven lifecycle", "JUnit testing", "Packaging and running"] },
    ],
    tools: ["Java 21", "IntelliJ IDEA", "Maven", "Spring Boot", "Hibernate", "JUnit", "MySQL", "Postman", "Git", "Docker"],
    roles: ["Java Developer", "Backend Engineer", "Spring Boot Developer", "Software Engineer", "API Developer"],
    projects: [
      { title: "Banking Transactions Service", body: "A Spring Boot API handling accounts, transfers and statement generation with transactional integrity." },
      { title: "Library Management System", body: "A layered application with JPA entities, role-based access and reporting screens." },
      { title: "Concurrent Order Processor", body: "A multithreaded worker that drains an order queue safely under load." },
    ],
  },
  {
    slug: "c-cpp",
    title: "C & C++ Programming",
    category: "Programming",
    tagline:
      "Pointers, memory and data structures — the layer beneath every language you will use later.",
    focus:
      "C and C++ are where you stop treating the machine as a black box, which is why they remain the strongest foundation for interviews and systems work.",
    duration: "3 – 4 months",
    level: "Beginner to intermediate",
    topics: [
      { t: "C Fundamentals", s: ["Data types and storage", "Operators and control flow", "Functions and scope"] },
      { t: "Pointers & Memory", s: ["Address arithmetic", "malloc and free", "Common leak patterns"] },
      { t: "Arrays, Strings & Structs", s: ["Multidimensional arrays", "String handling", "Struct design"] },
      { t: "File Handling in C", s: ["Text and binary modes", "Random access", "Error handling"] },
      { t: "C++ and OOP", s: ["Classes and constructors", "Operator overloading", "Inheritance"] },
      { t: "STL & Templates", s: ["Vectors and maps", "Iterators", "Generic functions"] },
      { t: "Data Structures & Algorithms", s: ["Linked lists and trees", "Sorting and searching", "Complexity analysis"] },
      { t: "Project & Interview Prep", s: ["Problem decomposition", "Dry-run debugging", "Whiteboard practice"] },
    ],
    tools: ["GCC", "G++", "VS Code", "GDB", "Make", "CMake", "Valgrind", "Git", "Code::Blocks", "LeetCode"],
    roles: ["Software Developer", "Embedded Engineer", "Systems Programmer", "Game Programmer", "DSA-focused SDE"],
    projects: [
      { title: "Memory-Managed Text Editor", body: "A terminal editor with a custom buffer structure and explicit allocation strategy." },
      { title: "Student Records Engine", body: "A file-backed CRUD system using structs, indexing and binary storage." },
      { title: "Algorithm Visualiser", body: "A C++ console tool that steps through sorting and graph algorithms." },
    ],
  },
  {
    slug: "kotlin",
    title: "Kotlin & Android Development",
    category: "Programming",
    tagline:
      "Build, test and publish native Android apps with Kotlin, Jetpack Compose and a modern architecture.",
    focus:
      "Android has settled on Kotlin and Compose, so the course teaches the current stack rather than the XML-era one most tutorials still cover.",
    duration: "4 – 6 months",
    level: "Beginner to advanced",
    badge: "Trending",
    topics: [
      { t: "Kotlin Language Essentials", s: ["Null safety", "Data classes", "Extension functions"] },
      { t: "Coroutines & Flows", s: ["Suspend functions", "Structured concurrency", "Reactive streams"] },
      { t: "Android App Anatomy", s: ["Activities and lifecycle", "Navigation", "Resource system"] },
      { t: "Jetpack Compose UI", s: ["Composable functions", "State hoisting", "Theming and Material 3"] },
      { t: "Architecture & State", s: ["MVVM pattern", "ViewModel and state", "Dependency injection"] },
      { t: "Data & Persistence", s: ["Room database", "Retrofit API calls", "Offline caching"] },
      { t: "Testing & Performance", s: ["Unit and UI tests", "Profiling", "Crash reporting"] },
      { t: "Release Pipeline", s: ["Signing and build variants", "Play Console listing", "Staged rollout"] },
    ],
    tools: ["Kotlin", "Android Studio", "Jetpack Compose", "Room", "Retrofit", "Hilt", "Coroutines", "Firebase", "Gradle", "Git"],
    roles: ["Android Developer", "Kotlin Developer", "Mobile Engineer", "Cross-platform Developer", "App Product Engineer"],
    projects: [
      { title: "Offline-First Notes App", body: "A Compose app with Room persistence, sync conflict handling and Material theming." },
      { title: "Fitness Tracker", body: "Sensor data collection, background work and a charted weekly summary." },
      { title: "Local Commerce App", body: "A catalogue app with Retrofit-backed search, cart state and checkout flow." },
    ],
  },
  {
    slug: "web-designing",
    title: "Web Designing",
    category: "Programming",
    tagline:
      "HTML, CSS and design fundamentals that make interfaces feel considered rather than assembled.",
    focus:
      "Good web design is layout, hierarchy and restraint before it is decoration — the course treats it as a craft with rules, not a matter of taste.",
    duration: "3 months",
    level: "Beginner",
    topics: [
      { t: "Semantic HTML", s: ["Document structure", "Forms and inputs", "Accessibility basics"] },
      { t: "Modern CSS", s: ["The cascade and specificity", "Custom properties", "Transitions"] },
      { t: "Flexbox & Grid Layout", s: ["Axis-based layout", "Grid areas", "Intrinsic sizing"] },
      { t: "Responsive Design", s: ["Fluid type and space", "Breakpoint strategy", "Mobile-first order"] },
      { t: "Design Fundamentals", s: ["Type scale and rhythm", "Colour systems", "Spacing discipline"] },
      { t: "Figma to Code", s: ["Reading a design file", "Component thinking", "Design tokens"] },
      { t: "Interaction & Motion", s: ["Hover and focus states", "CSS animation", "Reduced-motion support"] },
      { t: "Portfolio Build", s: ["Case study structure", "Performance pass", "Deployment"] },
    ],
    tools: ["HTML5", "CSS3", "Figma", "Tailwind CSS", "Bootstrap", "VS Code", "Git", "Netlify", "Chrome DevTools", "Lighthouse"],
    roles: ["Web Designer", "UI Designer", "Frontend Developer", "Landing Page Specialist", "Design Systems Assistant"],
    projects: [
      { title: "Institute Landing Page", body: "A responsive marketing page built from a Figma file with a documented type and spacing scale." },
      { title: "Component Library", body: "Buttons, cards, navigation and forms built as a reusable, accessible CSS system." },
      { title: "Personal Portfolio", body: "A performance-audited portfolio with three written case studies." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Programming",
    tagline:
      "From your first HTML page to a deployed, database-backed application you can hand to a real user.",
    focus:
      "Web development is a chain — markup, styling, JavaScript, an API, a database, a deploy — and the course walks the whole chain rather than one link of it.",
    duration: "4 – 6 months",
    level: "Beginner to advanced",
    featured: true,
    topics: [
      { t: "HTML, CSS & Layout", s: ["Semantic markup", "Flexbox and Grid", "Responsive patterns"] },
      { t: "JavaScript Foundations", s: ["Types and scope", "Array methods", "The event loop"] },
      { t: "DOM & Browser APIs", s: ["Event handling", "Fetch and JSON", "Storage APIs"] },
      { t: "Modern JavaScript & Tooling", s: ["ES modules", "npm and bundlers", "Linting and formatting"] },
      { t: "Frontend with React", s: ["Components and props", "State and effects", "Client routing"] },
      { t: "Backend with Node & Express", s: ["Routing and middleware", "Auth and sessions", "Validation"] },
      { t: "Databases & Modelling", s: ["Schema design", "Relations and indexes", "Query performance"] },
      { t: "Deploy & Operate", s: ["Environment config", "CI basics", "Monitoring and logs"] },
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "Vercel"],
    roles: ["Web Developer", "Frontend Developer", "Backend Developer", "Full-Stack Developer", "Freelance Web Engineer"],
    projects: [
      { title: "Multi-Vendor Marketplace", body: "Listings, search, cart and an admin dashboard on a shared API." },
      { title: "Course Booking Platform", body: "Authentication, availability logic and email confirmations." },
      { title: "Analytics Dashboard", body: "A charted internal tool reading from a live database with role-based access." },
    ],
  },
  {
    slug: "mern-stack",
    title: "MERN Stack Development",
    category: "Programming",
    tagline:
      "MongoDB, Express, React and Node — one language across the whole product, from schema to screen.",
    focus:
      "The MERN stack is the fastest way for one engineer to own an entire product surface, and that ownership is exactly what employers are hiring for.",
    duration: "6 months",
    level: "Intermediate to advanced",
    badge: "Hot",
    featured: true,
    topics: [
      { t: "JavaScript & ES2024 Deep Dive", s: ["Closures and async", "Modules", "Immutability patterns"] },
      { t: "React Component Architecture", s: ["Composition over inheritance", "Hooks in depth", "Render performance"] },
      { t: "State Management", s: ["Context patterns", "Redux Toolkit", "Server state with React Query"] },
      { t: "Node & Express APIs", s: ["REST design", "Middleware pipelines", "Error contracts"] },
      { t: "MongoDB & Mongoose", s: ["Document modelling", "Aggregation pipeline", "Indexing strategy"] },
      { t: "Authentication & Security", s: ["JWT and refresh tokens", "Role-based access", "OWASP basics"] },
      { t: "Testing & Quality", s: ["Vitest and RTL", "API integration tests", "CI checks"] },
      { t: "Deployment & Scale", s: ["Docker images", "Environment secrets", "Caching and CDN"] },
    ],
    tools: ["MongoDB", "Express", "React", "Node.js", "Mongoose", "Redux Toolkit", "JWT", "Vite", "Docker", "Vercel"],
    roles: ["MERN Stack Developer", "Full-Stack Engineer", "React Developer", "Node.js Developer", "Product Engineer"],
    projects: [
      { title: "SaaS Subscription Product", body: "Multi-tenant accounts, plan limits, billing states and an admin console." },
      { title: "Real-Time Collaboration Tool", body: "WebSocket presence, optimistic updates and conflict resolution." },
      { title: "Food Delivery Platform", body: "Restaurant onboarding, live order tracking and a rider view." },
    ],
  },
  {
    slug: "mean-stack",
    title: "MEAN Stack Development",
    category: "Programming",
    tagline:
      "Angular's structure with a Node and MongoDB backend — the enterprise-flavoured JavaScript stack.",
    focus:
      "Angular's opinionated architecture makes MEAN the stack of choice for large, long-lived internal applications, and the course teaches it that way.",
    duration: "6 months",
    level: "Intermediate to advanced",
    topics: [
      { t: "TypeScript for Angular", s: ["Types and interfaces", "Decorators", "Generics"] },
      { t: "Angular Components & Templates", s: ["Template syntax", "Lifecycle hooks", "Standalone components"] },
      { t: "Services & Dependency Injection", s: ["Providers", "Injection scopes", "Shared state"] },
      { t: "RxJS & Reactive Patterns", s: ["Observables", "Operators", "Subscription hygiene"] },
      { t: "Forms & Validation", s: ["Reactive forms", "Custom validators", "Dynamic form arrays"] },
      { t: "Node & Express Backend", s: ["Layered API design", "Middleware", "Error handling"] },
      { t: "MongoDB Data Layer", s: ["Schemas and refs", "Aggregations", "Pagination"] },
      { t: "Build & Deployment", s: ["Angular build config", "Environment files", "Server deployment"] },
    ],
    tools: ["Angular", "TypeScript", "RxJS", "Node.js", "Express", "MongoDB", "Mongoose", "Jasmine", "Nginx", "Git"],
    roles: ["Angular Developer", "MEAN Stack Developer", "Frontend Engineer", "Enterprise Application Developer", "Full-Stack Developer"],
    projects: [
      { title: "Hospital Management Suite", body: "Role-separated modules for reception, doctors and pharmacy on one API." },
      { title: "CRM Dashboard", body: "Reactive forms, filtered pipelines and exportable reports." },
      { title: "Inventory Control System", body: "Stock movements, audit trail and low-stock alerting." },
    ],
  },
  {
    slug: "php-full-stack",
    title: "PHP Full Stack Development",
    category: "Programming",
    tagline:
      "Core PHP through Laravel — the stack behind a very large share of the working web.",
    focus:
      "PHP quietly runs most of the internet's business websites, and Laravel has made it a genuinely modern framework worth learning properly.",
    duration: "4 – 6 months",
    level: "Beginner to advanced",
    topics: [
      { t: "PHP Language Core", s: ["Syntax and arrays", "Superglobals", "Sessions and cookies"] },
      { t: "OOP in PHP", s: ["Classes and traits", "Namespaces", "Composer autoloading"] },
      { t: "MySQL & Query Design", s: ["Normalisation", "Joins and indexes", "Prepared statements"] },
      { t: "Laravel Fundamentals", s: ["Routing and controllers", "Blade templates", "Middleware"] },
      { t: "Eloquent ORM", s: ["Models and relations", "Migrations and seeders", "Query scopes"] },
      { t: "Auth & Authorisation", s: ["Guards and policies", "Password flows", "Rate limiting"] },
      { t: "APIs & Integrations", s: ["Resource controllers", "Payment gateways", "Queues and jobs"] },
      { t: "Deployment", s: ["Shared hosting vs VPS", "Env configuration", "Backups"] },
    ],
    tools: ["PHP 8", "Laravel", "MySQL", "Composer", "Blade", "Eloquent", "XAMPP", "Postman", "Git", "cPanel"],
    roles: ["PHP Developer", "Laravel Developer", "Backend Developer", "Full-Stack Developer", "WordPress Engineer"],
    projects: [
      { title: "School ERP Portal", body: "Attendance, fees and result modules with role-based dashboards." },
      { title: "Job Board", body: "Employer accounts, application pipelines and email notifications." },
      { title: "E-Commerce Backend", body: "Catalogue, cart, payment gateway integration and order lifecycle." },
    ],
  },
  {
    slug: "it-courses",
    title: "IT Foundation Programme",
    category: "Programming",
    tagline:
      "A structured entry route into IT for students who are still deciding which specialisation fits them.",
    focus:
      "Most people pick a specialisation before they know what the work feels like — this programme lets you sample the main tracks before committing.",
    duration: "3 months",
    level: "Beginner",
    topics: [
      { t: "Computer & Network Basics", s: ["Hardware and OS", "IP and DNS", "Troubleshooting method"] },
      { t: "Office Productivity & Excel", s: ["Formulas and lookups", "Pivot tables", "Charting"] },
      { t: "Programming Logic", s: ["Flowcharts", "Pseudocode", "First scripts in Python"] },
      { t: "Web Basics", s: ["HTML and CSS", "How the browser works", "Publishing a page"] },
      { t: "Databases 101", s: ["Tables and keys", "Basic SQL", "Reading a schema"] },
      { t: "Cloud & Cybersecurity Overview", s: ["Cloud service models", "Password and device hygiene", "Common attack types"] },
      { t: "AI Tools for Everyday Work", s: ["Prompting basics", "Document and data assistance", "Verifying output"] },
      { t: "Career Mapping", s: ["Track comparison", "Skill gap plan", "Resume foundation"] },
    ],
    tools: ["Windows & Linux", "MS Excel", "Google Workspace", "Python", "HTML/CSS", "MySQL", "ChatGPT", "Canva", "Git", "VS Code"],
    roles: ["IT Support Executive", "Junior Analyst", "Operations Associate", "Trainee Developer", "Documentation Assistant"],
    projects: [
      { title: "Departmental Excel Dashboard", body: "A cleaned dataset turned into a filterable summary sheet with charts." },
      { title: "Static Business Website", body: "A three-page responsive site published to a live URL." },
      { title: "Career Track Report", body: "A researched comparison of two IT specialisations with a personal 12-month plan." },
    ],
  },

  /* --------------------------------------------------------------- ai & data */
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "AI & Data",
    tagline:
      "From classical machine learning to neural networks and generative models — the full arc, built with real projects.",
    focus:
      "AI is not one skill but a stack: data handling, modelling, evaluation and deployment, and the course insists you can do all four.",
    duration: "6 – 9 months",
    level: "Beginner to advanced",
    badge: "Hot",
    featured: true,
    topics: [
      { t: "Python for AI", s: ["NumPy arrays", "Pandas transformations", "Vectorised thinking"] },
      { t: "Mathematics That Matters", s: ["Linear algebra intuition", "Probability", "Gradients and optimisation"] },
      { t: "Supervised Learning", s: ["Regression and classification", "Feature engineering", "Cross-validation"] },
      { t: "Unsupervised Learning", s: ["Clustering", "Dimensionality reduction", "Anomaly detection"] },
      { t: "Neural Networks", s: ["Forward and backward pass", "Activations and loss", "Regularisation"] },
      { t: "Computer Vision & NLP", s: ["CNN architectures", "Text preprocessing", "Transfer learning"] },
      { t: "Generative AI & LLMs", s: ["Transformer intuition", "Prompt patterns", "Fine-tuning basics"] },
      { t: "Deployment & MLOps", s: ["Model serving", "Monitoring drift", "Reproducible pipelines"] },
    ],
    tools: ["Python", "NumPy", "Pandas", "scikit-learn", "TensorFlow", "PyTorch", "Hugging Face", "OpenCV", "Streamlit", "Docker"],
    roles: ["AI Engineer", "Machine Learning Engineer", "Data Scientist", "NLP Engineer", "Computer Vision Engineer"],
    projects: [
      { title: "Document Intelligence Engine", body: "An OCR plus NLP pipeline that extracts structured fields from scanned invoices." },
      { title: "Visual Quality Inspector", body: "A CNN trained on a defect dataset, served behind an API with a confidence threshold." },
      { title: "Retrieval-Backed Assistant", body: "An LLM assistant grounded in a private document set with citation output." },
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    category: "AI & Data",
    tagline:
      "Learn the algorithms, then learn what they get wrong — modelling, evaluation and deployment on real, messy data.",
    focus:
      "Most machine learning courses stop at model.fit(); this one spends as much time on data quality, evaluation and deployment, because that is where projects actually fail.",
    duration: "4 – 6 months",
    level: "Beginner to advanced",
    badge: "Hot",
    featured: true,
    topics: [
      {
        t: "Python, Data & Statistics",
        s: ["Pandas operations", "Descriptive statistics", "Hypothesis testing", "Distributions"],
        d: "An exploratory analysis of a messy real dataset with defensible conclusions.",
      },
      {
        t: "Data Preprocessing & Feature Engineering",
        s: ["Missing value strategy", "Encoding and scaling", "Leakage prevention"],
        d: "A reproducible preprocessing pipeline you can re-run on new data.",
      },
      { t: "Supervised Learning Algorithms", s: ["Linear and logistic regression", "Decision trees", "Random forests and boosting"] },
      { t: "Unsupervised Learning", s: ["K-means and hierarchical", "PCA", "Segmentation in practice"] },
      {
        t: "Model Evaluation & Optimisation",
        s: ["Precision, recall and ROC", "Confusion matrix reading", "Hyperparameter search"],
        d: "A model comparison report that justifies one choice over three alternatives.",
      },
      { t: "Neural Networks & Deep Learning", s: ["Feedforward networks", "CNNs for images", "RNNs for sequences"] },
      { t: "Natural Language Processing", s: ["Tokenisation and embeddings", "Sentiment classification", "Topic extraction"] },
      { t: "Deployment & Capstone", s: ["Model serialisation", "API serving", "Monitoring in production"] },
    ],
    tools: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "TensorFlow", "Keras", "Jupyter", "SQL"],
    roles: ["Machine Learning Engineer", "Data Scientist", "ML Analyst", "AI Developer", "Applied Research Associate"],
    projects: [
      { title: "Credit Risk Scorer", body: "A calibrated classifier with explainability output and a documented decision threshold." },
      { title: "Demand Forecasting Model", body: "Time-aware validation, seasonality handling and an error budget by segment." },
      { title: "Customer Churn Pipeline", body: "End-to-end: ingestion, features, model, API and a monitoring dashboard." },
    ],
  },
  {
    slug: "deep-learning",
    title: "Deep Learning",
    category: "AI & Data",
    tagline:
      "Neural architectures built from first principles — CNNs, RNNs and transformers, trained on real datasets.",
    focus:
      "Deep learning becomes intuitive once you have implemented a network by hand, so the course builds up from tensors before reaching for high-level APIs.",
    duration: "4 – 6 months",
    level: "Intermediate to advanced",
    topics: [
      { t: "Tensors & Autograd", s: ["Tensor operations", "Computational graphs", "Automatic differentiation"] },
      { t: "Neural Network Mechanics", s: ["Backpropagation by hand", "Weight initialisation", "Loss landscapes"] },
      { t: "Training Dynamics", s: ["Optimisers", "Learning rate schedules", "Batch normalisation"] },
      { t: "Convolutional Networks", s: ["Filters and pooling", "Classic architectures", "Augmentation"] },
      { t: "Sequence Models", s: ["RNN, LSTM, GRU", "Attention mechanism", "Sequence-to-sequence"] },
      { t: "Transformers", s: ["Self-attention", "Positional encoding", "Pretraining vs fine-tuning"] },
      { t: "Transfer Learning", s: ["Feature extraction", "Layer freezing", "Domain adaptation"] },
      { t: "Serving Deep Models", s: ["Quantisation", "Inference optimisation", "GPU vs CPU tradeoffs"] },
    ],
    tools: ["PyTorch", "TensorFlow", "Keras", "CUDA", "Hugging Face", "Weights & Biases", "OpenCV", "NumPy", "Colab", "Docker"],
    roles: ["Deep Learning Engineer", "Computer Vision Engineer", "NLP Engineer", "AI Research Associate", "ML Platform Engineer"],
    projects: [
      { title: "Medical Image Classifier", body: "A transfer-learned CNN with class imbalance handling and calibration analysis." },
      { title: "Speech Command Recogniser", body: "Spectrogram features feeding a sequence model with live inference." },
      { title: "Fine-Tuned Language Model", body: "A domain-adapted transformer with an evaluation harness and error taxonomy." },
    ],
  },
  {
    slug: "data-science",
    title: "Data Science",
    category: "AI & Data",
    tagline:
      "Statistics, modelling and storytelling — turning raw data into decisions people actually act on.",
    focus:
      "A data scientist's real output is a decision someone trusts, so the course weights communication and rigour as heavily as modelling.",
    duration: "6 – 9 months",
    level: "Beginner to advanced",
    featured: true,
    topics: [
      { t: "Data Wrangling", s: ["Pandas and joins", "Reshaping", "Data quality auditing"] },
      { t: "Statistics & Inference", s: ["Sampling", "Confidence intervals", "A/B test design"] },
      { t: "Exploratory Analysis", s: ["Distribution reading", "Correlation traps", "Segment discovery"] },
      { t: "SQL for Analysis", s: ["Window functions", "CTEs", "Query optimisation"] },
      { t: "Predictive Modelling", s: ["Regression and classification", "Validation strategy", "Feature importance"] },
      { t: "Visualisation & Storytelling", s: ["Chart selection", "Narrative structure", "Executive summaries"] },
      { t: "Big Data Foundations", s: ["Spark basics", "Partitioning", "Pipeline scheduling"] },
      { t: "Capstone & Portfolio", s: ["Problem framing", "Stakeholder review", "Published case study"] },
    ],
    tools: ["Python", "Pandas", "SQL", "scikit-learn", "Power BI", "Tableau", "Apache Spark", "Jupyter", "Excel", "Git"],
    roles: ["Data Scientist", "Data Analyst", "Business Analyst", "Analytics Consultant", "Insights Manager"],
    projects: [
      { title: "Retail Pricing Study", body: "An elasticity analysis with a recommended pricing band and quantified risk." },
      { title: "Marketing Attribution Model", body: "Multi-touch analysis over a channel dataset with a spend reallocation proposal." },
      { title: "Operations Efficiency Report", body: "A statistical study of throughput bottlenecks presented to a mock leadership panel." },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    category: "AI & Data",
    tagline:
      "Excel, SQL, Power BI and Python — the practical analyst toolkit, taught in the order a business actually uses it.",
    focus:
      "Analytics work is 70% getting the data right and 30% presenting it well, and this course is structured in exactly those proportions.",
    duration: "4 – 6 months",
    level: "Beginner to intermediate",
    badge: "Trending",
    topics: [
      { t: "Advanced Excel", s: ["Lookup and dynamic arrays", "Pivot modelling", "Power Query"] },
      { t: "SQL for Analysts", s: ["Joins and aggregation", "Subqueries and CTEs", "Window functions"] },
      { t: "Data Cleaning", s: ["Deduplication", "Type and unit fixes", "Validation rules"] },
      { t: "Descriptive Statistics", s: ["Central tendency", "Variance and outliers", "Trend and seasonality"] },
      { t: "Power BI Modelling", s: ["Star schema", "DAX measures", "Row-level security"] },
      { t: "Dashboard Design", s: ["Layout hierarchy", "Chart choice", "Interaction patterns"] },
      { t: "Python for Analytics", s: ["Pandas workflows", "Automated reporting", "Chart generation"] },
      { t: "Business Case Capstone", s: ["KPI definition", "Insight write-up", "Presentation"] },
    ],
    tools: ["Excel", "SQL", "Power BI", "Tableau", "Python", "Pandas", "Power Query", "DAX", "Google Analytics", "Git"],
    roles: ["Data Analyst", "Business Analyst", "MIS Executive", "Reporting Analyst", "Operations Analyst"],
    projects: [
      { title: "Sales Performance Dashboard", body: "A modelled Power BI report with drill-through by region, product and rep." },
      { title: "Customer Cohort Analysis", body: "Retention curves built in SQL and visualised with a written interpretation." },
      { title: "Automated Weekly Report", body: "A Python script that refreshes, formats and distributes a recurring report." },
    ],
  },
  {
    slug: "power-bi",
    title: "Power BI",
    category: "AI & Data",
    tagline:
      "Data modelling, DAX and dashboard design for reports that survive contact with a real business.",
    focus:
      "Most Power BI problems are modelling problems, so the course spends its first half on relationships and DAX before any visual is placed.",
    duration: "2 – 3 months",
    level: "Beginner to intermediate",
    topics: [
      { t: "Power BI Fundamentals", s: ["Desktop vs Service", "Data connectors", "Refresh model"] },
      { t: "Power Query & ETL", s: ["Transformations", "Merge and append", "Query folding"] },
      { t: "Data Modelling", s: ["Star schema", "Relationship cardinality", "Date tables"] },
      { t: "DAX Fundamentals", s: ["Calculated columns vs measures", "Filter context", "CALCULATE"] },
      { t: "Advanced DAX", s: ["Time intelligence", "Iterators", "Variables and debugging"] },
      { t: "Visual Design", s: ["Chart selection", "Report layout", "Accessibility"] },
      { t: "Interactivity & Security", s: ["Bookmarks and drill-through", "Row-level security", "Tooltips"] },
      { t: "Publish & Govern", s: ["Workspaces", "Scheduled refresh", "Version control"] },
    ],
    tools: ["Power BI Desktop", "Power Query", "DAX", "Power BI Service", "Excel", "SQL Server", "Azure", "SharePoint", "Figma", "Git"],
    roles: ["Power BI Developer", "BI Analyst", "Reporting Specialist", "Data Analyst", "MIS Manager"],
    projects: [
      { title: "Executive KPI Cockpit", body: "A single-page report with tuned DAX measures and sub-second interaction." },
      { title: "Finance Variance Report", body: "Budget-versus-actual analysis with time intelligence and commentary." },
      { title: "Retail Store Comparison", body: "A drill-through model with row-level security by region manager." },
    ],
  },
  {
    slug: "tableau",
    title: "Tableau",
    category: "AI & Data",
    tagline:
      "Visual analytics that make a pattern obvious in three seconds instead of three slides.",
    focus:
      "Tableau rewards people who understand visual perception, so the course pairs tool mechanics with the principles behind good chart design.",
    duration: "2 – 3 months",
    level: "Beginner to intermediate",
    topics: [
      { t: "Tableau Fundamentals", s: ["Data connections", "Dimensions vs measures", "Shelves and marks"] },
      { t: "Data Preparation", s: ["Joins and blends", "Pivoting", "Tableau Prep flows"] },
      { t: "Core Chart Types", s: ["Bar, line, scatter", "Maps", "When not to use pie"] },
      { t: "Calculations", s: ["Row vs aggregate", "Level of detail expressions", "Table calculations"] },
      { t: "Parameters & Interactivity", s: ["Dynamic parameters", "Actions", "Dashboard filters"] },
      { t: "Dashboard Design", s: ["Layout containers", "Device previews", "Performance tuning"] },
      { t: "Storytelling", s: ["Story points", "Annotation", "Narrative order"] },
      { t: "Publishing", s: ["Tableau Public and Server", "Permissions", "Extract scheduling"] },
    ],
    tools: ["Tableau Desktop", "Tableau Prep", "Tableau Public", "SQL", "Excel", "Google Sheets", "Python (TabPy)", "Figma", "Git", "Mapbox"],
    roles: ["Tableau Developer", "Visualisation Analyst", "BI Analyst", "Data Analyst", "Analytics Consultant"],
    projects: [
      { title: "Public Health Explorer", body: "A mapped, filterable dashboard over an open dataset with a written insight brief." },
      { title: "Supply Chain Monitor", body: "LOD-heavy calculations tracking lead time variance across suppliers." },
      { title: "Portfolio Story", body: "A published Tableau Public story with three linked analytical chapters." },
    ],
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    category: "AI & Data",
    tagline:
      "Build with large language models, diffusion models and multimodal systems — properly, not just by prompting.",
    focus:
      "Generative AI has moved from novelty to infrastructure, and the skills that matter now are grounding, evaluation and cost control, not clever prompts.",
    duration: "3 – 6 months",
    level: "Intermediate",
    badge: "Hot",
    featured: true,
    topics: [
      { t: "How Generative Models Work", s: ["Transformer intuition", "Tokens and context", "Sampling parameters"] },
      { t: "Prompt Engineering in Depth", s: ["Structured prompts", "Few-shot patterns", "Failure analysis"] },
      { t: "Embeddings & Vector Search", s: ["Embedding models", "Similarity search", "Chunking strategy"] },
      { t: "Retrieval-Augmented Generation", s: ["Grounding pipelines", "Citation and provenance", "Hallucination control"] },
      { t: "Fine-Tuning & Adaptation", s: ["When to fine-tune", "LoRA basics", "Dataset curation"] },
      { t: "Image & Multimodal Generation", s: ["Diffusion basics", "Control techniques", "Asset pipelines"] },
      { t: "Agents & Tool Use", s: ["Function calling", "Planning loops", "Guardrails"] },
      { t: "Evaluation, Cost & Safety", s: ["Eval harnesses", "Token economics", "Responsible deployment"] },
    ],
    tools: ["OpenAI API", "Hugging Face", "LangChain", "LlamaIndex", "Pinecone", "Chroma", "Stable Diffusion", "Python", "FastAPI", "Streamlit"],
    roles: ["Generative AI Engineer", "LLM Application Developer", "AI Product Engineer", "Prompt Engineer", "AI Solutions Consultant"],
    projects: [
      { title: "Grounded Knowledge Assistant", body: "A RAG assistant over a company handbook with citations and a refusal policy." },
      { title: "Content Production Pipeline", body: "A multi-step generation workflow with human review gates and brand constraints." },
      { title: "Multimodal Product Studio", body: "An image generation tool with controlled composition and an asset library." },
    ],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    category: "AI & Data",
    tagline:
      "Designing, testing and versioning prompts as engineering artefacts rather than lucky guesses.",
    focus:
      "A prompt is a specification, and treating it like one — with tests, versions and failure analysis — is what separates a professional from a power user.",
    duration: "6 weeks – 3 months",
    level: "Beginner to intermediate",
    topics: [
      { t: "Model Behaviour Basics", s: ["Context windows", "Temperature and sampling", "Model differences"] },
      { t: "Prompt Structure", s: ["Role, task, constraints", "Delimiters and formatting", "Output schemas"] },
      { t: "Reasoning Techniques", s: ["Step-by-step prompting", "Decomposition", "Self-checking"] },
      { t: "Few-Shot & Example Design", s: ["Example selection", "Contrastive examples", "Anti-pattern examples"] },
      { t: "Structured Output", s: ["JSON contracts", "Schema validation", "Repair strategies"] },
      { t: "Systematic Testing", s: ["Eval sets", "Regression checks", "Scoring rubrics"] },
      { t: "Prompt Ops", s: ["Versioning", "Cost and latency tuning", "Prompt libraries"] },
      { t: "Domain Playbooks", s: ["Marketing prompts", "Analysis prompts", "Code prompts"] },
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "OpenAI Playground", "LangChain", "Python", "JSON Schema", "Notion", "Git", "Promptfoo"],
    roles: ["Prompt Engineer", "AI Content Strategist", "AI Operations Specialist", "Conversation Designer", "AI Workflow Consultant"],
    projects: [
      { title: "Prompt Library for a Function", body: "A versioned set of prompts for a sales team with an eval sheet behind each one." },
      { title: "Structured Extraction System", body: "A prompt plus schema that reliably pulls fields from unstructured documents." },
      { title: "Evaluation Harness", body: "A scored test suite that catches regressions when the model or prompt changes." },
    ],
  },
  {
    slug: "chatgpt-ai-tools",
    title: "ChatGPT & AI Tools",
    category: "AI & Data",
    tagline:
      "Practical AI fluency for working professionals — faster output, verified results, no guesswork.",
    focus:
      "The advantage now belongs to people who can use AI tools carefully, which means knowing their limits as well as their shortcuts.",
    duration: "6 weeks",
    level: "Beginner",
    badge: "Hot",
    topics: [
      { t: "AI Tool Landscape", s: ["Chat, image, audio and code tools", "Choosing per task", "Cost awareness"] },
      { t: "Everyday Prompting", s: ["Clear task framing", "Iterative refinement", "Reusable templates"] },
      { t: "Documents & Research", s: ["Summarising long files", "Comparative analysis", "Source verification"] },
      { t: "Data & Spreadsheets", s: ["Formula generation", "Cleaning assistance", "Chart interpretation"] },
      { t: "Content & Design", s: ["Draft-to-final workflow", "Brand voice control", "Image generation basics"] },
      { t: "Automation Basics", s: ["No-code connectors", "Trigger and action design", "Simple agents"] },
      { t: "Verification & Ethics", s: ["Fact-checking method", "Privacy and confidentiality", "Disclosure norms"] },
      { t: "Personal Workflow Build", s: ["Task audit", "Tool stack design", "Time-saved measurement"] },
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Canva AI", "Notion AI", "Zapier", "Make", "Excel Copilot", "Midjourney"],
    roles: ["AI-Enabled Professional", "Operations Executive", "Content Specialist", "Executive Assistant", "Freelance Consultant"],
    projects: [
      { title: "Role Automation Audit", body: "A documented before-and-after of one job role's weekly tasks with measured time savings." },
      { title: "AI-Assisted Research Brief", body: "A verified, sourced brief produced in a fraction of the usual time." },
      { title: "Team Prompt Playbook", body: "A shared library of tested prompts for a specific department." },
    ],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    category: "AI & Data",
    tagline:
      "Systems that plan, call tools and complete multi-step work — with the guardrails that make them safe to run.",
    focus:
      "Agents fail in ways single prompts do not, so the course is built around observability, guardrails and recovery from the very first lab.",
    duration: "3 months",
    level: "Advanced",
    badge: "Hot",
    topics: [
      { t: "Agent Architectures", s: ["Reason-act loops", "Planner-executor split", "Multi-agent patterns"] },
      { t: "Tool Use & Function Calling", s: ["Schema design", "Tool selection", "Error contracts"] },
      { t: "Memory & Context", s: ["Short vs long-term memory", "Context compaction", "Retrieval integration"] },
      { t: "Orchestration Frameworks", s: ["Graph-based flows", "State machines", "Retry and fallback"] },
      { t: "Guardrails & Safety", s: ["Input and output filters", "Permission scoping", "Human-in-the-loop gates"] },
      { t: "Observability", s: ["Tracing runs", "Token and latency budgets", "Failure taxonomies"] },
      { t: "Evaluation", s: ["Task success metrics", "Trajectory scoring", "Regression suites"] },
      { t: "Production Deployment", s: ["Queueing and concurrency", "Cost controls", "Rollout strategy"] },
    ],
    tools: ["LangGraph", "LangChain", "OpenAI API", "Claude API", "Python", "FastAPI", "Redis", "Postgres", "LangSmith", "Docker"],
    roles: ["AI Agent Engineer", "LLM Application Developer", "Automation Architect", "AI Platform Engineer", "AI Solutions Lead"],
    projects: [
      { title: "Research & Reporting Agent", body: "A traced agent that gathers sources, verifies claims and produces a cited report." },
      { title: "Support Triage Agent", body: "A tool-using agent that classifies, enriches and routes tickets with an escalation gate." },
      { title: "Back-Office Workflow Agent", body: "A multi-step agent handling document intake with a human approval checkpoint." },
    ],
  },
  {
    slug: "rag-development",
    title: "RAG Development",
    category: "AI & Data",
    tagline:
      "Retrieval-augmented generation done properly — chunking, ranking, grounding and evaluation.",
    focus:
      "RAG looks trivial in a demo and gets hard in production, where retrieval quality, not the model, decides whether the answer is right.",
    duration: "6 weeks – 3 months",
    level: "Intermediate to advanced",
    topics: [
      { t: "Retrieval Fundamentals", s: ["Lexical vs semantic search", "Embeddings", "Relevance intuition"] },
      { t: "Document Processing", s: ["Parsing PDFs and HTML", "Chunking strategy", "Metadata design"] },
      { t: "Vector Databases", s: ["Index types", "Filtering", "Scaling and cost"] },
      { t: "Hybrid Search & Reranking", s: ["BM25 plus vectors", "Cross-encoder reranking", "Query rewriting"] },
      { t: "Grounded Generation", s: ["Context assembly", "Citation formats", "Refusal behaviour"] },
      { t: "Evaluation", s: ["Retrieval recall", "Answer faithfulness", "Golden question sets"] },
      { t: "Advanced Patterns", s: ["Multi-hop retrieval", "Graph RAG", "Agentic retrieval"] },
      { t: "Production Concerns", s: ["Incremental indexing", "Access control", "Latency budgets"] },
    ],
    tools: ["LangChain", "LlamaIndex", "Pinecone", "Chroma", "Weaviate", "OpenAI Embeddings", "Elasticsearch", "Python", "FastAPI", "Ragas"],
    roles: ["RAG Engineer", "LLM Application Developer", "Search Engineer", "AI Engineer", "Knowledge Systems Consultant"],
    projects: [
      { title: "Enterprise Policy Assistant", body: "A permissioned assistant over internal policy documents with source citations." },
      { title: "Technical Documentation Search", body: "Hybrid retrieval with reranking, benchmarked against a golden question set." },
      { title: "Multi-Source Research Tool", body: "A multi-hop pipeline that synthesises across several document collections." },
    ],
  },
  {
    slug: "ai-powered-marketing",
    title: "AI-Powered Marketing",
    category: "AI & Data",
    tagline:
      "Campaign strategy, content production and performance analysis with AI compressing every loop.",
    focus:
      "AI has not replaced marketing judgement — it has removed the excuse for slow execution, and this course rebuilds the workflow around that.",
    duration: "3 – 6 months",
    level: "Beginner to intermediate",
    badge: "Hot",
    topics: [
      { t: "AI in the Marketing Stack", s: ["Where AI actually helps", "Tool selection", "Workflow mapping"] },
      { t: "Audience & Research", s: ["AI-assisted persona work", "Competitor teardown", "Keyword clustering"] },
      { t: "Content Production", s: ["Brand voice systems", "Long-form to short-form", "Editing discipline"] },
      { t: "Creative & Design", s: ["AI image workflows", "Ad creative variants", "Brand guardrails"] },
      { t: "Performance Campaigns", s: ["Meta and Google setup", "Creative testing matrix", "Budget pacing"] },
      { t: "SEO & AEO", s: ["Search intent mapping", "Answer engine optimisation", "Structured data"] },
      { t: "Automation & CRM", s: ["Lead scoring", "Lifecycle emails", "Chat and DM automation"] },
      { t: "Analytics & Reporting", s: ["GA4 fundamentals", "Attribution reading", "Automated reporting"] },
    ],
    tools: ["ChatGPT", "Meta Ads Manager", "Google Ads", "GA4", "Canva AI", "HubSpot", "SEMrush", "Zapier", "Looker Studio", "Midjourney"],
    roles: ["AI Marketing Specialist", "Performance Marketer", "Content Strategist", "Growth Executive", "Marketing Automation Analyst"],
    projects: [
      { title: "Full Funnel Campaign", body: "A live campaign from audience research to creative testing and a performance readout." },
      { title: "AI Content Engine", body: "A repeatable production system turning one pillar asset into a month of channel content." },
      { title: "Automated Lead Nurture", body: "A scored, segmented lifecycle sequence with measured conversion lift." },
    ],
  },
  {
    slug: "ai-powered-courses",
    title: "AI-Powered Career Track",
    category: "AI & Data",
    tagline:
      "A guided pathway that layers AI capability on top of whichever core discipline you choose.",
    focus:
      "Every discipline is being rewritten by AI, so this track pairs a core specialisation with the AI layer that now sits on top of it.",
    duration: "6 – 9 months",
    level: "Beginner to advanced",
    topics: [
      { t: "Choosing Your Core Track", s: ["Aptitude mapping", "Market demand review", "Commitment planning"] },
      { t: "AI Literacy Foundation", s: ["How models behave", "Prompting discipline", "Verification habits"] },
      { t: "Core Discipline Block", s: ["Development, data or marketing", "Fundamentals first", "Weekly lab work"] },
      { t: "AI Layer for Your Track", s: ["Track-specific tooling", "Workflow redesign", "Quality control"] },
      { t: "Data Fluency", s: ["Reading a dataset", "Basic modelling", "Measurement thinking"] },
      { t: "Automation & Integration", s: ["Connecting tools", "Trigger design", "Failure handling"] },
      { t: "Portfolio Development", s: ["Project selection", "Documentation", "Public presentation"] },
      { t: "Career Launch", s: ["Resume and profile", "Interview drills", "Placement preparation"] },
    ],
    tools: ["Python", "ChatGPT", "GitHub", "Power BI", "React", "Zapier", "Figma", "Notion", "Google Cloud", "Docker"],
    roles: ["AI-Enabled Developer", "AI Analyst", "AI Marketing Executive", "Automation Specialist", "Technology Generalist"],
    projects: [
      { title: "Track Capstone", body: "A substantial project in your chosen discipline with an AI-assisted workflow documented end to end." },
      { title: "Automation Case Study", body: "A real manual process rebuilt as an automated pipeline with measured savings." },
      { title: "Public Portfolio", body: "Three written case studies published with code or campaign evidence." },
    ],
  },

  /* -------------------------------------------------------- digital marketing */
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Digital Marketing",
    tagline:
      "Search, social, paid media and analytics — run as one system with real budget behind it.",
    focus:
      "Marketing channels only make sense together, so the course teaches the funnel as a whole and puts live budget behind the campaigns you build.",
    duration: "3 – 6 months",
    level: "Beginner to advanced",
    featured: true,
    topics: [
      { t: "Marketing Foundations", s: ["Funnel and journey mapping", "Positioning", "Offer design"] },
      { t: "Website & Landing Pages", s: ["WordPress builds", "Conversion structure", "Speed and mobile"] },
      { t: "SEO", s: ["Keyword and intent research", "On-page optimisation", "Technical audit"] },
      { t: "Content & Copywriting", s: ["Editorial planning", "Ad and page copy", "Repurposing"] },
      { t: "Social Media Marketing", s: ["Platform strategy", "Content calendar", "Community management"] },
      { t: "Paid Media", s: ["Google Ads structure", "Meta Ads targeting", "Creative testing"] },
      { t: "Email & Automation", s: ["List building", "Lifecycle sequences", "Deliverability"] },
      { t: "Analytics & Reporting", s: ["GA4 setup", "Conversion tracking", "Client-ready reports"] },
    ],
    tools: ["Google Ads", "Meta Ads", "GA4", "Search Console", "SEMrush", "WordPress", "Canva", "Mailchimp", "Looker Studio", "ChatGPT"],
    roles: ["Digital Marketing Executive", "Performance Marketer", "SEO Specialist", "Social Media Manager", "Marketing Analyst"],
    projects: [
      { title: "Live Client Campaign", body: "A real local business campaign run end to end with a documented performance report." },
      { title: "SEO Growth Case Study", body: "An audit, fix list and three-month ranking movement record for a live site." },
      { title: "Full Funnel Build", body: "Landing page, ads, email sequence and dashboard wired into one measurable funnel." },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Digital Marketing",
    tagline:
      "Content that earns attention and paid social that converts it — the creative and the media side together.",
    focus:
      "Social results come from creative volume plus disciplined testing, so the course makes you produce and measure at a real cadence.",
    duration: "4 months",
    level: "Beginner to intermediate",
    badge: "Trending",
    topics: [
      { t: "Platform Strategy", s: ["Channel selection", "Audience research", "Positioning per platform"] },
      { t: "Content Design", s: ["Canva and Photoshop basics", "Template systems", "Brand consistency"] },
      { t: "Short-Form Video", s: ["Scripting hooks", "Shooting and editing", "Retention analysis"] },
      { t: "Calendar & Production", s: ["Batch production", "Approval workflow", "Publishing tools"] },
      { t: "Community & Engagement", s: ["Response playbooks", "UGC sourcing", "Crisis handling"] },
      { t: "Meta Ads Foundations", s: ["Business Suite setup", "Pixel and events", "Audience building"] },
      { t: "Campaign Optimisation", s: ["Creative testing matrix", "Budget scaling", "Frequency control"] },
      { t: "Analytics & Reporting", s: ["Platform insights", "Cross-channel reporting", "Client presentation"] },
    ],
    tools: ["Meta Business Suite", "Instagram", "LinkedIn", "Canva", "Photoshop", "Premiere Pro", "Buffer", "CapCut", "GA4", "ChatGPT"],
    roles: ["Social Media Manager", "Content Creator", "Paid Social Specialist", "Community Manager", "Brand Executive"],
    projects: [
      { title: "30-Day Brand Takeover", body: "A month of produced content for one brand with engagement and reach analysis." },
      { title: "Paid Social Test Programme", body: "A structured creative test across audiences with a scaling recommendation." },
      { title: "UGC Campaign", body: "A creator brief, sourcing process and performance comparison against studio content." },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    category: "Digital Marketing",
    tagline:
      "Search, Performance Max and YouTube campaigns built around intent, structure and measurable return.",
    focus:
      "Google Ads punishes sloppy account structure long before it punishes bad copy, so the course starts with architecture and tracking.",
    duration: "2 months",
    level: "Beginner to intermediate",
    topics: [
      { t: "Account Architecture", s: ["Campaign and ad group logic", "Naming conventions", "Budget structure"] },
      { t: "Keyword Research", s: ["Intent classification", "Match types", "Negative keyword strategy"] },
      { t: "Ad Copy & Assets", s: ["Responsive search ads", "Asset variety", "Ad strength reality check"] },
      { t: "Landing Page Alignment", s: ["Message match", "Speed and forms", "Conversion design"] },
      { t: "Conversion Tracking", s: ["Google Tag setup", "Conversion actions", "Value assignment"] },
      { t: "Bidding & Automation", s: ["Smart bidding", "Signals and data quality", "Budget pacing"] },
      { t: "Performance Max & Shopping", s: ["Asset groups", "Feed hygiene", "Reporting limitations"] },
      { t: "Optimisation & Reporting", s: ["Search term mining", "Experiment design", "Client reporting"] },
    ],
    tools: ["Google Ads", "Google Tag Manager", "GA4", "Keyword Planner", "Merchant Center", "Looker Studio", "Photoshop", "Canva", "Search Console", "Excel"],
    roles: ["Google Ads Specialist", "PPC Executive", "Performance Marketer", "Paid Search Analyst", "Freelance Ads Consultant"],
    projects: [
      { title: "Local Lead Generation Account", body: "A full search account for a service business with tracked, cost-attributed leads." },
      { title: "E-Commerce Shopping Campaign", body: "Feed optimisation plus a Performance Max structure with a return analysis." },
      { title: "Account Audit Report", body: "A structured audit of an underperforming account with a prioritised fix list." },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimisation",
    category: "Digital Marketing",
    tagline:
      "Technical, on-page and content SEO — plus the answer-engine work that search has moved towards.",
    focus:
      "Search now includes AI answers as well as blue links, so the course covers classic SEO and the emerging answer-engine layer together.",
    duration: "3 months",
    level: "Beginner to intermediate",
    topics: [
      { t: "How Search Works", s: ["Crawling and indexing", "Ranking signals", "SERP feature types"] },
      { t: "Keyword & Intent Research", s: ["Topic clustering", "Difficulty assessment", "Gap analysis"] },
      { t: "On-Page Optimisation", s: ["Title and heading structure", "Internal linking", "Content depth"] },
      { t: "Technical SEO", s: ["Site speed and Core Web Vitals", "Crawl budget", "Schema markup"] },
      { t: "WordPress & Elementor", s: ["Site builds", "Rank Math or Yoast setup", "Template SEO"] },
      { t: "Content Strategy", s: ["Editorial calendar", "Pillar and cluster model", "Refresh cycles"] },
      { t: "Off-Page & Local SEO", s: ["Link acquisition", "Google Business Profile", "Citations and reviews"] },
      { t: "AEO & Measurement", s: ["Optimising for AI answers", "Search Console analysis", "Reporting"] },
    ],
    tools: ["Search Console", "GA4", "SEMrush", "Ahrefs", "Screaming Frog", "Rank Math", "WordPress", "Elementor", "Photoshop", "Looker Studio"],
    roles: ["SEO Specialist", "Content Strategist", "Technical SEO Analyst", "Digital Marketing Executive", "Freelance SEO Consultant"],
    projects: [
      { title: "Full Site Audit", body: "A technical and content audit with a scored, prioritised remediation plan." },
      { title: "Topic Cluster Build", body: "A pillar page plus supporting articles with internal linking and ranking tracking." },
      { title: "Local SEO Campaign", body: "Profile optimisation, citation cleanup and a measured visibility improvement." },
    ],
  },
  {
    slug: "wordpress",
    title: "WordPress Development",
    category: "Digital Marketing",
    tagline:
      "Build fast, secure, SEO-ready WordPress sites — including WooCommerce stores — without fighting the platform.",
    focus:
      "WordPress is a business skill as much as a technical one: most clients want a site that loads fast, ranks and does not break.",
    duration: "3 months",
    level: "Beginner",
    topics: [
      { t: "WordPress Foundations", s: ["Hosting and installation", "Themes and plugins", "Admin structure"] },
      { t: "Elementor Page Building", s: ["Layout containers", "Global styles", "Responsive controls"] },
      { t: "Theme Customisation", s: ["Child themes", "Template hierarchy", "Custom fields"] },
      { t: "WooCommerce", s: ["Product setup", "Payments and shipping", "Order workflow"] },
      { t: "SEO Configuration", s: ["Rank Math or Yoast setup", "Sitemaps and schema", "Redirects"] },
      { t: "Performance", s: ["Caching and CDN", "Image optimisation", "Core Web Vitals"] },
      { t: "Security & Maintenance", s: ["Hardening basics", "Backups", "Update discipline"] },
      { t: "Client Delivery", s: ["Staging to live", "Handover documentation", "Care plans"] },
    ],
    tools: ["WordPress", "Elementor", "WooCommerce", "Rank Math", "cPanel", "Cloudflare", "Photoshop", "Canva", "UpdraftPlus", "Search Console"],
    roles: ["WordPress Developer", "Web Designer", "Freelance Web Builder", "E-Commerce Executive", "Digital Marketing Executive"],
    projects: [
      { title: "Business Website Build", body: "A complete client-style site with SEO configuration and a performance score above target." },
      { title: "WooCommerce Store", body: "A working store with payment, shipping, tax rules and an order test run." },
      { title: "Site Rescue Project", body: "A slow, insecure site diagnosed, hardened and rebuilt with documented improvements." },
    ],
  },
  {
    slug: "shopify",
    title: "Shopify Development",
    category: "Digital Marketing",
    tagline:
      "Store building, product operations and paid acquisition for direct-to-consumer commerce.",
    focus:
      "A Shopify store is a business system, not a website, so the course covers product, operations and acquisition alongside the build.",
    duration: "3 – 6 months",
    level: "Beginner to intermediate",
    topics: [
      { t: "Store Setup", s: ["Theme selection", "Navigation and collections", "Policies and checkout"] },
      { t: "Product & Catalogue", s: ["Variants and inventory", "Product photography basics", "Copy that converts"] },
      { t: "Theme Customisation", s: ["Sections and blocks", "Liquid basics", "Speed optimisation"] },
      { t: "Apps & Integrations", s: ["Reviews and upsells", "Email and SMS", "Analytics apps"] },
      { t: "Store SEO", s: ["Collection and product SEO", "Content pages", "Structured data"] },
      { t: "Paid Acquisition", s: ["Meta Ads for commerce", "Google Shopping", "Creative testing"] },
      { t: "Operations", s: ["Fulfilment workflow", "Returns handling", "Supplier coordination"] },
      { t: "Analytics & Growth", s: ["Cohorts and repeat rate", "Funnel diagnosis", "Experiment planning"] },
    ],
    tools: ["Shopify", "Liquid", "Meta Ads", "Google Ads", "Klaviyo", "Canva", "Photoshop", "GA4", "Search Console", "Premiere Pro"],
    roles: ["Shopify Developer", "E-Commerce Manager", "D2C Growth Executive", "Store Operations Associate", "Freelance Store Builder"],
    projects: [
      { title: "Launch-Ready Store", body: "A complete store with catalogue, checkout, policies and a speed-optimised theme." },
      { title: "Acquisition Sprint", body: "A paid campaign with creative testing and a documented cost-per-order analysis." },
      { title: "Retention Programme", body: "Email and SMS flows built around a measured repeat-purchase target." },
    ],
  },

  /* ------------------------------------------------------------ cyber & cloud */
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "Cyber & Cloud",
    tagline:
      "Defensive security from the ground up — networks, systems, monitoring and incident response.",
    focus:
      "Security is a defender's discipline first, so the course builds network and systems literacy before it touches offensive tooling.",
    duration: "6 months",
    level: "Beginner to advanced",
    featured: true,
    topics: [
      { t: "Networking Fundamentals", s: ["TCP/IP and the OSI model", "Routing and switching", "Packet analysis"] },
      { t: "Operating System Security", s: ["Linux hardening", "Windows security model", "Privilege management"] },
      { t: "Cryptography Basics", s: ["Symmetric and asymmetric", "Hashing and signatures", "TLS in practice"] },
      { t: "Threats & Attack Surfaces", s: ["Attack taxonomies", "Phishing and social engineering", "Malware behaviour"] },
      { t: "Web Application Security", s: ["OWASP Top 10", "Input validation", "Session security"] },
      { t: "Security Monitoring", s: ["Log sources", "SIEM fundamentals", "Alert triage"] },
      { t: "Incident Response", s: ["Response lifecycle", "Containment decisions", "Forensic basics"] },
      { t: "Governance & Compliance", s: ["Risk assessment", "Policy writing", "Audit readiness"] },
    ],
    tools: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "Metasploit", "Splunk", "Snort", "OpenVAS", "Windows Server", "Python"],
    roles: ["Security Analyst", "SOC Analyst", "Network Security Engineer", "Information Security Associate", "GRC Analyst"],
    projects: [
      { title: "SOC Simulation", body: "A week of simulated alerts triaged, escalated and written up as incident reports." },
      { title: "Hardening Assessment", body: "A baseline audit of a vulnerable system with a remediation plan and re-test." },
      { title: "Web App Security Review", body: "A structured OWASP review of a deliberately vulnerable application." },
    ],
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking",
    category: "Cyber & Cloud",
    tagline:
      "Reconnaissance to reporting — offensive testing practised inside a legal, documented framework.",
    focus:
      "Penetration testing is a professional engagement with scope, rules and a report at the end, and the course treats it that way throughout.",
    duration: "4 – 6 months",
    level: "Intermediate",
    badge: "Trending",
    topics: [
      { t: "Engagement & Legality", s: ["Scoping and rules of engagement", "Documentation", "Disclosure ethics"] },
      { t: "Reconnaissance", s: ["OSINT techniques", "Footprinting", "Asset discovery"] },
      { t: "Scanning & Enumeration", s: ["Port and service scanning", "Version fingerprinting", "Vulnerability mapping"] },
      { t: "System Exploitation", s: ["Exploit selection", "Payload handling", "Privilege escalation"] },
      { t: "Web Exploitation", s: ["Injection classes", "Authentication flaws", "Business logic abuse"] },
      { t: "Wireless & Network Attacks", s: ["Traffic interception", "Wireless auditing", "Pivoting"] },
      { t: "Post-Exploitation", s: ["Persistence concepts", "Evidence collection", "Clean-up discipline"] },
      { t: "Reporting", s: ["Risk rating", "Reproduction steps", "Executive summary writing"] },
    ],
    tools: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite", "Hydra", "John the Ripper", "Wireshark", "OWASP ZAP", "Nessus", "Python"],
    roles: ["Penetration Tester", "Security Consultant", "Red Team Associate", "Vulnerability Analyst", "Bug Bounty Researcher"],
    projects: [
      { title: "Full Lab Penetration Test", body: "A scoped test of a lab network delivered as a professional report with severities." },
      { title: "Web Application Assessment", body: "A structured assessment of a vulnerable app with reproducible proof-of-concept steps." },
      { title: "Phishing Simulation Study", body: "A controlled awareness exercise with metrics and a training recommendation." },
    ],
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing & DevOps",
    category: "Cyber & Cloud",
    tagline:
      "AWS fundamentals, containers, CI/CD and infrastructure as code — the way software actually ships now.",
    focus:
      "Cloud skill is judged by whether you can deploy, observe and recover a running system, not by how many service names you can recite.",
    duration: "6 months",
    level: "Beginner to advanced",
    featured: true,
    topics: [
      { t: "Cloud Fundamentals", s: ["Service models", "Regions and availability", "Cost basics"] },
      { t: "Linux & Networking", s: ["Shell fluency", "Users and permissions", "VPC and subnets"] },
      { t: "Core AWS Services", s: ["EC2 and S3", "IAM policies", "RDS and load balancing"] },
      { t: "Containers", s: ["Docker images", "Compose", "Registry workflow"] },
      { t: "Orchestration", s: ["Kubernetes objects", "Deployments and services", "Scaling and probes"] },
      { t: "CI/CD Pipelines", s: ["Build and test stages", "Artefact promotion", "Deployment strategies"] },
      { t: "Infrastructure as Code", s: ["Terraform basics", "State management", "Reusable modules"] },
      { t: "Monitoring & Reliability", s: ["Metrics and logs", "Alerting", "Incident postmortems"] },
    ],
    tools: ["AWS", "Linux", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Nginx", "Prometheus", "Grafana"],
    roles: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Associate", "Platform Engineer", "Infrastructure Analyst"],
    projects: [
      { title: "Production-Style Deployment", body: "A containerised application deployed behind a load balancer with automated rollout." },
      { title: "Infrastructure as Code Stack", body: "A full environment defined in Terraform and rebuilt from scratch on demand." },
      { title: "Observability Setup", body: "Metrics, dashboards and alerting wired around a live service with a postmortem exercise." },
    ],
  },
  {
    slug: "linux",
    title: "Linux Administration",
    category: "Cyber & Cloud",
    tagline:
      "The shell, the filesystem, services and scripting — the operating system every server runs on.",
    focus:
      "Linux fluency quietly underpins cloud, security and backend work, and the fastest way to get it is time in the terminal on real tasks.",
    duration: "2 – 3 months",
    level: "Beginner to intermediate",
    topics: [
      { t: "Shell Fundamentals", s: ["Navigation and pipes", "Text processing", "Man pages and help"] },
      { t: "Filesystem & Permissions", s: ["Directory structure", "Ownership and modes", "Special permissions"] },
      { t: "Package & Process Management", s: ["apt and yum", "Systemd services", "Process inspection"] },
      { t: "Users & Access Control", s: ["Accounts and groups", "sudo policy", "SSH key auth"] },
      { t: "Networking on Linux", s: ["Interfaces and routing", "Firewall rules", "Diagnostics"] },
      { t: "Shell Scripting", s: ["Variables and control flow", "Argument handling", "Cron scheduling"] },
      { t: "Storage & Backups", s: ["Partitions and mounts", "LVM basics", "Backup strategy"] },
      { t: "Server Hardening", s: ["Service minimisation", "Log review", "Patch discipline"] },
    ],
    tools: ["Ubuntu", "CentOS", "Bash", "systemd", "SSH", "iptables", "cron", "Vim", "Git", "Docker"],
    roles: ["Linux Administrator", "System Administrator", "Cloud Support Engineer", "DevOps Associate", "NOC Engineer"],
    projects: [
      { title: "Hardened Web Server", body: "A provisioned server running a real site with TLS, firewall rules and a backup job." },
      { title: "Automation Script Suite", body: "A set of scheduled scripts covering log rotation, health checks and reporting." },
      { title: "Recovery Exercise", body: "A deliberately broken system diagnosed and restored with a written incident log." },
    ],
  },
];
