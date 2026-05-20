"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { BentoGridItem } from "@/components/ui/bento-grid";

export default function ThemeToggleCard() {
  const [dark, setDark] = useState(false);

  // Read initial state from <html> class (set by Layout's inline script)
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <BentoGridItem colSpan="col-span-1" rowSpan="lg:row-span-1">
      <div className="flex h-full flex-col items-start justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {dark ? "Dark mode on" : "Light mode on"}
        </p>
        <Button onClick={toggle} variant="outline" size="icon" aria-label="Toggle theme">
          {dark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </Button>
      </div>
    </BentoGridItem>
  );
}
