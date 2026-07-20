"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Countdown } from "./Countdown";
import { wedding } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      id="topo"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/hero.jpg"
          alt="Tatiane e Felipe sorrindo sob a luz dourada"
          className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-20"
      >
        <motion.p
          className="eyebrow !text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Convidam para o casamento
        </motion.p>

        <motion.h1
          className="mt-5 max-w-4xl font-serif text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.92] tracking-[-0.02em] text-white"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {wedding.bride}
          <br />
          <span className="italic text-white/90">&</span> {wedding.groom}
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="font-serif text-xl text-white md:text-2xl">
              {wedding.dateDisplay}
            </p>
            <p className="mt-2 text-sm tracking-wide text-white/70">
              {wedding.timeDisplay} · {wedding.city}
            </p>
          </div>
          <Countdown />
        </motion.div>

        <motion.a
          href="#frase"
          className="mt-14 inline-flex flex-col items-center gap-3 text-white/70 transition-colors hover:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          aria-label="Mais detalhes"
        >
          <span className="eyebrow text-[0.6rem] !text-inherit">Mais detalhes</span>
          <span className="block h-10 w-px origin-top bg-white/40 animate-pulse" />
        </motion.a>
      </motion.div>
    </section>
  );
}
