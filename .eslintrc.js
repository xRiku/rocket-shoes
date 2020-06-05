module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', {extensions: ['.jsx', '.js']}],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': ["error", {allow: ["tron"]}]
  },
};
