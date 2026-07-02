import React from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export function SkillMatrix({ categories }: { categories: SkillCategoryProps[] }) {
  return (
    <div className="font-mono text-sm space-y-6">
      {categories.map((category, i) => (
        <div key={i}>
          <div className="mb-2 flex items-center gap-4">
            <span className="font-bold whitespace-nowrap">{category.title}</span>
            <div className="h-[1px] w-full bg-border border-dashed border-b border-border" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {category.skills.map((skill, j) => (
              <div key={j} className="flex items-center gap-2 group">
                <span className="text-muted group-hover:text-accent transition-colors">+</span>
                <span className="group-hover:text-foreground transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
