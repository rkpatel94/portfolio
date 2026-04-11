export function Skills() {
  const skillCategories = [
    {
      title: "UI Architecture",
      icon: "architecture",
      skills: [
        "Advanced React (18/19)",
        "Next.js Enterprise Scale",
        "Deep TypeScript Mastery",
        "State Orchestration (Zustand/Redux)",
        "Design Systems & Tokens",
        "Performance Engineering",
      ],
      delay: "delay-100",
    },
    {
      title: "Core Ecosystem",
      icon: "hub",
      skills: [
        "Distributed Micro-Frontends",
        "GraphQL / Federated Schemas",
        "Node.js Backend Services",
        "Cloud Native (AWS/Azure)",
        "Containerization (Docker/K8s)",
        "Automated Quality Gates",
      ],
      delay: "delay-200",
    },
    {
      title: "Technical Leadership",
      icon: "stars",
      skills: [
        "Team Mentorship & Growth",
        "Strategic Roadmap Planning",
        "Code Governance Standards",
        "Cross-Functional Leadership",
        "Systems Architecture Review",
      ],
      delay: "delay-300",
    },
  ];

  return (
    <section className="py-24 px-8 bg-surface-container-low" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-headline text-4xl font-bold mb-16 text-center animate-fade-in-up">
          Tech Stack & Mastery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`bg-surface-container rounded-3xl p-8 border border-outline-variant/10 animate-fade-in-up ${cat.delay} hover:border-primary/20 transition-all duration-300 hover:bg-surface-container-high translate-y-0 hover:-translate-y-1`}
            >
              <h3 className="font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  {cat.icon}
                </span>{" "}
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-label font-bold border border-outline-variant/5 transition-transform hover:scale-105 active:scale-95"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
