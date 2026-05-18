export function About() {
  const qualities = [
    { icon: "architecture", title: "Scalability", delay: "delay-100" },
    { icon: "speed", title: "Performance", delay: "delay-200", mt: true },
    { icon: "groups", title: "Mentorship", delay: "delay-300" },
    { icon: "terminal", title: "Clean Code", delay: "delay-400", mt: true },
  ];

  return (
    <section className="py-24 px-8 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="font-headline text-4xl font-bold text-on-background leading-normal">
            Building Scalable <br />
            <span className="text-primary-dim">Enterprise Solutions</span>
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed text-lg">
            As a Team Lead with 6.5+ years in the React ecosystem, I have
            architected and delivered 20+ live projects across the modern
            stack &mdash; React 18/19, Next.js, and the state and data layers
            that hold up at scale. My focus is translating ambiguous product
            requirements into front-end architectures that remain
            maintainable as teams and codebases grow.
          </p>
          <p className="font-body text-on-surface-variant leading-relaxed text-lg">
            I lead through structured code review, technical mentorship, and
            a strong testing culture &mdash; the everyday practices that
            compound over time. Sprint planning, hiring, and roadmap shaping
            are part of the role, but what I care about most is helping
            engineers grow into stronger reviewers, architects, and
            decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {qualities.map((item) => (
            <div
              key={item.title}
              className={`bg-surface p-8 rounded-2xl border border-outline-variant/10 flex flex-col justify-end h-48 animate-fade-in-up ${
                item.delay
              } ${item.mt ? "md:mt-8" : ""}`}
            >
              <span
                className="material-symbols-outlined text-primary mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <h4 className="font-headline font-bold">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
