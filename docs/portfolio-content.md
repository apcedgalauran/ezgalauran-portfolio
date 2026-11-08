# Portfolio Content — ezgalauran.dev

Status: **v2.4 — Nov 8, 2026 decisions applied** (full-stack positioning, polished wording, Deployment & Infrastructure section removed, NAMFREL and E-ksena cards added, thesis marked completed). Earlier: v2.3, Dorotheo groups confirmed Nov 7; rewritten Nov 6 from the Dorotheo Jira export (DDCMS, 180 issues) and the Motor Tracking PRD v2.9.
Rule: everything here is confirmed by Ezekiel, his Jira board, his PRD, his resume, his thesis paper, or his Vercel screenshots. Anything Ezekiel adds later must be confirmed first.

---

## Identity

- **Name:** Ezekiel Galauran
- **Title:** CS Student & Software Developer
- **Tagline:** I build full-stack web applications and take them all the way to production.
- **Tone:** Formal
- **Target roles:** Software engineering, full-stack development

### About

I am a fourth-year Computer Science student specializing in Software Systems at Asia Pacific College, and an intern in the Optum Student Advocate Program under the Early Careers team.

I build full-stack web applications end to end — data model, API, and interface — and carry them through to production. My largest project is a clinic management system for a dental practice, where I led a five-person team and worked on the backend, the Next.js portals, and deployment across Vercel, Railway, and Azure. I also designed, built, and maintain on my own an asset-tracking application that field technicians use with live company data.

I hold my work to one standard: complete, polished, and working exactly as expected.

---

## Featured Projects (in this order)

### 1. Dorotheo Dental Clinic Management System

- **Card label:** Client system · Team of 5
- **Status badge:** Preparing for clinic rollout (confirmed by Ezekiel, Nov 7)
- **Dates:** March 2025 – March 2026 (confirmed by Ezekiel; the Jira board covers only one term of it)
- **Role:** Project Manager & Full-Stack Developer
- **Summary:** A multi-portal platform for a real dental practice — patients, staff, and the clinic owner — covering scheduling, clinical records, billing, inventory, and an AI chat assistant, with every change to patient data audited.
- **Card highlights (visible without expanding):**
  - Led a five-person team as Project Manager and full-stack developer
  - Django REST backend: 26-model schema, 27 serializers, append-only audit trail
  - Deployed across Vercel, Railway, and Azure
- **Stack:** Django, Django REST Framework, PostgreSQL, Supabase, Next.js 15, TypeScript, shadcn/ui, Redis, Resend, Sentry, Azure Blob Storage, Docker

**What I did** (expanded view; frontend shared roughly equally with one teammate):

*Project management*
- Led a team of five developers
- Wrote sections of the Software Requirements Specification: assumptions and dependencies, design constraints, and external interfaces

*Backend and security*
- Initialized the Django REST Framework project: custom user model for four roles, middleware stack (CORS, auditing, security), and a customized Django admin with an audit dashboard
- Designed a 26-model schema across 36 migrations, with multi-clinic support in every model
- Built 27 serializers with custom validation and 9 management commands for operations and compliance
- Moved appointment status logic into an 8-state state-machine service and centralized booking rules in a validation service
- JWT authentication and role-based access control on every API surface; rate-limited authentication, strong password validation, token-based password reset, and frontend session timeout
- Append-only audit trail designed around HIPAA audit requirements: pre/post-save signal handlers on 8 models, read-access decorators, and an asynchronous logging engine

*Clinical, scheduling, and billing*
- Interactive 32-tooth SVG dental chart with per-tooth status tracking
- Treatment plans, dental records, clinical document and X-ray uploads, and patient record export
- Staff and dentist availability, blocked time slots, and two-way appointment change requests
- Invoicing: 3-step invoice wizard, multi-invoice payment allocation, and PDF invoices generated with WeasyPrint
- Owner analytics dashboard built on ORM aggregation, and inventory management with low-stock alerts
- Query and pagination optimization on key pages

*Frontend (shared roughly equally with one other developer)*
- Co-built the Next.js 15 App Router frontend in TypeScript with shadcn/ui: 47 page routes across the patient, staff, and owner portals
- Three role-based dashboard layouts, role-based routing, and a clinic selector for multi-location use
- Centralized API client with 80+ typed methods and TypeScript types for every API entity
- Notification bell with 30-second polling, a public landing page, and patient self-registration

*Integrations and deployment*
- Frontend on Vercel; Django backend deployed three ways — Vercel serverless (WSGI handler), Railway (Nixpacks, Procfile, release scripts), and Azure Web Apps — plus a Dockerfile for containerized deployment
- Transactional email through a custom Django email backend for the Resend API, with SPF, DKIM, and DMARC domain authentication records
- Sentry error monitoring and performance tracing, plus production environment configuration and logging
- Redis caching with an in-memory fallback; media on Azure Blob Storage with per-file-type cache policies
- Gemini API for the clinic's chatbot: moved it to the paid tier on Google Cloud free credits when the free tier kept running out, and configured it over SSH on the Azure-hosted backend
- **Lesson learned:** Response times depended heavily on the hosting tier — free tiers were noticeably slower than Azure — so performance claims must be tied to where the system actually runs.

**Privacy rule:** No patient data and no screenshots of real records.

---

### 2. Motor Tool & Sub-Component Pumping Hour Tracking System

- **Card label:** Independent project · Sole developer
- **Status badge:** In production use
- **Dates:** March 2026 – present
- **Summary:** Field technicians constantly move sub-components between motors, so no one could tell how many hours an individual part had run. This system tracks each part's lifetime pumping hours across every motor it has been assembled into.
- **Card highlights:**
  - Built, deployed, and maintain it alone; used by field technicians in Abu Dhabi
  - Transactional hour cascade from each motor to its assembled parts
  - Next.js and Prisma on Vercel, with Neon Postgres in the same region
- **Card note:** No public link or screenshots, because the application holds live company data.
- **Stack:** Next.js 15, React 19, TypeScript, Prisma, Neon Postgres, NextAuth, Vercel Blob, pdf-lib, Tailwind CSS, Vitest

**What I did:**

*Domain logic and data model*
- Logging hours on a motor updates the motor total, the hour log, and every assembled sub-component's lifetime hours in a single transaction, or not at all
- A separate part-only logging mode that never touches motor totals
- Assembly rules enforced in code: one active assembly per part, and terminal statuses (lost in hole, scrap, quarantine) block assembly
- Four asset categories: Motor, Stator, Rotor, and Motor Sleeve
- One 11-code status taxonomy from field operations replaced fragmented status fields, defined once and rendered consistently everywhere
- Edit audit log with previous and next values for every tracked motor field

*Security*
- NextAuth credentials authentication with JWT sessions and bcrypt-hashed passwords; middleware protects every route
- Private file storage on Vercel Blob, served only through an authenticated proxy
- Hard deletes and full disassembly require server-side guard checks and an explicit confirmation step

*Features*
- Search-first navigation across all four asset categories
- File attachments (PDFs, photos, reports, videos) with an in-app viewer
- CSV and PDF export

*Infrastructure and process*
- Vercel and Neon Postgres co-located in Frankfurt (eu-central-1)
- Prisma with runtime adapter switching — SQLite in development, Postgres in production — with migrations maintained for both
- Scheduled keep-alive ping every 4–5 minutes keeps the Neon database warm
- Lint, build, and the Vitest test suite must pass before every deploy
- Formal PRD maintained through nine versions (v2.1–v2.9), reconciled against the codebase at each release

**Privacy rule:** No live link, no screenshots, no user names or emails.

---

### 3. NAMFREL Election Portal

- **Card label:** APC × NAMFREL · Sub-Team 4
- **Status badge:** Completed
- **Dates:** September 2026
- **Role:** Production deployment, DevOps & Infrastructure
- **Summary:** Set up the production deployment of the live election-analytics portal for APC's NAMFREL Election Data Analytics Center, and served as the deployment contact for the 2026 BARMM Parliamentary Elections.
- **Stack:** Vercel, Git, GitHub
- **Link:** https://namfrel-barmm2026.apc.edu.ph/

**What I did** (approved by Ezekiel Nov 8; identical on the card, under Experience, and in the resume):
1. Created the Vercel project on the school's Vercel team, with access and approval from the web development team head. Connected the GitHub repository and configured the production environment variables, including the Supabase database connection.
2. Served as the deployment contact for the web development team head: kept the live site synced with the latest commits on main and confirmed each sync.
3. Enabled Vercel's built-in Web Analytics when the team asked for it.
4. Shipped 13 production deployments on September 14. When teammates' merged commits were blocked on the team's Vercel plan, I deployed their changes through trigger commits from my authorized account.
5. Verified each production deployment during my shift. A teammate took over deployment on September 15, when I was unavailable.

**Team context:** The domain and DNS were set up by others, and the CI pipeline, caching and Playwright automation were teammates' work.

**Do not claim:** the domain or DNS setup, the CI pipeline, caching, Playwright automation. Do not mention ITRO, do not use "lead"/"led" for his role, and add no usage numbers or visitor counts.

---

### 4. E-ksena: Deployment & CI/CD

- **Card label:** Team project · Deployment owner
- **Status badge:** Project
- **Dates:** none
- **Role:** Deployment & CI/CD
- **Summary:** I built the team's Azure DevOps pipeline (build, test, deploy). I was not a developer on the application itself.
- **Card highlights:**
  - Backend on Railway and frontend on Vercel, deploying automatically from GitHub
  - Diagnosed and documented fixes for 12 build and deploy failures in an Azure DevOps pipeline
  - Wrote a handover guide so the environment could be rebuilt
- **Stack:** Railway, Vercel, GitHub, Azure DevOps, Windows Server, IIS

**What I did** (expanded view):
- Set up the backend on Railway and the frontend on Vercel, both deploying automatically from the team's Web-app branch on GitHub.
- Earlier built an Azure DevOps pipeline that builds the Expo web app and deploys to IIS on a self-hosted Windows Server VM; diagnosed and documented fixes for 12 build and deploy failures, then moved to Railway and Vercel when the Azure credit ran out.
- Wrote a handover guide so the environment could be rebuilt.

**Do not claim:** app development, that E-ksena is live or in production, or that the Azure pipeline completed a deploy. Do not use the words "Scrum Master" or "staging"; no dates.

---

### 5. XLM-JUD: Dialect-Aware Smishing Detection (Thesis)
- **Card label:** Undergraduate thesis
- **Status badge:** Completed (no date)
- **Role:** Co-author, research and writing
- **Contribution (card highlight):** Co-authored the paper, helped interpret the results, and handled dataset-related tasks as the team needed.
- **Methods** (shown in place of a stack; what the study covered, not what Ezekiel built): Python, XLM-RoBERTa, Meta NLLB-200, FLORES-200, SVM and Logistic Regression (TF-IDF), SMOTE
- **Problem (card summary):** Smishing detection in the Philippines is hampered by scarce, imbalanced datasets and by Tagalog, Cebuano, and Ilocano text that English-trained filters misread.
- **Approach:** Compared the original XLM-RoBERTa, XLM-JUD (XLM-RoBERTa trained with NLLB-200 back-translation augmentation), and classical baselines, with and without SMOTE.
- **Results (hold-out test set of 11,603 messages):**
  - Original XLM-RoBERTa: accuracy 98.61%, Macro-F1 0.9849, MCC 0.9698
  - XLM-JUD: accuracy 98.19%, Macro-F1 0.9802, MCC 0.9606
  - Classical baselines: Macro-F1 0.9373–0.9561
  - Back-translation did not improve classification (210 vs. 161 errors; McNemar's test p < 0.001), and SMOTE lowered classical-model performance.
- **Limitations:**
  - Cebuano and Ilocano test subsets contained only legitimate messages
  - Back-translated data was not independently verified
  - Single training run
- **Why it matters:** A rigorous negative result — the study reports what the data showed, not what was hoped.
- **Do not claim:** any coding, or creating the datasets.

---

## Experience

### Optum — Student Advocate Program
- **Role:** Intern, Early Careers
- **Dates:** November 2026 – Present
- **Text:** Started November 5, 2026. (No accomplishments until work is performed.)

### APC × NAMFREL — 2026 BARMM Parliamentary Elections
- **Role:** Production deployment, DevOps & Infrastructure
- **Dates:** September 2026
- **Text:** Same summary, five "What I did" bullets and team context as project 3 (NAMFREL Election Portal), word for word.
- **Link:** https://namfrel-barmm2026.apc.edu.ph/
- **Resume:** NAMFREL appears once, under Experience.

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

Not rendered as a separate section; skills appear as stack tags on the projects where they were used.

- **Frontend:** Next.js, React, TypeScript, JavaScript, Tailwind CSS, shadcn/ui
- **Backend:** Django, Django REST Framework, Python, PostgreSQL, Prisma, Redis
- **Deployment & infra:** Vercel, Railway, Azure Web Apps, Azure Blob Storage, Azure DevOps, IIS, Windows Server, Neon, Supabase, Docker, GitHub Actions, Linux, SSH, Proxmox, LXC
- **Security:** JWT, RBAC, audit logging, rate limiting, NextAuth, VAPT (coursework)
- **Tooling:** Git, GitHub, Jira, Sentry, Resend, Vitest
- **Other:** SQL, C++, NLP research (XLM-RoBERTa)

## Links
- GitHub: https://github.com/apcedgalauran
- LinkedIn: https://www.linkedin.com/in/ezekiel-galauran/
- Email: ezekielgalauran@gmail.com
- Domain: https://ezgalauran.dev
