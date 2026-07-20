"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { wedding } from "@/lib/data";

export function DressCode() {
  return (
    <section id="traje" className="section overflow-hidden">
      <div className="section-inner grid overflow-hidden lg:grid-cols-2">
        <Reveal className="relative min-h-[52vh] lg:min-h-[68vh]">
          <Image
            src="/photos/07.jpg"
            alt="Retrato editorial sugerindo o clima do dress code"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            quality={90}
          />
        </Reveal>

        <div className="flex flex-col justify-center bg-cream-deep px-8 py-14 md:px-12 md:py-16 lg:px-14">
          <Reveal>
            <p className="eyebrow">Dress code</p>
            <h2 className="section-title">{wedding.dressCode.title}</h2>
            <p className="section-lede">{wedding.dressCode.description}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-12 eyebrow">Paleta sugerida</p>
            <ul className="mt-6 flex flex-wrap gap-5">
              {wedding.dressCode.colors.map((color) => (
                <li key={color.name} className="flex flex-col items-center gap-3">
                  <span
                    className="h-14 w-14 rounded-full border border-line shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]"
                    style={{ backgroundColor: color.hex }}
                    aria-hidden
                  />
                  <span className="text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted">
                    {color.name}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
