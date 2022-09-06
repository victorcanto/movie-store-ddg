# Movies Store

Este projeto simula uma loja de filmes. Trata-se de uma aplicação que abrange os seguintes items:

-   Material UI para agilidade na estilização e responsividade.
-   Testes unitários com Jest e Testing Library.
-   Redux Toolkit para gerenciamento do estado da aplicação e persistencia do carrinho e favoritos com redux-persist.
-   Configuração de ambiente e padronização com Docker, Husky, Lint-staged, Eslint e Prettier.

## Tecnologias utilizadas

-   React + TypeScript
-   Redux Toolkit
-   Jest e Testing Library
-   Material UI
-   Docker

## Clonando repositório

> No seu terminal, executar o comando:

```bash
git clone git@github.com:victorcanto/ms-ddg.git
```

ou

```bash
git clone https://github.com/victorcanto/ms-ddg.git
```

## Criando token para usar no arquivo .env.template

> Instruções de criação na documentação:

[Documentação](https://developers.themoviedb.org/3/getting-started/introduction)

```bash
REACT_APP_API_URL=http://api.themoviedb.org/3
REACT_APP_API_ACCESS_TOKEN=<your token>
```

## Instalando Docker

> Instruções de instalação na documentação:

[Documentação](https://docs.docker.com/desktop/)

## Executando aplicação

> Na raiz do projeto, executar o comando:

```bash
  docker-compose up
```

## Executando testes

> Na raiz do projeto, executar o comando:

```bash
  docker-compose up && yarn test
```
