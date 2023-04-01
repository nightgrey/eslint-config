const eslintImport = require('eslint-plugin-import');

// Compatibility layer until flat configuration support
/** @type {import('eslint').Linter.FlatConfig['rules']} */
const importPluginRules = {
  ...eslintImport.configs.recommended.rules,
};

/**
 * `eslint-plugin-import` configuration
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
module.exports.importBase = {
  plugins: {
    import: eslintImport,
  },
  rules: {
    ...importPluginRules,
  },
  settings: {
    // This key is necessary until flat config support for eslint-plugin-import.
    // https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
    },
    'import/resolver': {
      node: {},
    },
  },
};
