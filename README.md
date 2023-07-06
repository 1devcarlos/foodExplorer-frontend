<img src=".github/Capa.png" />

<h1 align="center">
    <a href="#"> Food Explorer - Frontend</a>
</h1>

<p align="center">
	
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="welcome!" />
	
  <img src="https://img.shields.io/github/languages/count/1devcarlos/foodExplorer-frontend" alt="languages" />
	
  <img alt="Github License" src="https://img.shields.io/github/LICENSE/1devcarlos/foodExplorer-frontend" />

</p>

<h4 align="center"> 
	 Status: Concluído
</h4>

<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-backend">Backend</a> •
 <a href="#-tecnologias">Tecnologias</a> •

</p>

## 💻 Sobre

O Food Explorer é um aplicativo web que funciona como um menu digital para um restaurante fictício. Este projeto foi desenvolvido como desafio final para a certificação no Curso Explorer da RocketSeat. A aplicação foi construída utilizando as seguintes tecnologias:

- React
- Routes
- Components
- Props
- Hooks
- Context

---

## ⚙️ Funcionalidades

- [x] Projeto estruturado, com boa organização de pastas e divisão de componentes no frontend.
- [x] Arquivo README.md com instruções sobre como executar o projeto em ambiente de desenvolvimento.
- [x] Autenticação de usuários por meio de tela de login, utilizando autenticação JWT.
- [x] Funcionalidade de upload de imagens para registro de pratos pelo administrador.
- [x] Deploy da aplicação.
- [x] Nomes significativos para funções e variáveis, seguindo os princípios de Clean Code.
- [x] Armazenamento dos dados de admin, restaurante e usuários em um banco de dados.
- [x] Funcionalidade de busca por nome do prato, ingredientes ou prato favorito.
- [x] A interface consome sua própria API.
- [x] Design responsivo utilizando o conceito de Mobile First.
- [x] Aplicação de animações, transições e transformações quando apropriado.
- [x] O usuário pode adicionar itens ao carrinho clicando no botão "Adicionar". A quantidade pode ser controlada pelos botões "-" e "+".
- [x] Ao clicar no botão "Meu Pedido", o usuário é redirecionado para uma tela onde pode visualizar seu pedido, a soma total e os métodos de pagamento disponíveis.
- [x] O usuário pode excluir um prato do carrinho e o valor total do pedido é atualizado automaticamente.
- [x] O usuário pode marcar um prato como favorito clicando no ícone de coração ao lado de cada prato.
- [x] O administrador pode visualizar e controlar o status de cada pedido por meio de um campo de seleção. Os pedidos são exibidos em uma tabela ao clicar na opção "Pedidos".

---

### 🚀 Deploy

[Food Explorer](https://cg-food-explorer.netlify.app/)

---

## ⚙️ Backend

💡 Para ver o repositório do Backend <a href="https://github.com/1devcarlos/foodExplorer-backend" target="_blank">clique aqui!</a>

## 🚀 Como Funciona

Este projeto está dividido em duas partes:

1. Backend (pasta food-ex

lorer-backend)
2. Frontend (pasta food-explorer-frontend)

💡 O Frontend requer que o Backend esteja em execução para funcionar corretamente.

### Pré-requisitos

Antes de começar, verifique se você possui as seguintes ferramentas instaladas em sua máquina: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disso, é recomendável ter um editor de código como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código.

#### 🎲 Executando o Servidor (Backend)

```bash
# Clone este repositório
$ git clone git@github.com:1devcarlos/foodExplorer-backend.git

# Acesse a pasta do projeto no terminal
$ cd food-explorer-backend

# Instale as dependências
$ npm install

# Execute a migração e o seed
$ npm migrate
$ npm seed

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Login do administrador
$ email: [email do admin]
$ password: [senha do admin]

# O servidor será iniciado na porta: 3333 - acesse http://localhost:3333
```

---

#### 🧭 Executando a aplicação web (Frontend)

```bash
# Clone este repositório
$ git clone git@github.com:1devcarlos/foodExplorer-frontend.git

# Acesse a pasta do projeto no terminal
$ cd food-explorer-frontend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta: 3000 - acesse http://localhost:3000
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas na construção deste projeto:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Styled Components](https://styled-components.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 💻 Projeto

O Food Explorer é um aplicativo web que funciona como um menu digital para um restaurante fictício conhecido como Food Explorer.

---

Feito com ❤️ por Carlos Gomes 👋🏽 [Entre em contato!](https://www.linkedin.com/in/1devcarlos/)
