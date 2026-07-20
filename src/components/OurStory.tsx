"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { storyImages } from "@/lib/data";

function ParallaxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className={`img-reveal relative overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
          quality={90}
        />
      </motion.div>
    </div>
  );
}

export function OurStory() {
  return (
    <section id="historia" className="section">
      <div className="section-inner">
        <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-10">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Nossa história</p>
            <h2 className="section-title">
              Nossa melhor aventura é construir uma vida a dois.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-6 md:col-start-7">
            <p className="section-lede !mt-0">
              Nossa história começou como uma amizade que sempre pareceu existir.
              Entre encontros, intensidade e cumplicidade, encontramos um no
              outro o nosso lugar. Hoje celebramos o amor que escolhemos viver.
            </p>
          </Reveal>
        </div>

        <div className="section-body">
          <Reveal>
            <ParallaxImage
              src={storyImages[0].src}
              alt={storyImages[0].alt}
              className="aspect-[3/2] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
