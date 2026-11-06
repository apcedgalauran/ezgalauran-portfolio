import type { Education } from "../lib/types";

// Source: docs/portfolio-content.md → Education, Certification.
export const education: Education = {
  degree: "BS Computer Science, Software Systems",
  school: "Asia Pacific College",
  location: "Makati City",
  dates: "August 2023 – August 2027 (expected)",
  honors: ["Honor's List — AY 2023–2024, 2024–2025"],
  coursework: [
    "Cybersecurity",
    "Database Management",
    "Systems Analysis & Design",
    "Threat Detection Analysis",
    "Software/System Development",
  ],
  certifications: [
    {
      name: "OCI 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "November 2025",
    },
  ],
};
