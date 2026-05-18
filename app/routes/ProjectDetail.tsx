// Project Detail Page
import type { Route } from "./+types/ProjectDetail";
import { getProjectById } from "../data/projects";

export function loader({ params }: Route.LoaderArgs) {
  const project = getProjectById(params.id);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return { project };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Project Not Found" }];
  }
  return [
    { title: `${data.project.title} | Case Study` },
    { name: "description", content: data.project.description },
  ];
}

export default function Project({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData;
  const { hero, challenge, solution, techStack, gallery, features } = project;
  const heroImage = hero?.image ?? project.image;
  const heroSubtitle = hero?.subtitle ?? project.description;

  return (
    <main className="pt-20">
      {/* Section 1: Hero */}
      <section className="relative md:min-h-[921px] flex items-center overflow-hidden blueprint-grid">
        <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center py-24">
          <div className="z-10 animate-fade-in-up">
            {hero?.caseStudyNumber && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-label uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                {hero.caseStudyNumber}
              </div>
            )}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface mb-6 leading-[0.9]">
              {hero ? (
                <>
                  {hero.prefix} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                    {hero.highlight}
                  </span>
                </>
              ) : (
                project.title
              )}
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed font-body">
              {heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                View Live Site
              </button>
              <button className="px-8 py-4 rounded-full border border-outline-variant/30 text-primary font-headline font-bold text-lg hover:bg-surface-container-high transition-colors">
                View Source
              </button>
            </div>
          </div>
          <div className="relative group animate-fade-in-up delay-200">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-tertiary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/20 shadow-2xl">
              <img
                alt={`${project.title} hero`}
                className="w-full aspect-video object-cover"
                src={heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Project Overview */}
      {(challenge || solution) && (
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 md:gap-32">
              {challenge && (
                <div className="animate-fade-in-up">
                  <div className="text-primary font-label uppercase tracking-widest mb-4">
                    {challenge.eyebrow}
                  </div>
                  <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">
                    {challenge.heading}
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                    {challenge.body}
                  </p>
                </div>
              )}
              {solution && (
                <div className="animate-fade-in-up delay-200">
                  <div className="text-tertiary font-label uppercase tracking-widest mb-4">
                    {solution.eyebrow}
                  </div>
                  <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">
                    {solution.heading}
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                    {solution.body}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Tech Stack */}
      {techStack && techStack.length > 0 && (
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8 text-center animate-fade-in-up">
            <h3 className="text-sm font-label uppercase tracking-[0.3em] text-outline mb-12">
              Engineered With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface font-label text-sm flex items-center gap-2 hover:bg-primary/10 hover:border-primary/40 transition-all cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span> {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Gallery */}
      {gallery && gallery.length >= 3 && (
        <section className="py-32 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 group overflow-hidden rounded-lg border border-outline-variant/10 animate-fade-in-up">
                <img
                  alt={gallery[0].alt}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  src={gallery[0].src}
                />
              </div>
              <div className="md:col-span-4 grid gap-8 animate-fade-in-up delay-200">
                {gallery.slice(1, 3).map((img) => (
                  <div
                    key={img.src}
                    className="group overflow-hidden rounded-lg border border-outline-variant/10"
                  >
                    <img
                      alt={img.alt}
                      className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700"
                      src={img.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Key Features */}
      {features && features.length > 0 && (
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-4">
                  {project.featuresHeading ?? "Core Capabilities"}
                </h2>
                {project.featuresBlurb && (
                  <p className="text-on-surface-variant max-w-md">
                    {project.featuresBlurb}
                  </p>
                )}
              </div>
              <div className="h-px flex-1 bg-outline-variant/20 mx-8 hidden md:block"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className={`p-8 rounded-lg bg-surface-container-high border border-outline-variant/10 hover:border-primary/30 transition-colors animate-fade-in-up delay-${
                    idx + 1
                  }00`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined">
                      {feature.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-headline font-bold text-on-surface mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
