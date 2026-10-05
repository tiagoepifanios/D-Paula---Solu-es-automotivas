# D’Paula Soluções Automotivas — site institucional

Site em React + TypeScript + Vite, sem backend. Todo o conteúdo comercial fica em `src/data/site.ts`.

## Como executar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # gera a versão de publicação em dist/
npm run preview   # serve a pasta dist/ localmente
```

**Atenção:** o `index.html` da raiz do projeto é o arquivo-fonte do Vite e fica em branco se for aberto direto no navegador. Para ver o site sem servidor, rode `npm run build` e abra `dist/index.html` com duplo clique (o JavaScript e o CSS ficam embutidos nele).

Para publicar, envie o conteúdo de `dist/` para qualquer hospedagem estática (Netlify, Vercel, Hostinger, Locaweb etc.). Os caminhos são relativos, então o site funciona na raiz ou em subpasta.

## Estrutura

```
public/
  media/hero/      vídeo da primeira tela (MP4 + WebM, 1080p e 720p) e imagens de capa
  media/galeria/   fotos e vídeo da galeria (WebP otimizado + miniaturas)
  media/fotos/     foto da fachada usada na seção Sobre
  media/marca/     logo com fundo transparente (PNG e WebP)
  favicon, ícones e og-image.jpg
src/
  data/site.ts     dados da empresa, serviços, galeria e avaliações  ← edite aqui
  lib/whatsapp.ts  geração dos links do WhatsApp (número único em site.ts)
  lib/hooks.ts     animações de entrada, carregamento sob demanda, movimento reduzido
  components/      Header, Hero, About, Services, Gallery, Lightbox, Reviews, Location, Footer, WhatsAppFloat
  styles/global.css
```

## Vídeo da primeira tela

- `media/hero/hero-1080.mp4` / `hero-720.mp4` (H.264) e `.webm` (VP9) como alternativa.
- O navegador baixa só uma versão: 720p em celulares ou com economia de dados ativa, 1080p em telas grandes.
- O loop foi suavizado: os últimos 0,8 s se fundem com o início, então a repetição não pisca nem salta (duração final: 9 s).
- `hero-poster` é o primeiro quadro do loop (exibido durante o carregamento). `hero-still` é um quadro com o carro, exibido quando o autoplay é bloqueado ou quando o visitante prefere movimento reduzido.
- O vídeo original enviado foi mantido fora do projeto, sem alterações.

## Avaliações

A seção mostra avaliações públicas do Google consultadas em 04/10/2026. Para ocultar, deixe `reviews.items` vazio em `src/data/site.ts`. Atualize a nota e o total periodicamente.

## Antes de publicar

1. Defina o domínio e preencha `business.siteUrl`; troque `og:image`, `image` (JSON-LD) e adicione `<link rel="canonical">` com URLs absolutas no `index.html`.
2. Confirme com a empresa os itens listados em “Dados pendentes” na entrega.
