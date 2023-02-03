import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import { reactRules } from './rules.js';

// Compatibility layer until flat configuration support
/** @type {import('eslint').Linter.FlatConfig['rules']} */
const reactPluginRules = {
  ...react.configs.recommended.rules,
  ...react.configs['jsx-runtime'].rules,
  ...reactHooks.configs.recommended.rules,
  ...jsxA11y.configs.recommended.rules,
};

export const dependencies = [
  'react',
  'react-dom',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-jsx-a11y',
];

/** @type {import('eslint').Linter.FlatConfig} */
export const reactAddon = {
  languageOptions: {
    parserOptions: {
      ...react.configs.recommended.parserOptions,
      ...react.configs['jsx-runtime'].parserOptions,
    },
    globals: {
      ...globals.browser,
    },
  },
  plugins: {
    react,
    'react-hooks': reactHooks,
    'jsx-a11y': jsxA11y,
  },
  rules: {
    ...reactPluginRules,
    ...reactRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
