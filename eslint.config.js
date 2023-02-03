import { base, unicornBase, importBase } from '@grey/eslint-config-grey';
import { prettierAddon } from '@grey/eslint-config-addon-prettier';
import { jsdocAddon } from '@grey/eslint-config-addon-jsdoc';
import globals from 'globals';
import { indexFilesOverrides } from '@grey/eslint-config-override-index-files';
import { developmentFilesOverrides } from '@grey/eslint-config-override-development-files';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
const config = [
  base,
  unicornBase,
  importBase,
  jsdocAddon,
  {
    languageOptions: {
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
  developmentFilesOverrides
];

export default config;
