"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Avatar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const src = mounted && resolvedTheme === "dark" ? "/darkmode.png" : "/lightmode.png";

  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 shrink-0 hover-lift mx-auto">
      <Image 
        src={src}
        alt="Amiel Josh Basug"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 192px, 256px"
        priority
      />
    </div>
  );
}
