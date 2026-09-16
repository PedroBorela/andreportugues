/**
 * Utilitários para modais baseados em <dialog> nativo.
 * O navegador cuida do foco, da tecla Esc e da camada superior; aqui tratamos
 * o bloqueio de rolagem da página e o fechamento ao clicar fora do painel.
 */

const syncScrollLock = () => {
  const hasOpenModal = document.querySelector('dialog.modal[open]') !== null;
  document.body.classList.toggle('scroll-locked', hasOpenModal);
};

const enhanced = new WeakSet<HTMLDialogElement>();

const enhance = (dialog: HTMLDialogElement) => {
  if (enhanced.has(dialog)) return;
  enhanced.add(dialog);
  dialog.addEventListener('close', syncScrollLock);
  // Clique no backdrop: o alvo é o próprio <dialog>, fora do painel.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.querySelectorAll<HTMLElement>('[data-modal-close]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });
};

export const getModal = (id: string): HTMLDialogElement | null => {
  const element = document.getElementById(id);
  if (!(element instanceof HTMLDialogElement)) return null;
  enhance(element);
  return element;
};

export const openModal = (dialog: HTMLDialogElement | null) => {
  if (!dialog) return;
  enhance(dialog);
  document.querySelectorAll<HTMLDialogElement>('dialog.modal[open]').forEach((open) => {
    if (open !== dialog) open.close();
  });
  if (!dialog.open) dialog.showModal();
  syncScrollLock();
};

export const closeModal = (dialog: HTMLDialogElement | null) => {
  if (dialog?.open) dialog.close();
};

/** Liga os botões `[data-modal-open="id"]` aos respectivos modais. */
export const bindModalTriggers = (root: ParentNode = document) => {
  root.querySelectorAll<HTMLElement>('[data-modal-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(getModal(trigger.dataset.modalOpen ?? '')));
  });
};
