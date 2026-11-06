// Shared content types. All portfolio text lives in /data and must match
// docs/portfolio-content.md exactly.

export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  tagline: string;
  /** One string per paragraph. */
  about: string[];
  email: string;
  domain: string;
  github: string;
  linkedin: string;
  resumePath: string;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface SectionMeta {
  id: string;
  number: string;
  label: string;
}

export interface DetailGroup {
  heading: string;
  /** Rendered as a paragraph when there is one item, a list otherwise. */
  items: string[];
  /** Optional labelled paragraph after the items (e.g. "Lesson learned"). */
  note?: { label: string; text: string };
}

export interface Project {
  slug: string;
  label: string;
  /** Omitted while the content doc marks it [CONFIRM]. */
  status?: string;
  title: string;
  dates?: string;
  summary: string;
  role?: string;
  /** Short visible note on the card (e.g. why there is no link). */
  note?: string;
  /** Shown on the card without expanding. */
  highlights?: string[];
  stack: string[];
  /** Heading of the expanded view, e.g. "What I did". */
  detailsHeading?: string;
  details: DetailGroup[];
  links?: Link[];
}

export interface Platform {
  name: string;
  what: string;
  where: string[];
}

export interface Experience {
  organization: string;
  program?: string;
  role: string;
  dates: string;
  summary?: string;
  points: string[];
  note?: string;
  links?: Link[];
}

export interface LeadershipRole {
  role: string;
  organization: string;
  dates: string;
}

export interface Leadership {
  roles: LeadershipRole[];
  speaking: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  dates: string;
  honors: string[];
  coursework: string[];
  certifications: Certification[];
}
