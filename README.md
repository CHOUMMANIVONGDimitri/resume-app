[![codecov](https://codecov.io/gh/CHOUMMANIVONGDimitri/resume-app/graph/badge.svg?token=ALHMX24B8T)](https://codecov.io/gh/CHOUMMANIVONGDimitri/resume-app)

# Link App

[click here](https://choummanivongdimitri.github.io/resume-app/) to get on the website.

# React + Vite

This application was made with the template (on other repository) wich provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Typescript

The project run with `Typescript`, declarations and props use TS convention for the typing.

# Versionning

/_ TO DO _/

## Environment

Use nvm command to set the correct version of node for the dev environment.

- node version ^18.18.2
- React version ^18.2.0
- Vite version ^4.4.11
- npm version 9.8.1

# Extensions VS Code

- Jest (Optional but recommanded)

# Installation

`npm install` (or `npm i`)

For start development use:

- `npm run dev`

# Commande Lines

| Command              | Description                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| `npm i` or `install` | install all depedancies of the project                                     |
| `npm run dev`        | Start development (link: [http://localhost:3000/](http://localhost:3000/)) |
| `npm run test`       | check unit test of the application                                         |
| `npm lint`           | check all files lint for any errors                                        |
| `npm run fix`        | fix all eslint issues                                                      |
| `npm run build`      | build the app and check TS errors                                          |

# Test and Coverage

In VS Code you can use Jest extension for easily check your different test or use the command line.

```
npm run test
```

With Github Action we use GitHub CI/CD system to check the unit test and display coverage on CodeCov support. Coverage percentage is show on every Merge after the test.

# To do

- [ ] Doc CodeCov settings
- [ ] SEO good practice checker ?
- [ ] regression limit on unit test
- [x] tailwind css lib component ?
- [ ] .env creation
- [x] badges status on readme
- [x] link app to implemente
- [ ] versionning update & realease

# Check up Setup

- [x] install dependencies
- [x] implement Typescript environment
- [ ] environment setting
- [x] CodeCov token settings (with Github)
- [x] vite config
- [x] check test settings
- [x] check workflows (`push & pr` on main and dev)
- [x] run project
