import Logo from "../Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <Logo className="h-10 sm:h-12 w-auto fill-[url(#footerLogoGradient)]" />
                <svg className="absolute">
                  <defs>
                    <linearGradient
                      id="footerLogoGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#38bdf8" />{" "}
                      <stop offset="50%" stopColor="#818cf8" />{" "}
                      <stop offset="100%" stopColor="#c084fc" />{" "}
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <span className="text-foreground text-2xl font-black tracking-tighter">
                DIGITAL
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              Building tomorrow's digital experiences
            </p>
          </div>

          <nav className="flex gap-8 text-sm">
            <a
              href="#about"
              className="text-muted-foreground hover:text-accent transition-colors cursor-hover"
            >
              About
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-accent transition-colors cursor-hover"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-muted-foreground hover:text-accent transition-colors cursor-hover"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-accent transition-colors cursor-hover"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} APEX Digital Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
