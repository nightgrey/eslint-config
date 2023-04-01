# @nightgrey/eslint-config [ALPHA]

**This configuration is still in alpha and currently being tested.**

This package provides grey's ESLint configuration. It provides opinionated defaults for TypeScript projects with a few different (optional) flavours.

If you want to use this configuration or even just parts of it as a base for your own configuration, the configuration is modular, and you can install just parts of it to construct your own configuration, too.

> Attention: This configuration is written in ESLint's [flat configuration style](https://eslint.org/docs/latest/use/configure/configuration-files-new). You can read more about it in the [ESLint documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Features

- TypeScript configuration
  - Based on [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) and [`eslint-config-airbnb-typescript`](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
  - Uses `eslint-plugin-import` and `eslint-plugin-unicorn`
- Opinionated configuration
- Modular configuration split in `bases`, `addons` and `overrides`.
  - Bases provide the core configuration.
  - Addons provide appropriate plugins and common-sense rules.
    For example, `eslint-config-addon-jest` provides the Jest plugin, automatically applies globals for Node.js, and makes sure dev dependency in `*.test.[ext]` files are allowed!
  - Overrides provide rules for specific files.
    For example, `eslint-config-override-development-files` allows imports of dev dependencies in the project root.

### Packages

#### Configuration

- [`eslint-config`](/packages/config)

#### Addons

- [`eslint-config-addon-prettier` (Prettier)](/packages/addons/prettier)
- [`eslint-config-addon-react` (React.js)](/packages/addons/react)
- [`eslint-config-addon-next` (Next.js)](/packages/addons/next)
- [`eslint-config-addon-jest` (Jest)](/packages/addons/jest)
- [`eslint-config-addon-testing-library-react` (@testing-library/react)](/packages/addons/testing-library-react)
- [`eslint-config-addon-vitest` (Vitest)](/packages/addons/vitest)

#### Bases

- [`eslint-config-base-base`](/packages/bases/base)
- [`eslint-config-base-typescript`](/packages/bases/typescript)
- [`eslint-config-base-unicorn` (eslint-plugin-unicorn)](/packages/bases/unicorn)
- [`eslint-config-base-import` (eslint-plugin-import)](/packages/bases/import)

#### Overrides

- [`eslint-config-override-development-files` (Files in the project root)](/packages/overrides/development-files)
- [`eslint-config-override-index-files` (`index.ext` files)](/packages/overrides/index-files)

## Table of Contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

### Getting started

```sh
npm install --save-dev @nightgrey/eslint-config
```

**eslint.config.js**

```js
const nightgreyEslintConfig = require('@nightgrey/eslint-config');
const globals = require('globals');

/** @type {import('eslint').Linter.FlatConfig} */
const configuration = {
  // Your own configuration goes here, after the base configuration.

  // Important: You have to set your own language options depending on your project.
  // This code here assumes a CommonJS  project with ES2021 globals and TypeScript.
  // For more information, see https://eslint.org/docs/user-guide/configuring/language-options
  languageOptions: {
    sourceType: 'commonjs',
    parserOptions: {
      ecmaVersion: 'latest',
      project: './tsconfig.json',
    },
    globals: {
      ...globals.node,
      ...globals.es2021,
    },
  },
};

// Then, make sure to export the configuration array and to spread `nightgreyEslintConfig` first!

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = [...nightgreyEslintConfig, configuration];
```

### Usage

To use addons or overrides, you have to install them as dependencies and add them to your configuration.

This is a configuration with all addons and overrides installed.

**eslint.config.js**

```js
const eslintConfigGreys = require('@nightgrey/eslint-config');
const { prettierAddon } = require('@nightgrey/eslint-config-addon-prettier');
const { reactAddon } = require('@nightgrey/eslint-config-addon-react');
const { nextAddon } = require('@nightgrey/eslint-config-addon-next');
const { jestAddon } = require('@nightgrey/eslint-config-addon-jest');
const { vitestAddon } = require('@nightgrey/eslint-config-addon-vitest');
const {
  developmentFilesOverrides,
} = require('@nightgrey/eslint-config-override-development-files');
const {
  indexFilesOverrides,
} = require('@nightgrey/eslint-config-override-index-files');
const {
  testingLibraryReactAddon,
} = require('@nightgrey/eslint-config-addon-testing-library-react');
const globals = require('globals');

/** @type {import('eslint').Linter.FlatConfig} */
const configuration = {
  // Your own configuration goes here.
  // See `Getting started` above for an example.
};

// Order:
// 1. Bases (or eslintConfigGrey)
// 2. Addons
// 3. Your configuration
// 4. Overrides
// Always last: Prettier addon

/** @type {Array<import('eslint').Linter.FlatConfig>} */
module.exports = [
  // Bases
  ...eslintConfigGrey,
  // Addons
  reactAddon,
  nextAddon,
  jestAddon,
  testingLibraryReactAddon,
  // Your configuration
  configuration,
  // Overrides have to be added after addons and your own configuration.
  developmentFilesOverrides,
  indexFilesOverrides,
  // Important: It is recommended to add the prettier addon last.
  prettierAddon,
];
```
