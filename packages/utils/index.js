const log = require('./log.js');
const resolvePathArray = require('./resolvePathArray.js');
const extensions = require('./extensions.js');

module.exports = {
  ...log,
  ...resolvePathArray,
  ...extensions,
};
