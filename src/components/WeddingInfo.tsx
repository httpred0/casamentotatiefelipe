"use client";

import { Reveal } from "./Reveal";
import { wedding } from "@/lib/data";

export function WeddingInfo() {
  return (
    <section id="informacoes" className="section">
      <div className="section-inner">
        <Reveal className="section-header !mb-0">
          <p className="eyebrow">O dia</p>
          <h2 className="section-title">Informações do casamento</h2>
          <p className="section-lede">
            Pedimos confirmação até 19 de setembro — uma semana antes do grande
            dia. Isso nos ajuda a organizar tudo com carinho.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="section-body grid gap-8 border-y border-line py-7 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="eyebrow">Data</p>
              <p className="mt-2 font-serif text-lg leading-snug text-ink md:text-xl">
                {wedding.dateDisplay}
              </p>
            </div>
            <div>
              <p className="eyebrow">Horário</p>
              <p className="mt-2 font-serif text-lg leading-snug text-ink md:text-xl">
                Às {wedding.timeDisplay}
              </p>
            </div>
            <div>
              <p className="eyebrow">Endereço</p>
              <p className="mt-2 font-serif text-lg leading-snug text-ink md:text-xl">
                {wedding.address}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{wedding.city}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            id="mapa"
            className="relative mt-12 scroll-mt-28 aspect-[21/9] min-h-[220px] w-full overflow-hidden bg-cream-deep md:min-h-[300px]"
          >
            <iframe
              title="Mapa do local do casamento"
              src="https://maps.google.com/maps?q=-12.9976864,-38.5191043&z=16&output=embed&hl=pt-BR"
              className="absolute inset-0 h-full w-full border-0 grayscale-[25%] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
