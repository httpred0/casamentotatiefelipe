"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/data";

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCount(1);
      else if (w < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const visible = useVisibleCount();

  function go(dir: -1 | 1) {
    setDirection(dir);
    setIndex((i) => (i + dir + photos.length) % photos.length);
  }

  const visiblePhotos = Array.from({ length: visible }, (_, i) => {
    const photoIndex = (index + i) % photos.length;
    return { ...photos[photoIndex], photoIndex };
  });

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length,
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section id="galeria" className="section">
      <div className="section-inner">
        <Reveal className="section-header flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="section-title">
              A fotografia{" "}
              <span className="italic text-ink-soft">é a protagonista.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Fotos anteriores"
              className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:bg-cream-deep"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximas fotos"
              className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:bg-cream-deep"
            >
              →
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${index}-${visible}`}
                custom={direction}
                initial={{ opacity: 0, x: direction * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -48 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-4 md:gap-5"
                style={{
                  gridTemplateColumns: `repeat(${visible}, minmax(0, 1fr))`,
                }}
              >
                {visiblePhotos.map((photo) => (
                  <button
                    key={`${photo.src}-${photo.photoIndex}`}
                    type="button"
                    onClick={() => setLightbox(photo.photoIndex)}
                    className="group relative aspect-[3/4] w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    aria-label={`Abrir foto: ${photo.alt}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      quality={90}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-[0.65rem] uppercase tracking-[0.22em] text-ink-muted">
          {String(index + 1).padStart(2, "0")} — {String(photos.length).padStart(2, "0")}
        </p>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização da foto"
          >
            <button
              type="button"
              className="absolute right-6 top-6 z-10 eyebrow !text-cream/80 hover:!text-cream"
              onClick={() => setLightbox(null)}
            >
              Fechar
            </button>

            <button
              type="button"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 px-3 py-6 text-cream/70 hover:text-cream md:left-8"
              aria-label="Foto anterior"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) =>
                  i === null ? i : (i - 1 + photos.length) % photos.length,
                );
              }}
            >
              ←
            </button>

            <motion.div
              key={photos[lightbox].src}
              className="relative h-[78vh] w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
                quality={95}
              />
            </motion.div>

            <button
              type="button"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 px-3 py-6 text-cream/70 hover:text-cream md:right-8"
              aria-label="Próxima foto"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((i) => (i === null ? i : (i + 1) % photos.length));
              }}
            >
              →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
