module.exports = {
  env: {
    browser: true,
    es2021: true,
    es2015: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "react/prop-types": 0,
    indent: ["error", 2],
    "linebreak-style": 1,
    // quotes: ["error", "double"],
  },
};
