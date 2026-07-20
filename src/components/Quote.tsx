"use client";

import { Reveal } from "./Reveal";
import { wedding } from "@/lib/data";

export function Quote() {
  return (
    <section id="frase" className="section" aria-label="Frase do casal">
      <div className="section-inner--narrow mx-auto text-center">
        <Reveal>
          <p className="eyebrow">Uma nota nossa</p>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="section-title mt-8 font-serif italic !text-[clamp(1.7rem,4vw,2.6rem)] !leading-[1.3]">
            “{wedding.quote}”
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 font-serif italic text-ink-muted">
            — {wedding.names}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
