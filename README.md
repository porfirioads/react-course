# React course

## NVM

Install nvm:

```bash
brew install nvm
```

Add nvm to your shell profile:

```bash
source $(brew --prefix nvm)/nvm.sh
```

Install specific version of node:

```bash
nvm install 20
```

Use the installed version:

```bash
nvm use 20
```

List available node versions:

```bash
nvm ls-remote
```

## Yarn

Install yarn

```bash
npm install --global yarn
```

## Create React App

Create app:

```bash
npx create-react-app my-app
```

Run app:

```bash
npm start
```

## Vite

### Basic commands

Install dependencies:

```bash
yarn install
```

Create app:

```bash
yarn create vite
```

Run app:

```bash
yarn dev
```

### Testing configuration

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

Execute test script:

```bash
yarn test
```