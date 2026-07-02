import React from "react";
import resumeData from "@/data/resume.json";
import { Divider } from "@/components/ascii/Divider";
import { ContactCard } from "@/components/ui/ContactCard";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="space-y-8 flex flex-col items-center">
      <div className="w-full">
        <h1 className="text-2xl font-bold uppercase tracking-widest mb-4">/contact</h1>
        <Divider char="=" className="mb-8" />
      </div>
      
      <div className="w-full flex justify-center py-8">
        <ContactCard 
          email={resumeData.contact.email}
          phone={resumeData.contact.phone}
          address={resumeData.contact.address}
          linkedin={resumeData.links.linkedin}
          github={resumeData.links.github}
        />
      </div>
    </div>
  );
}
