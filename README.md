# André Português 1080 — Deputado Federal (RJ)

Landing page de campanha de André Português, candidato a Deputado Federal pelo Rio de Janeiro (Republicanos, nº 1080).

> Estrutura derivada da landing page de Marcelo Crivella (branch `main`). O briefing, o copy deck e as imagens de referência estão em [docs/briefing/](docs/briefing/).

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
├── config/site.ts           # dados do candidato, links, redes sociais e pop-up
├── config/copy.ts           # textos das seções (títulos, chamadas, descrições)
├── data/                    # conteúdo das seções
│   ├── news.ts              #   notícias (e quais aparecem na home)
│   ├── case.ts              #   números do case Miguel Pereira e biografia
│   ├── ticket.ts            #   chapa (presidente, senador, deputado)
│   ├── proposals.ts         #   propostas do carrossel
│   ├── agenda.ts            #   agenda
│   ├── videos.ts            #   vídeos
│   ├── galleries.ts         #   galerias de fotos
│   └── instagram.ts         #   publicações do Instagram
├── components/
│   ├── layout/              # SiteNav, Footer
│   ├── sections/            # uma seção da página por arquivo
│   ├── overlays/            # modal de conteúdo, pop-up, botões flutuantes, acessibilidade
│   └── ui/                  # Logo, Modal, CloseButton, ShareButtons, SectionHeading, SocialLinks
├── lib/                     # tipos e utilitários do navegador (modais, compartilhamento, VLibras)
├── layouts/BaseLayout.astro # <head>, SEO e Open Graph
├── scripts/reveal.ts        # animação de entrada das seções
├── styles/                  # CSS por área + Tailwind
└── pages/index.astro        # monta a página
public/
├── assets/                  # logo oficial, logo do partido e ícones de redes sociais
└── uploads/                 # foto oficial, banner e peças da campanha
docs/briefing/               # briefing, copy deck (JSON), imagens coletadas e originais (logo e foto)
_legacy/                     # página de referência salva (só referência, não é usada no build)
```

### Seções da página

| Componente | Âncora | Conteúdo |
|---|---|---|
| `Hero` | `#inicio` | Banner da chapa, slogan e contagem regressiva para 04/10 |
| `Proposals` | `#propostas` | Carrossel com as 6 bandeiras |
| `CaseStudy` | `#case` | Números e destaques do case Miguel Pereira |
| `About` | `#quem-e` | Foto oficial, biografia e trajetória |
| `News` | `#noticias` | Destaque, "Em pauta" e lista completa |
| `Agenda` | `#agenda` | Próximos compromissos |
| `Videos` | `#videos` | Reels do Instagram com player vertical |
| `Connect` | `#conecte` | Galeria de fotos e Instagram |
| `Ticket` | `#chapa` | Chapa: Flávio 22, Crivella 100, André 1080 |
| `WhatsAppCommunity` | `#participe` | Convite para a comunidade (ou Instagram, sem link do WhatsApp) |

## Editando o conteúdo

- **Dados do candidato, links e integrações:** `src/config/site.ts`
- **Textos das seções:** `src/config/copy.ts`
- **Notícias:** `src/data/news.ts`. Os campos `featuredNewsId` e `onAgendaNewsIds` definem o destaque e a lista "Em pauta" da home.
- **Demais seções:** o arquivo correspondente em `src/data/`. Os tipos estão em `src/lib/types.ts`, e o editor avisa se faltar algum campo.
- **Imagens novas:** coloque em `public/uploads/` e use o caminho `/uploads/nome-do-arquivo.webp`.
- **Ícones:** importe de `@lucide/astro` (catálogo em [lucide.dev/icons](https://lucide.dev/icons)), por exemplo `import { ArrowRight } from '@lucide/astro'`.

### Seções removidas por falta de conteúdo

Central de materiais, figurinhas, player de jingles e newsletter foram removidos nesta branch. Para recuperá-los quando os arquivos (ou o serviço de e-mail) existirem, use a branch `main` como referência: `src/components/sections/Materials.astro`, `src/components/sections/Newsletter.astro` e `src/components/overlays/JinglePlayer.astro`.

### WhatsApp

- Defina `whatsapp.communityUrl` em `src/config/site.ts`. Isso ativa o botão flutuante e troca os convites do Instagram pelo WhatsApp.

## Pendências antes de publicar

Itens marcados com `CONFIRMAR` no código (detalhes em [docs/briefing/BRIEFING.md](docs/briefing/BRIEFING.md), seção 9):

- Link da comunidade de WhatsApp, YouTube e TikTok
- Domínio oficial (`site` em `astro.config.mjs`)
- Fotos de campanha em alta resolução
- Propostas de Segurança e de Saúde e Educação (textos inferidos)
- Estado civil: não foi usado, porque a bio do Instagram e o registro do TSE divergem
- As imagens atuais vieram do Instagram em 640px e servem só como referência

## Recursos

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
