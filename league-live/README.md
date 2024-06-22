<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# league-live

Segunda Prova prática para a disciplina de Desafio Profissional V do 5º semestre do curso de graduação de Engenharia de Software da Unicesumar.

Desenvolvido por **Kauan Muriel Rossi (2214501-2)**, **Daniel Bonam Rissardi (22013838-2)** e **Bruno Batista Carrião Moreno (24284115-2)**

## Sumario

- Visão geral
- Tecnologias utilizadas
- Funcionalidades
- Testes

## Visão Geral

Nossa prova prática consiste em uma aplicação web onde a partir do nome do jogador do jogo eletrônico League of Legends é gerado uma imagem contendo informações de jogo.

As informações exibidas são:
- Campeão mais jogar
- Rank do jogador

## Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [NestJs](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [Artillery](https://www.artillery.io/)
- [JWT](https://jwt.io/)
- [Postgresql](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)

## Funcionalidades

Abaixo as funcionalidades desenvolvidas.

## Testes

**Testes Gerais (Testes Unitários, E2E, etc…):**

**Testes de carga:**

## Escopo do projeto - Solicitação do professor.
## Avaliação - Requisitos

Utilizando a API que escolheu, desenvolva uma aplicação utilizando Nest JS com as seguintes funcionalidades:

- Crie uma entidade e uma rota para "baixar" pelo menos 50 items para sua base dados da API escolhida pelo time
- Crie todas as operações de CRUD para a entidade anterior, para que os dados sejam cadastrados, atualizados, listados e removidos via métodos HTTP.
-Crie uma entidade de usuário, e crie um sistema de cadastro e autenticação via JWT (crie todos os métodos de CRUD para o usuário, a senha do usuário deve ser criptografada)
- Adicione um Auth Guard para as rotas da entidade principal da sua aplicação, somente usuários autenticados poderão chamar essas rotas
- Crie uma entidade para logar o tempo de resposta das rotas de sua API. - - Registre pelo menos o nome da rota chamada, o método utilizado e quanto tempo demorou para a solicitação terminar.
- Adicione Exceções a todos os métodos de sua controller, sendo que pelo menos uma delas deve ser de uma classe personalizada
- Adicione validações de dados via class-validator
- Crie um arquivo docker compose para sua aplicação, onde pelo menos o banco de dados seja levantado para utilizar a aplicação
- Realize os testes de integração e também faça o teste de carga e salve o relatório
- Exporte as requisições da sua aplicação para um arquivo .json e anexe a sua entrega