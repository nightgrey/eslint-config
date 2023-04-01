const vitest = require('eslint-plugin-vitest');
const globals = require('eslint-plugin-vitest-globals');
const { JSX_AND_TSX } = require('@nightgrey/eslint-config-utils');

// Compatibility layer until https://github.com/jest-community/eslint-plugin-jest/pull/1245
const vitestRules = {
  rules: vitest.configs.recommended.rules,
};

module.exports.dependencies = ['vitest'];

/** @type {import('eslint').Linter.FlatConfig} */
module.exports.vitestAddon = {
  files: JSX_AND_TSX.map((extension) => `**/*.test.${extension}`),
  languageOptions: {
    globals: {
      ...globals.environments.env.globals,
    },
  },
  plugins: {
    vitest,
  },
  rules: {
    ...vitestRules,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['vitest'],
      },
    ],
  },
};
