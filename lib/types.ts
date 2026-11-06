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
  about: string;
  engineeringValue: string;
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
}

export interface Project {
  slug: string;
  label: string;
  status: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  details: DetailGroup[];
  /** Credit for work done by teammates, shown so nothing is over-claimed. */
  credit?: string;
  links?: Link[];
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
