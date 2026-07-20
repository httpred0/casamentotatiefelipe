"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/data";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function getParts(target: number): Parts | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const target = new Date(wedding.date).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(getParts(target));
    const id = setInterval(() => setParts(getParts(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!parts) {
    return (
      <div
        className="flex items-center gap-5 sm:gap-7"
        aria-hidden
      >
        {["Dias", "Horas", "Min", "Seg"].map((label, i) => (
          <div key={label} className="flex items-center gap-5 sm:gap-7">
            <div className="text-center">
              <div className="font-serif text-2xl tabular-nums text-white sm:text-3xl">
                --
              </div>
              <div className="mt-1 text-[0.6rem] uppercase tracking-[0.22em] text-white/60">
                {label}
              </div>
            </div>
            {i < 3 && <span className="h-8 w-px bg-white/25" />}
          </div>
        ))}
      </div>
    );
  }

  const items = [
    { label: "Dias", value: parts.days },
    { label: "Horas", value: parts.hours },
    { label: "Min", value: parts.minutes },
    { label: "Seg", value: parts.seconds },
  ];

  return (
    <div
      className="flex items-center gap-5 sm:gap-7"
      aria-label="Contagem regressiva"
    >
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-5 sm:gap-7">
          <div className="text-center">
            <div className="font-serif text-2xl tabular-nums text-white sm:text-3xl">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[0.6rem] uppercase tracking-[0.22em] text-white/60">
              {item.label}
            </div>
          </div>
          {i < items.length - 1 && (
            <span className="h-8 w-px bg-white/25" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}
