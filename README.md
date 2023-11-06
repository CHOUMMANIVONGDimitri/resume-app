# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Versionning

## Environment

Use nvm command to set the correct version of node forthe dev environment.

- node version ^18.18.2
- React version ^18.2.0
- Vite version ^4.4.11
- npm version 9.8.1

# Extansions VS Code


# Installation

`npm install` (or `npm i`)

For start development use:

- `npm run dev`

# Commande Lines

| Command | Description |
| ------ | ------ |
| `npm i` or `install`| install all depedancies of the project|
| `npm run dev` | Start development (link: [http://localhost:5173/](http://localhost:5173/))|
| `npm run test`| check unit test of the application |
| `npm lint`| check all files lint for any errors |
| `npm run fix`| fix all eslint issues|


# Test and Coverage

In VS Code you can use Jest extension for easily check your different test or use the command line.
    
```
npm run test
```

With Github Action we use GitHub CI/CD system to check the unit test and display coverage on CodeCov support. Coverage percentage is show on every Merge after the test.


# To do

- [ ] Docker implementation
- [ ] Kubernetes ??
- [ ] Deployment (check different soft)
- [ ] SEO good practice checker ?
- [ ] regression limit on unit test
- [ ] tailwind css lib component ?
- [ ] .env creation