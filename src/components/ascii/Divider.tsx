import React from "react";

interface DividerProps {
  char?: string;
  length?: number;
  label?: string;
  className?: string;
}

export function Divider({ char = "=", className = "" }: DividerProps) {
  // Generate a very long string that will overflow the container safely
  const repeatChar = char.repeat(1000);

  return (
    <div className={`font-mono text-muted select-none w-full block overflow-hidden whitespace-nowrap opacity-50 tracking-tighter ${className}`} aria-hidden="true">
      {repeatChar}
    </div>
  );
}
