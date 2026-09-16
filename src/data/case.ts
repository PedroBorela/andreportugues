import type { CaseNumber } from '../lib/types';

/** Resultados da gestão em Miguel Pereira (2017–2024). Fontes em docs/briefing/BRIEFING.md, seção 4. */
export const caseNumbers: CaseNumber[] = [
  { value: '83,22%', label: 'dos votos na reeleição de 2020' },
  { value: '8 anos', label: 'de gestão à frente de Miguel Pereira' },
  { value: 'Nº 1', label: 'destino mais visitado do estado do Rio' },
  { value: 'R$ 160 mi', label: 'em investimento hoteleiro privado atraído' },
  { value: '+400', label: 'empregos gerados só pela fábrica de chocolate' },
  { value: '2.380', label: 'ipês-amarelos na Serra Mais Bonita do Brasil' },
];

export const caseHighlights: string[] = [
  'Terra dos Dinossauros — parque temático com mais de 40 réplicas e a maior montanha-russa tipo trem da América Latina',
  'Maria Fumaça — trem turístico reativado',
  'Rua Coberta — 10 restaurantes, dois estabelecimentos panorâmicos e duas salas de cinema',
  '27 projetos culturais contemplados pela Lei Paulo Gustavo',
];

export const caseQuote =
  'Não vim prometer milagre. Quem promete milagre na política mente. Quem governa com pouco aprende a fazer cada real render, a respeitar o dinheiro do contribuinte.';

export const biography = {
  text: 'Cristão, empresário e gestor público, André Português foi duas vezes o prefeito mais votado da história de Miguel Pereira — reeleito em 2020 com 83,22% dos votos. Em oito anos de gestão, transformou uma cidade com um dos menores orçamentos do estado no destino turístico mais visitado do Rio de Janeiro. Agora, é candidato a Deputado Federal pelo Republicanos, com o número 1080, para levar essa experiência às 92 cidades fluminenses.',
  // Estado civil omitido de propósito: bio do Instagram e registro do TSE divergem (CONFIRMAR).
  facts: [
    { label: 'Idade', value: '51 anos' },
    { label: 'Naturalidade', value: 'Rio de Janeiro' },
    { label: 'Formação', value: 'Superior completo' },
    { label: 'Ocupação', value: 'Empresário e gestor público' },
  ],
  timeline: [
    { year: '2016', text: 'Eleito prefeito de Miguel Pereira' },
    { year: '2020', text: 'Reeleito com 83,22% dos votos' },
    { year: '2026', text: 'Candidato a Deputado Federal, nº 1080' },
  ],
};
