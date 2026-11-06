import { sections } from "@/data/profile";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  return (
    <Section section={sections.projects}>
      <ul className="space-y-5">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
