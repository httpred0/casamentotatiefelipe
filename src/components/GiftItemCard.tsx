import type { GiftItem } from "@/lib/data";

export function GiftItemCard({ item }: { item: GiftItem }) {
  const hasLink = Boolean(item.mercadoPagoUrl);

  return (
    <li className="flex flex-col border border-line bg-cream px-7 py-8 transition-colors duration-500 hover:bg-cream-deep md:px-8 md:py-10">
      <div className="flex flex-1 flex-col">
        <h3 className="font-serif text-2xl md:text-3xl">{item.name}</h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft md:text-base">
          {item.description}
        </p>
        {item.price && (
          <p className="mt-6 font-serif text-xl text-ink">{item.price}</p>
        )}
      </div>

      {hasLink ? (
        <a
          href={item.mercadoPagoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-center gap-3 border border-ink bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-cream transition-colors hover:bg-transparent hover:text-ink"
        >
          Presentear
          <span aria-hidden>→</span>
        </a>
      ) : (
        <span className="mt-8 inline-flex w-fit border border-line px-6 py-3 text-sm uppercase tracking-[0.18em] text-ink-muted">
          Link em breve
        </span>
      )}
    </li>
  );
}
