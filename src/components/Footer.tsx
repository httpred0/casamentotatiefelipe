import { wedding } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream px-6 py-14 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="font-serif text-2xl md:text-3xl">{wedding.names}</p>
          <p className="mt-3 text-sm tracking-wide text-ink-muted">
            {wedding.dateDisplay} · {wedding.timeDisplay}
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-sm text-ink-soft">{wedding.address}</p>
          <p className="mt-1 text-sm text-ink-muted">{wedding.city}</p>
        </div>
      </div>
    </footer>
  );
}
