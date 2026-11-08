import type { NavItem, Profile, SectionMeta } from "../lib/types";

// Source: docs/portfolio-content.md (v2.4) → Identity, About, Links.
export const profile: Profile = {
  name: "Ezekiel Galauran",
  title: "CS Student & Software Developer",
  location: "Philippines",
  tagline:
    "I build full-stack web applications and take them all the way to production.",
  about: [
    "I am a fourth-year Computer Science student specializing in Software Systems at Asia Pacific College, and an intern in the Optum Student Advocate Program under the Early Careers team.",
    "I build full-stack web applications end to end — data model, API, and interface — and carry them through to production. My largest project is a clinic management system for a dental practice, where I led a five-person team and worked on the backend, the Next.js portals, and deployment across Vercel, Railway, and Azure. I also designed, built, and maintain on my own an asset-tracking application that field technicians use with live company data.",
    "I hold my work to one standard: complete, polished, and working exactly as expected.",
  ],  email: "ezekielgalauran@gmail.com",
  domain: "https://ezgalauran.dev",
  github: "https://github.com/apcedgalauran",
  linkedin: "https://www.linkedin.com/in/ezekiel-galauran/",
  resumePath: "/resume.pdf",
};

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const sections = {
  about: { id: "about", number: "01", label: "About" },
  projects: { id: "projects", number: "02", label: "Selected work" },
  experience: { id: "experience", number: "03", label: "Experience" },
  leadership: { id: "leadership", number: "04", label: "Leadership" },
  education: { id: "education", number: "05", label: "Education" },
  contact: { id: "contact", number: "06", label: "Contact" },
} satisfies Record<string, SectionMeta>;

export const site = {
  wordmark: "ezgalauran.dev",
  copyright: "© 2026 Ezekiel Galauran",
  builtWith: "Built with Next.js, deployed on Vercel",
};
