# Portfolio Content — ezgalauran.dev

Status: **v1 — design approved; content confirmed through Nov 6, 2026 answers**
Rule: everything here is confirmed by Ezekiel, his resume, his thesis paper, or his Vercel screenshots. Anything unconfirmed lives in `content-gaps.md`, not here.

---

## Identity

- **Name:** Ezekiel Galauran
- **Title:** CS Student & Software Developer
- **Tagline (draft):** I build full-stack web applications and the deployment infrastructure that keeps them running reliably in production.
- **Tone:** Formal
- **Target roles:** Full-stack development, DevOps
- **Long-term direction:** DevSecOps and technical leadership

### About (draft)

I am a fourth-year Computer Science student specializing in Software Systems at Asia Pacific College, and an intern in the Optum Student Advocate Program under the Early Careers team. My work spans full-stack development and DevOps — from designing data models and building interfaces to deploying and operating live systems. I have built software for real users, including a clinic management system for a dental practice and an asset-tracking application used by field technicians, and I handled production deployments for APC's NAMFREL election monitoring portal during the 2026 BARMM Parliamentary Elections. I hold my work to one standard: it should be complete, polished, and work exactly as expected. My goal is to grow into a DevSecOps and technical leadership role.

### Engineering value (from Ezekiel)
Software should work flawlessly — polished and complete, with every dialog, button, and interaction behaving correctly.

---

## Education

- **BS Computer Science, Software Systems** — Asia Pacific College, Makati City
- August 2023 – August 2027 (expected)
- Honor's List — AY 2023–2024, 2024–2025
- Relevant coursework: Cybersecurity, Database Management, Systems Analysis & Design, Threat Detection Analysis, Software/System Development

## Certification
- OCI 2025 AI Foundations Associate — Oracle, November 2025

---

## Experience

### Optum — Student Advocate Program
- **Role:** Intern, Early Careers
- **Dates:** November 2026 – Present (started Nov 5, 2026)
- **Content rule:** No accomplishments listed until work is actually performed.

### APC × NAMFREL — 2026 BARMM Parliamentary Elections
- **Role:** DevOps & Infrastructure (Sub-Team 4) — Production Deployment
- **Dates:** September 2026 (elections held Sept 14–15, 2026)
- **Context:** APC served as the NAMFREL Election Data Analytics Center. 46 students and 9 faculty across CS, IT, and CpE built and supported the election analytics system.
- **Confirmed contributions:**
  - Main handler of continuous deployment to Vercel on election day (Sept 14)
  - Performed live production redeployments as teammates' changes were merged
  - QA of production deployments during shift, before handoff to the next shift
- **Deployment story (confirmed):** Teammates' merged commits could not trigger production deployments on the team's Vercel plan (shown as "Blocked"), so Ezekiel shipped their changes by pushing "chore: trigger deployment" commits from his authorized account.
- **Evidence:** Vercel project `apc-namfrel-barmm-2026`, production domain namfrel-barmm2026.apc.edu.ph; repository hosted at github.com/apcedgalauran/APC-NAMFREL-BARMM2026; 13 production deployments authored on Sept 14.
- **Not Ezekiel's work (do not claim):** GitHub Actions CI pipeline, server caching, Playwright automation.

---

## Featured Projects

### 1. Dorotheo Dental Clinic Management System
- **Type:** Real client system (dental clinic), in development for deployment
- **Role:** Project Manager & Full-Stack Developer
- **Stack:** Django, Django REST Framework, Next.js, TypeScript, PostgreSQL
- **Scale (from resume):** Team of 5 developers; 4 user roles; 17 core workflows; 20+ protected API surfaces
- **Ezekiel built:** JWT authentication, role-based access control, audit logging, prompt-security controls for the LLM assistant, query and pagination optimization (no performance metric is published — load times depended on the hosting tier)
- **System also includes (team):** RAG/LLM pipeline with intent classification and semantic caching
- **Privacy rule:** No patient data, no real screenshots of records.

### 2. Motor Tool & Sub-Component Pumping Hour Tracking System
- **Type:** Independent project, in production use
- **Role:** Sole developer
- **Users:** Field technicians working in Abu Dhabi, using it with live company data
- **Stack:** Next.js 15, React 19, TypeScript, Prisma, Neon Postgres, NextAuth, Vercel Blob, Tailwind CSS, Vitest
- **Highlights:** pumping-hour cascade across motors and sub-components; unified 11-state asset status model; assembly/disassembly records; file attachments; search-first UI; requirements maintained through PRD versions up to v2.9
- **Privacy rule:** No live link or screenshots with real company data.

### 3. NAMFREL Election Portal — Production Deployment
- See Experience entry above; presented as a project card focused on deployment operations.

### 4. XLM-JUD: Dialect-Aware Smishing Detection (Thesis)
- **Type:** Undergraduate thesis, AY 2026–2027, co-authored with three teammates
- **Ezekiel's role:** Co-author — research and writing (he did not write the model code)
- **Stack:** Python, XLM-RoBERTa, Meta NLLB-200 (back-translation), FLORES-200, classical baselines (SVM, Logistic Regression with TF-IDF), SMOTE
- **Problem:** Smishing detection in the Philippines is hampered by scarce, imbalanced datasets and Tagalog, Cebuano, and Ilocano text that English-trained filters misread.
- **Approach:** Compared original XLM-RoBERTa, XLM-JUD (XLM-RoBERTa trained with NLLB-200 back-translation augmentation), and classical baselines, with and without SMOTE.
- **Results (hold-out test set of 11,603 messages):**
  - Original XLM-RoBERTa: accuracy 98.61%, Macro-F1 0.9849, MCC 0.9698
  - XLM-JUD: accuracy 98.19%, Macro-F1 0.9802, MCC 0.9606
  - Classical baselines: Macro-F1 0.9373–0.9561
  - Back-translation did **not** improve classification (210 vs. 161 errors; McNemar's test p < 0.001). SMOTE also lowered classical-model performance.
- **Honest limitations:** Cebuano and Ilocano test subsets contained only legitimate messages; back-translated data not independently verified; single training run.
- **Framing:** A rigorous negative result — the study reports what the data showed, not what was hoped.

### 5. E-Ksena — DevOps pipeline (pending, v2)
- AI-powered emergency response system (capstone). Ezekiel's contribution: Azure DevOps pipeline (build, test, deploy). Details to be confirmed from pipeline files.

---

## Leadership

| Role | Organization | Dates |
|---|---|---|
| Vice President | APC Band | Jul 2026 – Present |
| Internal Vice President | APC Microsoft Community (APC-MSC) | Nov 2025 – Jun 2026 |
| Executive Director of Events and Programs | APC Microsoft Community (APC-MSC) | Nov 2024 – Jun 2025 |
| Assistant Director of Operations | JPCS – APC | Nov 2024 – Jun 2025 |

Speaking & hosting: Speaker, Microsoft Sandbox: Building Your Startup with Microsoft 365; Speaker, SoCIT Officer Workshop 2025; Host, Microsoft Learn Student Ambassador event.

---

## Skills (honest presentation)

Self-assessment: confident in CI/CD; working familiarity with the rest. No proficiency bars or percentages. Each skill is shown next to the project where it was used.

- **Strongest:** CI/CD, production deployment (Vercel, Azure DevOps)
- **Languages:** TypeScript, JavaScript, Python, SQL, C++
- **Web:** Next.js, React, Django, Django REST Framework, Tailwind CSS
- **Data:** PostgreSQL, Prisma, Supabase, Neon
- **DevOps & infra:** Vercel, Azure DevOps, GitHub Actions, Docker, Linux, SSH, Proxmox, LXC, Railway
- **Security:** JWT, RBAC, audit logging, VAPT (coursework)
- **ML:** XLM-RoBERTa, NLP, TF-IDF classical baselines

---

## Links
- GitHub: https://github.com/apcedgalauran
- LinkedIn: https://www.linkedin.com/in/ezekiel-galauran/
- Email: ezekielgalauran@gmail.com
- Domain: https://ezgalauran.dev
