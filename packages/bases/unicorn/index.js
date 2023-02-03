import unicorn from 'eslint-plugin-unicorn';

// Compatibility layer until flat configuration support
const unicornPluginRules = {
  ...unicorn.configs.recommended.rules,
};

/**
 * Unicorn configuration
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export const unicornBase = {
  plugins: {
    unicorn,
  },
  rules: {
    ...unicornPluginRules,
    /**
     * Enforce error subclassing
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/custom-error-definition.md
     */
    'unicorn/custom-error-definition': 'error',

    /**
     * Prevent abbreviations, but allow `props`.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
     */
    'unicorn/prevent-abbreviations': [
      'error',
      {
        extendDefaultAllowList: true,
        allowList: {
          props: true,
        },
      },
    ],

    /**
     * Force file names to camelCase.
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
     */
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
        },
      },
    ],
  },
};
