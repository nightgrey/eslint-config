const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const globals = require('globals');
const { reactRules } = require('./rules.js');

// Compatibility layer until flat configuration support
/** @type {import('eslint').Linter.FlatConfig['rules']} */
const reactPluginRules = {
  ...react.configs.recommended.rules,
  ...react.configs['jsx-runtime'].rules,
  ...reactHooks.configs.recommended.rules,
  ...jsxA11y.configs.recommended.rules,
};

module.exports.dependencies = [
  'react',
  'react-dom',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-jsx-a11y',
];

/** @type {import('eslint').Linter.FlatConfig} */
module.exports.reactAddon = {
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
