/**
 * Main client for the module
 */
var Client = function(auth, options) {
  this.httpClient = new (require('./http_client').HttpClient)(auth, options);

  this.customers = new (require('./api/customers'))(this.httpClient);
  this.events = new (require('./api/events'))(this.httpClient);

  return this;
};

// Export module
module.exports = Client;
