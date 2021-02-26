module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'noftalint/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/no-unescaped-entities': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'no-restricted-syntax': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
    'node/no-missing-import': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['next.config.js', 'next-env.d.ts'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
