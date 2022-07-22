
# Blogs API

API RESTful desenvolvida para gestão de usuários e conteúdos de um blog utilizando NodeJs, Express, JWT, Sequelize e MySQL.



## Autor

- [@saulomagalhaes](https://www.linkedin.com/in/sauloam/)


## Aprendizados

Construção de uma API RESTful aplicando o padrão de arquitetura de software MSC (Model-Service-Controller);
Utilização do Sequelize para manipular um banco de dados relacional;
Autenticação com JWT.

## Melhorias

Serão implementados testes de integração ao longo das próximas semanas.

## Stack utilizada

**Back-end:** Node, Express, Sequelize, JWT e MySQL.


## Rodando o servidor no Docker

Clone o projeto

```bash
  git clone git@github.com:saulomagalhaes/Blogs-API.git
```

Entre no diretório do projeto

```bash
  cd Blogs-API
```

Instale as dependências

```bash
  npm install

```

Suba o container Docker

```bash
  docker-compose up -d
```

Execute o container

```bash
   docker exec -it store_manager bash
```

Execute as migrations

```bash
   npm run prestart
```

Popule as tabelas

```bash
   npm run seed
```

Inicie o servidor dentro do container

```bash
   npm run debug
```


## Documentação Completa da API
Ao subir o container docker acesse o link e tenha acesso a documentação de forma mais detalhada.

[http://localhost:3000/doc](http://localhost:3000/doc)


## Documentação da API
Considere que o body é um objeto JSON, abaixo segue as chaves necessárias.

#### Fazendo o Login

```http
  POST /login
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email do usuário |
| `password` | `string` | **Obrigatório**. Senha |

#### Cadastrar usuário

```http
  POST /user
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `displayName` | `string` | **Obrigatório**. Nome do usuário|
| `email` | `string` | **Obrigatório**. Email |
| `password` | `string` | **Obrigatório**. Senha |
| `image` | `string` | **Obrigatório**. Avatar |

#### Retorna todos os usuários

```http
  GET /user
```

#### Retorna um usuário pelo id

```http
  GET /user/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do usuário |


#### Adicionar nova categoria

```http
  POST /categories
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome da categoria|

#### Buscar todas as categorias

```http
  GET /categories
```

#### Adicionar um novo Post

```http
  POST /post
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório**. Título do post|
| `content` | `string` | **Obrigatório**. Conteúdo |
| `categoryIds` | `array of numbers` | **Obrigatório**. Categorias da postagem |


#### Buscar todos os posts

```http
  GET /post
```

#### Retorna um post pelo id

```http
  GET /user/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do post |


#### Editar um post

```http
  PUT /post/:id
```

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório**. Título do post|
| `content` | `string` | **Obrigatório**. Conteúdo |

#### Deletar um post

```http
  DELETE /post/:id
```

#### Deletar um usuário

```http
  DELETE /user/me
```

#### Procurar um post por um termo

```http
  GET /post/search?q=:searchTerm
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `q`      | `string` | Termo a ser buscado|

## Screenshots

![Swagger](https://i.pinimg.com/originals/3a/10/3e/3a103e4da42a42f90a0909f33dd5dd23.jpg)
![Insomnia](https://i.pinimg.com/originals/96/89/a0/9689a09b0d911602bd0eb380a0946843.jpg)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

