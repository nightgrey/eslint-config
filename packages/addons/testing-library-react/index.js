const testingLibrary = require('eslint-plugin-testing-library');
const { JSX_AND_TSX } = require('@nightgrey/eslint-config-utils');
const globals = require('globals');

// Compatibility layer until https://github.com/jest-community/eslint-plugin-jest/pull/1245
const testingLibraryRules = {
  ...testingLibrary.configs.react.rules,
};

module.exports.dependencies = [
  '@testing-library/react',
  'eslint-plugin-testing-library',
];

/** @type {import('eslint').Linter.FlatConfig} */
module.exports.testingLibraryReactAddon = {
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
