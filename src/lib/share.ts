export interface ShareData {
  url: string;
  title: string;
  subtitle?: string;
}

const absoluteUrl = (rawUrl: string) => {
  try {
    return new URL(rawUrl || window.location.href, window.location.href).href;
  } catch {
    return window.location.href;
  }
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const fallback = document.createElement('textarea');
    fallback.value = text;
    fallback.setAttribute('readonly', '');
    fallback.style.position = 'fixed';
    fallback.style.opacity = '0';
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand('copy');
    fallback.remove();
  }
};

/** Atualiza os links de um componente <ShareButtons> para o conteúdo informado. */
export const updateShareButtons = (root: ParentNode, data: ShareData) => {
  const url = absoluteUrl(data.url);
  const headingWithSubtitle = data.title + (data.subtitle ? ` | ${data.subtitle}` : '');
  const shareText = [data.title, data.subtitle, url].filter(Boolean).join('\n');
  const encodedUrl = encodeURIComponent(url);

  const links: Record<string, string> = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(headingWithSubtitle)}`,
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(headingWithSubtitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  root.querySelectorAll<HTMLAnchorElement>('a[data-share]').forEach((link) => {
    link.href = links[link.dataset.share ?? ''] ?? '#';
  });

  const instagram = root.querySelector<HTMLButtonElement>('button[data-share="instagram"]');
  const feedback = root.querySelector<HTMLElement>('[data-share-feedback]');
  if (!instagram) return;

  instagram.onclick = async () => {
    await copyToClipboard(shareText);
    instagram.textContent = 'Link copiado';
    if (feedback) feedback.hidden = false;
    window.setTimeout(() => {
      instagram.textContent = 'Instagram';
      if (feedback) feedback.hidden = true;
    }, 2600);
  };
};
