# NLW Spacetime - Trilha Ignite: Cápsula do tempo
Software de lembranças para guardá-las e compartilhá-las com quem quiser!

## ✔️ Linguagens e tecnologias utilizadas

### Frontend

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org)
- [ReactJS](https://reactjs.org)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

### Backend

- [NodeJS](https://nodejs.org/en/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io)
- [SQLite](https://www.sqlite.org/index.html)

### Bibliotecas e Frameworks

#### Frontend

- [Axios](https://axios-http.com)
- [Day.js](https://day.js.org)
- [JS-Cookie](https://github.com/js-cookie/js-cookie)
- [JWT-Decode](https://www.npmjs.com/package/jwt-decode)
- [Lucide React](https://lucide.dev)
- [Tailwind CSS Forms](https://github.com/tailwindlabs/tailwindcss-forms)

#### Backend

- [Fastify CORS](https://github.com/fastify/fastify-cors)
- [Fastify JWT](https://github.com/fastify/fastify-jwt)
- [Fastify Multipart](https://github.com/fastify/fastify-multipart)
- [Fastify Static](https://github.com/fastify/fastify-static)
- [Zod](https://github.com/colinhacks/zod)

### Ferramentas e utilitários

- [ESLint](https://eslint.org)
- [Next.js ESLint Config](https://github.com/vercel/eslint-config-next)
- [Rocketseat ESLint Config](https://github.com/Rocketseat/eslint-config)
- [PostCSS](https://postcss.org)
- [Prisma](https://www.prisma.io)
- [SQLite](https://www.sqlite.org/index.html)
- [MermaidJS](https://mermaid-js.github.io/mermaid)
- [Radix UI](https://www.radix-ui.com)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [TypeScript](https://www.typescriptlang.org)

## Design da aplicação WEB

A seguir estão algumas capturas de tela do design da aplicação:

<p align="center">
  <img src="https://github.com/gabriel-andradev/spacetime/assets/101130704/6f26f43a-7a8c-43cf-b053-6dc36b061910" alt="Captura de tela 1 - Aplicação em pleno funcionamento" />
  <p align="center"><em>Etapas</em></p> 
  <div align="center">
    <img src="https://github.com/gabriel-andradev/spacetime/assets/101130704/b56170b6-2766-4318-8432-7ce2f610a490" alt="Captura de tela 2 - Entrada no site sem estar logado" />
    <img src="https://github.com/gabriel-andradev/spacetime/assets/101130704/714f37bc-7a23-4bd5-853b-80bb683cfe20" alt="Captura de tela 3 - Logado na aplicação" />
    <img src="https://github.com/gabriel-andradev/spacetime/assets/101130704/a52662b8-d4f2-43d5-ba8c-f06fe84f200a" alt="Captura de tela 4 - Compartilhando uma lembrança" />
    <img src="https://github.com/gabriel-andradev/spacetime/assets/101130704/183f596b-ef6e-489e-abd9-3d3e95100624" alt="Captura de tela 5 - Exibição de uma lembrança" />
  </div>
</p>

## 🕹️ Como Utilizar

Para rodar esta aplicação, você precisará ter o Node.js e o NPM instalados em sua máquina. Certifique-se de ter o Node.js na versão `v18.16.0` ou superior. 

### Configuração do Servidor

1. No diretório raiz do projeto, navegue até a pasta "server" usando o terminal.
2. Execute o seguinte comando para instalar as dependências e configurar o banco de dados local:
```
$ npm install
$ npx prisma migrate dev
```
3. Em seguida, execute o comando abaixo para iniciar o servidor:
```
$ npm run dev
```
### Configuração do Frontend

1. No diretório raiz do projeto, navegue até a pasta "web" usando o terminal.
2. Execute o seguinte comando para instalar as dependências:
``` 
$ npm install
```
3. Após a conclusão da instalação, execute o comando abaixo para iniciar a aplicação web:
```
$ npm run dev
```

Certifique-se de que o servidor esteja em execução antes de iniciar a aplicação web.

### Códigos HTTP

Os códigos HTTP são códigos numéricos que indicam o tipo de resposta fornecida pelo servidor. Aqui estão alguns dos códigos mais comuns:

- **Status 200** - Resposta genérica de sucesso (OK). Indica que a solicitação foi bem-sucedida e o servidor retornou os dados solicitados.
- **Status 201** - Algo foi criado (CREATED). Indica que a solicitação foi bem-sucedida e um novo recurso foi criado como resultado.

Principais categorias de códigos de status:

- **2xx** - Sucesso: indica que a solicitação foi bem-sucedida.
- **3xx** - Redirecionamento: indica que o cliente precisa realizar alguma ação adicional para completar a solicitação.
- **4xx** - Erro do cliente: indica que houve um erro na solicitação do cliente, como uma rota inválida ou falta de permissões.
- **5xx** - Erro do servidor: indica que ocorreu um erro no servidor ao processar a solicitação, como uma falha interna ou tempo limite.

Certifique-se de ter o Node.js instalado e o NPM configurado corretamente antes de executar os comandos acima. Além disso, siga a sequência correta de configuração e execução do servidor e da aplicação web conforme mencionado anteriormente.

Para obter mais informações detalhadas sobre a instalação e configuração do Node.js e do NPM, consulte a documentação oficial em [nodejs.org](https://nodejs.org).
