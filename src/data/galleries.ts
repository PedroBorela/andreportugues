import type { Gallery } from '../lib/types';

/** CONFIRMAR: substituir pelas fotos originais em alta resolução enviadas pelo comitê. */
export const galleries: Gallery[] = [
  {
    id: 1,
    title: 'Campanha nas ruas',
    createdAt: '16/09/2026',
    featured: true,
    cover: '/uploads/reuniao-pastores-crivella.webp',
    photos: [
      { title: 'Inauguração do comitê em Vassouras', image: '/uploads/comite-vassouras.webp' },
      { title: 'Adesivaço em Governador Portela', image: '/uploads/adesivaco-governador-portela.webp' },
      { title: 'André Português e Marcelo Crivella', image: '/uploads/reel-apoio-crivella.webp' },
      { title: 'Encontro em Mangaratiba', image: '/uploads/agenda-mangaratiba.webp' },
      { title: 'Candidatura deferida', image: '/uploads/candidatura-deferida.webp' },
    ],
  },
];
