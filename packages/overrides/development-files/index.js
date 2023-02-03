/**
 * Configuration for dev and config files - by default in the root directory of
 * a project
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export const developmentFilesOverrides = {
  files: ['*'],
  rules: {
  // Allow console usage
  // https://eslint.org/docs/rules/no-console
  'no-console': 'off',
  // Allow process.exit()
  // https://eslint.org/docs/rules/no-process-exit
  'no-process-exit': 'off',
  // Allow process.env
  // https://eslint.org/docs/rules/no-process-env
  'no-process-env': 'off',
  // Allow the import of devDependencies
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
  'import/no-extraneous-dependencies': 'off',

  // Allow default exports, often needed for configurations and similar.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
  'import/no-default-export': 'off',
  },
};
