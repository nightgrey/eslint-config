import { ALL } from '@grey/eslint-config-utils';

/**
 * Overrides for index.* files, usually configuration files in the root directory.
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export const indexFilesOverrides = {
  files: ALL.map((extension) => `**/index.${extension}`),
  rules: {
    // Only warn about default exports. It's often necessary for packages or
    // similar.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    'import/no-default-export': 'warn',
  }
};