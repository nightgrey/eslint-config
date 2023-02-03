import jsdoc from 'eslint-plugin-jsdoc';

// Compatibility layer until flat configuration support
const jsdocRules = {
  ...jsdoc.configs.recommended.rules,
};

/** @type {import('eslint').Linter.FlatConfig} */
export const jsdocAddon = {
  plugins: {
    jsdoc,
  },
  settings: {
    jsdoc: {
      // https://github.com/gajus/eslint-plugin-jsdoc#mode
      mode: 'typescript',
    },
  },
  rules: {
    ...jsdocRules,
    // We use TypeScript!
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/require-param-type.md
    'jsdoc/require-param-type': 'off',
  },
};
