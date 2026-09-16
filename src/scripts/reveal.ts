/** Anima a entrada dos elementos `.reveal` quando eles aparecem na tela. */
const elements = document.querySelectorAll<HTMLElement>('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  elements.forEach((element) => observer.observe(element));
} else {
  elements.forEach((element) => element.classList.add('is-visible'));
}
