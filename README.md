# Marcelo Crivella para Senador — 100

Landing page de campanha de Marcelo Crivella ao Senado pelo Rio de Janeiro.

Site estático feito com [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) e ícones [Lucide](https://lucide.dev). O HTML sai pronto do build, e cada componente carrega só o JavaScript de que precisa.

## Requisitos

- Node.js 22.12 ou superior
- npm 9.6 ou superior

## Como rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:4321 (recarrega ao salvar)
npm run build     # checagem de tipos + build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Estrutura do projeto

```
src/
├── config/site.ts           # textos, links, redes sociais, cookies, pop-up, newsletter
├── data/                    # conteúdo das seções
│   ├── news.ts              #   notícias (e quais aparecem na home)
│   ├── proposals.ts         #   propostas do carrossel
│   ├── agenda.ts            #   agenda
│   ├── videos.ts            #   vídeos
│   ├── galleries.ts         #   galerias de fotos
│   ├── materials.ts         #   materiais para download
│   ├── stickers.ts          #   figurinhas de WhatsApp
│   ├── instagram.ts         #   publicações do Instagram
│   └── jingles.ts           #   jingles do player
├── components/
│   ├── layout/              # SiteNav, Footer
│   ├── sections/            # uma seção da página por arquivo
│   ├── overlays/            # modal de conteúdo, cookies, pop-up, jingles, botões flutuantes, acessibilidade
│   └── ui/                  # Modal, CloseButton, ShareButtons, SectionHeading, SocialLinks
├── lib/                     # tipos e utilitários do navegador (modais, compartilhamento, consentimento, analytics, VLibras)
├── layouts/BaseLayout.astro # <head>, SEO e Open Graph
├── scripts/reveal.ts        # animação de entrada das seções
├── styles/                  # CSS por área + Tailwind
└── pages/index.astro        # monta a página
public/
├── assets/                  # ícones de redes sociais e logos
└── uploads/                 # imagens de conteúdo
_legacy/                     # página original salva (só referência, não é usada no build)
```

### Seções da página

| Componente | Âncora | Conteúdo |
|---|---|---|
| `Hero` | `#inicio` | Chamada principal |
| `Proposals` | `#propostas` | Carrossel de bandeiras |
| `News` | `#noticias` | Destaque, "Em pauta" e lista completa |
| `Agenda` | `#agenda` | Próximos compromissos |
| `Materials` | `#materiais` | Downloads e figurinhas |
| `Videos` | `#videos` | Destaque, lista e player |
| `Connect` | `#conecte` | Galeria de fotos e Instagram |
| `WhatsAppCommunity` | `#participe` | Comunidade no WhatsApp |
| `Newsletter` | `#newsletter` | Cadastro de e-mail |

## Editando o conteúdo

- **Textos gerais, links e integrações:** `src/config/site.ts`
- **Notícias:** `src/data/news.ts`. Os campos `featuredNewsId` e `onAgendaNewsIds` definem o destaque e a lista "Em pauta" da home.
- **Demais seções:** o arquivo correspondente em `src/data/`. Os tipos estão em `src/lib/types.ts`, e o editor avisa se faltar algum campo.
- **Imagens novas:** coloque em `public/uploads/` e use o caminho `/uploads/nome-do-arquivo.webp`.
- **Ícones:** importe de `@lucide/astro` (catálogo em [lucide.dev/icons](https://lucide.dev/icons)), por exemplo `import { ArrowRight } from '@lucide/astro'`.

### Arquivos hospedados fora do projeto

Alguns arquivos (vídeos `.mp4`, `.zip`, jingles e algumas imagens de fundo) são carregados de `https://www.marcelocrivella.org/campanha2026/` (constante `REMOTE_MEDIA_BASE`). Para hospedá-los junto com o site, copie-os para `public/` e atualize as URLs em `src/data/` e `src/config/site.ts`.

## Configuração

Copie `.env.example` para `.env`:

| Variável | Uso |
|---|---|
| `PUBLIC_NEWSLETTER_ENDPOINT` | URL que recebe o `POST` do formulário de newsletter (campos `email` e `consent`). Pode ser Formspree, Brevo ou uma API própria. Sem ela, o formulário mostra "cadastro indisponível". |

O ID do Google Analytics fica em `cookieConsent.analyticsId` (`src/config/site.ts`) e só é carregado depois que o visitante aceita os cookies.

## Recursos

- Aviso de cookies/LGPD com carregamento condicional do Google Analytics
- Painel de acessibilidade (tamanho de texto, contraste, espaçamento, modo leitura, cursor ampliado) com preferências salvas no navegador
- Integração com o VLibras, carregado sob demanda
- Modais nativos (`<dialog>`) com foco e tecla Esc
- Compartilhamento em WhatsApp, Facebook, Telegram, X, LinkedIn e Instagram
- Layout responsivo

## Deploy

O comando `npm run build` gera a pasta `dist/` com arquivos estáticos, que pode ser publicada em Netlify, Vercel, Cloudflare Pages, GitHub Pages ou qualquer servidor Apache/Nginx.

- **Netlify / Vercel / Cloudflare Pages:** comando de build `npm run build`, diretório de saída `dist`.
- **Subdiretório** (ex.: `dominio.com/campanha2026/`): ajuste `base` em `astro.config.mjs`.
- **Outro domínio:** ajuste `site` em `astro.config.mjs` (usado no canonical e no Open Graph).
