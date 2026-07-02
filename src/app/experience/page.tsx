import React from "react";
import { Divider } from "@/components/ascii/Divider";

export const metadata = {
  title: "Experience",
};

export default function Experience() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-4">/experience</h1>
      <Divider char="=" className="mb-8" />
      
      <div className="font-mono p-4 border border-border border-dashed text-center text-muted">
        [NO_DATA_FOUND]
        <br />
        <br />
        SYSTEM_STATUS: Actively seeking internships and junior roles in Software Engineering, Embedded Systems, and IT Infrastructure.
      </div>
    </div>
  );
}
