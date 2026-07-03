import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  active?: boolean;
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="relative border-l border-border ml-4 space-y-8 py-4">
      {items.map((item, i) => (
        <div key={i} className="relative pl-6">
          {/* Node */}
          <div className="absolute w-3 h-3 bg-background border-2 border-foreground rounded-none -left-[6.5px] top-1.5" />
          
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
            <span className="font-mono text-xs text-muted-foreground w-32 shrink-0">
              [{item.year}]
            </span>
            <h3 className="text-lg font-bold">
              {item.title}
              {item.active && <span className="ml-2 inline-block w-2 h-2 bg-accent animate-pulse" />}
            </h3>
          </div>
          
          <div className="font-mono text-sm text-muted mb-2">{item.subtitle}</div>
          
          {item.description && (
            <p className="text-sm font-sans max-w-2xl leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
