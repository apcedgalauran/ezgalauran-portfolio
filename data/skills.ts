// Source: docs/portfolio-content.md → Skills (honest presentation).
// Used only by the resume PDF. The site shows skills next to each project,
// with no proficiency bars, percentages, or years.
export const skills: { label: string; items: string }[] = [
  {
    label: "Strongest",
    items: "CI/CD, production deployment (Vercel, Azure DevOps)",
  },
  { label: "Languages", items: "TypeScript, JavaScript, Python, SQL, C++" },
  {
    label: "Web",
    items: "Next.js, React, Django, Django REST Framework, Tailwind CSS",
  },
  { label: "Data", items: "PostgreSQL, Prisma, Supabase, Neon" },
  {
    label: "DevOps & infra",
    items:
      "Vercel, Azure DevOps, GitHub Actions, Docker, Linux, SSH, Proxmox, LXC, Railway",
  },
  { label: "Security", items: "JWT, RBAC, audit logging, VAPT (coursework)" },
  { label: "ML", items: "XLM-RoBERTa, NLP, TF-IDF classical baselines" },
];
