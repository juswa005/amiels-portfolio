"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Divider } from "@/components/ascii/Divider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "experience", path: "/experience" },
    { name: "projects", path: "/projects" },
    { name: "skills", path: "/skills" },
    { name: "education", path: "/education" },
    { name: "certifications", path: "/certifications" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <aside className="font-mono w-full md:w-48 shrink-0 flex flex-col mb-8 md:mb-0 md:mr-10 md:sticky md:top-10 md:h-[calc(100vh-5rem)]">
      <div>
        <div className="mb-6 flex flex-col items-center md:items-start">
          <div className="mb-4 text-sm whitespace-nowrap text-accent font-bold uppercase tracking-widest hover-lift">
            <Link href="/">
              [ Amiel Josh Basug ]
            </Link>
          </div>
          <div className="text-sm">
            <span className="text-accent font-bold">root@portfolio</span>
            <span className="text-muted">:</span>
            <span className="text-foreground">~</span>
            <span className="text-muted">$</span>
          </div>
        </div>
        
        <Divider char="-" className="mb-4 hidden md:block" />
        <div className="h-[1px] w-full bg-border border-dashed mb-4 md:hidden" />
        
        <nav>
          <div className="text-muted mb-4 text-[10px] uppercase">ls -l /nav</div>
          <ul className="flex flex-row md:flex-col flex-wrap gap-x-6 gap-y-3 md:gap-y-4 text-xs">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name} className="relative group">
                  <Link 
                    href={item.path}
                    className={`hover-underline focus:outline-none focus:ring-1 focus:ring-foreground transition-colors ${
                      isActive ? "text-accent font-bold" : "text-foreground"
                    }`}
                  >
                    <span className="text-muted mr-2">
                      {isActive ? ">" : "./"}
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Spacer pushes the bottom section down on desktop */}
      <div className="flex-1 hidden md:block"></div>

      <div className="mt-8 md:mt-0 flex flex-col gap-4">
        <Divider char="-" className="hidden md:block" />
        <div className="h-[1px] w-full bg-border border-dashed md:hidden" />
        
        <div className="flex items-center justify-between w-full">
          <div className="text-xs text-muted">
            [System Ready]
          </div>
          <ThemeToggle />
        </div>
        <a href="mailto:amieljosh05@gmail.com" className="text-xs text-muted-foreground hover:text-accent transition-colors hover:underline">
          amieljosh05@gmail.com
        </a>
      </div>
    </aside>
  );
}
