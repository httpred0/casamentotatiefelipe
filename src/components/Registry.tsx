"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { registryItems } from "@/lib/data";

export function Registry() {
  return (
    <section id="presentes" className="section">
      <div className="section-inner">
        <Reveal className="section-header !mb-0 max-w-2xl">
          <p className="eyebrow">Presentes</p>
          <h2 className="section-title">Lista de presentes</h2>
          <p className="section-lede">
            Nossa história é feita de amor, amizade e muitos sonhos. Obrigado por
            fazer parte deste capítulo e, se desejar, contribuir para o início da
            nossa vida a dois.
          </p>
        </Reveal>

        <div className="section-body grid gap-6 md:grid-cols-3">
          {registryItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="flex h-full flex-col border border-line px-8 py-10 transition-colors duration-500 hover:bg-cream-deep">
                <h3 className="font-serif text-2xl md:text-3xl">{item.title}</h3>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-10 inline-flex w-fit items-center gap-3 border-b border-ink pb-1 text-sm tracking-[0.18em] uppercase transition-opacity hover:opacity-60"
                >
                  {item.cta}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
