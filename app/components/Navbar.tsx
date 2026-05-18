import { useState } from "react";
import { Link } from "react-router";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "All Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 shadow-[0px_20px_40px_rgba(57,184,253,0.08)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter text-slate-50 font-headline"
        >
          Rajkumar Patel
        </Link>

        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-slate-100 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="hidden sm:block text-slate-400 hover:text-slate-100 transition-colors px-4 py-2 text-sm uppercase tracking-widest font-body"
          >
            Resume
          </a>
          <button className="hidden sm:block bg-gradient-to-r from-primary to-accent text-on-accent font-bold px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 duration-200 ease-[cubic-bezier(0.2,0,0,1)] transition-all cursor-pointer shadow-lg shadow-accent/20">
            Hire Me
          </button>
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high transition-colors text-on-surface"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-nav border-t border-outline-variant/10">
          <div className="flex flex-col px-8 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 font-headline text-slate-300 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="sm:hidden mt-3 bg-gradient-to-r from-primary to-accent text-on-accent font-bold px-6 py-3 rounded-full shadow-lg shadow-accent/20"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
