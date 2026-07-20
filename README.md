# Tatiane & Felipe

Site do casamento de Tatiane e Felipe — 26 de setembro de 2026, Salvador — BA.

Layout editorial, com foco nas fotos e tipografia. Feito com Next.js, Tailwind CSS e Framer Motion.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.darkroom.engineering/) (scroll suave)
- [Resend](https://resend.com/) (confirmação de presença por e-mail)

## Começar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Descrição |
| --- | --- |
| `RESEND_API_KEY` | API key do [Resend](https://resend.com) |
| `RSVP_FROM_EMAIL` | Remetente verificado no Resend (ex.: `Tatiane e Felipe <rsvp@seu-dominio.com>`) |

Sem essas variáveis, o formulário de RSVP não envia o e-mail.

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

Compatível com [Vercel](https://vercel.com). Configure `RESEND_API_KEY` e `RSVP_FROM_EMAIL` nas variáveis de ambiente do projeto.
