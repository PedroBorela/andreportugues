/** Coordenação entre o aviso de cookies e os pop-ups que só devem abrir depois dele. */

export const CONSENT_STORAGE_KEY = 'portal-cookie-consent-v2';
const RESOLVED_EVENT = 'cookie-consent:resolved';

export type ConsentValue = 'accepted' | 'rejected';

let resolved = false;

export const readConsent = (): ConsentValue | null => {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch {
    return null;
  }
};

export const saveConsent = (value: ConsentValue) => {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // O aviso continua funcional mesmo sem armazenamento local.
  }
};

export const markConsentResolved = () => {
  if (resolved) return;
  resolved = true;
  window.dispatchEvent(new CustomEvent(RESOLVED_EVENT));
};

/** Executa `callback` quando o visitante tiver respondido (ou já tiver respondido) ao aviso de cookies. */
export const whenConsentResolved = (callback: () => void) => {
  if (resolved || !document.getElementById('cookie-consent')) {
    callback();
    return;
  }
  window.addEventListener(RESOLVED_EVENT, callback, { once: true });
};
