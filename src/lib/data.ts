export const wedding = {
  bride: "Tatiane",
  groom: "Felipe",
  names: "Tatiane e Felipe",
  date: "2026-09-26T11:00:00-03:00",
  dateDisplay: "26 de setembro de 2026",
  timeDisplay: "11h",
  address: "Rua Tenente Fernando Tuy, 135",
  city: "Salvador — BA",
  mapsUrl:
    "https://www.google.com/maps?q=-12.9976864,-38.5191043&z=17&hl=pt-BR",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d-38.5191043!3d-12.9976864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzUxLjciUyAzOMKwMzEnMDguOCJX!5e0!3m2!1spt-BR!2sbr!4v1",
  quote:
    "Nossa união celebra a simplicidade, a alegria e a beleza de caminhar juntos",
  dressCode: {
    title: "Esporte fino ou passeio",
    description:
      "Cores claras e tons de rosa, com roupas leves em algodão, linho ou alfaiataria. A proposta é bucólica, boho chic e natural — elegante, mas sem formalidade excessiva.",
    colors: [
      { name: "Rosa suave", hex: "#DDBFC2" },
      { name: "Rosa antigo", hex: "#C99EA2" },
      { name: "Areia", hex: "#E4D8C8" },
      { name: "Verde-sálvia", hex: "#9AA68B" },
      { name: "Champagne", hex: "#C4B5A0" },
    ],
  },
};

export const navLinks = [
  { href: "#presentes", label: "Presentes" },
  { href: "#informacoes", label: "Informações" },
  { href: "#rsvp", label: "Presença" },
];

export const timeline = [
  { time: "11:00", title: "Chegada dos convidados", description: "Recebemos vocês com calma e carinho." },
  { time: "12:00", title: "Recepção", description: "Brindes, conversas e o início da celebração." },
  { time: "14:00", title: "Votos", description: "O momento em que nos unimos diante de quem amamos." },
  { time: "17:00", title: "Despedida", description: "Um último carinho antes de ir embora." },
];

export const faqs = [
  {
    q: "E a área infantil?",
    a: "Infelizmente não tem área infantil no local.",
  },
  {
    q: "Há estacionamento?",
    a: "As vagas no local são restritas. Priorize Uber ou outro app de mobilidade.",
  },
  {
    q: "Lista de presentes?",
    a: "Temos uma seção no site específica para presentes!",
    href: "#presentes",
    linkLabel: "Ver presentes",
  },
  {
    q: "Como chegar?",
    a: "Fica ao lado do Parque da Cidade. Confira o mapa e o endereço completo.",
    href: "#mapa",
    linkLabel: "Ver mapa e endereço",
  },
  {
    q: "Qual o dress code?",
    a: "Esporte fino ou passeio — tons de rosa, cores claras e roupas leves em algodão, linho ou alfaiataria. A proposta é bucólica, boho chic e natural.",
    href: "#traje",
    linkLabel: "Ver dress code e paleta",
  },
];

export const registryItems = [
  {
    title: "Chá de casa nova",
    description: "Uma seleção de presentes pensada para o nosso novo capítulo.",
    cta: "Ver lista",
    href: "/chadecasanova",
  },
  {
    title: "Lua de mel",
    description: "Contribua com uma experiência — um jantar, um passeio, uma memória.",
    cta: "Ver lista",
    href: "/luademel",
  },
  {
    title: "Presente livre",
    description: "Se preferirem, compartilharemos uma chave simples e discreta.",
    cta: "Ver lista",
    href: "/presentelivre",
  },
];

export type GiftItem = {
  id: string;
  name: string;
  description: string;
  price?: string;
  /** Mercado Pago link — will be filled later */
  mercadoPagoUrl?: string;
};

export type GiftRegistry = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  items: GiftItem[];
};

export const giftRegistries: Record<string, GiftRegistry> = {
  chadecasanova: {
    slug: "chadecasanova",
    title: "Chá de casa nova",
    eyebrow: "Presentes",
    description:
      "Itens pensados para o nosso novo lar. Escolha um presente e finalize pelo Mercado Pago.",
    items: [
      {
        id: "casa-1",
        name: "Kit panela cerâmica",
        description: "Conjunto de panelas em cerâmica para o dia a dia.",
        price: "R$ 480",
        mercadoPagoUrl: "https://mpago.la/1aDkWbM",
      },
      {
        id: "casa-2",
        name: "Panela de pressão cerâmica",
        description: "Praticidade e beleza na cozinha.",
        price: "R$ 190",
        mercadoPagoUrl: "https://mpago.la/1HEcNx4",
      },
      {
        id: "casa-3",
        name: "Kit talheres",
        description: "Talheres para a mesa do casal.",
        price: "R$ 120",
        mercadoPagoUrl: "https://mpago.la/1c9qMAD",
      },
      {
        id: "casa-4",
        name: "Cota geladeira",
        description: "Cota para a geladeira do nosso lar · 5 disponíveis.",
        price: "R$ 560",
        mercadoPagoUrl: "https://mpago.la/2WAQdyj",
      },
      {
        id: "casa-5",
        name: "Cota cooktop",
        description: "Cota para o cooktop · 2 disponíveis.",
        price: "R$ 320",
        mercadoPagoUrl: "https://mpago.la/1tLC6hh",
      },
      {
        id: "casa-6",
        name: "Forno de embutir",
        description: "Cota para o forno de embutir · 4 disponíveis.",
        price: "R$ 425",
        mercadoPagoUrl: "https://mpago.la/1fgx6hV",
      },
      {
        id: "casa-7",
        name: "Cota lavadora",
        description: "Cota para a lavadora · 5 disponíveis.",
        price: "R$ 440",
        mercadoPagoUrl: "https://mpago.la/1tEtPWT",
      },
      {
        id: "casa-8",
        name: "Liquidificador e multiprocessador",
        description: "Dupla essencial para a cozinha.",
        price: "R$ 470",
        mercadoPagoUrl: "https://mpago.la/1boh8cX",
      },
      {
        id: "casa-9",
        name: "Batedeira",
        description: "Para receitas e momentos em casa.",
        price: "R$ 380",
        mercadoPagoUrl: "https://mpago.la/1k6HWYh",
      },
      {
        id: "casa-10",
        name: "Cota mesa",
        description: "Cota para a mesa de jantar · 4 disponíveis.",
        price: "R$ 410",
        mercadoPagoUrl: "https://mpago.la/17ej3Zc",
      },
      {
        id: "casa-11",
        name: "Cadeira mesa",
        description: "Cadeira para a mesa · 2 disponíveis.",
        price: "R$ 390",
        mercadoPagoUrl: "https://mpago.la/1TrYovP",
      },
      {
        id: "casa-12",
        name: "Cota sofá",
        description: "Cota para o sofá da sala · 6 disponíveis.",
        price: "R$ 820",
        mercadoPagoUrl: "https://mpago.la/13PuPpx",
      },
      {
        id: "casa-13",
        name: "Cota aparador",
        description: "Cota para o aparador · 3 disponíveis.",
        price: "R$ 350",
        mercadoPagoUrl: "https://mpago.la/1HvvgZR",
      },
      {
        id: "casa-14",
        name: "Tapete",
        description: "Cota para o tapete · 3 disponíveis.",
        price: "R$ 360",
        mercadoPagoUrl: "https://mpago.la/1zfrD9E",
      },
      {
        id: "casa-15",
        name: "Almofada linho",
        description: "Almofada em linho · 2 disponíveis.",
        price: "R$ 230",
        mercadoPagoUrl: "https://mpago.la/1o4bM5h",
      },
      {
        id: "casa-16",
        name: "Poltrona sala",
        description: "Poltrona para a sala · 3 disponíveis.",
        price: "R$ 280",
        mercadoPagoUrl: "https://mpago.la/1UH6ksz",
      },
      {
        id: "casa-17",
        name: "Luminária",
        description: "Luminária para iluminar a casa · 4 disponíveis.",
        price: "R$ 385",
        mercadoPagoUrl: "https://mpago.la/17NZTqN",
      },
      {
        id: "casa-18",
        name: "Espelho",
        description: "Espelho para o lar · 4 disponíveis.",
        price: "R$ 340",
        mercadoPagoUrl: "https://mpago.la/177S53q",
      },
      {
        id: "casa-19",
        name: "Alexa",
        description: "Assistente inteligente para a casa.",
        price: "R$ 330",
        mercadoPagoUrl: "https://mpago.la/2SPQUAq",
      },
      {
        id: "casa-20",
        name: "Cota TV",
        description: "Cota para a TV · 5 disponíveis.",
        price: "R$ 980",
        mercadoPagoUrl: "https://mpago.la/1dnL1x8",
      },
      {
        id: "casa-21",
        name: "Planta",
        description: "Verde para alegrar o novo lar.",
        price: "R$ 210",
        mercadoPagoUrl: "https://mpago.la/1x5yftC",
      },
      {
        id: "casa-22",
        name: "Aromatizador de ambientes",
        description: "Aroma e aconchego em casa.",
        price: "R$ 90",
        mercadoPagoUrl: "https://mpago.la/22QNd1w",
      },
      {
        id: "casa-23",
        name: "Kit Avatim",
        description: "Kit Avatim para o casal.",
        price: "R$ 249",
        mercadoPagoUrl: "https://mpago.la/2pJ3RVK",
      },
      {
        id: "casa-24",
        name: "Cota cama",
        description: "Cota para a cama · 5 disponíveis.",
        price: "R$ 620",
        mercadoPagoUrl: "https://mpago.la/17yKpwT",
      },
      {
        id: "casa-25",
        name: "Cachepô pendurável",
        description: "Cachepô para as plantas da casa.",
        price: "R$ 180",
        mercadoPagoUrl: "https://mpago.la/1YdyN6h",
      },
      {
        id: "casa-26",
        name: "Cota jogo de toalhas Buddemeyer",
        description: "Cota para o jogo de toalhas Buddemeyer · 2 disponíveis.",
        price: "R$ 215",
        mercadoPagoUrl: "https://mpago.la/2quU1iB",
      },
      {
        id: "casa-27",
        name: "Cota jogo de edredom Buddemeyer",
        description: "Cota para o jogo de edredom Buddemeyer · 4 disponíveis.",
        price: "R$ 185",
        mercadoPagoUrl: "https://mpago.la/2GFE3KF",
      },
      {
        id: "casa-28",
        name: "Micro-ondas",
        description: "Cota para o micro-ondas · 3 disponíveis.",
        price: "R$ 280",
        mercadoPagoUrl: "https://mpago.la/1xuwuKL",
      },
      {
        id: "casa-29",
        name: "Cafeteira espresso",
        description: "Cafeteira espresso · 2 disponíveis.",
        price: "R$ 249",
        mercadoPagoUrl: "https://mpago.la/21hfCXz",
      },
    ],
  },
  luademel: {
    slug: "luademel",
    title: "Lua de mel",
    eyebrow: "Experiências",
    description:
      "Contribua com um pedacinho da nossa viagem. Cada cota vira uma memória.",
    items: [
      {
        id: "lua-1",
        name: "Jantar a dois",
        description: "Um jantar especial para celebrar a viagem.",
        price: "R$ 670",
        mercadoPagoUrl: "https://mpago.la/23KSQ3q",
      },
      {
        id: "lua-2",
        name: "Quarto 2 noites — Canto Hotel",
        description: "Duas noites no Canto Hotel · 3 disponíveis.",
        price: "R$ 420",
        mercadoPagoUrl: "https://mpago.la/2YoH8DN",
      },
      {
        id: "lua-3",
        name: "Cota passeio na praia",
        description: "Um passeio à beira-mar · 2 disponíveis.",
        price: "R$ 130",
        mercadoPagoUrl: "https://mpago.la/1Akqx9C",
      },
      {
        id: "lua-4",
        name: "Garrafa de vinho",
        description: "Um brinde a dois na lua de mel.",
        price: "R$ 180",
        mercadoPagoUrl: "https://mpago.la/1VMsVix",
      },
      {
        id: "lua-5",
        name: "Sobremesa para dois",
        description: "Um doce para fechar o jantar.",
        price: "R$ 140",
        mercadoPagoUrl: "https://mpago.la/1mnsRKh",
      },
      {
        id: "lua-6",
        name: "Almoço beira-mar",
        description: "Almoço com vista para o mar.",
        price: "R$ 580",
        mercadoPagoUrl: "https://mpago.la/2p3JjzD",
      },
      {
        id: "lua-7",
        name: "Garrafa de espumante",
        description: "Para celebrar o começo da viagem.",
        price: "R$ 230",
        mercadoPagoUrl: "https://mpago.la/2JTnHuB",
      },
      {
        id: "lua-8",
        name: "Mini day spa casal",
        description: "Um momento de cuidado a dois · 2 disponíveis.",
        price: "R$ 350",
        mercadoPagoUrl: "https://mpago.la/26a7GqX",
      },
      {
        id: "lua-9",
        name: "Aula de cerâmica a dois",
        description: "Experiência criativa em casal · 2 disponíveis.",
        price: "R$ 189",
        mercadoPagoUrl: "https://mpago.la/1As7bDJ",
      },
    ],
  },
  presentelivre: {
    slug: "presentelivre",
    title: "Presente livre",
    eyebrow: "Contribuição",
    description:
      "Se preferir presentear com liberdade, escolha um valor e finalize pelo Mercado Pago.",
    items: [
      {
        id: "livre-1",
        name: "Contribua com liberdade",
        description: "Escolha o valor que fizer sentido para você.",
        mercadoPagoUrl: "https://link.mercadopago.com.br/casamentotatiefelipe",
      },
    ],
  },
};

export type Photo = {
  src: string;
  alt: string;
  span?: "full" | "tall" | "wide" | "pair";
};

export const photos: Photo[] = [
  { src: "/photos/11.jpg", alt: "Tatiane e Felipe sob a luz filtrada pelas folhas", span: "full" },
  { src: "/photos/06.jpg", alt: "Abraço sob as árvores ao entardecer", span: "tall" },
  { src: "/photos/07.jpg", alt: "Retrato no campo dourado", span: "tall" },
  { src: "/photos/05.jpg", alt: "Conversando sentados na clareira", span: "wide" },
  { src: "/photos/03.jpg", alt: "Retrato junto à árvore centenária", span: "full" },
  { src: "/photos/14.jpg", alt: "Momento íntimo na base da árvore", span: "tall" },
  { src: "/photos/13.jpg", alt: "Olhos fechados, um instante de paz", span: "tall" },
  { src: "/photos/01.jpg", alt: "Retrato de Felipe na luz dourada", span: "pair" },
  { src: "/photos/02.jpg", alt: "Detalhe editorial do ensaio", span: "pair" },
  { src: "/photos/04.jpg", alt: "Cena natural do ensaio", span: "wide" },
  { src: "/photos/08.jpg", alt: "Composição editorial", span: "tall" },
  { src: "/photos/09.jpg", alt: "Luz e sombra entre as árvores", span: "tall" },
  { src: "/photos/10.jpg", alt: "Momento espontâneo", span: "wide" },
  { src: "/photos/12.jpg", alt: "Olhares que se encontram", span: "full" },
];

export const storyImages = [
  { src: "/photos/story.jpg", alt: "Tatiane e Felipe ao lado da grande árvore" },
];
