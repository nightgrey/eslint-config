/**
 * Resolve an array of paths and merge the result into a single object
 *
 * Is, for example, used in eslint-config-airbnb-base and
 * eslint-config-airbnb-typescript.
 *
 * @param array {string[]} Array of paths to resolve
 * @returns {import('eslint').Linter.FlatConfig['rules']} Resolved rules
 */
module.exports.resolvePathArray = (array) => {
  const resolved = array.map(
    async (path) => require(path).default || require(path)
  );

  return Object.assign({}, ...resolved.map((config) => config.rules));
};
