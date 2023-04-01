/** @type {import('eslint').Linter.FlatConfig['rules']} */
module.exports.reactRules = {
  // Enforce state initialization style in a class component
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  'react/state-in-constructor': ['error', 'never'],

  // Allow spreading of props, we use TypeScript :)
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  'react/jsx-props-no-spreading': 'off',

  // Enforce `<>` instead of `<React.Fragment>`
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  'react/jsx-fragments': ['error', 'syntax'],

  // Warn on react hook dependencies
  // https://reactjs.org/docs/hooks-rules.html
  'react-hooks/exhaustive-deps': 'warn',

  // Enforce arrow functions for React components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
};
