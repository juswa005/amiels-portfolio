import React from "react";

export interface SpecCardProps {
  title: string;
  description: string;
  stack: string[];
  year?: string;
  status?: string;
  github?: string;
  demo?: string;
}

export function SpecCard({ title, description, stack, year, status, github, demo }: SpecCardProps) {
  return (
    <div className="border border-border p-4 font-mono text-sm bg-background/50 hover:bg-muted/5 transition-colors group">
      <div className="flex justify-between items-start mb-2 border-b border-border border-dashed pb-2">
        <h3 className="font-bold text-base group-hover:text-accent transition-colors">{title}</h3>
        <span className="text-muted text-xs">SPEC-REV 1.0</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="sm:col-span-2 space-y-2">
          <div className="text-muted-foreground font-sans leading-relaxed text-sm">
            {description}
          </div>
        </div>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between"><span className="text-muted">STATUS:</span> <span>{status || "UNKNOWN"}</span></div>
          <div className="flex justify-between"><span className="text-muted">YEAR:</span> <span>{year || "N/A"}</span></div>
          {github && <div className="flex justify-between"><span className="text-muted">SRC:</span> <a href={github} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">GitHub</a></div>}
          {demo && <div className="flex justify-between"><span className="text-muted">DEMO:</span> <a href={demo} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Link</a></div>}
        </div>
      </div>
      
      <div className="text-xs">
        <span className="text-muted mr-2">TECH_STACK:</span>
        <span className="break-words">
          [{stack.join("] [")}]
        </span>
      </div>
    </div>
  );
}
