/**
 * Hand-written copy for courses that have real marketing content behind them.
 *
 * `courses.ts` builds every page from the compact seeds, which keeps the whole
 * catalogue at the same depth. That generated model is the floor, not the
 * ceiling: when a course has copy written for it — overview prose, its own
 * eligibility personas, its own reviews, its own FAQ — it lands here and
 * replaces the generated field wholesale rather than being paraphrased into a
 * seed. Anything a course does not name still comes through the builder.
 *
 * Keyed by the *public* slug (`python-course-in-amritsar`), which is what
 * `buildCourse` has in hand at merge time.
 */

import type { Course } from "./courses";

export type CourseOverride = {
  /** Whole fields of the built `Course` model, replaced verbatim. */
  course?: Partial<Course>;
};

/* ------------------------------------------------------ python programming */

/**
 * Source copy: the Amritsar Python brief (overview, eligibility, the two
 * "why" arguments, twelve learning blocks, eleven student reviews, twelve
 * FAQs, the enquiry section and the keyword/GEO report). The twelve learning
 * blocks live in `course-data.ts` instead, because they are the curriculum and
 * the module explorer reads them from the seed.
 */
const python: CourseOverride = {
  course: {
    hero: {
      eyebrow: "Programming · TechCadd Amritsar",
      /* The H1 mirrors the primary keyword — "Python Programming Training
         course Amritsar" — rather than the generic catalogue phrasing. */
      headline: "Python Programming Training course in",
      accent: "Amritsar",
      tagline:
        "A job-oriented Python course in Amritsar for students, graduates and job seekers — from core fundamentals to automation, Django and the basics of data analysis.",
      chips: ["3 – 6 months", "Classroom & online", "Beginner"],
      image: "/images/courses/python.png",
    },

    overview: {
      heading: "Python Programming Training in Amritsar – Overview",
      paragraphs: [
        "Looking for the best Python Programming Training Course in Amritsar? Techcadd offers a job-oriented Python course designed for students, graduates, and job seekers across Amritsar — including those studying at GNDU, Khalsa College, DAV College, and other nearby institutes.",
        "This Python course in Amritsar covers everything from core programming fundamentals — variables, loops, functions, and data structures — to real-world applications like automation, web development with Django, and the basics of data analysis using Python. Whether you're a complete beginner or a student wanting to strengthen your programming foundation, this course is structured to build practical, job-ready skills.",
        "At Techcadd, training goes beyond theory. Students work on live projects, get doubt-clearing support, and receive placement assistance to help transition into roles like Python Developer, Automation Engineer, or Data Analyst.",
        "If you're searching for a trusted Python programming institute in Amritsar that combines hands-on learning with career support, this course is built for you.",
      ],
      checks: [
        "Every concept is implemented before it is examined",
        "Mentors are working practitioners, not career trainers",
        "Projects are reviewed line by line, not just marked complete",
        "Doubt sessions and lab access run outside batch hours",
      ],
    },

    curriculumNote:
      "This course is structured to take you from complete beginner to confident, job-ready Python programmer — step by step, with every concept reinforced through practice.",

    /* Six starting points plus the no-experience note that closes the section
       in the source copy. The checklist variant of `CourseFit` renders these
       as a two-column grid, so a seventh tile sits naturally. */
    eligibility: {
      heading: "Who Can Do This Course – Python Programming Training in Amritsar",
      intro:
        "One of the most common questions students ask before enrolling is simple: “Am I eligible for this Python course?” The honest answer — if you're curious about technology and willing to practice consistently, this Python Programming Training Course in Amritsar is built for you. Techcadd designed this program to be accessible for absolute beginners while still offering enough depth to challenge students who already know the basics of coding. Here's a closer look at who typically joins this course:",
      criteria: [
        {
          label: "12th Pass Students (Science, Commerce, or Arts background)",
          detail:
            "You don't need a computer science background to start learning Python. Many students from Amritsar who've just finished 12th grade join this course to build a strong technical foundation before college, or to explore whether a career in programming or IT is the right path for them. Python's simple, English-like syntax makes it one of the easiest languages for first-time learners.",
        },
        {
          label: "College Students (BCA, B.Tech, BSc-IT, MCA)",
          detail:
            "Students from GNDU, Khalsa College, DAV College, and other institutes across Amritsar often join to supplement their academic curriculum with practical, hands-on Python skills that colleges rarely cover in depth. This course is especially useful for those needing Python industrial training (6 weeks / 45 days / 6 months) as part of their degree requirements.",
        },
        {
          label: "Graduates from Any Stream Looking to Switch Careers",
          detail:
            "Python has become a common entry point for graduates — even from non-technical backgrounds like commerce, arts, or biology — who want to move into IT, data analysis, or software roles. Since Python doesn't require prior programming knowledge, it's one of the most beginner-friendly languages to pivot your career around.",
        },
        {
          label: "Job Seekers Wanting an In-Demand Technical Skill",
          detail:
            "If you're currently job hunting and want to stand out, adding Python to your resume can open doors to roles in automation, backend development, QA testing, and data-related positions. Employers across Amritsar and beyond increasingly look for candidates with at least basic Python proficiency.",
        },
        {
          label: "Working Professionals Wanting to Upskill",
          detail:
            "Professionals already working in IT support, testing, or administrative tech roles often join to add automation and scripting skills to their profile — making themselves more valuable and opening pathways to higher-paying roles.",
        },
        {
          label: "Aspiring Data Analysts, Developers & Automation Enthusiasts",
          detail:
            "If your long-term goal is data science, web development, or automation engineering, Python is typically the first language recommended by most professionals — making this course a strong starting point.",
        },
        {
          label: "No Prior Coding Experience Needed",
          detail:
            "Whether you've never written a line of code or you've dabbled in programming before, the course starts from the fundamentals and builds up gradually. Classes are structured for both offline learners in Amritsar and those preferring flexible online sessions.",
        },
      ],
    },

    /* The source copy argues the programme and the institute separately, so
       the page draws two panels: this one is the case for the course. */
    whyChoose: {
      heading: "Why Choose This Python Programming",
      accent: "Training Program?",
      body: "With so many institutes in Amritsar offering “Python courses,” it's fair to ask what actually makes a program worth your time and money. Here's what sets Techcadd's Python Programming Training course apart — and why it's built around real outcomes, not just certificates.",
      reasons: [
        {
          title: "Practical, Project-Based Learning",
          body: "You won't just watch someone code on a screen and take notes. Every concept in this course is reinforced through hands-on practice — writing your own scripts, debugging real errors, and building small projects that mirror what junior developers actually work on. By the end of the course, you'll have a portfolio of work you can show, not just a certificate that says you attended classes.",
        },
        {
          title: "Structured, Beginner-to-Job-Ready Curriculum",
          body: "The course is designed in a logical progression — starting with Python fundamentals like variables, loops, and functions, moving into data structures and file handling, and building up toward more advanced, job-relevant concepts. Nothing is thrown at you before you're ready for it, and nothing important gets skipped either.",
        },
        {
          title: "Industry-Relevant Skills, Not Just Academic Theory",
          body: "Python today is used across web development, automation, data analysis, and increasingly in AI-assisted workflows. This program is built to reflect how Python is actually used in the industry right now, so what you learn stays relevant to real hiring requirements — not just exam syllabi.",
        },
        {
          title: "Doubt-Clearing & Mentor Support",
          body: "Learning to code is rarely a straight line — everyone gets stuck on errors and confusing concepts at some point. Techcadd's trainers are available to clear doubts as they come up, so you're not left stuck on a single error for days, losing motivation.",
        },
        {
          title: "Flexible Batch Timings for Students and Professionals",
          body: "Whether you're a student trying to fit this around college hours or a working professional trying to fit this around a job, batch timings are designed to accommodate real schedules — not just the institute's convenience.",
        },
        {
          title: "Interview and Placement Support",
          body: "Learning Python is only half the goal — the real objective is a job or a stronger resume. That's why this program includes resume-building guidance, mock interviews, and placement assistance, so you leave with more than just knowledge — you leave with a clear plan to use it.",
        },
        {
          title: "Local Convenience, Real Access",
          body: "Being based in Amritsar means you get all of this without needing to relocate, pay for accommodation, or commute to another city. For students from nearby areas like Tarn Taran, Batala, or Ajnala, that local access matters — it removes a real barrier that often stops good students from upskilling.",
        },
      ],
    },

    /* …and this one is the case for the institute. */
    whyChooseAlt: {
      heading: "Why Learn Python at",
      accent: "Techcadd, Amritsar?",
      body: "Choosing where to learn Python matters just as much as choosing to learn it. Here's what makes Techcadd a trusted name for Python training in Amritsar.",
      reasons: [
        {
          title: "Experienced, Industry-Aware Trainers",
          body: "Techcadd's trainers don't just teach from a fixed textbook — they bring real programming experience into the classroom, which means you're learning how Python is actually used today, including how professionals debug, structure code, and approach problem-solving. This context is often what separates a course that feels academic from one that actually prepares you for real work.",
        },
        {
          title: "A Track Record of Training Real Students in Amritsar",
          body: "Techcadd has built its reputation locally by training students from a wide mix of backgrounds — school leavers, college students, graduates, and working professionals — across multiple technical courses, not just Python. That range of experience means the trainers know how to explain concepts to complete beginners without talking down to students who already have some background.",
        },
        {
          title: "Hands-On, Project-Driven Teaching Style",
          body: "At Techcadd, the emphasis is consistently on doing, not just watching. Instead of long, passive lecture sessions, classes are structured around writing actual code, working through errors, and building small projects — the same way you'd build skills on the job. This approach helps concepts stick far better than theory-only teaching.",
        },
        {
          title: "Small-Batch, Personal Attention",
          body: "Getting stuck on a coding error and not being able to get help for days is one of the biggest reasons students lose momentum while learning to code. Techcadd focuses on keeping batches manageable so trainers can actually address individual doubts, rather than moving forward regardless of who's been left behind.",
        },
        {
          title: "Placement Support That Goes Beyond the Certificate",
          body: "A certificate alone doesn't get you a job — how you present your skills does. Techcadd supports students with resume building, interview preparation, and mock interviews, so that by the time you finish the course, you're not just “Python certified” — you're actually ready to walk into an interview and speak confidently about what you've built.",
        },
        {
          title: "Flexible for Real Student Schedules",
          body: "Techcadd understands that not every student is a full-time learner with no other commitments. Batch timings are structured to work around college schedules and job timings, so that students from Amritsar and nearby areas don't have to choose between upskilling and their existing responsibilities.",
        },
        {
          title: "Honest, Beginner-Friendly Teaching",
          body: "Perhaps most importantly, Techcadd doesn't assume prior knowledge. Trainers start from the fundamentals and build up methodically, which means students with zero coding background aren't left behind, and students with some prior exposure still get real depth as the course progresses.",
        },
        {
          title: "Local, Accessible, and Student-Focused",
          body: "Being based in Amritsar means Techcadd understands the local student ecosystem — the colleges students come from, the kind of jobs available in and around the city, and the practical constraints (commute, budget, time) that shape a student's decision to enroll. That local understanding shapes how the course is delivered, not just where it's located.",
        },
      ],
    },

    /* Eleven named reviews. The distribution and average are computed from the
       ratings actually listed here — eight five-star, three four-star — rather
       than the catalogue's generated numbers, so the star rail cannot claim
       more than the page can show. */
    reviews: {
      average: "4.7",
      total: 11,
      distribution: [
        { stars: 5, percent: 73 },
        { stars: 4, percent: 27 },
        { stars: 3, percent: 0 },
        { stars: 2, percent: 0 },
        { stars: 1, percent: 0 },
      ],
      items: [
        {
          name: "Ramanpreet Kaur",
          initials: "RK",
          role: "BCA Graduate, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I joined Techcadd's Python course right after finishing my BCA because I felt my degree gave me theory but not real confidence in coding. The way trainers explained concepts here, step by step with actual projects, made such a difference. I finally understand what I'm writing instead of just copying code.",
        },
        {
          name: "Harshdeep Singh",
          initials: "HS",
          role: "12th Pass Student, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I'm from a Commerce background and was honestly scared that Python would be too technical for me. But the trainers started from zero and never made me feel behind. Three months in, I've built my own small projects, which felt impossible in the beginning.",
        },
        {
          name: "Simran Kaur",
          initials: "SK",
          role: "B.Tech Student, GNDU",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I needed this course for my industrial training requirement, but it ended up teaching me way more than I expected. The mini projects were genuinely useful for my resume, and my trainer was always available whenever I got stuck on an error.",
        },
        {
          name: "Gurpreet Singh",
          initials: "GS",
          role: "Working Professional, Amritsar",
          rating: 4,
          meta: "Evening batch",
          quote:
            "I was working a non-tech job and wanted to switch careers. Doing this course in the evening batch worked well with my job timings. It took real effort on my part, but the structure of the course made it manageable even with a full-time job.",
        },
        {
          name: "Aman Sharma",
          initials: "AS",
          role: "Job Seeker, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "Before this course, my resume had nothing that stood out. Now I have actual Python projects to talk about in interviews, and honestly the mock interview sessions at Techcadd helped me a lot with confidence.",
        },
        {
          name: "Navjot Kaur",
          initials: "NK",
          role: "MCA Student, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "What I liked most was how practical everything was. We weren't just doing theory — every topic had a hands-on task attached. My trainer explained data structures in a way that finally made sense after struggling with it in college.",
        },
        {
          name: "Ishaan Mehta",
          initials: "IM",
          role: "BSc-IT Student, Amritsar",
          rating: 4,
          meta: "Python Programming batch",
          quote:
            "The batch size was small enough that I could actually ask questions without feeling like I was slowing the class down. That personal attention made a real difference compared to a course I tried online before this.",
        },
        {
          name: "Manpreet Kaur",
          initials: "MK",
          role: "Graduate, Batala (commuting to Amritsar)",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I travel from Batala for classes, and it's completely worth it. The trainers are patient, the projects are practical, and I never felt like just another student in a crowded batch.",
        },
        {
          name: "Rohit Verma",
          initials: "RV",
          role: "Freelancer, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I took this course to automate some repetitive work for my freelance business. I didn't expect to enjoy coding as much as I did. Now I've written scripts that genuinely save me hours every week.",
        },
        {
          name: "Jaspreet Singh",
          initials: "JS",
          role: "12th Pass Student, Amritsar",
          rating: 4,
          meta: "Python Programming batch",
          quote:
            "Coming straight from school, I wasn't sure if I'd be able to keep up. The pace was manageable, and the trainers repeated concepts patiently whenever needed. I feel much more prepared for a tech career now.",
        },
        {
          name: "Kirti Sood",
          initials: "KS",
          role: "Career Switcher, Amritsar",
          rating: 5,
          meta: "Python Programming batch",
          quote:
            "I'm in my late 20s and was nervous about starting something completely new. The trainers never made me feel out of place for asking basic questions. I finally feel like I have a real shot at moving into tech.",
        },
      ],
    },

    /* Answers are kept in the 40–60 word band the brief asks for, and each one
       opens with the direct answer before it elaborates — that lead-with-the-
       answer shape is what answer engines lift. */
    faqs: [
      {
        q: "Is prior coding experience required to join the Python Programming Training course at Techcadd, Amritsar?",
        a: "No. Techcadd's Python course is designed for complete beginners. Trainers start from the fundamentals, so students with zero coding background can follow along comfortably.",
      },
      {
        q: "Who can enroll in this Python course — is it only for IT students?",
        a: "No, it's open to everyone. 12th pass students from any stream, BCA/B.Tech/MCA students, graduates, working professionals, and even freelancers can join. No specific academic background is required.",
      },
      {
        q: "What is the duration of the Python Programming Training course in Amritsar?",
        a: "The course typically runs for a few months, with both regular and fast-track batch options available depending on your schedule. Exact duration is confirmed at the time of enrollment based on the batch you choose.",
      },
      {
        q: "Does Techcadd offer both online and offline Python classes in Amritsar?",
        a: "Yes, Techcadd offers flexible learning options, including classroom training at the Amritsar centre as well as online sessions for students who need remote access.",
      },
      {
        q: "Will I get a certificate after completing the course?",
        a: "Yes, students receive a course completion certificate from Techcadd, which can be added to your resume and used to demonstrate your practical Python skills to employers.",
      },
      {
        q: "Does the course include placement assistance?",
        a: "Yes. Techcadd supports students with resume building, mock interviews, and interview preparation to help improve job readiness after course completion.",
      },
      {
        q: "What kind of jobs can I get after learning Python?",
        a: "Python skills can lead to roles such as Python Developer, Automation Engineer, Data Analyst, Backend Developer, and QA Automation Engineer, among others, depending on your interests and further specialization.",
      },
      {
        q: "Are batch timings flexible for working professionals and college students?",
        a: "Yes, Techcadd offers flexible batch timings, including options that accommodate college schedules and working professionals' job hours.",
      },
      {
        q: "Do I need to bring my own laptop for the classes?",
        a: "It's recommended to have access to a laptop for practice, though this is confirmed with the Techcadd Amritsar centre at the time of enrollment, as lab access may also be available.",
      },
      {
        q: "How is this course different from free online Python tutorials?",
        a: "Unlike self-paced free tutorials, Techcadd's course offers structured learning, hands-on mentorship, doubt-clearing support, real project work, and placement assistance — elements that are hard to replicate through unguided online learning alone.",
      },
      {
        q: "Is this course suitable for someone planning to switch careers into tech?",
        a: "Yes. The course is commonly chosen by working professionals looking to transition into tech roles, with a beginner-friendly structure that doesn't assume prior programming experience.",
      },
      {
        q: "Where is Techcadd's Python training centre located in Amritsar?",
        a: "Techcadd's Amritsar centre is accessible to students from the city as well as nearby areas like Tarn Taran, Batala, and Ajnala. Exact address and directions are shared at the time of enquiry.",
      },
    ],

    cta: {
      eyebrow: "Start your Python career journey",
      heading: "🐍 Start Your Python Career Journey —",
      accent: "Right Here in Amritsar",
      body: "Stop watching free tutorials and never finishing them. Learn Python the structured way — with real mentors, real projects, and real placement support — at Techcadd, Amritsar.",
      facts: [
        "Course: Python Programming Training Course",
        "Duration: Flexible (Regular / Fast-Track batches available)",
        "Mode: Classroom (Amritsar Centre) & Online",
        "Centre: Techcadd, Amritsar",
      ],
      assurances: [
        "No spam calls",
        "Your details stay private",
        "Talk to a real trainer, not a bot",
      ],
      formTitle: "📩 Enquire Now — It Takes 30 Seconds",
      formNote:
        "Taken from the page you are on — this enquiry reaches the Python Programming counsellor directly.",
      submitLabel: "Book My Free Counselling Call",
      placeholders: {
        name: "Enter your name",
        phone: "Enter your WhatsApp/mobile number",
        email: "Enter your email",
      },
      showEmail: true,
      statusLabel: "Current Status",
      statusOptions: [
        "12th Pass",
        "Graduate",
        "College Student",
        "Working Professional",
      ],
      batchLabel: "Preferred Batch",
      batchOptions: ["Weekday", "Weekend", "Evening"],
    },

    demo: {
      eyebrow: "Prefer to talk first?",
      heading: "☎️ Prefer to Talk First? Request a Callback",
      body: "Not ready to fill a form yet? No problem — leave your number and a Techcadd counsellor will call you back to answer your questions, no pressure, no obligation.",
      action: "Request a Callback",
      note: "✅ No spam calls · ✅ Your details stay private · ✅ Talk to a real trainer, not a bot",
    },

    seo: {
      title: "Python Programming Training Course in Amritsar | Techcadd",
      description:
        "Job-oriented Python Programming Training course in Amritsar for beginners — live projects, flexible batches, doubt-clearing support and placement assistance.",
      keywords: [
        "Python Programming Training course Amritsar",
        "Python course in Amritsar",
        "Python training institute Amritsar",
        "Best Python course Amritsar",
        "Python classes Amritsar",
        "Python coaching Amritsar",
        "Python programming course near me Amritsar",
        "Python Industrial Training Amritsar",
        "Full Stack Python Training Amritsar",
        "Python for beginners course Amritsar",
        "Job-oriented Python course Amritsar",
        "Python certification course Amritsar",
        "Python developer course Amritsar",
        "Learn Python in Amritsar",
        "Python course near GNDU Amritsar",
        "Python training near Khalsa College Amritsar",
        "Python classes Mall Road Amritsar",
        "Python course Hall Bazaar Amritsar",
        "Python course Lawrence Road Amritsar",
        "Python training Amritsar for Batala students",
        "Python course Tarn Taran students Amritsar",
        "Python classes Ajnala students Amritsar",
        "Python course for 12th pass students Amritsar",
        "Python course for BCA students Amritsar",
        "Python course for B.Tech students Amritsar",
        "Python course for working professionals Amritsar",
        "Career switch to Python developer Amritsar",
        "Python course with placement Amritsar",
      ],
    },
  },
};

/* ------------------------------------------------------------------ table */

export const courseOverrides: Record<string, CourseOverride> = {
  "python-course-in-amritsar": python,
};
