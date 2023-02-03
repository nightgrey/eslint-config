/**
 * Log a message to the console
 *
 * Only used for logging if `NODE_ENV` is set to `development` or `ESLINT_CONFIG_GREY_VERBOSE` is set to `true`.
 *
 * @param message The message to log
 * @param {'info'|'warn'|'error'|'log'} level The level to log at.
 */
export const log = (message, level = 'log') => {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.ESLINT_CONFIG_GREY_VERBOSE === 'true'
  ) {
    // eslint-disable-next-line no-console -- Logging.
    console[level](message);
  }
};
