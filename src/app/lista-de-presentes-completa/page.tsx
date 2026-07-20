import type { Metadata } from "next";
import Link from "next/link";
import { GiftItemCard } from "@/components/GiftItemCard";
import { giftRegistries, wedding } from "@/lib/data";

export const metadata: Metadata = {
  title: `Lista de presentes completa — ${wedding.names}`,
  description:
    "Todos os presentes de chá de casa nova, lua de mel e presente livre.",
};

const sections = [
  giftRegistries.chadecasanova,
  giftRegistries.luademel,
  giftRegistries.presentelivre,
];

export default function ListaDePresentesCompletaPage() {
  return (
    <main className="min-h-dvh bg-cream text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <Link
            href="/#presentes"
            className="font-serif text-lg tracking-wide md:text-xl"
          >
            {wedding.bride}
            <span className="mx-2 text-champagne">&</span>
            {wedding.groom}
          </Link>
          <Link
            href="/#presentes"
            className="eyebrow text-ink-muted transition-colors hover:text-ink"
          >
            Voltar
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <p className="eyebrow">Presentes</p>
        <h1 className="mt-5 font-serif text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]">
          Lista completa
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg md:leading-8">
          Nossa história é feita de amor, amizade e muitos sonhos. Obrigado por
          fazer parte deste capítulo e, se desejar, contribuir para o início da
          nossa vida a dois.
        </p>

        <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-5">
          {sections.map((section) => (
            <a
              key={section.slug}
              href={`#${section.slug}`}
              className="eyebrow text-ink-muted transition-colors hover:text-ink"
            >
              {section.title}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-24">
          {sections.map((section) => (
            <section
              key={section.slug}
              id={section.slug}
              className="scroll-mt-28"
            >
              <div className="border-b border-line pb-8">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em]">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
                  {section.description}
                </p>
              </div>

              <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                {section.items.map((item) => (
                  <GiftItemCard key={item.id} item={item} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
