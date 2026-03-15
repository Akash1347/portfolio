import {
  Atom,
  Binary,
  Blocks,
  BrainCircuit,
  Braces,
  Code2,
  Container,
  Cpu,
  Database,
  Rabbit,
  Server,
  Wind,
} from "lucide-react";

const TECH_ITEMS = [
  { name: "React.js", color: "195 80% 55%", icon: Atom },
  { name: "Node.js", color: "140 60% 45%", icon: Server },
  { name: "Express.js", color: "0 0% 60%", icon: Code2 },
  { name: "MongoDB", color: "140 50% 40%", icon: Database },
  { name: "PostgreSQL", color: "220 45% 50%", icon: Database },
  { name: "RabbitMQ", color: "28 90% 55%", icon: Rabbit },
  { name: "Python", color: "50 70% 50%", icon: Braces },
  { name: "C++", color: "220 60% 55%", icon: Binary },
  { name: "Java", color: "15 80% 50%", icon: Cpu },
  { name: "Docker", color: "210 70% 55%", icon: Container },
  { name: "TensorFlow", color: "25 85% 55%", icon: BrainCircuit },
  { name: "HTML", color: "18 90% 55%", icon: Code2 },
  { name: "CSS", color: "210 85% 55%", icon: Wind },
  { name: "JavaScript", color: "52 95% 55%", icon: Braces },
  { name: "Bootstrap", color: "265 70% 60%", icon: Blocks },
  { name: "Pandas", color: "245 55% 62%", icon: Database },
  { name: "Scikit-learn", color: "30 90% 55%", icon: BrainCircuit },
  { name: "OpenCV", color: "340 75% 60%", icon: Cpu },
  { name: "Tailwind CSS", color: "185 80% 55%", icon: Wind },
];

const TechMarquee = () => (
  <div className="relative overflow-hidden py-4">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
    
    <div className="animate-marquee flex w-max gap-4 py-1">
      {[...TECH_ITEMS, ...TECH_ITEMS].map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          className="tech-card flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-5 py-3 backdrop-blur-sm"
        >
          <tech.icon className="h-4 w-4" style={{ color: `hsl(${tech.color})` }} />
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: `hsl(${tech.color})` }}
          />
          <span className="whitespace-nowrap text-sm font-medium text-slate-100">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TechMarquee;
