import React from "react";
import resumeData from "@/data/resume.json";
import { Divider } from "@/components/ascii/Divider";
import { SpecCard } from "@/components/ui/SpecCard";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-4">/projects</h1>
      <Divider char="=" className="mb-8" />
      
      <div className="grid gap-6">
        {resumeData.projects.map((project, i) => (
          <SpecCard 
            key={i}
            title={project.title}
            description={project.description}
            stack={project.stack}
            status={project.status}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
}
