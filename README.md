# React course

## React configuration

### Vite

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

### Create React App

*CRA is an old react app manager, it is better use vite.*

Create app:

```bash
npx create-react-app my-app
```

Run app:

```bash
npm start
```

## Testing configuration

### Jest configuration

Install jest:

```bash
yarn add --dev jest
yarn add --dev @types/jest
```

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

Add jest to the env in `.eslint.cjs` to avoid linter errors:

```javascript
module.exports = {
    ...
    env: { browser: true, es2020: true, jest: true },
    ...
}
```

Install babel for jest:

```bash
yarn add --dev babel-jest @babel/core @babel/preset-env
```

Create file `babel.config.cjs`:

```javascript
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

Execute test script:

```bash
yarn test
```

### Using fetch with jest (node < 18)

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

### Testing library (for react)

Install react testing library:

```bash
yarn add --dev @testing-library/react @testing-library/dom
```

Install `jest-environment-jsdom`:

```bash
yarn add -D jest-environment-jsdom
```

Configure `jest-environment-jsdom` in the `jest.config.cjs` file:

```javascript
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

Install `@babel/preset-react`:

```bash
yarn add -D @babel/preset-react
```

Configure `@babel/preset-react` in the `babel.config.cjs` file:

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
```
