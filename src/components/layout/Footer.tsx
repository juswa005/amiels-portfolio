import React from "react";
import { Divider } from "@/components/ascii/Divider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 font-mono text-sm w-full max-w-4xl mx-auto">
      <Divider char="=" className="mb-4" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-muted">
        <div>
          <span>EOF - </span>
          <span>© {currentYear} Amiel Josh Basug</span>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/juswa005" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover-underline">
            [GitHub]
          </a>
          <a href="https://linkedin.com/in/amieljoshbasug" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover-underline">
            [LinkedIn]
          </a>
        </div>
        <div className="hidden sm:block">
          <span className="animate-blink">_</span>
        </div>
      </div>
    </footer>
  );
}
