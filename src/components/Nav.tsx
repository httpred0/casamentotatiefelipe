"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, wedding } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onHero = !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled || open
            ? "border-b border-line bg-cream/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <a
            href="#topo"
            className={`font-serif text-lg tracking-wide transition-colors duration-700 md:text-xl ${
              onHero ? "text-white" : "text-ink"
            }`}
          >
            {wedding.bride}
            <span
              className={`mx-2 transition-colors duration-700 ${
                onHero ? "text-white/80" : "text-champagne"
              }`}
            >
              &
            </span>
            {wedding.groom}
          </a>

          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`eyebrow text-[0.65rem] transition-colors duration-700 ${
                  onHero
                    ? "!text-white hover:!text-white/80"
                    : "!text-ink hover:!text-ink/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full transition-all duration-500 ${
                  onHero ? "bg-white" : "bg-ink"
                } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full transition-all duration-500 ${
                  onHero ? "bg-white" : "bg-ink"
                } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-cream px-8 pt-28 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col gap-8" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl text-ink"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <p className="mt-auto mb-12 eyebrow text-ink-muted">
              {wedding.dateDisplay}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
