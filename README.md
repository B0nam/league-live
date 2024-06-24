`[Observação] A Chave de utilização da API da Riotgames deve ser atualizada a cada 24h, caso a aplicação não esteja funcionando adequadamente, é muito provavel que a chave utilizada tenha expirado. Neste caso, enviar mensagem para o Whatsapp do Kauan Muriel ou Daniel Bonam`

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

![sant_loud](https://github.com/B0nam/league-live/assets/85623265/0f814e89-58a2-4eb1-b10b-1e800a4fa8f4)

### A imagem pode ser gerada por meio de http//localhost:3000/league-stats/export/(nome do jogador)/(tag)


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
- league-stats
    - League-stats é responsável por gerar a pagina html que contem ás informações do usuário e posteriormente gera a imagem.
- Leaderboard
    - Mostra os 200 melhores jogadores de acordo com os pontos.

## Testes de carga
Foram realizados os testes de carga da aplicação utilizando Artillery. O relatório pode ser acessado [aqui.](https://github.com/B0nam/league-live/blob/main/reports/artillery-report.txt)

## Swagger
As rotas foram descritas por meio do Swagger e podem ser acessadas por meio de https://localhost:3000/docs. Além disso, as requisições foram exportadas em um arquivo .json e pode ser acessado [aqui.](https://github.com/B0nam/league-live/blob/main/reports/requests.json)

## Escopo do projeto - Solicitação do professor.
## Avaliação - Requisitos

Utilizando a API que escolheu, desenvolva uma aplicação utilizando Nest JS com as seguintes funcionalidades:

- Crie uma entidade e uma rota para "baixar" pelo menos 50 items para sua base dados da API escolhida pelo time
`[FEITO] A partir da requisição GET para a rota /league-stats/leaderboard são buscados os dados da entidade player, que são armazenados no banco de dados (200 players são armazenados).`
- Crie todas as operações de CRUD para a entidade anterior, para que os dados sejam cadastrados, atualizados, listados e removidos via métodos HTTP.
`[FEITO] Todas as operações de CRUD para a entidade player foram criadas. Elas podem ser acessada por meio da rota /player.`
- Crie uma entidade de usuário, e crie um sistema de cadastro e autenticação via JWT (crie todos os métodos de CRUD para o usuário, a senha do usuário deve ser criptografada)
`[FEITO] A entidade user foi criada e o sistema de autenticação foi implementado utilizando JWT e a biblioteca bcrypt para criptografar as senhas.`
- Adicione um Auth Guard para as rotas da entidade principal da sua aplicação, somente usuários autenticados poderão chamar essas rotas
`[FEITO] Foi adicionado o Auth Guard para todas as rotas que necessitam de autenticação.`
- Crie uma entidade para logar o tempo de resposta das rotas de sua API. - - Registre pelo menos o nome da rota chamada, o método utilizado e quanto tempo demorou para a solicitação terminar.
`[FEITO] A entidade RequestLog armazena os principais dados de todas as requests enviadas ao sistema.`
- Adicione Exceções a todos os métodos de sua controller, sendo que pelo menos uma delas deve ser de uma classe personalizada.
`[FEITO] Todos os metodos de todas as controllers possuem um tratamento de exceções.`
- Adicione validações de dados via class-validator
`[FEITO] É realizado a validação de dados via class-validator por meio de DTO's que estabelecem os parâmetros esperados.`
- Crie um arquivo docker compose para sua aplicação, onde pelo menos o banco de dados seja levantado para utilizar a aplicação
`[FEITO] O arquivo docker-compose foi criado e pode ser executado por meio do comando docker compose up.`
- Realize os testes de integração e também faça o teste de carga e salve o relatório
`[FEITO] Os testes foram realizados e salvos em: https://github.com/B0nam/league-live/blob/main/reports/`
- Exporte as requisições da sua aplicação para um arquivo .json e anexe a sua entrega
`[FEITO] As requisições foram exportadas em um arquivo .json e salvas em: https://github.com/B0nam/league-live/blob/main/reports/`
