"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { wedding } from "@/lib/data";

export function Closing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[56svh] items-center justify-center overflow-hidden md:min-h-[60svh]"
      aria-label="Encerramento"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/photos/closing.jpg"
          alt="Tatiane e Felipe em um momento sereno"
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
          priority={false}
        />
        <div className="absolute inset-0 bg-ink/40" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 text-center md:px-10">
        <Reveal>
          <p className="eyebrow !text-cream/70">Obrigado</p>
          <h2 className="mt-6 font-serif text-[clamp(2.2rem,6vw,4rem)] leading-[1.15] tracking-[-0.02em] text-cream">
            Vamos celebrar o nosso &ldquo;sim&rdquo;.
            <br />
            E tudo o que ele representa.
          </h2>
          <p className="mt-8 font-serif text-xl italic text-cream/80 md:text-2xl">
            {wedding.names}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
