export interface NewsPost {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  /** Data de publicação no formato dd/mm/aaaa hh:mm. */
  date: string;
  image: string;
  shareUrl: string;
  /** HTML simples (negrito e quebras de linha). */
  content: string;
}

export type BrandColor = 'blue' | 'navy' | 'yellow';

export interface Proposal {
  id: string;
  category: string;
  title: string;
  summary: string;
  /** Texto complementar exibido no modal; vazio quando igual ao resumo. */
  description: string;
  /** Imagem de fundo do cartão (opcional). */
  image?: string;
  color: BrandColor;
  /** Classes Tailwind da forma decorativa do cartão. */
  decoration: string;
  /** Origem do texto (uso interno da redação, não é exibido). */
  source?: string;
  shareUrl: string;
}

export interface AgendaEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  location: string;
  description: string;
}

export interface GalleryPhoto {
  title: string;
  image: string;
}

export interface Gallery {
  id: number;
  title: string;
  createdAt: string;
  featured: boolean;
  cover: string;
  photos: GalleryPhoto[];
}

export interface Video {
  id: number;
  title: string;
  description: string;
  date: string;
  featured: boolean;
  thumbnail: string;
  /** URL de incorporação (YouTube ou Instagram). Quando vazia, `videoUrl` é tocado no <video>. */
  embedUrl: string;
  /** Vídeos verticais (reels) usam um player em pé. */
  vertical?: boolean;
  videoUrl: string;
  shareUrl: string;
}

export interface Material {
  title: string;
  description: string;
  label: string;
  /** Vazio enquanto o comitê não entregar o arquivo: o card mostra "disponível em breve". */
  url: string;
  fileName: string;
}

export interface Sticker {
  id: number;
  title: string;
  image: string;
}

export interface InstagramPost {
  url: string;
  image: string;
}

export interface Jingle {
  title: string;
  subtitle: string;
  url: string;
}

/** Conteúdo exibido no modal de detalhes (matérias e propostas). */
export interface ContentDetails {
  type: 'post' | 'proposal';
  category: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  shareUrl: string;
}

export interface CaseNumber {
  value: string;
  label: string;
}

export interface TicketCandidate {
  office: string;
  name: string;
  number: string;
  highlight?: boolean;
}
