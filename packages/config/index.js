import { base } from '@nightgrey/eslint-config-base';
import { typescriptBase } from '@nightgrey/eslint-config-base-typescript';
import { importBase } from '@nightgrey/eslint-config-base-import';
import { unicornBase } from '@nightgrey/eslint-config-base-unicorn';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
const nightgreyEslintConfig = [
  base,
  typescriptBase,
  importBase,
  unicornBase,
];

// eslint-disable-next-line import/no-default-export -- Library.
export default nightgreyEslintConfig;
export { base } from '@nightgrey/eslint-config-base';
export { typescriptBase } from '@nightgrey/eslint-config-base-typescript';
export { importBase } from '@nightgrey/eslint-config-base-import';
export { unicornBase } from '@nightgrey/eslint-config-base-unicorn';
