# React Course

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Development environment configuration

Build docker image:

```bash
docker compose build
```

Run docker container:

```bash
docker compose up
```

Enter to container's terminal:

```bash
docker compose exec api bash
```

Inside container's terminal install project dependencies:

```bash
yarn
```

## Useful commands

### Vite

Create vite app:

```bash
yarn create vite
```

### React

Install dependencies:

```bash
yarn
```

Execute app:

```bash
yarn dev
```