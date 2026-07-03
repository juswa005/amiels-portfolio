"use client";

import React, { useState, useRef, useEffect } from "react";
import resumeData from "@/data/resume.json";

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function Terminal() {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    let output: React.ReactNode = "";

    const args = cmd.split(" ");
    const baseCmd = args[0].toLowerCase();

    switch (baseCmd) {
      case "help":
        output = (
          <div className="grid grid-cols-2 gap-4">
            <div>help</div><div>Show available commands</div>
            <div>whoami</div><div>Print current user</div>
            <div>about</div><div>Display summary</div>
            <div>projects</div><div>List projects</div>
            <div>skills</div><div>List technical skills</div>
            <div>contact</div><div>Display contact info</div>
            <div>history</div><div>Show command history</div>
            <div>pwd</div><div>Print working directory</div>
            <div>uname</div><div>Print system information</div>
            <div>clear</div><div>Clear terminal screen</div>
            <div>cat</div><div>Concatenate files and print</div>
          </div>
        );
        break;
      case "whoami":
        output = <div>guest</div>;
        break;
      case "about":
        output = <div>{resumeData.summary}</div>;
        break;
      case "projects":
        output = (
          <ul className="list-disc pl-4">
            {resumeData.projects.map((p, i) => (
              <li key={i}>{p.title} - {p.stack.join(", ")}</li>
            ))}
          </ul>
        );
        break;
      case "skills":
        output = (
          <div>
            <div>[Programming] {resumeData.skills.programmingLanguages.join(", ")}</div>
            <div>[Hardware] {resumeData.skills.embeddedAndHardware.join(", ")}</div>
            <div>[Systems] {resumeData.skills.toolsAndSystems.join(", ")}</div>
            <div>[OS] {resumeData.skills.operatingSystems.join(", ")}</div>
          </div>
        );
        break;
      case "contact":
        output = (
          <div>
            <div>Email: {resumeData.contact.email}</div>
            <div>Phone: {resumeData.contact.phone}</div>
            <div>LinkedIn: {resumeData.links.linkedin}</div>
            <div>GitHub: {resumeData.links.github}</div>
          </div>
        );
        break;
      case "history":
        output = (
          <div>
            {history.map((h, i) => (
              <div key={i}> {i + 1}  {h.command}</div>
            ))}
            <div> {history.length + 1}  history</div>
          </div>
        );
        break;
      case "pwd":
        output = <div>/home/guest</div>;
        break;
      case "uname":
        output = <div>Linux portfolio 6.8.0-generic x86_64 GNU/Linux</div>;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "cat":
        if (args[1] === "about.txt") {
          output = <div>{resumeData.summary}</div>;
        } else {
          output = <div>cat: {args[1] || "missing operand"}: No such file or directory</div>;
        }
        break;
      default:
        output = <div>bash: {baseCmd}: command not found</div>;
    }

    setHistory((prev) => [
      ...prev,
      { id: Date.now().toString(), command: cmd, output },
    ]);
    setInput("");
  };

  return (
    <div 
      className="border border-border bg-background/50 p-4 font-mono text-sm shadow-sm cursor-text"
      onClick={focusInput}
    >
      <div className="mb-2 text-muted">
        Amiel&apos;s Interactive Terminal v1.0.0
        <br />
        Type &quot;help&quot; for a list of available commands.
      </div>

      {history.map((entry) => (
        <div key={entry.id} className="mb-2">
          <div className="flex">
            <span className="text-accent mr-2">guest@portfolio:~$</span>
            <span>{entry.command}</span>
          </div>
          <div className="text-muted-foreground mt-1">{entry.output}</div>
        </div>
      ))}

      <form onSubmit={handleCommand} className="flex items-center relative" onClick={focusInput}>
        <span className="text-accent mr-2">guest@portfolio:~$</span>
        <span className="whitespace-pre">{input}</span>
        <span className="animate-blink inline-block w-[1ch] h-[1.2em] bg-foreground ml-[1px]"></span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="absolute opacity-0 cursor-text -left-9999 w-full h-full inset-0"
          spellCheck={false}
          autoComplete="off"
        />
      </form>
      <div ref={bottomRef} />
    </div>
  );
}
