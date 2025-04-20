import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginImport from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: [
      'dist/**',
      'build/**',
      'packages/*/dist/**',
      'packages/*/build/**',
      'packages/*/.storybook/**',
      'packages/**/*.stories.*',
      'packages/**/*.test.*',
      'node_modules/**',
      'coverage/**',
      '.next/**',
      '.vite/**',
      '.turbo/**',
      'storybook-static/**',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: eslintPluginImport,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
    },
    settings: {
      react: {
        version: 'detect',
        jsxRuntime: 'automatic',
      },
      'import/resolver': {
        typescript: {}, // uses jsconfig.json automatically
      },
    },
  },
];
