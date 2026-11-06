# Portfolio Content — ezgalauran.dev

Status: **v2.3 — Dorotheo groups confirmed Nov 7, 2026; rewritten Nov 6**  from the Dorotheo Jira export (DDCMS, 180 issues) and the Motor Tracking PRD v2.9.
Rule: everything here is confirmed by Ezekiel, his Jira board, his PRD, his resume, his thesis paper, or his Vercel screenshots. No open [CONFIRM] items remain as of Nov 7. Anything Ezekiel adds later must be confirmed first.

---

## Identity

- **Name:** Ezekiel Galauran
- **Title:** CS Student & Software Developer
- **Tagline:** I build full-stack web applications and take them all the way to production.
- **Tone:** Formal
- **Target roles:** Full-stack development, DevOps
- **Long-term direction:** DevSecOps and technical leadership

### About

I am a fourth-year Computer Science student specializing in Software Systems at Asia Pacific College, and an intern in the Optum Student Advocate Program under the Early Careers team.

I build full-stack applications end to end — data model, API, interface — and I carry them through to production. My largest project is a clinic management system for a dental practice, where I led a five-person team and worked on the backend, the Next.js portals, and the deployment across Vercel, Railway, and Azure. I also designed, built, and maintain on my own an asset-tracking application that field technicians use with live company data.

Deployment is the part of the work I am most confident in. I have shipped applications to Vercel, Railway, Azure, and Neon, and I have handled live production deployments where downtime was not an option.

I hold my work to one standard: complete, polished, and working exactly as expected. My goal is to grow into a DevSecOps and technical leadership role.

---

## Featured Projects (in this order)

### 1. Dorotheo Dental Clinic Management System

- **Card label:** Client system · Team of 5
- **Status badge:** Preparing for clinic rollout (confirmed by Ezekiel, Nov 7)
- **Dates:** March 2025 – March 2026 (confirmed by Ezekiel; the Jira board covers only one term of it)
- **Role:** Project Manager & Full-Stack Developer
- **Summary:** A multi-portal platform for a real dental practice — patients, staff, and the clinic owner — covering scheduling, clinical records, billing, inventory, and an AI chat assistant, with an audit trail on every change to patient data.
- **Card highlights (visible without expanding):**
  - Led a team of 5 as Project Manager and full-stack developer
  - Django REST backend: 26-model schema, 27 serializers, append-only audit trail
  - Deployed across Vercel, Railway, and Azure
- **Stack:** Django, Django REST Framework, PostgreSQL, Next.js 15, TypeScript, shadcn/ui, Redis, Resend, Sentry, Azure Blob Storage, Docker

**What I did** (expanded view, grouped; all groups confirmed by Ezekiel Nov 7, with the frontend shared equally with one teammate):

*Project management*
- Led a team of five developers
- Wrote sections of the Software Requirements Specification (assumptions and dependencies, design constraints, external interfaces)

*Backend architecture*
- Initialized the Django REST Framework project and designed a custom user model supporting four roles
- Designed a 26-model schema delivered through 36 migrations, with multi-clinic location support across all models
- Implemented 27 serializers with custom validation and 9 management commands for operations and compliance tasks
- Refactored appointment status logic into a dedicated 8-state state-machine service, and centralized booking rules in a validation service
- Configured the middleware stack (CORS, auditing, security) and a customized Django admin with an audit dashboard

*Security and compliance*
- JWT authentication and role-based access control across all API surfaces
- Append-only audit trail designed around HIPAA audit requirements: pre/post-save signal handlers on 8 models, read-access decorators, and an asynchronous logging engine
- Rate limiting on authentication endpoints, strong password validation, token-based password reset, and session timeout on the frontend

*Clinical, scheduling, and billing features*
- Interactive 32-tooth SVG dental chart with per-tooth status tracking
- Treatment plans, dental records, clinical document and X-ray uploads, and patient record export
- Staff and dentist availability, blocked time slots, and a two-way appointment modification request system
- Full invoicing system: 3-step invoice wizard, multi-invoice payment allocation, and PDF invoices generated with WeasyPrint
- Owner analytics dashboard backed by ORM aggregation utilities; inventory management with low-stock alerts
- Query and pagination optimization on key pages

*Frontend (shared roughly equally with one other developer)*
- Co-built the Next.js 15 App Router frontend in TypeScript with shadcn/ui: 47 page routes across patient, staff, and owner portals
- Three role-based dashboard layouts, auth context with role-based routing, and a clinic selector for multi-location use
- Centralized API client with 80+ typed methods and TypeScript types for every API entity
- Notification bell with 30-second polling, public landing page, and patient self-registration

*Integrations and operations*
- Transactional email through a custom Django email backend for the Resend API
- Error monitoring and performance tracing with Sentry
- Redis caching with an in-memory fallback
- Media storage on Azure Blob Storage with per-file-type cache policies
- Set up the Gemini API for the clinic's chatbot: when the free tier kept running out of requests, moved it to the paid tier using Google Cloud free credits, and connected it to the Azure-hosted backend (SSH access and configuration so it ran in the deployment)

*Deployment*
- Frontend on Vercel
- Django backend deployed three ways: Vercel serverless (WSGI handler), Railway (Nixpacks, Procfile, release scripts), and Azure Web Apps — plus a Dockerfile for containerized deployment
- Environment configuration, monitoring, and logging for production
- **Lesson learned:** response times depended heavily on the hosting tier — free tiers were noticeably slower than the Azure tier — so performance claims have to be tied to where the system actually runs.

**Privacy rule:** No patient data and no screenshots of real records.

---

### 2. Motor Tool & Sub-Component Pumping Hour Tracking System

- **Card label:** Independent project · Sole developer
- **Status badge:** In production use
- **Dates:** March 2026 – present
- **Summary:** Field technicians swap motor sub-components between motors constantly, so no one could tell how many hours an individual part had run. This system tracks every part's lifetime pumping hours across every motor it has been assembled into.
- **Card highlights:**
  - Built, deployed, and maintain it alone; in use by field technicians in Abu Dhabi
  - Transactional hour cascade from each motor to its assembled parts
  - Next.js + Prisma on Vercel, with Neon Postgres in the same region
- **Stack:** Next.js 15, React 19, TypeScript, Prisma, Neon Postgres, NextAuth, Vercel Blob, pdf-lib, Tailwind CSS, Vitest

**What I did:**

*Domain logic*
- Hour entry on a motor cascades atomically: the motor total, the hour log, and every assembled sub-component's lifetime hours update in a single transaction or not at all
- A second, isolated logging mode for part-only adjustments that never touches the motor's totals
- Assembly rules enforced in code: a part can have only one active assembly, and terminal statuses (lost in hole, scrap, quarantine) block assembly

*Data model*
- Four first-class asset categories: Motor, Stator, Rotor, and Motor Sleeve
- Replaced fragmented status fields with a single 11-code status taxonomy taken from field operations, rendered consistently everywhere from one shared definition
- Edit audit log recording previous and next values for every tracked motor field

*Security*
- NextAuth credentials authentication with JWT sessions and bcrypt-hashed passwords; every route protected by middleware
- Private file storage on Vercel Blob, served only through an authenticated proxy
- Destructive actions (hard delete, full disassembly) require server-side guard checks and an explicit confirmation step

*Features*
- Search-first navigation across all four asset categories
- File attachments (PDFs, photos, reports, videos) with an in-app viewer
- CSV and PDF export

*Infrastructure*
- Vercel and Neon Postgres co-located in Frankfurt (eu-central-1)
- Prisma with runtime adapter switching: SQLite in development, Postgres in production, with migrations maintained for both
- Scheduled keep-alive ping every 4–5 minutes to keep the Neon database warm
- Release process requires lint, build, and the Vitest test suite to pass before deploying

*Process*
- Maintained a formal PRD through nine versions (v2.1–v2.9), reconciling the document against the codebase at each release

**Privacy rule:** No live link, no screenshots, no user names or emails.

---

### 3. XLM-JUD: Dialect-Aware Smishing Detection (Thesis)
- **Card label:** Undergraduate thesis · AY 2026–2027
- **Role:** Co-author — research and writing (did not write the model code)
- **Stack:** Python, XLM-RoBERTa, Meta NLLB-200, FLORES-200, SVM and Logistic Regression (TF-IDF), SMOTE
- **Problem:** Smishing detection in the Philippines is hampered by scarce, imbalanced datasets and Tagalog, Cebuano, and Ilocano text that English-trained filters misread.
- **Approach:** Compared original XLM-RoBERTa, XLM-JUD (XLM-RoBERTa trained with NLLB-200 back-translation augmentation), and classical baselines, with and without SMOTE.
- **Results (hold-out test set of 11,603 messages):**
  - Original XLM-RoBERTa: accuracy 98.61%, Macro-F1 0.9849, MCC 0.9698
  - XLM-JUD: accuracy 98.19%, Macro-F1 0.9802, MCC 0.9606
  - Classical baselines: Macro-F1 0.9373–0.9561
  - Back-translation did not improve classification (210 vs. 161 errors; McNemar's test p < 0.001). SMOTE also lowered classical-model performance.
- **Limitations:** Cebuano and Ilocano test subsets contained only legitimate messages; back-translated data not independently verified; single training run.
- **Why it matters:** A rigorous negative result — the study reports what the data showed, not what was hoped.

### (v2) E-Ksena — Azure DevOps pipeline
- Pending pipeline files. Do not publish yet.

**Removed from projects:** the NAMFREL card. It was a role, not a project, and it now lives only under Experience (avoids saying the same thing three times).

---

## NEW SECTION — Deployment & Infrastructure

Placed between Projects and Experience. Intro line: "Where my work runs, and what I did on each platform."
Render as a list of platform rows (platform name in mono, what I did, where). No logos, no ratings.

| Platform | What I did | Where |
|---|---|---|
| Vercel | Production deployments for Next.js frontends and a Django backend (serverless WSGI); custom domains; live redeploys during a high-traffic event | Dorotheo Dental, Motor Tracker, NAMFREL portal, this site |
| Railway | Deployed the Django backend with Nixpacks, a Procfile, and release scripts | Dorotheo Dental |
| Azure | Django backend on Azure Web Apps; media on Azure Blob Storage with per-type cache policies; Gemini API connected to the Azure-hosted backend over SSH | Dorotheo Dental |
| Neon | Serverless Postgres co-located with Vercel in Frankfurt, keep-alive scheduling, migrations | Motor Tracker |
| Supabase | Managed PostgreSQL for the Django backend, with a SQLite fallback for local development | Dorotheo Dental |
| Docker | Dockerfile for containerized backend deployment | Dorotheo Dental |
| Observability | Sentry error monitoring and tracing; production logging | Dorotheo Dental |
| Email & DNS | Resend transactional email, including domain authentication records (SPF, DKIM, DMARC) | Dorotheo Dental, ezgalauran.dev |

---

## Experience

### Optum — Student Advocate Program
- **Role:** Intern, Early Careers
- **Dates:** November 2026 – Present
- **Text:** Started November 5, 2026. (No accomplishments until work is performed.)

### APC × NAMFREL — 2026 BARMM Parliamentary Elections
- **Role:** DevOps & Infrastructure (Sub-Team 4) — Production Deployment
- **Dates:** September 2026
- **Context (one line):** APC served as the NAMFREL Election Data Analytics Center for the September 14–15 elections.
- **Bullets (three only, no duplicates):**
  - Handled continuous deployment of the live election portal on Vercel through election day
  - Shipped 13 production deployments on September 14, including teammates' changes that the team's Vercel plan blocked from deploying — pushed through trigger commits from my authorized account
  - Verified each production deployment during my shift before handing off to the next shift
- **Link:** https://namfrel-barmm2026.apc.edu.ph/
- **Do not claim:** GitHub Actions CI pipeline, server caching, Playwright automation (teammates' work).

---

## Leadership (unchanged)

| Role | Organization | Dates |
|---|---|---|
| Vice President | APC Band | Jul 2026 – Present |
| Internal Vice President | APC Microsoft Community (APC-MSC) | Nov 2025 – Jun 2026 |
| Executive Director of Events and Programs | APC Microsoft Community (APC-MSC) | Nov 2024 – Jun 2025 |
| Assistant Director of Operations | JPCS – APC | Nov 2024 – Jun 2025 |

Speaking & hosting: Speaker, Microsoft Sandbox: Building Your Startup with Microsoft 365; Speaker, SoCIT Officer Workshop 2025; Host, Microsoft Learn Student Ambassador event.

## Education (unchanged)

- **BS Computer Science, Software Systems** — Asia Pacific College, Makati City · August 2023 – August 2027 (expected)
- Honor's List — AY 2023–2024, 2024–2025
- Relevant coursework: Cybersecurity, Database Management, Systems Analysis & Design, Threat Detection Analysis, Software/System Development
- Certification: OCI 2025 AI Foundations Associate — Oracle, November 2025

---

## Skills (honest presentation — no levels or bars)

Self-assessment: most confident in CI/CD and production deployment.

- **Deployment & infra:** Vercel, Railway, Azure Web Apps, Azure Blob Storage, Azure DevOps, Neon, Docker, GitHub Actions, Linux, SSH, Proxmox, LXC
- **Backend:** Django, Django REST Framework, Python, PostgreSQL, Prisma, Redis
- **Frontend:** Next.js, React, TypeScript, JavaScript, Tailwind CSS, shadcn/ui
- **Security:** JWT, RBAC, audit logging, rate limiting, NextAuth, VAPT (coursework)
- **Tooling:** Git, GitHub, Jira, Sentry, Resend, Vitest
- **Other:** SQL, C++, NLP research (XLM-RoBERTa)

## Links
- GitHub: https://github.com/apcedgalauran
- LinkedIn: https://www.linkedin.com/in/ezekiel-galauran/
- Email: ezekielgalauran@gmail.com
- Domain: https://ezgalauran.dev
