# Tatiane & Felipe

Site do casamento de Tatiane e Felipe — 26 de setembro de 2026, Salvador — BA.

Layout editorial, com foco nas fotos e tipografia. Feito com Next.js, Tailwind CSS e Framer Motion.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.darkroom.engineering/) (scroll suave)
- [FormSubmit](https://formsubmit.co/) (confirmação de presença por e-mail)

## Começar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### RSVP por e-mail

As confirmações vão para **taty_ios@hotmail.com** via [FormSubmit](https://formsubmit.co/) (envio direto do navegador).

**Importante — ativação única:** na primeira tentativa, o FormSubmit manda um e-mail com o link **Activate Form** para `taty_ios@hotmail.com`. Sem clicar nesse link (verifique também a pasta de spam), as confirmações não chegam.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Site principal (hero, história, infos, dress code, timeline, galeria, FAQ, RSVP, presentes) |
| `/chadecasanova` | Lista de chá de casa nova |
| `/luademel` | Lista de lua de mel |
| `/presentelivre` | Presente livre |
| `/lista-de-presentes-completa` | Todas as listas (útil para QR code) |

## Conteúdo

- Textos, data, endereço, timeline e listas de presentes: `src/lib/data.ts`
- Fotos: `public/photos/`

## Scripts

```bash
npm run dev      # desenvolvimento
npm run build    # build de produção
npm run start    # servir o build
npm run lint     # ESLint
```

## Deploy

Compatível com [Vercel](https://vercel.com). O RSVP não exige variáveis de ambiente.
