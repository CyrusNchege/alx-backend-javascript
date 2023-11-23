const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should stub Utils.calculateNumber and log the correct message', function () {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;

    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
