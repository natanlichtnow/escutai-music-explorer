# Escutaí

Aplicativo front-end de descoberta musical, desenvolvido com React e Vite. Pesquise músicas e artistas no catálogo da iTunes Search API diretamente pelo navegador.

**Site publicado:** [https://around-natan.chickenkiller.com](https://around-natan.chickenkiller.com)

## Funcionalidades

- Página inicial e página de busca com navegação por rotas.
- Pesquisa por música, artista ou estilo.
- Cartões com capa, álbum, artista e prévia de áudio quando disponível.
- Resultados apresentados em blocos de três, com opção para carregar mais.
- Estados de carregamento, busca sem resultados e falha na solicitação.
- Formulários demonstrativos de login e cadastro. Não criam contas nem autenticam usuários.
- Layout responsivo, inclusive em larguras de 320 px.

## Tecnologias

- React
- Vite
- React Router
- iTunes Search API

## Executar localmente

Requer Node.js 20.19+ ou 22.12+.

```sh
npm ci
npm run dev
```

## Verificações e build

```sh
npm run lint
npm run build
```

O build de produção é criado na pasta `dist`.

## Publicação

O site está publicado em uma máquina virtual Debian no Google Cloud. O Nginx serve os arquivos estáticos gerados pelo Vite, e sua configuração encaminha rotas da aplicação, como `/music`, para `index.html`.

## Fonte dos dados

A aplicação usa a [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/). A disponibilidade de prévias e capas depende do catálogo e pode variar entre os resultados.
