import type { NavItem, Profile, SectionMeta } from "../lib/types";

// Source: docs/portfolio-content.md → Identity, About, Links.
// The tagline and About paragraph are marked "(draft)" in the content doc.
export const profile: Profile = {
  name: "Ezekiel Galauran",
  title: "CS Student & Software Developer",
  location: "Philippines",
  tagline:
    "I build full-stack web applications and the deployment infrastructure that keeps them running reliably in production.",
  about:
    "I am a fourth-year Computer Science student specializing in Software Systems at Asia Pacific College, and an intern in the Optum Student Advocate Program under the Early Careers team. My work spans full-stack development and DevOps — from designing data models and building interfaces to deploying and operating live systems. I have built software for real users, including a clinic management system for a dental practice and an asset-tracking application used by field technicians, and I handled production deployments for APC's NAMFREL election monitoring portal during the 2026 BARMM Parliamentary Elections. I hold my work to one standard: it should be complete, polished, and work exactly as expected. My goal is to grow into a DevSecOps and technical leadership role.",
  engineeringValue:
    "Software should work flawlessly — polished and complete, with every dialog, button, and interaction behaving correctly.",
  email: "ezekielgalauran@gmail.com",
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
