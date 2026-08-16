/**
 * Design reminder — “宣纸上的短暂生长”: warm paper, layered ink, editorial serif type,
 * organic asymmetry and only wind-like motion. Every element must reinforce quiet exploration.
 */
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const heroImage = "/manus-storage/ephemeral-hero-inkwash_b035ca97.png";
const isletImage = "/manus-storage/ephemeral-project-islet_3c32abbc.png";
const branchImage = "/manus-storage/ephemeral-project-branch_fa1a3658.png";
const mountainsImage = "/manus-storage/ephemeral-footer-mountains_1499e007.png";
const markImage = "/manus-storage/ephemeral-transparent-ink-seedball_c4fb3a6a.png";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Contact", href: "mailto:hello@ephemeral.ai" },
];

const projects = [
  {
    name: "ephemeral-sandbox",
    description: "Parallel coding agents with isolated workspaces",
    image: isletImage,
    href: "https://github.com",
    number: "01",
  },
  {
    name: "ephemeral-ai-fs",
    description: "Branchable SQLite filesystem for multi-agent collaboration",
    image: branchImage,
    href: "https://github.com",
    number: "02",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateMistPosition = () => {
      frame = 0;
      const shell = shellRef.current;
      if (!shell) return;

      if (reducedMotion.matches) {
        shell.style.setProperty("--mist-shift-hero", "0px");
        shell.style.setProperty("--mist-shift-projects", "0px");
        return;
      }

      const scrollTop = window.scrollY;
      const heroShift = Math.min(26, scrollTop * 0.018);
      const projectShift = -Math.min(18, Math.max(0, scrollTop - 240) * 0.012);
      shell.style.setProperty("--mist-shift-hero", `${heroShift.toFixed(2)}px`);
      shell.style.setProperty("--mist-shift-projects", `${projectShift.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMistPosition);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    updateMistPosition();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="site-shell" ref={shellRef}>
      <div className="paper-grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ephemeral AI Lab home">
          <img className="brand-mark" src={markImage} alt="" />
          <span>Ephemeral AI Lab</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.label}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <img className="hero-art" src={heroImage} alt="" />
        <section className="hero" aria-labelledby="hero-title">
          <div className="ink-mist ink-mist-left" aria-hidden="true" />
          <div className="scroll-mist scroll-mist-hero" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Open source research infrastructure</p>
            <h1 id="hero-title">
              <span>Ephemeral</span>
              <span>AI Lab</span>
            </h1>
            <div className="brush-rule" aria-hidden="true">
              <i />
            </div>
            <p className="hero-tagline">Where ideas bloom and drift away</p>
            <a className="quiet-link" href="#projects">
              Trace the work in motion <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="seed-field" aria-hidden="true">
            <i className="seed seed-one" />
            <i className="seed seed-two" />
            <i className="seed seed-three" />
            <i className="seed seed-four" />
            <i className="seed seed-five" />
            <i className="seed seed-six" />
            <i className="seed seed-seven" />
          </div>
          <aside className="side-seal" aria-label="浮生若梦">
            <b>印</b>
            <span>浮生若梦</span>
          </aside>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="scroll-mist scroll-mist-projects" aria-hidden="true" />
          <div className="section-heading">
            <p>Selected explorations</p>
            <h2 id="projects-title">Projects</h2>
            <div className="brush-rule small" aria-hidden="true">
              <i />
            </div>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                <div className="card-illustration" aria-hidden="true">
                  <img src={project.image} alt="" />
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span>{project.number}</span>
                    <ArrowUpRight size={18} strokeWidth={1.35} />
                  </div>
                  <h3>{project.name}</h3>
                  <i className="name-stroke" aria-hidden="true" />
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <img className="mountain-art" src={mountainsImage} alt="" />
          <div className="about-inner">
            <div className="section-heading">
              <p>Our intention</p>
              <h2 id="about-title">About</h2>
              <div className="brush-rule small" aria-hidden="true">
                <i />
              </div>
            </div>
            <p className="about-copy">
              Ephemeral AI Lab builds open-source infrastructure for multi-agent systems. We explore ephemeral
              environments, parallel execution, and collaborative tools that let ideas bloom, evolve, and drift—together.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="footer-line" aria-hidden="true" />
        <span className="footer-seal" aria-label="朱砂印：浮生">
          <span aria-hidden="true">浮</span>
          <span aria-hidden="true">生</span>
        </span>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="github-link">
          <Github size={23} strokeWidth={1.65} />
          <span>GitHub</span>
        </a>
        <p>© 2026 Ephemeral AI Lab</p>
      </footer>
    </div>
  );
}
