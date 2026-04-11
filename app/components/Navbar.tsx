import { Link } from "react-router";

interface NavbarProps {
  activeLink?: string;
}

export function Navbar({ activeLink = "" }: NavbarProps) {
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
              className={
                activeLink === link.label.toLowerCase()
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-slate-400 hover:text-slate-100 transition-colors duration-300"
              }
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
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 duration-200 ease-[cubic-bezier(0.2,0,0,1)] transition-all cursor-pointer">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
