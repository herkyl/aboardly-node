/**
 * Returns customers api instance
 */
var Customers = function(client) {
  this.client = client;

  return this;
};

/**
 * Updates customer data. If customer does not exist it is created.
 *
 * 'customers/:customerId' PUT
 *
 * @param "customerId" Customer identifier - an identifier that can 1:1 match to the user in your own systems.
 */
Customers.prototype.upsert = function (customerId, body, callback) {
  if (typeof body == 'function') {
    callback = body;
    body = {};
  }

  this.client.put('customers/' + customerId + '', body, {}, function(err, response) {
    if (err) {
      return callback(err);
    }

    callback(null, response);
  });
};

// Export module
module.exports = Customers
