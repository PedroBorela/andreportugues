import type { Proposal } from '../lib/types';

/** Bandeiras inferidas do conteúdo publicado. Se houver programa formal registrado, ele prevalece. */
export const proposals: Proposal[] = [
  {
    id: 'emendas-92-cidades',
    category: 'Municípios',
    title: 'Emendas e recursos para as 92 cidades',
    summary:
      'Um mandato à disposição dos municípios: ajudar na elaboração de projetos e na busca por recursos e emendas que gerem oportunidades e melhorem a qualidade de vida da população.',
    description:
      '"Como deputado federal, quero colocar meu mandato à disposição dos municípios, ajudando na elaboração de projetos e na busca por recursos e emendas que possam gerar oportunidades e melhorar a qualidade de vida da população." O compromisso é levar projetos, recursos e emendas às 92 cidades do estado do Rio de Janeiro.',
    color: 'blue',
    decoration: '-bottom-20 -left-12 h-64 w-64 rounded-full border-[28px] border-brand-yellow/25',
    source: 'Citação literal do candidato, post de 15/09/2026',
    shareUrl: '#propostas',
  },
  {
    id: 'turismo-emprego',
    category: 'Economia e Turismo',
    title: 'Turismo que gera emprego e renda',
    summary:
      'Levar para outras cidades o método que transformou Miguel Pereira no destino mais visitado do estado: planejamento, inovação e parcerias público-privadas que atraem investimento e criam vagas.',
    description:
      'Em oito anos, com um dos menores orçamentos do estado, Miguel Pereira atraiu mais de R$ 160 milhões em investimento hoteleiro privado, ganhou atrações como a Terra dos Dinossauros e a Maria Fumaça e passou a receber uma fábrica com cerca de 400 empregos. O objetivo é replicar esse método em outros municípios.',
    image: '/uploads/adesivaco-governador-portela.webp',
    color: 'navy',
    decoration: '-right-16 -top-20 h-64 w-64 rounded-full border-[28px] border-brand-yellow/20',
    source: 'Palestras em Rio Bonito e Rio Claro',
    shareUrl: '#propostas',
  },
  {
    id: 'protecao-mulher',
    category: 'Mulher',
    title: 'Mais proteção, mais acolhimento',
    summary:
      'Combater a violência contra a mulher com políticas públicas, leis mais rigorosas e equipamentos de acolhimento nos municípios.',
    description:
      '"Cuidar das famílias atípicas e combater a violência contra a mulher é um dever de todos nós. Foi assim durante os meus 8 anos de governo em Miguel Pereira e será assim também como deputado federal." Mais proteção, políticas públicas, leis mais rigorosas e apoio e acolhimento.',
    image: '/uploads/violencia-contra-mulher.webp',
    color: 'yellow',
    decoration: '-bottom-20 -right-8 h-64 w-64 rounded-full border-[28px] border-brand-navy/20',
    source: 'Peça própria de 13/09/2026',
    shareUrl: '#propostas',
  },
  {
    id: 'familias-atipicas',
    category: 'Famílias atípicas',
    title: 'Cuidar de quem mais precisa',
    summary:
      'Projetos e recursos para que os municípios contem com equipamentos públicos de atendimento às famílias atípicas — como foi feito em Miguel Pereira.',
    description:
      '"Vamos levar projetos e recursos para que os municípios possam contar com equipamentos públicos que realmente transformam vidas."',
    color: 'navy',
    decoration: '-right-20 top-16 h-64 w-64 rotate-45 border-[28px] border-brand-yellow/20',
    source: 'Peça própria de 13/09/2026',
    shareUrl: '#propostas',
  },
  {
    id: 'seguranca',
    category: 'Segurança',
    title: 'Segurança para a família fluminense',
    summary: 'Apoio federal e recursos para que o estado e os municípios enfrentem a violência que virou rotina na vida do cidadão.',
    description: '',
    color: 'blue',
    decoration: '-bottom-20 -left-12 h-64 w-64 rounded-full border-[28px] border-brand-yellow/25',
    source: 'CONFIRMAR proposta específica com o comitê',
    shareUrl: '#propostas',
  },
  {
    id: 'saude-educacao',
    category: 'Saúde e Educação',
    title: 'Serviço público que funciona',
    summary:
      'Recursos para recuperar a rede de saúde e a infraestrutura escolar dos municípios, com gestão responsável de cada real do contribuinte.',
    description: '',
    color: 'yellow',
    decoration: '-bottom-20 -left-12 h-64 w-64 rounded-full border-[28px] border-brand-navy/20',
    source: 'CONFIRMAR proposta específica com o comitê',
    shareUrl: '#propostas',
  },
];
