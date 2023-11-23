const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct object when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assertions
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal the end of the asynchronous test
      })
      .catch((error) => {
        done(error); // If there's an error, pass it to done to fail the test
      });
  });

  it('should resolve with undefined when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        // Assertions
        expect(result).to.be.undefined;
        done(); // Call done to signal the end of the asynchronous test
      })
      .catch((error) => {
        done(error); // If there's an error, pass it to done to fail the test
      });
  });
});
