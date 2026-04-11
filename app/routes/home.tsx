import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { ProjectsList } from "../components/ProjectsList";
import { Contact } from "../components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team Lead React JS Developer | 6.5+ Years Experience" },
    { name: "description", content: "Portfolio of a Team Lead React JS Developer with 6.5+ years of experience and 20+ live projects." },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsList />
      <Contact />
    </main>
  );
}
