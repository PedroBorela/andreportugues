declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const loadAnalytics = (measurementId: string) => {
  if (!measurementId || document.querySelector('script[data-analytics]')) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // O gtag.js exige o objeto `arguments` original, não um array.
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.analytics = 'true';
  document.head.appendChild(script);

  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest?.('a[download]');
    if (!(link instanceof HTMLAnchorElement) || !window.gtag) return;
    window.gtag('event', 'file_download', {
      file_name: link.getAttribute('download') || link.href.split('/').pop() || 'arquivo',
      link_url: link.href,
    });
  });
};
