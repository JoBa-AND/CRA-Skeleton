module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "prettier",
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:unicorn/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.json",
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "prettier",
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/no-use-before-define": "off",
    "no-use-before-define": "off"
  },
  "overrides": [
    {
      "files": ["src/**/*.tsx"],
      "rules": {
        // allow PascalCasing for JSX files
        "unicorn/filename-case": ["off"]
      }
    }
  ]
}
