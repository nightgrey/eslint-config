/**
 * Resolve an array of paths and merge the result into a single object
 *
 * Is, for example, used in eslint-config-airbnb-base and
 * eslint-config-airbnb-typescript.
 *
 * @param array {string[]} Array of paths to resolve
 * @returns {Promise<import('eslint').Linter.FlatConfig['rules']>} Resolved rules
 */
export const resolvePathArray = async (array) => {
  const resolved = await Promise.all(
    array.map(async (path) => {
      const module = await import(path);
      return module.default;
    })
  );

  return Object.assign({}, ...resolved.map((config) => config.rules));
};
