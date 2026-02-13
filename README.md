# Clínica Movikids — Website

Site institucional construído com Vite + React + TypeScript e Tailwind CSS.

## Resumo

Este repositório contém o site da Clínica Movikids: páginas públicas, componentes React reutilizáveis e configuração para empacotamento com Vite. O projeto usa a biblioteca shadcn-ui para componentes base e integra mapas e gráficos onde necessário.

## Pré-requisitos

- Node.js (>= 18 recomendado)
- npm

## Instalação (desenvolvimento)

1. Clone o repositório:

```bash
git clone https://github.com/eudesmcf/movikids-website/
cd movikids-website
```

2. Instale dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor inicia em `http://localhost:5173` por padrão.

## Scripts úteis

- `npm run dev` — servidor de desenvolvimento (Vite)
- `npm run build` — build de produção
- `npm run build:dev` — build em modo development
- `npm run preview` — build + preview local
- `npm run lint` — rodar ESLint
- `npm run deploy` — deploy para GitHub Pages (usa `scripts/deploy-ghpages.cjs`)

## Estrutura do projeto

- `src/` — código-fonte React (páginas, componentes, hooks)
	- `components/` — componentes da UI e componentes específicos do site
	- `pages/` — páginas roteadas (Index, Blog, Login, NotFound)
	- `assets/` — imagens e outros assets
- `public/` — arquivos servidos estáticos
- `scripts/` — scripts de suporte (deploy/preview para gh-pages)

## Contribuição

1. Abra uma issue descrevendo a mudança que pretende fazer.
2. Crie um branch com um nome descritivo: `feature/descricao` ou `fix/descricao`.
3. Faça commits claros e atômicos.
4. Abra um Pull Request para revisão.

Observação: ficheiros de dados de exemplo foram removidos do repositório principal. Se precisar de dados de exemplo, adicione-os em `data/examples/` e abra um PR explicando o uso.

## Deploy

O projeto inclui scripts para publicar em GitHub Pages. Para publicar:

```bash
npm run build
npm run deploy
```

O script `deploy` depende de `predeploy` (que executa `build`). Verifique `scripts/deploy-ghpages.cjs` para configurar opções adicionais.

## Verificação local rápida

Após alterações significativas, rode:

```bash
npm run lint
npm run build
npm run preview
```

## Contato

Para dúvidas sobre o projeto ou deploy, abra uma issue ou contacte o mantenedor do repositório.

---
Atualizado em 2026-02-12
