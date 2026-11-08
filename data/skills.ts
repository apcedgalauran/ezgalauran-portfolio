// Source: docs/portfolio-content.md (v2.4) → Skills (honest presentation).
// Not rendered: the site shows skills next to each project (stack tags), with
// no proficiency bars, percentages, or years, and the resume only uses content
// that also appears on the site.
export const skills: { label: string; items: string }[] = [
  {
    label: "Frontend",
    items: "Next.js, React, TypeScript, JavaScript, Tailwind CSS, shadcn/ui",
  },
  {
    label: "Backend",
    items:
      "Django, Django REST Framework, Python, PostgreSQL, Prisma, Redis",
  },
  {
    label: "Deployment & infra",
    items:
      "Vercel, Railway, Azure Web Apps, Azure Blob Storage, Azure DevOps, IIS, Windows Server, Neon, Supabase, Docker, GitHub Actions, Linux, SSH, Proxmox, LXC",
  },
  {
    label: "Security",
    items: "JWT, RBAC, audit logging, rate limiting, NextAuth, VAPT (coursework)",
  },
  { label: "Tooling", items: "Git, GitHub, Jira, Sentry, Resend, Vitest" },
  { label: "Other", items: "SQL, C++, NLP research (XLM-RoBERTa)" },
];
