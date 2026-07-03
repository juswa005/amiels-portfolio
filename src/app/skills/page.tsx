import React from "react";
import resumeData from "@/data/resume.json";
import { Divider } from "@/components/ascii/Divider";
import { SkillMatrix } from "@/components/ui/SkillMatrix";

export const metadata = {
  title: "Skills",
};

export default function Skills() {
  const categories = [
    { title: "PROGRAMMING", skills: resumeData.skills.programmingLanguages },
    { title: "HARDWARE & EMBEDDED", skills: resumeData.skills.embeddedAndHardware },
    { title: "OS", skills: resumeData.skills.operatingSystems },
    { title: "TOOLS & SYSTEMS", skills: resumeData.skills.toolsAndSystems },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-4">/skills</h1>
      <Divider char="=" className="mb-8" />
      
      <div className="bg-muted/5 border border-border p-6">
        <SkillMatrix categories={categories} />
      </div>
    </div>
  );
}
