## GitHub Search App

Projeto que utiliza a API pública do GitHub para pesquisar usuários, listar seus repositórios e seus detalhes.

['Clique aqui para visualizar a aplicação!'](https://gh-search-app.herokuapp.com/)

### Principais tecnologias e conceitos utilizados

-   React JS
-   React Hooks
-   React Router
-   Styled Components

Para padronização e organização de código, foram utilizados:

-   ESLint
-   Prettier
-   Customize CRA (Create React App) e React App Rewired

Para definição e criação de layout:

-   Figma

### Considerações sobre a usabilidade

-   Apesar da especificação de pesquisar somente "um usuário", preferi implementar a pesquisa de usuários para melhor usabilidade.
-   Na listagem de repositórios, estava especificado que a ordenação deveria ser feita na ordem decrescente de número de estrelas. Porém, a API não retorna os dados com essa ordenação. Só foi possível a ordenação manual na primeira página, as páginas seguintes não manterão a ordenação de estrelas.
-   Foi criada uma validação para erros vindos do servidor. A API pública do GitHub aceita somente 60 requisições por hora, após isso ela retorna erros do servidor.
-   Foi criada também uma página 404.

### Considerações sobre o projeto

-   Foi hospedado no Heroku.
-   Foi utilizado o serviceWorker do Create React App, com pequenas alterações no manifest.json. Provavelmente irei adicionar novas features relacionadas ao PWA eventualmente.
-   Futuramente irei implementar Jest e Enzyme, ou Cypress, por motivos de treino e curiosidade. A implementação não ocorreu antes por questão do prazo.

<hr/>

## Create React App - Default Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
