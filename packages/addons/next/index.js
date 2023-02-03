import next from '@next/eslint-plugin-next';

// Compatibility layer until flat configuration support
const nextRules = {
  ...next.configs.recommended.rules,
};

/** @type {import('eslint').Linter.FlatConfig} */
export const nextAddon = {
  plugins: {
    '@next/next': next,
  },
  rules: {
    ...nextRules,
  },
};
