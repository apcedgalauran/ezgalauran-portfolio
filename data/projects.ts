import type { Project } from "../lib/types";

// Source: docs/portfolio-content.md (v2.3) → Featured Projects (1–3).
export const projects: Project[] = [
  {
    slug: "dorotheo-dental",
    label: "Client system · Team of 5",
    status: "Preparing for clinic rollout",
    title: "Dorotheo Dental Clinic Management System",
    dates: "March 2025 – March 2026",
    summary:
      "A multi-portal platform for a real dental practice — patients, staff, and the clinic owner — covering scheduling, clinical records, billing, inventory, and an AI chat assistant, with an audit trail on every change to patient data.",
    role: "Project Manager & Full-Stack Developer",
    highlights: [
      "Led a team of 5 as Project Manager and full-stack developer",
      "Django REST backend: 26-model schema, 27 serializers, append-only audit trail",
      "Deployed across Vercel, Railway, and Azure",
    ],
    stack: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
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
          "Wrote sections of the Software Requirements Specification (assumptions and dependencies, design constraints, external interfaces)",
        ],
      },
      {
        heading: "Backend architecture",
        items: [
          "Initialized the Django REST Framework project and designed a custom user model supporting four roles",
          "Designed a 26-model schema delivered through 36 migrations, with multi-clinic location support across all models",
          "Implemented 27 serializers with custom validation and 9 management commands for operations and compliance tasks",
          "Refactored appointment status logic into a dedicated 8-state state-machine service, and centralized booking rules in a validation service",
          "Configured the middleware stack (CORS, auditing, security) and a customized Django admin with an audit dashboard",
        ],
      },
      {
        heading: "Security and compliance",
        items: [
          "JWT authentication and role-based access control across all API surfaces",
          "Append-only audit trail designed around HIPAA audit requirements: pre/post-save signal handlers on 8 models, read-access decorators, and an asynchronous logging engine",
          "Rate limiting on authentication endpoints, strong password validation, token-based password reset, and session timeout on the frontend",
        ],
      },
      {
        heading: "Clinical, scheduling, and billing features",
        items: [
          "Interactive 32-tooth SVG dental chart with per-tooth status tracking",
          "Treatment plans, dental records, clinical document and X-ray uploads, and patient record export",
          "Staff and dentist availability, blocked time slots, and a two-way appointment modification request system",
          "Full invoicing system: 3-step invoice wizard, multi-invoice payment allocation, and PDF invoices generated with WeasyPrint",
          "Owner analytics dashboard backed by ORM aggregation utilities; inventory management with low-stock alerts",
          "Query and pagination optimization on key pages",
        ],
      },
      {
        heading: "Frontend (shared roughly equally with one other developer)",
        items: [
          "Co-built the Next.js 15 App Router frontend in TypeScript with shadcn/ui: 47 page routes across patient, staff, and owner portals",
          "Three role-based dashboard layouts, auth context with role-based routing, and a clinic selector for multi-location use",
          "Centralized API client with 80+ typed methods and TypeScript types for every API entity",
          "Notification bell with 30-second polling, public landing page, and patient self-registration",
        ],
      },
      {
        heading: "Integrations and operations",
        items: [
          "Transactional email through a custom Django email backend for the Resend API",
          "Error monitoring and performance tracing with Sentry",
          "Redis caching with an in-memory fallback",
          "Media storage on Azure Blob Storage with per-file-type cache policies",
          "Set up the Gemini API for the clinic's chatbot: when the free tier kept running out of requests, moved it to the paid tier using Google Cloud free credits, and connected it to the Azure-hosted backend (SSH access and configuration so it ran in the deployment)",
        ],
      },
      {
        heading: "Deployment",
        items: [
          "Frontend on Vercel",
          "Django backend deployed three ways: Vercel serverless (WSGI handler), Railway (Nixpacks, Procfile, release scripts), and Azure Web Apps — plus a Dockerfile for containerized deployment",
          "Environment configuration, monitoring, and logging for production",
        ],
        note: {
          label: "Lesson learned",
          text: "response times depended heavily on the hosting tier — free tiers were noticeably slower than the Azure tier — so performance claims have to be tied to where the system actually runs.",
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
      "Field technicians swap motor sub-components between motors constantly, so no one could tell how many hours an individual part had run. This system tracks every part's lifetime pumping hours across every motor it has been assembled into.",
    highlights: [
      "Built, deployed, and maintain it alone; in use by field technicians in Abu Dhabi",
      "Transactional hour cascade from each motor to its assembled parts",
      "Next.js + Prisma on Vercel, with Neon Postgres in the same region",
    ],
    // From the content doc's privacy rule ("No live link, no screenshots"),
    // shown on the card at Ezekiel's request (Nov 7).
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
        heading: "Domain logic",
        items: [
          "Hour entry on a motor cascades atomically: the motor total, the hour log, and every assembled sub-component's lifetime hours update in a single transaction or not at all",
          "A second, isolated logging mode for part-only adjustments that never touches the motor's totals",
          "Assembly rules enforced in code: a part can have only one active assembly, and terminal statuses (lost in hole, scrap, quarantine) block assembly",
        ],
      },
      {
        heading: "Data model",
        items: [
          "Four first-class asset categories: Motor, Stator, Rotor, and Motor Sleeve",
          "Replaced fragmented status fields with a single 11-code status taxonomy taken from field operations, rendered consistently everywhere from one shared definition",
          "Edit audit log recording previous and next values for every tracked motor field",
        ],
      },
      {
        heading: "Security",
        items: [
          "NextAuth credentials authentication with JWT sessions and bcrypt-hashed passwords; every route protected by middleware",
          "Private file storage on Vercel Blob, served only through an authenticated proxy",
          "Destructive actions (hard delete, full disassembly) require server-side guard checks and an explicit confirmation step",
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
        heading: "Infrastructure",
        items: [
          "Vercel and Neon Postgres co-located in Frankfurt (eu-central-1)",
          "Prisma with runtime adapter switching: SQLite in development, Postgres in production, with migrations maintained for both",
          "Scheduled keep-alive ping every 4–5 minutes to keep the Neon database warm",
          "Release process requires lint, build, and the Vitest test suite to pass before deploying",
        ],
      },
      {
        heading: "Process",
        items: [
          "Maintained a formal PRD through nine versions (v2.1–v2.9), reconciling the document against the codebase at each release",
        ],
      },
    ],
  },
  {
    slug: "xlm-jud-thesis",
    label: "Undergraduate thesis · AY 2026–2027",
    title: "XLM-JUD: Dialect-Aware Smishing Detection",
    // The content doc has no separate summary line for the thesis; its
    // Problem statement serves as the card's one-line summary.
    summary:
      "Smishing detection in the Philippines is hampered by scarce, imbalanced datasets and Tagalog, Cebuano, and Ilocano text that English-trained filters misread.",
    role: "Co-author — research and writing (did not write the model code)",
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
          "Cebuano and Ilocano test subsets contained only legitimate messages; back-translated data not independently verified; single training run.",
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
