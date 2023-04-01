import { JSX_AND_TSX, resolvePathArray } from '@nightgrey/eslint-config-utils';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import airbnbTypescript from 'eslint-config-airbnb-typescript';

const airbnbTypescriptRules = await resolvePathArray(airbnbTypescript.extends);

const typescriptEslintPluginRules = {
  // eslint-disable-next-line import/no-named-as-default-member -- CJS
  ...typescriptEslintPlugin.configs.base.rules,
  // eslint-disable-next-line import/no-named-as-default-member -- CJS
  ...typescriptEslintPlugin.configs['recommended-requiring-type-checking']
    .rules,
};

/**
 * TypeScript configuration
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export const typescriptBase = {
  languageOptions: {
    parser: typescriptEslintParser,
    // Compatibility layer until flat configuration support
    parserOptions: {
      // eslint-disable-next-line import/no-named-as-default-member -- CJS
      ...typescriptEslintPlugin.configs.base.parserOptions,
    },
  },
  rules: {
    ...typescriptEslintPluginRules,
    ...airbnbTypescriptRules,

    // Disable `no-underscore-dangle`. Use `@typescript-eslint/naming-convention` instead.
    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': ['off'],

    // Disables unsafe member access and assignment because it seems to catch
    // more false positives than positives. Not sure why yet.
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],

    // // Define naming conventions for variables, functions, etc.
    // // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   {
    //     selector: 'objectLiteralProperty',
    //     format: undefined,
    //   },
    //   {
    //     selector: 'default',
    //     format: ['camelCase', 'PascalCase'],
    //     leadingUnderscore: 'allowSingleOrDouble',
    //     trailingUnderscore: 'allow',
    //   },
    //   {
    //     selector: 'variable',
    //     format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
    //     leadingUnderscore: 'allowSingleOrDouble',
    //     trailingUnderscore: 'allow',
    //   },
    //   {
    //     selector: 'typeLike',
    //     format: ['PascalCase'],
    //   },
    // ],
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': JSX_AND_TSX.map(
        (extension) => `.${extension}`
      ),
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
