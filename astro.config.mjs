// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // CONFIRMAR: domínio oficial da campanha (usado no canonical e no Open Graph).
  // site: 'https://www.seudominio.com.br',
  // Ajuste se o site for publicado em um subdiretório.
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
});
