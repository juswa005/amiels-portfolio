import React from "react";
import Link from "next/link";
import { Terminal } from "@/components/ui/Terminal";
import { Divider } from "@/components/ascii/Divider";
import { SpecCard } from "@/components/ui/SpecCard";
import { GithubGraph } from "@/components/ui/GithubGraph";
import { Avatar } from "@/components/ui/Avatar";
import resumeData from "@/data/resume.json";
import { certCategories } from "@/data/certs";
import { ExternalLink } from "lucide-react";

export default function Home() {
  const topProjects = resumeData.projects.slice(0, 3);
  
  // Pick 3 relevant certs
  const topCerts = [
    certCategories.find(c => c.category === "Artificial Intelligence")?.certs[0],
    certCategories.find(c => c.category === "Cybersecurity & CTF")?.certs[0],
    certCategories.find(c => c.category === "Software & Web")?.certs[0]
  ].filter(Boolean) as { name: string; issuer: string; date: string; url: string; }[];

  const getIssuerLogo = (issuer: string) => {
    if (issuer.includes("Coursera") || issuer.includes("Google")) return "[GGL/COURSERA]";
    if (issuer.includes("CISCO")) return "[CISCO_NETACAD]";
    if (issuer.includes("CTF") || issuer.includes("Kaspersky")) return "[CTF_EVENT]";
    if (issuer.includes("TESDA") || issuer.includes("Civil Service")) return "[GOV_CERT]";
    return "[CERT]";
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* HEADER SUMMARY */}
      <section className="space-y-4">
        <Divider char="=" className="hidden sm:block" />
        <div className="flex flex-col md:flex-row gap-8 items-start py-4">
          <Avatar />
          <div className="flex flex-col justify-center sm:pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-2 hover-slide-right cursor-default inline-block">
              {resumeData.name}
            </h1>
            <h2 className="text-lg sm:text-xl text-muted-foreground uppercase tracking-widest mb-6 border-b border-dashed border-border pb-4">
              COMPUTER ENGINEER <span className="text-xs sm:text-sm lowercase tracking-normal">(in the making)</span>
            </h2>
            <div className="font-sans text-sm leading-relaxed max-w-2xl text-foreground/90 pl-4 border-l-2 border-accent/50">
              <p>{resumeData.summary}</p>
            </div>
          </div>
        </div>
        <Divider char="=" className="hidden sm:block" />
      </section>

      {/* TERMINAL */}
      <section>
        <Terminal />
      </section>

      {/* SKILLS PREVIEW */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-2">
          <h3 className="text-lg font-bold uppercase tracking-widest border-l-2 border-accent pl-4">/technical_skills</h3>
          <Link href="/skills" className="text-accent hover-underline inline-flex items-center gap-2 group font-bold font-mono text-xs ml-4 sm:ml-0">
            <span className="text-muted group-hover:text-accent transition-colors">lrwxrwxrwx</span>
            <span>View all skills -&gt;</span>
          </Link>
        </div>
        <div className="pl-4 border-l border-border border-dashed">
          <div className="flex flex-wrap gap-2">
            {[...resumeData.skills.programmingLanguages, ...resumeData.skills.operatingSystems, ...resumeData.skills.embeddedAndHardware].slice(0, 10).map(skill => (
              <span key={skill} className="px-2 py-1 border border-border bg-muted/10 text-xs font-mono">
                {skill}
              </span>
            ))}
            <span className="px-2 py-1 border border-border border-dashed text-muted text-xs font-mono">
              ...more
            </span>
          </div>
        </div>
      </section>

      {/* EDUCATION PREVIEW */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-2">
          <h3 className="text-lg font-bold uppercase tracking-widest border-l-2 border-accent pl-4">/education</h3>
          <Link href="/education" className="text-accent hover-underline inline-flex items-center gap-2 group font-bold font-mono text-xs ml-4 sm:ml-0">
            <span className="text-muted group-hover:text-accent transition-colors">lrwxrwxrwx</span>
            <span>View full education -&gt;</span>
          </Link>
        </div>
        <div className="pl-4 border-l border-border border-dashed space-y-4">
          {resumeData.education.slice(0, 1).map((edu, idx) => (
             <div key={idx} className="relative group">
               <h4 className="font-bold text-accent text-base">{edu.institution}</h4>
               <div className="text-muted text-xs font-mono mb-2">{edu.duration}</div>
               <div className="font-mono text-xs border-l-2 border-border pl-3">
                 <span className="text-foreground">{edu.degree}</span>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-2">
          <h3 className="text-lg font-bold uppercase tracking-widest border-l-2 border-accent pl-4">/featured_projects</h3>
          <Link href="/projects" className="text-accent hover-underline inline-flex items-center gap-2 group font-bold font-mono text-xs ml-4 sm:ml-0">
            <span className="text-muted group-hover:text-accent transition-colors">lrwxrwxrwx</span>
            <span>View all projects -&gt;</span>
          </Link>
        </div>
        <div className="grid gap-4 pl-4 border-l border-border border-dashed">
          {topProjects.map((project, i) => (
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
      </section>

      {/* FEATURED CERTS */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-2">
          <h3 className="text-lg font-bold uppercase tracking-widest border-l-2 border-accent pl-4">/latest_certifications</h3>
          <Link href="/certifications" className="text-accent hover-underline inline-flex items-center gap-2 group font-bold font-mono text-xs ml-4 sm:ml-0">
            <span className="text-muted group-hover:text-accent transition-colors">lrwxrwxrwx</span>
            <span>View all certs -&gt;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pl-4 border-l border-border border-dashed">
          {topCerts.map((cert, cIdx) => (
            <a 
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              key={cIdx} 
              className="group block border border-border p-3 font-mono text-xs bg-muted/5 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-accent" />
              </div>
              <div className="font-bold text-accent group-hover:text-foreground transition-colors pr-6">
                {cert.name}
              </div>
              <div className="flex flex-col mt-3 space-y-1">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">
                  {getIssuerLogo(cert.issuer)}
                </span>
                <span className="text-muted text-[10px] uppercase">
                  {cert.issuer}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>


      
      {/* GITHUB GRAPH (FROM github.txt) */}
      <GithubGraph />

    </div>
  );
}
