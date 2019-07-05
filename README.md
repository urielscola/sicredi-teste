# Demo

Demonstração do exercício [aqui](http://sicredi-teste.surge.sh/).

# Autenticação

username: `dragon999`
password: `south`

# Instalação

Requisitos para rodar o projeto nodeJS >= 8. Clonar repositório, entrar na pasta e instalar suas dependências com o comando `yarn` ou `npm install`.

# Para rodar o front

```
yarn start
```

# Para rodar os testes

```
yarn test
```

Testes unitários feitos com as ferramentas Jest e Enzyme.

# Para realizar deploy

```
yarn deploy
```

É necessário realizar login no surge pelo CLI antes, com o comando `surge login`.
É possível alterar o domínio no package.json.

# CD/CI

Pipeline realizada antes de cada commit, utilizando git hooks.
Primeiro rodarão os testes, caso todos estejam passando, será realizado o processo de deploy automaticamente.
