# Escutaí

Aplicativo front-end de descoberta musical, desenvolvido com React e Vite. A busca consulta o catálogo de músicas da iTunes Search API diretamente do navegador.

## Funcionalidades

- Página inicial e página de busca com navegação por rotas.
- Pesquisa por música, artista ou estilo.
- Cartões com capa, álbum, artista e prévia de áudio quando disponível.
- Resultados apresentados em blocos de três, com opção para carregar mais.
- Estados de carregamento, busca sem resultados e falha na solicitação.
- Formulários de login e cadastro demonstrativos; não criam contas nem autenticam usuários.
- Layout responsivo, inclusive em larguras de 320 px.

## Executar localmente

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

## Verificações

```sh
npm run lint
npm run build
```

## Fonte dos dados

A aplicação usa a [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/). A disponibilidade de prévias e capas depende do catálogo e pode variar entre os resultados.
