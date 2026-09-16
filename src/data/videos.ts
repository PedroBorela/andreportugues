import type { Video } from '../lib/types';

/** Reels publicados no Instagram oficial, reproduzidos pelo player incorporado do Instagram. */
const reel = (id: string) => ({
  embedUrl: `https://www.instagram.com/reel/${id}/embed`,
  videoUrl: '',
  shareUrl: `https://www.instagram.com/andreportuguesoficial/reel/${id}/`,
  vertical: true,
});

export const videos: Video[] = [
  {
    id: 5,
    title: 'Apoio de Marcelo Crivella e encontro com pastores',
    description: 'André Português agradece o apoio do candidato ao Senado Marcelo Crivella em encontro com pastores e lideranças de diversas regiões do estado.',
    date: '15/09/2026',
    featured: true,
    thumbnail: '/uploads/reel-apoio-crivella.webp',
    ...reel('DdUzzSBNMun'),
  },
  {
    id: 4,
    title: 'Convite: encontro em Mangaratiba',
    description: 'Reunião em Mangaratiba com o prefeito Luiz Cláudio Ribeiro e o candidato a deputado estadual Fred Pacheco.',
    date: '15/09/2026',
    featured: false,
    thumbnail: '/uploads/agenda-mangaratiba.webp',
    ...reel('DdT_zgpNxfL'),
  },
  {
    id: 3,
    title: 'Adesivaço em Governador Portela',
    description: 'A campanha toma as ruas das cidades. Nossa força também está nas ruas!',
    date: '14/09/2026',
    featured: false,
    thumbnail: '/uploads/adesivaco-governador-portela.webp',
    ...reel('DdSQMOptyNY'),
  },
  {
    id: 2,
    title: 'Proteção à mulher e às famílias atípicas',
    description: 'Cuidar das famílias atípicas e combater a violência contra a mulher é um dever de todos nós.',
    date: '13/09/2026',
    featured: false,
    thumbnail: '/uploads/violencia-contra-mulher.webp',
    ...reel('DdPOBhrta-4'),
  },
  {
    id: 1,
    title: 'Inauguração do comitê em Vassouras',
    description: 'O comitê de Vassouras está aberto: passe por lá e busque os materiais de campanha.',
    date: '12/09/2026',
    featured: false,
    thumbnail: '/uploads/comite-vassouras.webp',
    ...reel('DdMhqbHNaXu'),
  },
];
