/* eslint-disable max-len */
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/index.js'];

const doc = {
  info: {
    version: '1.0.0',
    title: 'Blogs API',
    description: 'Documentação com exemplos de uso da API',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Login',
      description: 'Endpoints',
    },
    {
      name: 'User',
      description: 'Endpoints',
    },
    {
      name: 'Categories',
      description: 'Endpoints',
    },
    {
      name: 'Post',
      description: 'Endpoints',
    },
  ],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  definitions: {
    User: {
      id: 1,
      displayName: 'Lewis Hamilton',
      email: 'lewishamilton@gmail.com',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
    },
    Users: [
      {
        id: 1,
        displayName: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
      },
      {
        id: 2,
        displayName: 'Saulo Alves',
        email: 'saulo.magalhaes@outlook.com.br',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
      },
    ],
    Category: {
      id: 1,
      name: 'Typescript',
    },
    Categories: [
      {
        id: 1,
        name: 'Typescript',
      },
      {
        id: 2,
        name: 'NodeJS',
      },
    ],
    PostUserCategories: [
      {
        id: 2,
        title: 'Vamos que vamos',
        content: 'Foguete não tem ré',
        userId: 1,
        published: '2011-08-01T19:58:00.000Z',
        updated: '2011-08-01T19:58:51.000Z',
        user: {
          id: 1,
          displayName: 'Lewis Hamilton',
          email: 'lewishamilton@gmail.com',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
        },
        categories: [
          {
            id: 1,
            name: 'Typescript',
          },
        ],
      },
    ],
    Token: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8',
    },
    Post: {
        id: 3,
        title: 'Latest updates, August 1st',
        content: 'The whole text for the blog post goes here in this key',
        userId: 1,
        updated: '2022-05-18T18:00:01.196Z',
        published: '2022-05-18T18:00:01.196Z',
      },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
