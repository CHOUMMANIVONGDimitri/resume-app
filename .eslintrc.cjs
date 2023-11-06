module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: "airbnb",
  plugins: ["jest"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" }
    ],
    quotes: ["error", "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ]
  }
};
