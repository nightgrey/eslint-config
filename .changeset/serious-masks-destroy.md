---
'@nightgrey/eslint-config-addon-testing-library-react': patch
'@nightgrey/eslint-config-override-development-files': patch
'@nightgrey/eslint-config-override-index-files': patch
'@nightgrey/eslint-config-base-typescript': patch
'@nightgrey/eslint-config-addon-prettier': patch
'@nightgrey/eslint-config-addon-vitest': patch
'@nightgrey/eslint-config-base-unicorn': patch
'@nightgrey/eslint-config-addon-jsdoc': patch
'@nightgrey/eslint-config-addon-react': patch
'@nightgrey/eslint-config-base-import': patch
'@nightgrey/eslint-config-addon-jest': patch
'@nightgrey/eslint-config-addon-next': patch
'@nightgrey/eslint-config-base': patch
'@nightgrey/eslint-config': patch
'@nightgrey/eslint-config-utils': patch
'@nightgrey/eslint-config-scripts': patch
---

Switched from ESM to CJS. Using ESM-only, even for just the ESLint configuration, is still problematic. See https://github.com/eslint/eslint/issues/16580.
