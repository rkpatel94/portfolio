export function Contact() {
  return (
    <section className="py-24 px-8 bg-surface-container-high/30" id="contact">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="animate-fade-in-up">
          <h2 className="font-headline text-4xl font-bold text-on-background mb-6">
            Let&apos;s Build Something <br />
            <span className="text-primary">Exceptional</span>
          </h2>
          <p className="font-body text-on-surface-variant mb-12">
            Available for strategic leadership roles, architectural consulting,
            and full-stack React partnerships.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  Email Me
                </p>
                <p className="text-lg font-bold">rajkumar.patel@techleader.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">share</span>
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  Socials
                </p>
                <p className="text-lg font-bold flex gap-4">
                  <a className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary" href="#">
                    LinkedIn
                  </a>
                  <a className="hover:text-primary transition-colors underline decoration-primary/20 hover:decoration-primary" href="#">
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container rounded-3xl p-8 border border-outline-variant/20 animate-fade-in-up delay-200">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-label text-sm font-bold text-on-surface-variant mb-2">
                  Name
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/50 text-on-background placeholder-on-surface-variant/30 outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label text-sm font-bold text-on-surface-variant mb-2">
                  Email
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/50 text-on-background placeholder-on-surface-variant/30 outline-none"
                  placeholder="john@company.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block font-label text-sm font-bold text-on-surface-variant mb-2">
                Message
              </label>
              <textarea
                className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/50 text-on-background placeholder-on-surface-variant/30 outline-none min-h-[150px]"
                placeholder="Describe your project..."
                rows={4}
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-full shadow-lg shadow-primary/20 hover:opacity-90 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
