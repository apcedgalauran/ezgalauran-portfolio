import type { Project } from "../lib/types";
import { namfrel } from "./namfrel.ts";

// Source: docs/portfolio-content.md (v2.4) → Featured Projects (1–5).
export const projects: Project[] = [
  {
    slug: "dorotheo-dental",
    label: "Client system · Team of 5",
    status: "Preparing for clinic rollout",
    title: "Dorotheo Dental Clinic Management System",
    dates: "March 2025 – March 2026",
    summary:
      "A multi-portal platform for a real dental practice — patients, staff, and the clinic owner — covering scheduling, clinical records, billing, inventory, and an AI chat assistant, with every change to patient data audited.",
    role: "Project Manager & Full-Stack Developer",
    highlights: [
      "Led a five-person team as Project Manager and full-stack developer",
      "Django REST backend: 26-model schema, 27 serializers, append-only audit trail",
      "Deployed across Vercel, Railway, and Azure",
    ],
    stack: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Supabase",
      "Next.js 15",
      "TypeScript",
      "shadcn/ui",
      "Redis",
      "Resend",
      "Sentry",
      "Azure Blob Storage",
      "Docker",
    ],
    detailsHeading: "What I did",
    details: [
      {
        heading: "Project management",
        items: [
          "Led a team of five developers",
          "Wrote sections of the Software Requirements Specification: assumptions and dependencies, design constraints, and external interfaces",
        ],
      },
      {
        heading: "Backend and security",
        items: [
          "Initialized the Django REST Framework project: custom user model for four roles, middleware stack (CORS, auditing, security), and a customized Django admin with an audit dashboard",
          "Designed a 26-model schema across 36 migrations, with multi-clinic support in every model",
          "Built 27 serializers with custom validation and 9 management commands for operations and compliance",
          "Moved appointment status logic into an 8-state state-machine service and centralized booking rules in a validation service",
          "JWT authentication and role-based access control on every API surface; rate-limited authentication, strong password validation, token-based password reset, and frontend session timeout",
          "Append-only audit trail designed around HIPAA audit requirements: pre/post-save signal handlers on 8 models, read-access decorators, and an asynchronous logging engine",
        ],
      },
      {
        heading: "Clinical, scheduling, and billing",
        items: [
          "Interactive 32-tooth SVG dental chart with per-tooth status tracking",
          "Treatment plans, dental records, clinical document and X-ray uploads, and patient record export",
          "Staff and dentist availability, blocked time slots, and two-way appointment change requests",
          "Invoicing: 3-step invoice wizard, multi-invoice payment allocation, and PDF invoices generated with WeasyPrint",
          "Owner analytics dashboard built on ORM aggregation, and inventory management with low-stock alerts",
          "Query and pagination optimization on key pages",
        ],
      },
      {
        heading: "Frontend (shared roughly equally with one other developer)",
        items: [
          "Co-built the Next.js 15 App Router frontend in TypeScript with shadcn/ui: 47 page routes across the patient, staff, and owner portals",
          "Three role-based dashboard layouts, role-based routing, and a clinic selector for multi-location use",
          "Centralized API client with 80+ typed methods and TypeScript types for every API entity",
          "Notification bell with 30-second polling, a public landing page, and patient self-registration",
        ],
      },
      {
        heading: "Integrations and deployment",
        items: [
          "Frontend on Vercel; Django backend deployed three ways — Vercel serverless (WSGI handler), Railway (Nixpacks, Procfile, release scripts), and Azure Web Apps — plus a Dockerfile for containerized deployment",
          "Transactional email through a custom Django email backend for the Resend API, with SPF, DKIM, and DMARC domain authentication records",
          "Sentry error monitoring and performance tracing, plus production environment configuration and logging",
          "Redis caching with an in-memory fallback; media on Azure Blob Storage with per-file-type cache policies",
          "Gemini API for the clinic's chatbot: moved it to the paid tier on Google Cloud free credits when the free tier kept running out, and configured it over SSH on the Azure-hosted backend",
        ],
        note: {
          label: "Lesson learned",
          text: "Response times depended heavily on the hosting tier — free tiers were noticeably slower than Azure — so performance claims must be tied to where the system actually runs.",
        },
      },
    ],
  },
  {
    slug: "motor-hour-tracker",
    label: "Independent project · Sole developer",
    status: "In production use",
    title: "Motor Tool & Sub-Component Pumping Hour Tracking System",
    dates: "March 2026 – present",
    summary:
      "Field technicians constantly move sub-components between motors, so no one could tell how many hours an individual part had run. This system tracks each part's lifetime pumping hours across every motor it has been assembled into.",
    highlights: [
      "Built, deployed, and maintain it alone; used by field technicians in Abu Dhabi",
      "Transactional hour cascade from each motor to its assembled parts",
      "Next.js and Prisma on Vercel, with Neon Postgres in the same region",
    ],
    // Privacy rule: no live link and no screenshots (live company data).
    note: "No public link or screenshots, because the application holds live company data.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Prisma",
      "Neon Postgres",
      "NextAuth",
      "Vercel Blob",
      "pdf-lib",
      "Tailwind CSS",
      "Vitest",
    ],
    detailsHeading: "What I did",
    details: [
      {
        heading: "Domain logic and data model",
        items: [
          "Logging hours on a motor updates the motor total, the hour log, and every assembled sub-component's lifetime hours in a single transaction, or not at all",
          "A separate part-only logging mode that never touches motor totals",
          "Assembly rules enforced in code: one active assembly per part, and terminal statuses (lost in hole, scrap, quarantine) block assembly",
          "Four asset categories: Motor, Stator, Rotor, and Motor Sleeve",
          "One 11-code status taxonomy from field operations replaced fragmented status fields, defined once and rendered consistently everywhere",
          "Edit audit log with previous and next values for every tracked motor field",
        ],
      },
      {
        heading: "Security",
        items: [
          "NextAuth credentials authentication with JWT sessions and bcrypt-hashed passwords; middleware protects every route",
          "Private file storage on Vercel Blob, served only through an authenticated proxy",
          "Hard deletes and full disassembly require server-side guard checks and an explicit confirmation step",
        ],
      },
      {
        heading: "Features",
        items: [
          "Search-first navigation across all four asset categories",
          "File attachments (PDFs, photos, reports, videos) with an in-app viewer",
          "CSV and PDF export",
        ],
      },
      {
        heading: "Infrastructure and process",
        items: [
          "Vercel and Neon Postgres co-located in Frankfurt (eu-central-1)",
          "Prisma with runtime adapter switching — SQLite in development, Postgres in production — with migrations maintained for both",
          "Scheduled keep-alive ping every 4–5 minutes keeps the Neon database warm",
          "Lint, build, and the Vitest test suite must pass before every deploy",
          "Formal PRD maintained through nine versions (v2.1–v2.9), reconciled against the codebase at each release",
        ],
      },
    ],
  },
  {
    slug: "namfrel-election-portal",
    label: "APC × NAMFREL · Sub-Team 4",
    status: "Completed",
    title: "NAMFREL Election Portal",
    dates: "September 2026",
    // Shared with the Experience entry so the wording is identical in both.
    summary: namfrel.summary,
    role: namfrel.role,
    stack: ["Vercel", "Git", "GitHub"],
    details: [
      { heading: "What I did", items: namfrel.points },
      { heading: "Team context", items: [namfrel.teamContext] },
    ],
    links: [namfrel.link],
  },
  {
    slug: "e-ksena",
    label: "Team project · Deployment owner",
    // Neutral badge: never "live" or "in production" (CLAUDE.md rule 2).
    status: "Project",
    title: "E-ksena: Deployment & CI/CD",
    summary:
      "I built the team's Azure DevOps pipeline (build, test, deploy). I was not a developer on the application itself.",
    role: "Deployment & CI/CD",
    highlights: [
      "Backend on Railway and frontend on Vercel, deploying automatically from GitHub",
      "Diagnosed and documented fixes for 12 build and deploy failures in an Azure DevOps pipeline",
      "Wrote a handover guide so the environment could be rebuilt",
    ],
    stack: [
      "Railway",
      "Vercel",
      "GitHub",
      "Azure DevOps",
      "Windows Server",
      "IIS",
    ],
    details: [
      {
        heading: "What I did",
        items: [
          "Set up the backend on Railway and the frontend on Vercel, both deploying automatically from the team's Web-app branch on GitHub.",
          "Earlier built an Azure DevOps pipeline that builds the Expo web app and deploys to IIS on a self-hosted Windows Server VM; diagnosed and documented fixes for 12 build and deploy failures, then moved to Railway and Vercel when the Azure credit ran out.",
          "Wrote a handover guide so the environment could be rebuilt.",
        ],
      },
    ],
  },
  {
    slug: "xlm-jud-thesis",
    label: "Undergraduate thesis",
    status: "Completed",
    title: "XLM-JUD: Dialect-Aware Smishing Detection",
    // The content doc's Problem statement serves as the card's summary.
    summary:
      "Smishing detection in the Philippines is hampered by scarce, imbalanced datasets and by Tagalog, Cebuano, and Ilocano text that English-trained filters misread.",
    role: "Co-author, research and writing",
    highlights: [
      "Co-authored the paper, helped interpret the results, and handled dataset-related tasks as the team needed.",
    ],
    // What the study covered, not what Ezekiel built (no coding claimed).
    stackLabel: "Methods",
    stack: [
      "Python",
      "XLM-RoBERTa",
      "Meta NLLB-200",
      "FLORES-200",
      "SVM and Logistic Regression (TF-IDF)",
      "SMOTE",
    ],
    details: [
      {
        heading: "Approach",
        items: [
          "Compared the original XLM-RoBERTa, XLM-JUD (XLM-RoBERTa trained with NLLB-200 back-translation augmentation), and classical baselines, with and without SMOTE.",
        ],
      },
      {
        heading: "Results (hold-out test set of 11,603 messages)",
        items: [
          "Original XLM-RoBERTa: accuracy 98.61%, Macro-F1 0.9849, MCC 0.9698",
          "XLM-JUD: accuracy 98.19%, Macro-F1 0.9802, MCC 0.9606",
          "Classical baselines: Macro-F1 0.9373–0.9561",
          "Back-translation did not improve classification (210 vs. 161 errors; McNemar's test p < 0.001), and SMOTE lowered classical-model performance.",
        ],
      },
      {
        heading: "Limitations",
        items: [
          "Cebuano and Ilocano test subsets contained only legitimate messages",
          "Back-translated data was not independently verified",
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
  },
];
