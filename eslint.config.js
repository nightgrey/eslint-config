const { base, unicornBase, importBase } = require('@nightgrey/eslint-config');
const { prettierAddon } = require('@nightgrey/eslint-config-addon-prettier');
const { jsdocAddon } = require('@nightgrey/eslint-config-addon-jsdoc');
const globals = require('globals');
const {
  indexFilesOverrides,
} = require('@nightgrey/eslint-config-override-index-files');
const {
  developmentFilesOverrides,
} = require('@nightgrey/eslint-config-override-development-files');

/** @type {Array<import('eslint').Linter.FlatConfig>} */
const config = [
  base,
  unicornBase,
  importBase,
  jsdocAddon,
  {
    languageOptions: {
      sourceType: 'commonjs',
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      'unicorn/prefer-module': 'off',
      'multiline-comment-style': ['warn', 'separate-lines'],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['./packages/**/*'],
          optionalDependencies: false,
          peerDependencies: true,
        },
      ],
      'import/extensions': [
        'error',
        {
          js: 'always',
        },
      ],
    },
  },
  prettierAddon,
  indexFilesOverrides,
  developmentFilesOverrides,
];

module.exports = config;
