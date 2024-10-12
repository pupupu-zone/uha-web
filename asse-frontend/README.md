# ASSE (App Front-End)

### Stack
* **[React@18](https://react.dev/)**
* **[React Router@6](https://reactrouter.com/)**
* **[Styled Components@6](https://styled-components.com/)**
* **[Redux Toolkit@2](https://redux-toolkit.js.org/)**
* **[Vite@5](https://vite.dev/)**
* **[PNPM](https://pnpm.io/)**
* **[NodeJS@20](https://nodejs.org/)**

### How to run locally
> [!IMPORTANT]
> This command run FE dev server only. For running local API check [backend](../asse-backend/README.md)

#### Baremetal run
```sh
# Step 1: install deps
pnpm install

# Step 2: run dev-server
pnpm run dev
```

#### Docker run
```sh
# Step 1: build container
docker build . -t asse.app-fe

# Step 2: serve container with builded fe at localhost:3000
docker run -p 3000:80 asse.app-fe
```
