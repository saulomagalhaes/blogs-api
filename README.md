# 🚧 README em construção 🚧

# Blogs API

API RESTful desenvolvida para gestão de usuários e conteúdos de um blog utilizando Node, JWT, Sequelize e MySQL.



## Autores

- [@saulomagalhaes](https://www.linkedin.com/in/sauloam/)


## Stack utilizada

**Back-end:** Node, Express, Sequelize, JWT e MySQL.


## Aprendizados

Construção de uma API RESTful aplicando o padrão de arquitetura de software MSC (Model-Service-Controller), 
utilização do Sequelize e autenticação com JWT. 

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

[Documentação](http://localhost:3000/doc)


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


