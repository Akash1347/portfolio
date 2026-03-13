import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink, Github, Linkedin, Mail, ArrowDown, Terminal, Phone } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import CodeEditor from "@/components/CodeEditor";
import TechMarquee from "@/components/TechMarquee";

const PROJECTS = [
  {
    title: "TradeNow",
    description:
      "A real-time stock trading platform with custom order matching engine, live price streaming via Finnhub WebSocket API & Socket.io, and interactive portfolio dashboards. Containerized with Docker.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "WonderLust",
    description:
      "A full-stack vacation rental platform following MVC architecture. Features session-based auth, role-based access control, Cloudinary image uploads, and Mapbox interactive maps.",
    tags: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Mapbox"],
    github: "#",
    demo: "#",
  },
  {
    title: "Plant Disease Detection",
    description:
      "A deep learning image classification pipeline using CNNs to identify plant diseases across 38 classes with 93% accuracy. Trained on 50,000+ labeled images with data augmentation.",
    tags: ["Python", "TensorFlow", "Keras", "Streamlit", "CNN"],
    github: "#",
    demo: "#",
  },
];

const TECH_GRID = [
  "React.js", "Node.js", "Express.js", "MongoDB", "Python",
  "C++", "Java", "Docker", "TensorFlow", "MySQL",
];

const Index = () => {
  const heroRef = useScrollReveal();
  const techRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <div className="relative min-h-screen text-foreground">
      <BackgroundEffects />

      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground">
            <Terminal className="h-5 w-5 text-primary" />
            akash.dev
          </span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#tech" className="transition-colors hover:text-foreground">Stack</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center px-6 pt-20"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="animate-on-scroll flex-1 text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Open to opportunities
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-[hsl(280_70%_55%)] to-[hsl(200_80%_55%)] bg-clip-text text-transparent">
                Akash
              </span>
              <br />
              <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-muted-foreground">
                Full-Stack Developer
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0 sm:text-lg">
              B.Tech CSE @ B.V Raju Institute of Technology · CGPA 8.68/10
            </p>
            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0 sm:text-lg">
              I build scalable, performant web applications and ML pipelines.
              450+ LeetCode problems solved. Published IEEE researcher.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="/resume.pdf" download>
                <Button
                  size="lg"
                  className="glow-button gap-2 rounded-full bg-primary px-8 text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-border px-8 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5"
                >
                  <Mail className="h-4 w-4" />
                  Let's Talk
                </Button>
              </a>
            </div>
          </div>
          <div className="animate-on-scroll flex-shrink-0">
            <CodeEditor />
          </div>
        </div>
        <a
          href="#tech"
          className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      {/* Tech Stack */}
      <section id="tech" ref={techRef} className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="animate-on-scroll mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Tools & Technologies
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tech Stack
            </h2>
          </div>
          <div className="animate-on-scroll">
            <TechMarquee />
          </div>
          <div className="animate-on-scroll mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {TECH_GRID.map((tech) => (
              <div
                key={tech}
                className="tech-card flex items-center justify-center rounded-xl border border-border bg-card/50 px-4 py-4 text-center text-sm font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" ref={projectsRef} className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="animate-on-scroll mb-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Featured Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Projects
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <Card
                key={project.title}
                className="animate-on-scroll group border-border bg-card/60 backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsl(250_80%_65%/0.2)]"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <h3 className="text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" ref={contactRef} className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="animate-on-scroll">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Get In Touch
            </p>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              Contact
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:akashalampally@email.com"
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_20px_hsl(250_80%_65%/0.15)]"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="tel:+919550145091"
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_20px_hsl(250_80%_65%/0.15)]"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm">+91 9550145091</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_20px_hsl(250_80%_65%/0.15)]"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_20px_hsl(250_80%_65%/0.15)]"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
          <p className="mt-16 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Akash Alampally. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
