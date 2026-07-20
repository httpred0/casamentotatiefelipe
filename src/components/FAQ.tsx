"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="section-inner--medium mx-auto">
        <Reveal className="section-header text-center !mb-0">
          <p className="eyebrow">Dúvidas</p>
          <h2 className="section-title">Informações adicionais</h2>
        </Reveal>

        <div className="section-body divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.03}>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-serif text-xl md:text-2xl">
                      {item.q}
                    </span>
                    <span
                      className={`text-ink-muted transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pr-10 text-base leading-relaxed text-ink-soft">
                          <p>{item.a}</p>
                          {"href" in item && item.href && (
                            <a
                              href={item.href}
                              className="mt-4 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm tracking-[0.14em] uppercase text-ink transition-opacity hover:opacity-60"
                            >
                              {item.linkLabel ?? "Ver mais"}
                              <span aria-hidden>→</span>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
