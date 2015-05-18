var assert = require("assert");
var aboardly = require('../lib/index.js');

describe('Main tests', function() {

  it('Server should throw an error', function(done) {
    var client = aboardly.client({
      username: 'ac47f602',
      password: '5e1ad19793334cae3fea5078f7304033'
    });

    var body = {
      email: 'foo@bar.ee',
      f_name: 'Albert',
      l_name: 'Moopad'
    };

    client.customers.upsert('myCustomer2', body, function (error) {
      assert(error);
      assert(error instanceof Error);
      console.log(error);
      done();
    });
  });

});
