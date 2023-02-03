import vitest from 'eslint-plugin-vitest';
import globals from 'eslint-plugin-vitest-globals';
import { JSX_AND_TSX } from '@grey/eslint-config-utils';

// Compatibility layer until https://github.com/jest-community/eslint-plugin-jest/pull/1245
const vitestRules = {
  rules: vitest.configs.recommended.rules,
};

export const dependencies = ['vitest'];

/** @type {import('eslint').Linter.FlatConfig} */
export const vitestAddon = {
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
