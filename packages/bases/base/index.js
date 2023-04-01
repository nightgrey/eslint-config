const { resolvePathArray } = require('@nightgrey/eslint-config-utils');
const airbnbBase = require('eslint-config-airbnb-base');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const js = require('@eslint/js');

// Compatibility layer until flat configuration support
const airbnbBaseRules = resolvePathArray(airbnbBase.extends);

/**
 * Base configuration
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
module.exports.base = {
  rules: {
    ...js.configs.recommended.rules,
    ...airbnbBaseRules,

    // Quote style
    // https://eslint.org/docs/rules/quotes
    quotes: ['error', 'single', { avoidEscape: true }],

    // Enforce comma dangle
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],

    // Maximum line length
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // Require padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'multiline-block-like',
        next: '*',
      },
    ],

    // Enforce multiline comment style
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['warn', 'separate-lines'],

    // Enforce spaced comments
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always'],

    // Allow/disallow dangling underscores in identifiers.
    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: false,
        allowAfterSuper: true,
        allowAfterThisConstructor: false,
        enforceInMethodNames: true,
        enforceInClassFields: true,
        allowInArrayDestructuring: true,
        allowInObjectDestructuring: true,
        allowFunctionParams: true,
      },
    ],

    // Do not prefer default exports.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // Disallow default exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    'import/no-default-export': 'error',
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
  },
};
