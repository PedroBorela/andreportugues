/**
 * Configuração central do site. Textos, links e integrações editáveis ficam aqui;
 * o conteúdo dinâmico (notícias, vídeos, galerias etc.) fica em `src/data`.
 */

/** Servidor onde estão os arquivos que não foram copiados para `public/` (vídeos, zips, jingles...). */
export const REMOTE_MEDIA_BASE = 'https://www.marcelocrivella.org/campanha2026/';

export const site = {
  name: 'Marcelo Crivella',
  title: 'Marcelo Crivella para Senador - 100',
  description: 'Marcelo Crivella. Compromisso com o Rio, respeito às famílias e trabalho pelo Brasil.',
  locale: 'pt_BR',
  themeColor: '#1443CB',
  favicon: `${REMOTE_MEDIA_BASE}uploads/bf973d6cb04c28f658418a9f98f63518.jpg`,
  logo: '/uploads/d54e8d1cd1a95491f5b52873b29c4d3d.webp',
  footerLogo: '/uploads/779ebce6e99b6cd00a1c83f51c0c004a.webp',
  partyLogo: '/assets/logo-partido.webp',
} as const;

export const legal = {
  cnpj: '68.557.163/0001-03',
  coalition: 'CORAGEM PARA MUDAR - REPUBLICANOS / DEMOCRATA',
  party: 'Partido Republicanos 10. Trabalho, diálogo e compromisso com as famílias.',
  about: 'Marcelo Crivella para o Senado pelo Rio de Janeiro. Trabalho, diálogo e compromisso com as famílias.',
  slogan: 'MARCELO CRIVELLA • PARA SENADOR É 100',
  year: 2026,
} as const;

export const hero = {
  eyebrow: 'O SENADOR DA GENTE',
  headline: 'LÁ EM CASA TODO MUNDO VOTA!',
  subheadline: 'Experiência, diálogo e presença para construir soluções que melhoram a vida das famílias CRISTÃS 100.',
  primaryCta: { label: 'O QUE DEFENDEMOS', href: '#propostas' },
  secondaryCta: { label: 'Mostre seu apoio nas redes', href: 'https://marcelocrivella.org/fotocampanha/' },
  photo: '/uploads/01ff972e7e17812a0e13b86c73446cd0.webp',
  photoAlt: 'Marcelo Crivella sorrindo, usando terno azul claro',
  background: `${REMOTE_MEDIA_BASE}uploads/5cc70280955ba36162c442e435b5a9bf.jpg`,
} as const;

export type SocialNetwork = 'facebook' | 'instagram' | 'youtube' | 'tiktok' | 'x';

export const social: { network: SocialNetwork; label: string; url: string; icon: string }[] = [
  { network: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/marcelocrivella', icon: '/assets/social-facebook.webp' },
  { network: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/marcelocrivella/', icon: '/assets/social-instagram.webp' },
  { network: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/user/marcelocrivella', icon: '/assets/social-youtube.webp' },
  { network: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@marcelocrivella', icon: '/assets/social-tiktok.webp' },
  { network: 'x', label: 'X', url: 'https://x.com/MCrivella', icon: '/assets/social-x.svg' },
];

export const instagramProfile = {
  handle: '@marcelocrivella',
  url: 'https://www.instagram.com/marcelocrivella/',
} as const;

export const whatsapp = {
  communityUrl: 'https://whatsapp.com/channel/0029Vb8NJI817Emwgof71L2K',
  tooltip: 'Entre agora na comunidade do Crivella',
  icon: '/assets/social-whatsapp.webp',
  communityIcon: '/assets/whatsapp-community.webp',
} as const;

export const donate = { label: 'Quero Doar', href: '#participe' } as const;

export const navigation = [
  { label: 'INÍCIO', href: '#inicio' },
  { label: 'PROPOSTAS', href: '#propostas' },
  { label: 'NOTÍCIAS', href: '#noticias' },
  { label: 'AGENDA', href: '#agenda' },
  { label: 'VÍDEOS', href: '#videos' },
  { label: 'MATERIAIS', href: '#materiais' },
  { label: 'REDES', href: '#conecte' },
  { label: 'PARTICIPE', href: '#participe' },
] as const;

export const cookieConsent = {
  enabled: true,
  title: 'Aviso de cookies e LGPD',
  message:
    'Usamos cookies essenciais e armazenamento local para preferências do site. Com sua autorização, também usamos Google Analytics para medir audiência e melhorar a experiência.',
  analyticsId: 'G-CY3N5EM2WJ',
} as const;

export const entryPopup = {
  enabled: true,
  image: '/uploads/776a8231c971bbdf34da80008d5074bd.webp',
  cta: { label: 'Entre agora', href: 'https://www.marcelocrivella.org/fotocampanha' },
} as const;

export const newsletter = {
  /**
   * Endpoint que recebe o cadastro (POST com `email` e `consent`).
   * O site é estático: configure `PUBLIC_NEWSLETTER_ENDPOINT` (ex.: Formspree, Brevo, API própria).
   */
  endpoint: import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT ?? '',
} as const;
