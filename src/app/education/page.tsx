import React from "react";
import resumeData from "@/data/resume.json";
import { Divider } from "@/components/ascii/Divider";
import { Timeline } from "@/components/ui/Timeline";

export const metadata = {
  title: "Education",
};

export default function Education() {
  const educationItems = resumeData.education.map((edu, idx) => ({
    year: edu.duration,
    title: edu.degree,
    subtitle: edu.institution,
    description: edu.details,
    active: idx === 0,
  }));

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-4">/education</h1>
      <Divider char="=" className="mb-8" />
      
      <Timeline items={educationItems} />
    </div>
  );
}
