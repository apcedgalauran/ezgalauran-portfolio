import type { Project } from "../lib/types";

// Source: docs/portfolio-content.md → Featured Projects (1–4).
// E-Ksena (5) is intentionally omitted until v2 (see CLAUDE.md).
export const projects: Project[] = [
  {
    slug: "dorotheo-dental",
    label: "Client system",
    status: "In development for deployment",
    title: "Dorotheo Dental Clinic Management System",
    summary:
      "A clinic management system for a dental practice, built by a team of 5 developers.",
    role: "Project Manager & Full-Stack Developer",
    stack: [
      "Django",
      "Django REST Framework",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
    details: [
      {
        heading: "Scale",
        items: [
          "Team of 5 developers",
          "4 user roles",
          "17 core workflows",
          "20+ protected API surfaces",
        ],
      },
      {
        heading: "What I built",
        items: [
          "JWT authentication",
          "Role-based access control",
          "Audit logging",
          "Prompt-security controls for the LLM assistant",
          "Query and pagination optimization",
        ],
      },
    ],
    credit:
      "The system also includes a RAG/LLM pipeline with intent classification and semantic caching, built by the team.",
  },
  {
    slug: "motor-hour-tracker",
    label: "Independent project",
    status: "In production use",
    title: "Motor Tool & Sub-Component Pumping Hour Tracking System",
    summary:
      "An asset-tracking application used by field technicians working in Abu Dhabi, with live company data.",
    role: "Sole developer",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Prisma",
      "Neon Postgres",
      "NextAuth",
      "Vercel Blob",
      "Tailwind CSS",
      "Vitest",
    ],
    details: [
      {
        heading: "Highlights",
        items: [
          "Pumping-hour cascade across motors and sub-components",
          "Unified 11-state asset status model",
          "Assembly/disassembly records",
          "File attachments",
          "Search-first UI",
          "Requirements maintained through PRD versions up to v2.9",
        ],
      },
      {
        heading: "Privacy",
        items: [
          "The app holds live company data, so there is no public link or screenshot.",
        ],
      },
    ],
  },
  {
    slug: "namfrel-portal",
    label: "Deployment operations",
    status: "Deployed · Sept 2026",
    title: "NAMFREL Election Portal — Production Deployment",
    summary:
      "Main handler of continuous deployment to Vercel for APC's NAMFREL election monitoring portal on election day, Sept 14, 2026.",
    role: "DevOps & Infrastructure (Sub-Team 4) — Production Deployment",
    stack: ["Vercel", "Git", "GitHub"],
    details: [
      {
        heading: "Context",
        items: [
          "APC served as the NAMFREL Election Data Analytics Center for the 2026 BARMM Parliamentary Elections. 46 students and 9 faculty across CS, IT, and CpE built and supported the election analytics system.",
        ],
      },
      {
        heading: "The blocked-deploy problem",
        items: [
          "Teammates' merged commits could not trigger production deployments on the team's Vercel plan (shown as \"Blocked\"), so I shipped their changes by pushing \"chore: trigger deployment\" commits from my authorized account — 13 production deployments on election day, Sept 14, 2026.",
        ],
      },
      {
        heading: "What I did",
        items: [
          "Main handler of continuous deployment to Vercel on election day (Sept 14)",
          "Performed live production redeployments as teammates' changes were merged",
          "QA of production deployments during shift, before handoff to the next shift",
        ],
      },
    ],
    credit:
      "The GitHub Actions CI pipeline, server caching, and Playwright automation were built by a teammate.",
    links: [
      {
        label: "Live portal",
        href: "https://namfrel-barmm2026.apc.edu.ph/",
      },
    ],
  },
  {
    slug: "xlm-jud-thesis",
    label: "Undergraduate thesis",
    status: "AY 2026–2027",
    title: "XLM-JUD: Dialect-Aware Smishing Detection",
    summary:
      "A study of whether NLLB-200 back-translation improves XLM-RoBERTa smishing detection for Tagalog, Cebuano, and Ilocano text.",
    role: "Co-author — research and writing (with three teammates)",
    stack: [
      "Python",
      "XLM-RoBERTa",
      "Meta NLLB-200",
      "FLORES-200",
      "SVM",
      "Logistic Regression (TF-IDF)",
      "SMOTE",
    ],
    details: [
      {
        heading: "Problem",
        items: [
          "Smishing detection in the Philippines is hampered by scarce, imbalanced datasets and Tagalog, Cebuano, and Ilocano text that English-trained filters misread.",
        ],
      },
      {
        heading: "Approach",
        items: [
          "Compared original XLM-RoBERTa, XLM-JUD (XLM-RoBERTa trained with NLLB-200 back-translation augmentation), and classical baselines, with and without SMOTE.",
        ],
      },
      {
        heading: "Results (hold-out test set of 11,603 messages)",
        items: [
          "Original XLM-RoBERTa: accuracy 98.61%, Macro-F1 0.9849, MCC 0.9698",
          "XLM-JUD: accuracy 98.19%, Macro-F1 0.9802, MCC 0.9606",
          "Classical baselines: Macro-F1 0.9373–0.9561",
          "Back-translation did not improve classification (210 vs. 161 errors; McNemar's test p < 0.001). SMOTE also lowered classical-model performance.",
        ],
      },
      {
        heading: "Limitations",
        items: [
          "Cebuano and Ilocano test subsets contained only legitimate messages",
          "Back-translated data not independently verified",
          "Single training run",
        ],
      },
      {
        heading: "Why it matters",
        items: [
          "A rigorous negative result — the study reports what the data showed, not what was hoped.",
        ],
      },
    ],
    credit:
      "My contribution was research and writing; I did not write the model code.",
  },
];
