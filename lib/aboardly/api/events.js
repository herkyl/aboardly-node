/**
 * Returns events api instance
 */
var Events = function(client) {
  this.client = client;

  return this;
};

/**
 * Creates a new event for a customer
 *
 * 'customers/:customerId/events/:eventName' POST
 *
 * @param "customerId" Customer identifier - an identifier that can 1:1 match to the user in your own systems.
 * @param "eventName" Event name (e.g. logged_in, signed_up, added_funds)
 */
Events.prototype.create = function (customerId, eventName, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }
  if (typeof options == 'undefined') {
    options = {};
  }
  var body = options || {};
  
  this.client.post('customers/' + customerId + '/events/' + eventName + '', body, options, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Events
