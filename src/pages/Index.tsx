import { useEffect, useState, type ElementType, type MouseEvent as ReactMouseEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, Terminal } from "lucide-react";
import TechMarquee from "@/components/TechMarquee";

const FULL_STACK_PROJECTS = [
  {
    title: "LMS: Microservices Learning Management System",
    description:
      "A scalable educational platform built using a microservices architecture with an API Gateway and RabbitMQ-based asynchronous communication.",
    tags: ["Node.js", "PostgreSQL", "RabbitMQ", "Docker", "React.js", "Tailwind CSS"],
    github: "https://github.com/Akash1347/LMS",
    demo: "#",
  },
  {
    title: "TradeNow: Real-Time Trading Platform",
    description:
      "A high-performance stock trading app with custom order matching and real-time market updates via Finnhub WebSocket API and Socket.io.",
    tags: ["React.js", "Node.js", "MongoDB", "Socket.io", "Docker"],
    github: "https://github.com/Akash1347/TRADENOW",
    demo: "https://tradenow-six.vercel.app/",
  },
  {
    title: "WonderLust: Vacation Rental Marketplace",
    description:
      "A full-stack MVC travel marketplace with auth, role-based access, map exploration, and media management using Cloudinary.",
    tags: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Mapbox", "Cloudinary"],
    github: "https://github.com/Akash1347/wonderLust",
    demo: "https://wonderlust-4t11.onrender.com/listings",
  },
];

const ML_PROJECTS = [
  {
    title: "Plant Disease Prediction",
    description:
      "CNN-based AI diagnostic pipeline for identifying plant diseases from leaf images; basis for published IEEE research.",
    tags: ["Python", "TensorFlow/Keras", "OpenCV", "Jupyter Notebook"],
    github: "https://github.com/Akash1347/Plant-Disease-Prediction",
  },
  {
    title: "Spam-Ham Email Classifier",
    description:
      "NLP model for classifying messages as Spam or Ham with preprocessing, tokenization, and vectorization workflow.",
    tags: ["Python", "Scikit-learn", "NLTK", "Pandas", "Jupyter Notebook"],
    github: "https://github.com/Akash1347/spam_ham",
  },
  {
    title: "Laptop Price Prediction",
    description:
      "Regression model predicting laptop prices from hardware specs, backed by EDA to uncover key pricing drivers.",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Akash1347/Laptop-Price-Prediction",
  },
];

const TECH_GRID = [
  "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "RabbitMQ", "Python", "C++", "Java", "Docker",
  "TensorFlow", "MySQL", "HTML", "CSS", "JavaScript",
  "Bootstrap", "Pandas", "Scikit-learn", "OpenCV",
];

const CERTIFICATIONS = [
  {
    title: "MERN Stack Web Development – Apna College",
    link: "https://drive.google.com/file/d/1UQezYDoEXBNR1A8VNwv6XQblm-s_N5i6/view?usp=drive_link",
  },
  {
    title: "Data Structures & Algorithms (DSA) in C++ – Apna College",
    link: "https://drive.google.com/file/d/1I1ge4o3Eqj_W740Z47a6TJm3vhrVdz30/view?usp=drive_link",
  },
  {
    title: "Machine Learning – Stanford University",
    link: "#",
  },
  {
    title: "Machine Learning Foundation – Infosys Springboard",
    link: "https://drive.google.com/file/d/1iR5gV5_-fg77u_Rg0Cvs9iHj7rGqK_RL/view?usp=drive_link",
  },
];

const PUBLICATIONS = [
  {
    title: "IEEE Publication",
    text: "Plant Disease Detection Using CNN — Proceedings of 2025 ICCPCT, IEEE.",
    icon: "📜",
    link: "https://xplorestaging.ieee.org/document/11176702",
  },
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
};

const TiltProjectCard = ({ project }: { project: Project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, px: 50, py: 50 });

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const x = (0.5 - (e.clientY - rect.top) / rect.height) * 8;
    setTilt({ x, y, px, py });
  };

  return (
    <Card
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0, px: 50, py: 50 })}
      className="project-card animate-on-scroll group relative overflow-hidden border-white/15 bg-white/[0.04] backdrop-blur-xl transition-all duration-300"
      style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at ${tilt.px}% ${tilt.py}%, rgba(13,202,240,0.24), transparent 55%)` }}
      />
      <CardContent className="relative flex h-full flex-col p-6">
        <h3 className="mb-3 text-lg font-bold text-white">{project.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} className="rounded-md border border-white/10 bg-black/30 font-mono text-[11px] text-cyan-200">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/45 px-3 py-1.5 text-xs text-indigo-200 transition hover:bg-indigo-500/15"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/45 px-3 py-1.5 text-xs text-cyan-200 transition hover:bg-cyan-500/15"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const MagneticButton = ({ href, label, icon: Icon }: { href: string; label: string; icon: ElementType }) => {
  const [style, setStyle] = useState({ transform: "translate3d(0,0,0)" });

  const handleMove = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 7;
    const y = (e.clientY - rect.top - rect.height / 2) / 7;
    setStyle({ transform: `translate3d(${x}px, ${y}px, 0)` });
  };

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={() => setStyle({ transform: "translate3d(0,0,0)" })}
      className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur"
      style={style}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
};

const Index = () => {
  const [progress, setProgress] = useState(0);

  const heroRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const techRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const publicationsRef = useScrollReveal();
  const certificationsRef = useScrollReveal();
  const contactRef = useScrollReveal();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="cyber-bg relative min-h-screen text-foreground">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
            <Terminal className="h-5 w-5 text-primary" />
            akash.dev
          </span>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#tech" className="transition-colors hover:text-white">Stack</a>
            <a href="#projects" className="transition-colors hover:text-white">Projects</a>
            <a href="#publications" className="transition-colors hover:text-white">Publications</a>
            <a href="#certifications" className="transition-colors hover:text-white">Certifications</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </div>
        </div>
        <div className="h-[2px] w-full bg-white/5">
          <div className="h-full bg-gradient-to-r from-[#6610f2] via-[#7d32ff] to-[#0dcaf0] transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>
      </nav>

      <section ref={heroRef} className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="glass-panel animate-on-scroll !border-black/70 !bg-black/95 !shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] p-8 md:p-10">
            <h1 className="mb-5 text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Akash.
              <span className="mt-1 block bg-gradient-to-r from-[#f4f4f5] via-[#71717a] to-[#09090b] bg-clip-text text-transparent">
                Full-Stack Developer & ML Enthusiast.
              </span>
            </h1>
            <p className="mb-8 max-w-4xl text-base leading-relaxed text-slate-300 sm:text-lg">
              B.Tech CSE student focused on building scalable web applications, clean APIs, and practical machine-learning solutions.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <span className="floating-badge">⚡ Full-Stack Product Builder</span>
              <span className="floating-badge">Open Source & Real-World Projects</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/resume.pdf" download>
                <Button size="lg" className="glow-button gap-2 rounded-full bg-gradient-to-r from-[#6610f2] to-[#0dcaf0] px-8 text-white shadow-[0_0_35px_rgba(102,16,242,0.45)]">
                  <Download className="h-4 w-4" /> Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="gap-2 rounded-full border-cyan-400/40 bg-transparent px-8 text-cyan-200 transition-all duration-300 hover:bg-cyan-400/10">
                  <Mail className="h-4 w-4" /> Let&apos;s Talk
                </Button>
              </a>
            </div>
          </div>
        </div>
        <a href="#tech" className="absolute bottom-10 animate-bounce text-slate-400 transition-colors hover:text-white">
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      <section id="about" ref={aboutRef} className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="glass-panel animate-on-scroll relative overflow-hidden border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 md:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="relative">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Who I Am</p>
              <h2 className="mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
                About Me
              </h2>
              <p className="max-w-5xl text-base leading-relaxed text-slate-200 sm:text-lg">
              I am a Computer Science undergraduate passionate about building scalable and real-world software systems. I have experience developing full-stack applications using modern technologies like React, Node.js, and Docker, with a strong focus on microservices and system design. I actively solve data structures and algorithms problems to strengthen my problem-solving skills and continuously work on projects that combine performance, scalability, and practical impact.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-200">Full-Stack Engineering</span>
                <span className="rounded-full border border-indigo-400/35 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-200">System Design Driven</span>
                <span className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-200">Performance Oriented</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" ref={techRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Tools & Technologies</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Tech Stack</h2>
          </div>
          <div className="glass-panel animate-on-scroll p-4">
            <TechMarquee />
          </div>
          <div className="animate-on-scroll mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {TECH_GRID.map((tech) => (
              <div key={tech} className="tech-card flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors hover:text-white">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" ref={projectsRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll mb-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Featured Work</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
          </div>
          <div className="mb-8 animate-on-scroll text-left">
            <h3 className="text-xl font-semibold text-white">Web Development</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FULL_STACK_PROJECTS.map((project) => <TiltProjectCard key={project.title} project={project} />)}
          </div>
          <div className="mb-8 mt-14 animate-on-scroll text-left">
            <h3 className="text-xl font-semibold text-white">Machine Learning</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {ML_PROJECTS.map((project) => <TiltProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      <section id="publications" ref={publicationsRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Publications</h2>
          </div>
          <div className="space-y-8">
            <div className="glass-panel p-6 md:p-8">
              <div className="timeline-line">
                {PUBLICATIONS.map((item) => (
                  <div key={item.title} className="timeline-item animate-on-scroll pl-10">
                    <span className="timeline-dot" />
                    <p className="mb-1 text-base font-semibold text-white">{item.icon} {item.title}</p>
                    <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-cyan-300 hover:underline">
                        View Publication <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div id="certifications" ref={certificationsRef} className="animate-on-scroll">
              <h3 className="mb-4 text-2xl font-bold text-white">Certifications</h3>
              <div className="grid gap-4">
                {CERTIFICATIONS.map((certification) => (
                  <Card key={certification.title} className="border-white/10 bg-white/5 backdrop-blur-sm">
                    <CardContent className="p-5">
                      <a href={certification.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-100 transition-colors hover:text-cyan-300">
                        {certification.title}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" ref={contactRef} className="relative overflow-hidden border-t border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-[#120a26] to-[#041b22] opacity-95" />
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="animate-on-scroll">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Open to Opportunities</p>
            <h2 className="mb-8 text-4xl font-black tracking-tight text-white sm:text-5xl">Let&apos;s Build Something Exceptional.</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="mailto:alampallyakash@gmail.com" label="Email" icon={Mail} />
              <MagneticButton href="tel:+919550145091" label="+91 9550145091" icon={Phone} />
              <MagneticButton href="https://github.com/Akash1347" label="GitHub" icon={Github} />
              <MagneticButton href="https://www.linkedin.com/in/akash-alampally-50145131b" label="LinkedIn" icon={Linkedin} />
            </div>
          </div>
          <p className="mt-16 text-xs text-slate-400">© {new Date().getFullYear()} Akash Alampally. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
