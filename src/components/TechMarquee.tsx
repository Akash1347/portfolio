const TECH_ITEMS = [
  { name: "React.js", color: "195 80% 55%" },
  { name: "Node.js", color: "140 60% 45%" },
  { name: "Express.js", color: "0 0% 60%" },
  { name: "MongoDB", color: "140 50% 40%" },
  { name: "Python", color: "50 70% 50%" },
  { name: "C++", color: "220 60% 55%" },
  { name: "Java", color: "15 80% 50%" },
  { name: "Docker", color: "210 70% 55%" },
  { name: "TensorFlow", color: "25 85% 55%" },
  { name: "MySQL", color: "200 60% 50%" },
  { name: "Git", color: "15 70% 50%" },
];

const TechMarquee = () => (
  <div className="relative overflow-hidden py-4">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
    
    <div className="animate-marquee flex w-max gap-4">
      {[...TECH_ITEMS, ...TECH_ITEMS].map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          className="tech-card flex items-center gap-3 rounded-xl border border-border bg-card/80 px-5 py-3 backdrop-blur-sm"
        >
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: `hsl(${tech.color})` }}
          />
          <span className="whitespace-nowrap text-sm font-medium text-foreground/90">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TechMarquee;
