import { base } from '@grey/eslint-config-base';
import { typescriptBase } from '@grey/eslint-config-base-typescript';
import { importBase } from '@grey/eslint-config-base-import';
import { unicornBase } from '@grey/eslint-config-base-unicorn';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
const greyEslintConfig = [
  base,
  typescriptBase,
  importBase,
  unicornBase,
];

// eslint-disable-next-line import/no-default-export -- Library.
export default greyEslintConfig;
export { base } from '@grey/eslint-config-base';
export { typescriptBase } from '@grey/eslint-config-base-typescript';
export { importBase } from '@grey/eslint-config-base-import';
export { unicornBase } from '@grey/eslint-config-base-unicorn';
