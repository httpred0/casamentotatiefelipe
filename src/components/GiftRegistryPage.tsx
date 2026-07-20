import Link from "next/link";
import type { GiftRegistry } from "@/lib/data";
import { wedding } from "@/lib/data";
import { GiftItemCard } from "./GiftItemCard";

type Props = {
  registry: GiftRegistry;
};

export function GiftRegistryPage({ registry }: Props) {
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
        <p className="eyebrow">{registry.eyebrow}</p>
        <h1 className="mt-5 font-serif text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]">
          {registry.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg md:leading-8">
          {registry.description}
        </p>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2">
          {registry.items.map((item) => (
            <GiftItemCard key={item.id} item={item} />
          ))}
        </ul>

        {!registry.items.every((item) => item.mercadoPagoUrl) && (
          <p className="mt-16 text-sm text-ink-muted">
            Alguns links de pagamento do Mercado Pago ainda serão adicionados.
          </p>
        )}
      </div>
    </main>
  );
}
