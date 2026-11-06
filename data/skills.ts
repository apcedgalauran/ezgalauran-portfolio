// Source: docs/portfolio-content.md (v2.3) → Skills (honest presentation).
// Not rendered: the site shows skills next to each project (stack tags), with
// no proficiency bars, percentages, or years, and the resume only uses content
// that also appears on the site.
export const skills: { label: string; items: string }[] = [
  {
    label: "Deployment & infra",
    items:
      "Vercel, Railway, Azure Web Apps, Azure Blob Storage, Azure DevOps, Neon, Docker, GitHub Actions, Linux, SSH, Proxmox, LXC",
  },
  {
    label: "Backend",
    items:
      "Django, Django REST Framework, Python, PostgreSQL, Prisma, Redis",
  },
  {
    label: "Frontend",
    items: "Next.js, React, TypeScript, JavaScript, Tailwind CSS, shadcn/ui",
  },
  {
    label: "Security",
    items: "JWT, RBAC, audit logging, rate limiting, NextAuth, VAPT (coursework)",
  },
  { label: "Tooling", items: "Git, GitHub, Jira, Sentry, Resend, Vitest" },
  { label: "Other", items: "SQL, C++, NLP research (XLM-RoBERTa)" },
];
