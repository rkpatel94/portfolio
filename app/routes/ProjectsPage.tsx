// Projects All View
import type { Route } from "./+types/ProjectsPage";
import { Link } from "react-router";
import { projects } from "../data/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Team Lead React JS Developer" },
    {
      name: "description",
      content: "Complete portfolio of engineering projects and case studies.",
    },
  ];
}

export default function Projects() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-8 overflow-hidden blueprint-grid">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface to-transparent opacity-60 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary font-label uppercase tracking-widest text-xs mb-8 hover:-translate-x-1 transition-transform w-fit"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            Back Home
          </Link>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
            Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              Architecture
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
            A strategic showcase of 20+ live projects, spanning complex enterprise
            ecosystems, architectural leadership, and high-performance digital
            solutions built for global scale.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 px-8 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className={`project-row grid md:grid-cols-12 gap-16 items-center animate-fade-in-up delay-${
                idx + 1
              }00`}
            >
              <div
                className={`md:col-span-7 relative group ${
                  idx % 2 !== 0 ? "md:order-last" : ""
                }`}
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-tertiary/10 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl transition-all duration-700 hover:scale-[1.01] hover:border-primary/20">
                  <img
                    alt={proj.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-1000"
                    src={proj.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent flex items-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link
                      to={`/project/${proj.id}`}
                      className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-all"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 space-y-6">
                {proj.client && (
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-label uppercase tracking-[0.3em] text-[10px] font-bold">
                      Client: {proj.client}
                    </span>
                    <div className="h-px w-12 bg-primary/20"></div>
                  </div>
                )}
                <h3 className="text-4xl font-headline font-bold text-on-surface">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container-high text-on-surface-variant border border-outline-variant/10 rounded-full text-[10px] font-label font-bold tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-on-surface-variant font-body leading-relaxed">
                  {proj.longDescription}
                </p>
                <Link
                  to={`/project/${proj.id}`}
                  className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs hover:gap-6 transition-all"
                >
                  Deep Dive Project{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">
            Have a project in mind?
          </h2>
          <p className="text-lg text-on-surface-variant font-body">
            I am currently optimizing my bandwidth for strategic architectural
            consulting and leadership roles. Let&apos;s engineer something
            groundbreaking together.
          </p>
          <div className="pt-8">
            <Link
              to="/#contact"
              className="bg-gradient-to-r from-primary to-accent text-on-accent font-bold px-12 py-5 rounded-full text-xl shadow-xl shadow-accent/20 hover:scale-105 transition-transform inline-block"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
