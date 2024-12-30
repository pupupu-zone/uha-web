# PU-PU-PU (Web FE)

### Primary Stack
* **[React@18](https://react.dev/)**
* **[@tanstack/react-router@1](https://tanstack.com/router/latest)**
* **[@tanstack/form@0](https://tanstack.com/form/latest)**
* **[Styled Components@6](https://styled-components.com/)**
* **[Redux Toolkit@2](https://redux-toolkit.js.org/)**
* **[Vite@6](https://vite.dev/)**
* **[PNPM](https://pnpm.io/)**
* **[NodeJS@20](https://nodejs.org/)**
* **[Typescript@5](https://www.typescriptlang.org/)**

### How to run locally
> [!IMPORTANT]
> This command runs FE dev server only. For running local API, check [backend](../backend/README.md)

#### Run local dev-server
```sh
# Step 0: Install NodeJS v20+

# Step 1: install deps
pnpm install

# Step 2: be sure .env.development is reliable for you

# Step 3: run dev-server
pnpm run dev
```

#### Run production-ready docker image
```sh
# Step 0: be sure .env.production is reliable for you

# Step 1: build container
docker build . -t asse.app-fe

# Step 2: serve container with builded fe at localhost:3000
docker run -p 3000:80 asse.app-fe
```
