export const JS = ['js', 'mjs', 'cjs'];

export const JSX = [...JS, 'jsx'];

export const TS = ['ts', 'd.ts', 'mts', 'd.mts', 'cts', 'd.cts'];

export const TSX = [...TS, 'tsx'];

export const JS_AND_TS = [...JS, ...TS];
export const JSX_AND_TSX = [...JSX, ...TSX];
export const ALL = JSX_AND_TSX;
