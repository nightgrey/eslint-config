import jest from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';
import { JSX_AND_TSX } from '@nightgrey/eslint-config-utils';
import globals from 'globals';

// Compatibility layer until https://github.com/jest-community/eslint-plugin-jest/pull/1245
const jestRules = {
  ...jest.configs.recommended.rules,
  ...jest.configs.style.rules,
  ...jestDom.configs.recommended.rules,
};

/** @type {import('eslint').Linter.FlatConfig} */
export const jestAddon = {
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
