const jest = require('eslint-plugin-jest');
const jestDom = require('eslint-plugin-jest-dom');
const { JSX_AND_TSX } = require('@nightgrey/eslint-config-utils');
const globals = require('globals');

// Compatibility layer until https://github.com/jest-community/eslint-plugin-jest/pull/1245
const jestRules = {
  ...jest.configs.recommended.rules,
  ...jest.configs.style.rules,
  ...jestDom.configs.recommended.rules,
};

/** @type {import('eslint').Linter.FlatConfig} */
module.exports.jestAddon = {
  files: JSX_AND_TSX.map((extension) => `**/*.test.${extension}`),
  plugins: {
    jest,
    'jest-dom': jestDom,
  },
  settings: {
    jest: {
      version: 29,
    },
  },
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  rules: {
    ...jestRules,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['jest'],
      },
    ],
  },
};
