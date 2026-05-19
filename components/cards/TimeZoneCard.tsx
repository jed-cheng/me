"use client";

import { useEffect, useState } from "react";
import BentoCard from "@/components/BentoCard";
import { SITE } from "@/site-config";

function formatTime(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  }).format(date);
}

function getTzAbbr(timezone: string): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    timeZoneName: "short",
  }).formatToParts(new Date());
  return parts.find((p) => p.type === "timeZoneName")?.value ?? timezone;
}

export default function TimeZoneCard() {
  const homeTimezone = SITE.location.timezone;
  const [now, setNow] = useState(new Date());
  const [visitorTz] = useState(() => Intl.DateTimeFormat().resolvedOptions().timeZone);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <BentoCard colSpan="col-span-1" rowSpan="lg:row-span-2">
      <div className="flex flex-col gap-3 justify-center h-full">
        {/* Home timezone */}
        <div>
          <p className="text-xs text-muted-foreground">
            my time · {getTzAbbr(homeTimezone)}
          </p>
          <p className="text-3xl font-bold tabular-nums">{formatTime(now, homeTimezone)}</p>
        </div>

        {/* Visitor timezone */}
        <div>
          <p className="text-xs text-muted-foreground">
            your time · {getTzAbbr(visitorTz)}
          </p>
          <p className="text-3xl font-bold tabular-nums">{formatTime(now, visitorTz)}</p>
        </div>
      </div>
    </BentoCard>
  );
}
