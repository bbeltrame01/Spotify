# ![Spotify](front-end/src/assets/logo/spotify-logo.png) **Spotify Clone**

Projeto desenvolvido como parte da **Jornada Full Stack** promovida pela **Hashtag Treinamentos**. Este projeto simula a interface do Spotify com funcionalidades básicas, como navegação por artistas populares, músicas populares e um player de áudio funcional.

## 🚀 **Tecnologias Utilizadas**

* **Frontend**:

  * **React.js**: Biblioteca para construção da interface.
  * **Vite**: Ferramenta de build e desenvolvimento super rápida para React.
  * **Axios**: Biblioteca para fazer requisições HTTP para o back-end.

* **Backend**:

  * **Node.js** com **Express**: Framework para construir a API.
  * **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes domínios.

* **Banco de Dados**: MongoDB

* **Player de Música**: Funcionalidade básica de player de áudio.

## 🖥️ **Funcionalidades**

* **Página Inicial**: Exibe os artistas e músicas populares.
* **Página do Artista**: Exibe informações detalhadas sobre os artistas.
* **Página da Música**: Exibe detalhes sobre as músicas, com player de áudio funcional.
* **Mostrar Mais**: Exibe mais artistas e músicas quando solicitado.
* **Player de Música**: Permite ouvir a música de um artista (atualmente, cada artista tem apenas uma música disponível para reprodução devido ao volume de arquivos).

## 🏃‍♂️ **Como Rodar o Projeto**

### Pré-requisitos

* **Node.js** (versão recomendada: 16.x ou superior)
* **MongoDB** (ou MongoDB Atlas para usar na nuvem)

### 1. Clone o repositório

```bash
git clone https://github.com/bbeltrame01/Spotify.git
cd Spotify
```

### 2. Instale as dependências do backend

```bash
cd back-end
npm install
```

### 3. Instale as dependências do frontend

```bash
cd front-end
npm install
```

### 4. Inicie o servidor backend

Certifique-se de que o MongoDB está rodando localmente ou que você configurou um cluster do MongoDB Atlas.

```bash
cd back-end
npm start
```

O servidor backend estará rodando em `http://localhost:3000`.

### 5. Inicie o servidor frontend

```bash
cd front-end
npm run dev
```

O frontend estará acessível em `http://localhost:5173`.

### 6. Acesse o Projeto

Abra o navegador e vá para `http://localhost:5173` para visualizar a interface do projeto.

## 🗂️ **Estrutura do Projeto**

```
/Spotify
  ├── /back-end           # Backend com Node.js e Express
  │   └── /api            # Endpoints da API
  │
  └── /front-end          # Frontend com React.js e Vite
      ├── /api            # Comunicação com a API
      └── /src            # Fonte do código
          ├── /assets     # Imagens, ícones e outros assets
          ├── /components # Componentes React reutilizáveis
          ├── /pages      # Páginas (Home, Artista, Música)
          ├── App.jsx     # Componente principal da aplicação
          ├── index.css   # Estilos globais
          └── main.jsx    # Arquivo de entrada para React
```

## 📝 **Observações**

* O projeto simula a interface do Spotify, com um player de áudio simples. Cada artista possui apenas uma música disponível para reprodução devido ao grande número de arquivos de áudio que precisariam ser gerenciados.
* A comunicação entre o frontend e o backend é feita através de **Axios**.
* O backend utiliza **CORS** para permitir que o frontend e o backend se comuniquem de diferentes origens.

## 📄 **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).

## 💡 **Contribuições**

Feedbacks, issues ou contribuições são sempre bem-vindos!
