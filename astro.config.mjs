// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.marcelocrivella.org',
  // Ajuste se o site for publicado em um subdiretório (ex.: '/campanha2026').
  base: '/',
  build: {
    inlineStylesheets: 'auto',
  },
});
