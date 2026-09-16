import type { ContentDetails, NewsPost, Proposal } from './types';

export const newsToDetails = (post: NewsPost): ContentDetails => ({
  type: 'post',
  category: post.category,
  title: post.title,
  subtitle: post.subtitle,
  content: post.content,
  image: post.image,
  shareUrl: post.shareUrl,
});

export const proposalToDetails = (proposal: Proposal): ContentDetails => ({
  type: 'proposal',
  category: proposal.category,
  title: proposal.title,
  subtitle: proposal.summary,
  content: proposal.description,
  image: proposal.image,
  shareUrl: proposal.shareUrl,
});

/** Evento global para abrir o modal de detalhes a partir de qualquer seção. */
export const OPEN_CONTENT_EVENT = 'content-modal:open';

export const requestContentModal = (details: ContentDetails) => {
  window.dispatchEvent(new CustomEvent<ContentDetails>(OPEN_CONTENT_EVENT, { detail: details }));
};

/** Pagina uma lista (usado nas listas de notícias, agenda e galerias). */
export const paginate = <T>(items: T[], page: number, pageSize: number) => {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const current = Math.min(Math.max(page, 0), totalPages - 1);
  return {
    page: current,
    totalPages,
    items: items.slice(current * pageSize, (current + 1) * pageSize),
    label: `Página ${current + 1} de ${totalPages}`,
  };
};

export const createElement = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className = '',
  text = '',
): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};
