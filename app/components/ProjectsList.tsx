import { Link } from "react-router";
import { getFeaturedProjects } from "../data/projects";

export function ProjectsList() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-24 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-fade-in-up">
          <div>
            <h2 className="font-headline text-4xl font-bold text-on-background">
              Selected Works
            </h2>
            <p className="font-body text-on-surface-variant mt-4">
              A curated selection from 20+ live projects delivered with excellence.
            </p>
          </div>
          <Link
            className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            to="/projects"
          >
            View All Projects{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((proj, idx) => (
            <Link
              to={`/project/${proj.id}`}
              key={proj.id}
              className={`group bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-primary/20 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up delay-${
                idx + 1
              }00`}
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={proj.title}
                  src={proj.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded border border-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">
                  {proj.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm mb-6">
                  {proj.description}
                </p>
                <div className="w-full border border-outline-variant/20 py-3 rounded-full font-semibold group-hover:bg-primary group-hover:text-on-primary transition-all text-center">
                  View Case Study
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
