/**
 * Carregamento sob demanda do VLibras (tradutor para Libras do Governo Federal).
 * O script só é baixado quando o visitante clica no botão, e o acionador nativo
 * do widget é ocultado para não duplicar o nosso botão.
 */

interface VLibrasWidgetApi {
  open: () => void;
  access?: HTMLElement;
}

declare global {
  interface Window {
    VLibrasWidget?: VLibrasWidgetApi;
  }
}

const SCRIPT_URL = 'https://vlibras.gov.br/app/vlibras-plugin.js';
const STORAGE_KEY = '@vlibras-widget';
const LOAD_TIMEOUT = 20000;

let loader: Promise<VLibrasWidgetApi> | null = null;

const isReady = () => typeof window.VLibrasWidget?.open === 'function';

/** Impede que o widget reabra sozinho por causa de uma preferência salva anteriormente. */
const preventPersistedAutoOpen = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored?.includes('"isOpen":true')) return;
    window.localStorage.setItem(STORAGE_KEY, stored.replace(/"isOpen"\s*:\s*true/g, '"isOpen":false'));
  } catch {
    // Sem acesso ao armazenamento local: nada a corrigir.
  }
};

const hideNativeLauncher = () => {
  const wrapper = document.getElementById('vlibras-access-wrapper');
  if (wrapper) {
    wrapper.hidden = true;
    wrapper.style.setProperty('display', 'none', 'important');
  }
  window.VLibrasWidget?.access?.style.setProperty('display', 'none', 'important');
};

const waitForWidget = () =>
  new Promise<VLibrasWidgetApi>((resolve, reject) => {
    const startedAt = Date.now();
    const check = () => {
      if (isReady()) return resolve(window.VLibrasWidget!);
      if (Date.now() - startedAt >= 15000) return reject(new Error('Tempo limite excedido ao carregar o VLibras.'));
      window.setTimeout(check, 100);
    };
    check();
  });

const loadWidget = () => {
  if (isReady()) return Promise.resolve(window.VLibrasWidget!);
  if (loader) return loader;

  preventPersistedAutoOpen();
  loader = new Promise<VLibrasWidgetApi>((resolve, reject) => {
    const script = document.createElement('script');
    const timeout = window.setTimeout(() => reject(new Error('Não foi possível carregar o VLibras.')), LOAD_TIMEOUT);
    script.src = SCRIPT_URL;
    script.async = true;
    script.addEventListener('load', () => waitForWidget().then(resolve, reject).finally(() => window.clearTimeout(timeout)), { once: true });
    script.addEventListener('error', () => reject(new Error('Não foi possível carregar o VLibras.')), { once: true });
    document.body.appendChild(script);
  }).catch((error: unknown) => {
    loader = null;
    throw error;
  });

  return loader;
};

export const initVLibras = (launcher: HTMLButtonElement) => {
  launcher.addEventListener('click', async () => {
    if (launcher.getAttribute('aria-busy') === 'true') return;
    launcher.setAttribute('aria-busy', 'true');
    launcher.disabled = true;
    try {
      const widget = await loadWidget();
      hideNativeLauncher();
      widget.open();
      window.requestAnimationFrame(hideNativeLauncher);
      launcher.removeAttribute('title');
    } catch (error) {
      launcher.title = 'Não foi possível carregar o VLibras. Tente novamente.';
      console.error(error);
    } finally {
      launcher.disabled = false;
      launcher.removeAttribute('aria-busy');
    }
  });
};
