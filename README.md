# React course

## React configuration

Create app:

```bash
yarn create vite
```

Install dependencies:

```bash
yarn install
```

Run app:

```bash
yarn dev
```

## Testing configuration

### Install dependencies

```bash
yarn add --dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @testing-library/dom @types/jest jest-environment-jsdom
```

### Jest configuration

Add test script in the `package.json` scripts section:

```json
{
    ...
    "scripts": {
        ...
        "test": "jest --watchAll",
        ...
    },
    ...
},
```

Add jest to the env in `.eslintrc.cjs` to avoid linter errors:

```javascript
module.exports = {
    ...
    env: { browser: true, es2020: true, jest: true },
    ...
}
```

### Testing library (for react)

Configure `jest-environment-jsdom` in the `jest.config.cjs` file:

```javascript
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

Configure babel presets in the `babel.config.cjs` file:

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
```

Execute test script:

```bash
yarn test
```

### Extra: Using fetch with jest (node < 18)

Install packages:

```bash
yarn add -D whatwg-fetch
```

Create file `jest.setup.js`:

```javascript
import 'whatwg-fetch'
```

Create file `jest.config.cjs`:

```javascript
module.exports = {
    setupFiles: ['./jest.setup.js']
}
```

## Other: Create React App (CRA)

*CRA is an old react app manager, it is better use vite.*

Create app:

```bash
npx create-react-app my-app
```

Run app:

```bash
npm start
```

## Course links

> [Instalación y configuracion de Jest + React Testing Library](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)