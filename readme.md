# Boas-vindas ao projeto Nearby App

Fala, dev 👋

Esse projeto é parte de um curso que fiz para praticar meus conhecimentos.

O projeto **Nearby App** é um aplicativo mobile de clube de benefícios com cupons para utilizar em estabelecimentos próximos a você.

Esse é um projeto do evento **NLW Pocket Mobile**, um dos conteúdos disponíveis para alunos da **Rocketseat**.

---

## Overview do Projeto

Aqui você pode inserir uma imagem demonstrando o **overview** do projeto:

![Overview do Projeto](./imagens/overview_app.JPG)

---

## Como executar o projeto

Para executar o **Nearby App**, você precisa clonar o repositório, instalar as dependências e rodar tanto a API quanto o projeto mobile.

### **1. Clonando o Repositório**

```bash
# Clone o repositório
git clone https://github.com/Renannr/nlw-pocket-mobile.git

# Entre na pasta do projeto
cd nlw-pocket-mobile
```

### **2. Configurando e executando a API**

A API foi desenvolvida em **Node.js** com **Prisma**.

```bash
# Entre na pasta da API
cd api

# Instale as dependências
npm install

# Configure o banco de dados com Prisma
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

A API rodará na porta **3333** (ou conforme configuração).

### **3. Configurando e executando o Mobile**

```bash
# Volte para a raiz do projeto e entre na pasta mobile
cd ../mobile

# Instale as dependências
npm install

# Execute o projeto
npx expo start
```

---

Agora, o projeto **Nearby App** estará rodando localmente! 🚀

Abra o aplicativo utilizando um emulador ou um dispositivo físico com o **Expo Go**.

---

### Tecnologias Utilizadas

- **Node.js**
- **Prisma**
- **Expo**
- **React Native**
- **TypeScript**
- **Expo Router**
- **Design Pattern: Composition**

---

Espero que o projeto ajude no seu aprendizado!
Boas codagens 🛠️💪
