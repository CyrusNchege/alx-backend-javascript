const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', function () {
  // Test the correct status code
  it('Correct status code?', function (done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test the correct result
  it('Correct result?', function (done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Additional test (e.g., test the presence of certain headers)
  it('Other?', function (done) {
    request('http://localhost:7865', (error, response, body) => {
      // Add your assertions here as needed
      done();
    });
  });

  // Test the server
  it('Server', function () {
    expect(app).to.not.be.undefined;
  });
});
