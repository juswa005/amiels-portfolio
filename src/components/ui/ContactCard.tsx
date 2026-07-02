import React from "react";
import { Divider } from "@/components/ascii/Divider";

interface ContactProps {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  address: string;
}

export function ContactCard({ email, phone, linkedin, github, address }: ContactProps) {
  return (
    <div className="border border-border p-6 font-mono text-sm max-w-lg">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold uppercase tracking-widest mb-1">Contact Protocol</h2>
        <div className="text-muted text-xs">INITIATE CONNECTION SEQUENCE</div>
      </div>
      
      <Divider char="-" className="mb-6" />
      
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <span className="text-muted">EMAIL_ADDR:</span>
          <a href={`mailto:${email}`} className="hover-underline">{email}</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <span className="text-muted">PHONE_NUM:</span>
          <a href={`tel:${phone}`} className="hover-underline">{phone}</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <span className="text-muted">PHYS_LOC:</span>
          <span className="text-right">{address}</span>
        </div>
      </div>
      
      <Divider char="-" className="my-6" />
      
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <span className="text-muted">GITHUB_URL:</span>
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover-underline break-all">{github}</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
          <span className="text-muted">LINKEDIN_URL:</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover-underline break-all">{linkedin}</a>
        </div>
      </div>
    </div>
  );
}
