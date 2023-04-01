const JS = ['js', 'mjs', 'cjs'];
const JSX = [...JS, 'jsx'];
const TS = [...JS, 'ts', 'd.ts', 'mts', 'd.mts', 'cts', 'd.cts'];
const TSX = [...TS, 'tsx'];
const JS_AND_TS = [...JS, ...TS];
const JSX_AND_TSX = [...JSX, ...TSX];
const ALL = JSX_AND_TSX;

module.exports = {
  JS,
  JSX,
  TS,
  TSX,
  JS_AND_TS,
  JSX_AND_TSX,
  ALL,
};
