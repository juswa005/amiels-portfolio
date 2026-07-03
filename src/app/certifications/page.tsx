import React from "react";
import { certCategories } from "@/data/certs";
import { Divider } from "@/components/ascii/Divider";
import { Brain, ShieldAlert, Code, Server, Award, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Certifications",
};

export default function Certifications() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain": return <Brain className="w-5 h-5" />;
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5" />;
      case "Code": return <Code className="w-5 h-5" />;
      case "Server": return <Server className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  const getIssuerLogo = (issuer: string) => {
    if (issuer.includes("Coursera") || issuer.includes("Google")) return "[GGL/COURSERA]";
    if (issuer.includes("CISCO")) return "[CISCO_NETACAD]";
    if (issuer.includes("CTF") || issuer.includes("Kaspersky")) return "[CTF_EVENT]";
    if (issuer.includes("TESDA") || issuer.includes("Civil Service")) return "[GOV_CERT]";
    return "[CERT]";
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-4 hover-slide-right cursor-default inline-block">/certifications</h1>
      <Divider char="=" className="mb-8" />
      
      <div>
        <h2 className="text-xl font-bold uppercase mb-8 text-accent flex items-center gap-2">
          <Award className="w-6 h-6" /> CERTIFICATIONS_DB
        </h2>
        
        <div className="space-y-12">
          {certCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-mono font-bold text-lg border-b border-border border-dashed pb-2 flex items-center gap-2">
                {getIcon(category.icon)}
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.certs.map((cert, cIdx) => (
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={cIdx} 
                    className="group block border border-border p-4 font-mono text-sm bg-muted/5 hover-lift relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-accent" />
                    </div>
                    <div className="font-bold text-accent group-hover:text-foreground transition-colors pr-6">
                      {cert.name}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs font-bold text-muted-foreground tracking-wider">
                        {getIssuerLogo(cert.issuer)}
                      </span>
                      <span className="text-muted text-xs">
                        {cert.issuer}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
