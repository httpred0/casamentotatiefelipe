"use client";

import { Reveal } from "./Reveal";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="section-inner--medium mx-auto">
        <Reveal className="section-header text-center !mb-0">
          <p className="eyebrow">Programa</p>
          <h2 className="section-title">Timeline do dia</h2>
        </Reveal>

        <ol className="section-body relative">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line md:block"
            aria-hidden
          />

          {timeline.map((item, i) => {
            const titleOnLeft = i % 2 === 1;

            return (
              <Reveal key={item.title} delay={i * 0.04}>
                <li
                  className={`relative grid gap-3 py-10 md:grid-cols-2 md:gap-16 md:py-12 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <div
                    className={
                      titleOnLeft
                        ? "md:order-2 md:text-left"
                        : "md:text-right"
                    }
                  >
                    <p className="font-serif text-2xl text-ink md:text-3xl">
                      {item.time}
                    </p>
                  </div>
                  <div
                    className={
                      titleOnLeft ? "md:order-1 md:text-right" : ""
                    }
                  >
                    <h3 className="font-serif text-xl md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft md:text-base md:inline-block">
                      {item.description}
                    </p>
                  </div>
                  <span
                    className="absolute left-1/2 top-[4.5rem] hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-champagne md:block"
                    aria-hidden
                  />
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
