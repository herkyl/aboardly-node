var Client = require('./aboardly/client');

// Export module
var aboardly = module.exports;

/**
 * This file contains the global namespace for the module
 */
aboardly.client = function(auth, options) {
  return new Client(auth, options);
};
