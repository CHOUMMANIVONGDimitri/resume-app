module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  plugins: ["jest", "@typescript-eslint"],
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
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  ignorePatterns: ["dist/"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
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
    ],
    "object-curly-newline": [
      "error",
      {
        ImportDeclaration: { multiline: true, minProperties: 3 },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        }
      }
    ]
  }
};
