import type { NewsPost } from '../lib/types';

/**
 * Textos baseados nas publicações oficiais do candidato no Instagram (docs/briefing/BRIEFING.md, seção 7.3).
 * Revisar com o comitê antes de publicar.
 */
export const news: NewsPost[] = [
  {
    id: 4,
    category: 'Campanha',
    title: 'Justiça Eleitoral defere a candidatura de André Português a Deputado Federal',
    subtitle: 'Registro deferido pelo TRE-RJ. "Agora é seguir em frente com fé, coragem e muito trabalho."',
    date: '16/09/2026',
    image: '/uploads/candidatura-deferida.webp',
    shareUrl: 'https://www.instagram.com/andreportuguesoficial/',
    content: `Pronto, preparado, querendo e com a candidatura deferida!

<b>É oficial: a Justiça Eleitoral deferiu a nossa candidatura a Deputado Federal pelo Estado do Rio de Janeiro.</b>

Agora é seguir em frente com fé, coragem e muito trabalho, ao lado de quem acredita que o nosso estado pode avançar ainda mais.

<b>Quem transformou Miguel Pereira, agora vai fazer por sua cidade!</b> Vamos juntos construir esse novo caminho.

Dia 4 de outubro, vote <b>André Português 1080</b> para Deputado Federal.`,
  },
  {
    id: 3,
    category: 'Apoios',
    title: 'Crivella declara apoio a André Português em encontro com pastores e lideranças',
    subtitle: 'Candidato ao Senado reforça o projeto de desenvolvimento para as 92 cidades do Rio.',
    date: '15/09/2026',
    image: '/uploads/reuniao-pastores-crivella.webp',
    shareUrl: 'https://www.instagram.com/andreportuguesoficial/reel/DdUzzSBNMun/',
    content: `Meu agradecimento ao nosso candidato ao Senado, <b>Marcelo Crivella</b>, pelo apoio e pela confiança no nosso projeto.

Foi um momento especial ao lado de pastores e lideranças políticas de diversas regiões do nosso estado, fortalecendo uma caminhada em torno de um propósito: <b>construir juntos um projeto de desenvolvimento para as 92 cidades do Rio de Janeiro.</b>

Como deputado federal, quero colocar meu mandato à disposição dos municípios, ajudando na elaboração de projetos e na busca por recursos e emendas que possam gerar oportunidades e melhorar a qualidade de vida da população.`,
  },
  {
    id: 2,
    category: 'Ruas',
    title: 'Campanha toma as ruas com adesivaço em Governador Portela',
    subtitle: '"Nossa força também está nas ruas." Diálogo, presença e resultados.',
    date: '14/09/2026',
    image: '/uploads/adesivaco-governador-portela.webp',
    shareUrl: 'https://www.instagram.com/andreportuguesoficial/reel/DdSQMOptyNY/',
    content: `Obrigado, Governador Portela!

A nossa campanha já está tomando as ruas das cidades. <b>Nossa força também está nas ruas!</b>

Vote para deputado federal: <b>1080, André Português</b>.

Quem transformou Miguel Pereira agora vai fazer por sua cidade!`,
  },
  {
    id: 1,
    category: 'Mobilização',
    title: 'Comitê de Vassouras é inaugurado',
    subtitle: 'Materiais de campanha já disponíveis na cidade.',
    date: '12/09/2026',
    image: '/uploads/comite-vassouras.webp',
    shareUrl: 'https://www.instagram.com/andreportuguesoficial/reel/DdMhqbHNaXu/',
    content: `Vassouras sempre teve o meu carinho e a minha admiração. E hoje foi um dia muito especial: <b>inauguramos o nosso comitê na cidade.</b>

Agora, você de Vassouras já pode passar no nosso comitê e buscar os nossos materiais de campanha.

Juntos, vamos trabalhar para melhorar a qualidade de vida de quem vive aqui e levar para outros municípios uma experiência de gestão que deu certo.`,
  },
];

/** Matéria em destaque e lista "Em pauta" exibidas na home (na ordem definida pela redação). */
export const featuredNewsId = 4;
export const onAgendaNewsIds = [3, 2, 1];
