import type { Platform } from "../lib/types";

// Source: docs/portfolio-content.md (v2.3) → Deployment & Infrastructure.
export const infrastructureIntro =
  "Where my work runs, and what I did on each platform.";

export const platforms: Platform[] = [
  {
    name: "Vercel",
    what: "Production deployments for Next.js frontends and a Django backend (serverless WSGI); custom domains; live redeploys during a high-traffic event",
    where: ["Dorotheo Dental", "Motor Tracker", "NAMFREL portal", "this site"],
  },
  {
    name: "Railway",
    what: "Deployed the Django backend with Nixpacks, a Procfile, and release scripts",
    where: ["Dorotheo Dental"],
  },
  {
    name: "Azure",
    what: "Django backend on Azure Web Apps; media on Azure Blob Storage with per-type cache policies; Gemini API connected to the Azure-hosted backend over SSH",
    where: ["Dorotheo Dental"],
  },
  {
    name: "Neon",
    what: "Serverless Postgres co-located with Vercel in Frankfurt, keep-alive scheduling, migrations",
    where: ["Motor Tracker"],
  },
  {
    name: "Supabase",
    what: "Managed PostgreSQL for the Django backend, with a SQLite fallback for local development",
    where: ["Dorotheo Dental"],
  },
  {
    name: "Docker",
    what: "Dockerfile for containerized backend deployment",
    where: ["Dorotheo Dental"],
  },
  {
    name: "Observability",
    what: "Sentry error monitoring and tracing; production logging",
    where: ["Dorotheo Dental"],
  },
  {
    name: "Email & DNS",
    what: "Resend transactional email, including domain authentication records (SPF, DKIM, DMARC)",
    where: ["Dorotheo Dental", "ezgalauran.dev"],
  },
];
