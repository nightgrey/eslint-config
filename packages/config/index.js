const { base } = require('@nightgrey/eslint-config-base');
const { typescriptBase } = require('@nightgrey/eslint-config-base-typescript');
const { importBase } = require('@nightgrey/eslint-config-base-import');
const { unicornBase } = require('@nightgrey/eslint-config-base-unicorn');

/** @type {Array<import('eslint').Linter.FlatConfig>} */
const nightgreyEslintConfig = [base, typescriptBase, importBase, unicornBase];

// eslint-disable-next-line import/no-default-export -- Library.
module.exports = nightgreyEslintConfig;
module.exports.base = base;
module.exports.typescriptBase = typescriptBase;
module.exports.importBase = importBase;
module.exports.unicornBase = unicornBase;
