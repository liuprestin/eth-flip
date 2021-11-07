module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "eslint:recommended", 
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
      
    },
  ],
};

