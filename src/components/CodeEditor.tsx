const CODE_LINES = [
  { num: "01", content: <><span className="text-[hsl(250,80%,65%)]">const</span> developer = {"{"}</> },
  { num: "02", content: <>  name: <span className="text-[hsl(140,60%,55%)]">'Akash Alampally'</span>,</> },
  { num: "03", content: <>  focus: <span className="text-[hsl(140,60%,55%)]">'Full-Stack Dev'</span>,</> },
  { num: "04", content: <>  skills: [<span className="text-[hsl(140,60%,55%)]">'React'</span>, <span className="text-[hsl(140,60%,55%)]">'Node'</span>, <span className="text-[hsl(140,60%,55%)]">'Docker'</span>],</> },
  { num: "05", content: <>  available: <span className="text-[hsl(30,80%,60%)]">true</span>,</> },
  { num: "06", content: <>  motto: <span className="text-[hsl(140,60%,55%)]">"Ship fast, learn faster"</span></> },
  { num: "07", content: <>{"}"};</> },
  { num: "08", content: <><span className="text-muted-foreground">developer</span>.<span className="text-[hsl(250,80%,65%)]">showcase</span>();<span className="cursor-blink text-primary">▌</span></> },
];

const CodeEditor = () => (
  <div className="code-editor w-full max-w-md shadow-2xl shadow-primary/5">
    <div className="code-editor-bar">
      <div className="code-dot bg-[hsl(0,70%,55%)]" />
      <div className="code-dot bg-[hsl(45,80%,55%)]" />
      <div className="code-dot bg-[hsl(140,60%,45%)]" />
      <span className="ml-auto text-xs text-muted-foreground">Portfolio.ts</span>
    </div>
    <div className="p-4 text-xs sm:text-sm leading-relaxed">
      {CODE_LINES.map((line) => (
        <div key={line.num} className="flex gap-4">
          <span className="select-none text-muted-foreground/50 w-5 text-right">{line.num}</span>
          <span className="text-foreground/90">{line.content}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CodeEditor;
