import { NOW } from "@/lib/format";

export type VideoUser = {
  id: string;
  username: string;
  verified: boolean;
};

export type VideoTag = {
  id: string;
  tag: string;
};

export type Video = {
  shortId: string;
  title: string;
  cover: string;
  duration: number;
  viewCount: number;
  createdAt: string;
  isPrivate: boolean;
  isFixed: boolean;
  isDubbed: boolean;
  resumePosition: number;
  tags: VideoTag[];
  blurb: string;
  user: VideoUser;
};

const hoursAgo = (hours: number) => new Date(NOW - hours * 3_600_000).toISOString();

export const videos: Video[] = [
  {
    shortId: "ivry01",
    title: "You looking like an angel in ivory",
    cover: "/covers/ivory.jpg",
    duration: 42,
    viewCount: 29,
    createdAt: hoursAgo(24 * 4),
    isPrivate: true,
    isFixed: false,
    isDubbed: false,
    resumePosition: 0,
    tags: [
      { id: "pastel", tag: "pastel" },
      { id: "look", tag: "look" },
    ],
    blurb: "Luz de fim de tarde, seda crua e um colar que segura o quadro. Curto, quase um olhar.",
    user: { id: "u1", username: "mira.vale", verified: true },
  },
  {
    shortId: "tree02",
    title: "Gold hour in a bare garden",
    cover: "/covers/trees.jpg",
    duration: 10,
    viewCount: 12,
    createdAt: hoursAgo(18),
    isPrivate: true,
    isFixed: false,
    isDubbed: false,
    resumePosition: 0,
    tags: [
      { id: "garden", tag: "garden" },
      { id: "gold", tag: "gold" },
    ],
    blurb: "Vestido bordado entre árvores sem folha. O vapor da manhã faz o trabalho da luz.",
    user: { id: "u2", username: "noor.atelier", verified: true },
  },
  {
    shortId: "silk03",
    title: "Close enough to hear the silk",
    cover: "/covers/close.jpg",
    duration: 120,
    viewCount: 20,
    createdAt: hoursAgo(24 * 25),
    isPrivate: true,
    isFixed: false,
    isDubbed: true,
    resumePosition: 0,
    tags: [
      { id: "beauty", tag: "beauty" },
      { id: "silk", tag: "silk" },
    ],
    blurb: "Retrato fechado, renda e ouro velho. A faixa dublada entra por baixo, sem cobrir a voz.",
    user: { id: "u3", username: "liora.sen", verified: true },
  },
  {
    shortId: "pwdr04",
    title: "Powder, pearls, no rush",
    cover: "/covers/powder.jpg",
    duration: 54,
    viewCount: 17,
    createdAt: hoursAgo(24 * 6),
    isPrivate: true,
    isFixed: false,
    isDubbed: false,
    resumePosition: 0,
    tags: [
      { id: "pastel", tag: "pastel" },
      { id: "pearls", tag: "pearls" },
    ],
    blurb: "Estúdio claro, azul-pó e brinco de pérola. Um take só, sem corte no meio do gesto.",
    user: { id: "u4", username: "ansel.studio", verified: false },
  },
  {
    shortId: "lant05",
    title: "Lantern hour",
    cover: "/covers/lantern.jpg",
    duration: 185,
    viewCount: 860,
    createdAt: hoursAgo(24 * 12),
    isPrivate: false,
    isFixed: false,
    isDubbed: true,
    resumePosition: 70,
    tags: [
      { id: "night", tag: "night" },
      { id: "silk", tag: "silk" },
    ],
    blurb: "Seda esmeralda e lanternas. O áudio dublado acompanha o original, lado a lado.",
    user: { id: "u5", username: "casa.lume", verified: true },
  },
  {
    shortId: "corr06",
    title: "The corridor goes champagne",
    cover: "/covers/corridor.jpg",
    duration: 108,
    viewCount: 140,
    createdAt: hoursAgo(24 * 2),
    isPrivate: false,
    isFixed: true,
    isDubbed: false,
    resumePosition: 24,
    tags: [
      { id: "motion", tag: "motion" },
      { id: "light", tag: "light" },
    ],
    blurb: "Organza no corredor de mármore. O tecido chega um segundo antes da pessoa.",
    user: { id: "u1", username: "mira.vale", verified: true },
  },
  {
    shortId: "coln07",
    title: "Walking the colonnade at six",
    cover: "/covers/colonnade.jpg",
    duration: 252,
    viewCount: 2400,
    createdAt: hoursAgo(8),
    isPrivate: false,
    isFixed: false,
    isDubbed: false,
    resumePosition: 40,
    tags: [
      { id: "golden", tag: "golden" },
      { id: "hour", tag: "hour" },
    ],
    blurb: "Plano aberto, fim de tarde, sombra longa.",
    user: { id: "u2", username: "noor.atelier", verified: true },
  },
];

export const trendingIds = ["ivry01", "tree02", "silk03", "pwdr04", "lant05", "corr06"];
