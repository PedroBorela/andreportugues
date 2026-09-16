/**
 * Configuração central do site: dados do candidato, links e integrações.
 * Os textos das seções ficam em `src/config/copy.ts` e o conteúdo dinâmico em `src/data`.
 * Itens marcados com CONFIRMAR dependem de validação do comitê (ver docs/briefing/BRIEFING.md).
 */

export const candidate = {
  name: 'André Português',
  fullName: 'Andre Pinto de Afonseca',
  number: '1080',
  office: 'Deputado Federal',
  state: 'Rio de Janeiro',
  party: 'Republicanos',
  partyNumber: '10',
  electionDate: '2026-10-04',
  electionDateLabel: '4 de outubro',
} as const;

export const site = {
  name: 'André Português 1080',
  title: 'André Português 1080 — Deputado Federal pelo Rio de Janeiro',
  description:
    'Quem transformou Miguel Pereira, agora vai fazer por sua cidade. André Português, 1080, Deputado Federal pelo Rio de Janeiro. Dia 4 de outubro.',
  locale: 'pt_BR',
  themeColor: '#205DC7',
  favicon: '/favicon.png',
  ogImage: '/uploads/banner-andre-portugues-1080.webp',
  logo: '/assets/logo-andre-portugues-1080.webp',
  photo: '/uploads/foto-oficial-andre-portugues.webp',
  partyLogo: '/assets/logo-partido.webp',
} as const;

export const legal = {
  cnpj: '68.992.482/0001-47',
  coalition: 'CORAGEM PARA MUDAR — REPUBLICANOS / DEMOCRATA',
  party: 'Republicanos 10. Diálogo, presença e resultados.',
  about: 'André Português, Deputado Federal pelo Rio de Janeiro. Diálogo, presença e resultados.',
  slogan: 'ANDRÉ PORTUGUÊS • DEPUTADO FEDERAL 1080',
  notice: 'PROPAGANDA ELEITORAL — ANDRÉ PORTUGUÊS DEPUTADO FEDERAL',
  year: 2026,
} as const;

export const hashtags = ['#OFEDERALDORIO', '#MEUDEPUTADOÉPORTUGUÊS', '#MEUDEPUTADOÉFEDERAL'] as const;

export type SocialNetwork = 'instagram' | 'facebook' | 'threads';

export const social: { network: SocialNetwork; label: string; url: string; icon: string }[] = [
  { network: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/andreportuguesoficial/', icon: '/assets/social-instagram.webp' },
  { network: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/andreportuguesoficial/', icon: '/assets/social-facebook.webp' },
  { network: 'threads', label: 'Threads', url: 'https://www.threads.com/@andreportuguesoficial', icon: '/assets/social-threads.svg' },
  // CONFIRMAR: YouTube e TikTok não foram localizados.
];

export const instagramProfile = {
  handle: '@andreportuguesoficial',
  url: 'https://www.instagram.com/andreportuguesoficial/',
} as const;

export const whatsapp = {
  /** CONFIRMAR: link da comunidade oficial. Enquanto vazio, os botões levam ao Instagram. */
  communityUrl: '',
  tooltip: 'Entre agora na comunidade do André Português',
  icon: '/assets/social-whatsapp.webp',
  communityIcon: '/assets/whatsapp-community.webp',
} as const;

export const navigation = [
  { label: 'INÍCIO', href: '#inicio' },
  { label: 'PROPOSTAS', href: '#propostas' },
  { label: 'O CASE', href: '#case' },
  { label: 'NOTÍCIAS', href: '#noticias' },
  { label: 'AGENDA', href: '#agenda' },
  { label: 'VÍDEOS', href: '#videos' },
  { label: 'PARTICIPE', href: '#participe' },
] as const;

/** Botão destacado do menu. */
export const navHighlight = { label: 'Vote 1080', href: '#chapa' } as const;

export const cookieConsent = {
  enabled: true,
  title: 'Aviso de cookies e LGPD',
  message:
    'Usamos cookies essenciais e armazenamento local para preferências do site. Com sua autorização, também usamos ferramentas de análise para medir audiência e melhorar a experiência.',
  /** CONFIRMAR: ID do Google Analytics da campanha (ex.: G-XXXXXXX). Vazio = nenhum analytics é carregado. */
  analyticsId: '',
} as const;

export const entryPopup = {
  enabled: true,
  image: '/uploads/candidatura-deferida.webp',
  imageAlt: 'Candidatura deferida: André Português é ficha limpa',
  cta: { label: 'Conheça as propostas', href: '#propostas' },
} as const;

/** Link usado nos convites para participar: a comunidade do WhatsApp ou, sem ela, o Instagram oficial. */
export const communityLink = whatsapp.communityUrl
  ? { href: whatsapp.communityUrl, label: 'ENTRAR NA COMUNIDADE', channel: 'whatsapp' as const }
  : { href: instagramProfile.url, label: 'SIGA NO INSTAGRAM', channel: 'instagram' as const };
