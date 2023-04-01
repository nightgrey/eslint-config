const next = require('@next/eslint-plugin-next');

// Compatibility layer until flat configuration support
const nextRules = {
  ...next.configs.recommended.rules,
};

/** @type {import('eslint').Linter.FlatConfig} */
module.exports.nextAddon = {
  plugins: {
    '@next/next': next,
  },
  rules: {
    ...nextRules,
  },
};
