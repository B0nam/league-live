# league-live

Segunda prova prática para a disciplina de Desafio Profissional V do 5º semestre do curso de graduação de Engenharia de Software da Unicesumar.

Desenvolvido por **Kauan Muriel Rossi (2214501-2)**, **Daniel Bonam Rissardi (22013838-2)** e **Bruno Batista Carrião Moreno (24284115-2)**

## Sumário

- Visão geral
- Tecnologias utilizadas
- Funcionalidades
- Testes

## Visão Geral

League-live consiste em uma aplicação, que gera imagens contendo as informações de jogo do jogador de League of Legends. Por meio do usuário e tag do jogador é gerado uma imagem com as informações do mesmo, a qual pode ser compartilhada com os amigos.

As informações exibidas são:
- Imagem do banner (Gerada por meio do campeão mais jogado)
- 3 Campeões mais jogados e seus pontos
- Vitórioas
- Derrotas
- KD
- Rank e Tier

`[Observação] Caso o jogador não tenha completado a MD10 da season, não é posivel mostrar as informações de Vitória, Derrota, KD e Rank.`

## Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [NestJs](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [Artillery](https://www.artillery.io/)
- [JWT](https://jwt.io/)
- [Postgresql](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- [Jest](https://jestjs.io/pt-BR/)
- [Swagger](https://swagger.io/)

## Funcionalidades

Abaixo as funcionalidades desenvolvidas.

- Autenticação
    - O sistema conta com uma autenticação, onde para realizar ações relevantes na aplicação é necessário que o usuário esteja tenha criado uma conta válida e esteja logado ao sistema.
- league-data
    - League-data é o wrapper da api da riot games o qual organiza as informções utilizadas pelo sistema.

## Testes

**Testes Gerais (Testes Unitários, E2E, etc…):**

**Testes de carga:**

## Escopo do projeto - Solicitação do professor.
## Avaliação - Requisitos

Utilizando a API que escolheu, desenvolva uma aplicação utilizando Nest JS com as seguintes funcionalidades:

- Crie uma entidade e uma rota para "baixar" pelo menos 50 items para sua base dados da API escolhida pelo time
- Crie todas as operações de CRUD para a entidade anterior, para que os dados sejam cadastrados, atualizados, listados e removidos via métodos HTTP.
- Crie uma entidade de usuário, e crie um sistema de cadastro e autenticação via JWT (crie todos os métodos de CRUD para o usuário, a senha do usuário deve ser criptografada)
- Adicione um Auth Guard para as rotas da entidade principal da sua aplicação, somente usuários autenticados poderão chamar essas rotas
- Crie uma entidade para logar o tempo de resposta das rotas de sua API. - - Registre pelo menos o nome da rota chamada, o método utilizado e quanto tempo demorou para a solicitação terminar.
- Adicione Exceções a todos os métodos de sua controller, sendo que pelo menos uma delas deve ser de uma classe personalizada
- Adicione validações de dados via class-validator
- Crie um arquivo docker compose para sua aplicação, onde pelo menos o banco de dados seja levantado para utilizar a aplicação
- Realize os testes de integração e também faça o teste de carga e salve o relatório
- Exporte as requisições da sua aplicação para um arquivo .json e anexe a sua entrega
