import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Deployment } from "@/components/sections/Deployment";
import { Experience } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

// Composes sections only; all content comes from /data.
export default function Home() {
  return (
    <div id="top">
      <Hero />
      <About />
      <Projects />
      <Deployment />
      <Experience />
      <Leadership />
      <Education />
      <Contact />
    </div>
  );
}
