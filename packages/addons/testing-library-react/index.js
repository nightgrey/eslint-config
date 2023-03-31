import testingLibrary from 'eslint-plugin-testing-library';
import { JSX_AND_TSX } from '@nightgrey/eslint-config-utils';
import globals from 'globals';

// Compatibility layer until https://github.com/jest-community/eslint-plugin-jest/pull/1245
const testingLibraryRules = {
  rules: testingLibrary.configs.react.rules,
};

export const dependencies = [
  '@testing-library/react',
  'eslint-plugin-testing-library',
];

/** @type {import('eslint').Linter.FlatConfig} */
export const testingLibraryReactAddon = {
  files: JSX_AND_TSX.map((extension) => `**/*.test.${extension}`),
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    'testing-library': testingLibrary,
  },
  rules: {
    ...testingLibraryRules,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '@testing-library/react',
          '@testing-library/jest-dom',
          '@testing-library/user-event',
          '@testing-library/dom',
        ],
      },
    ],
  },
};
