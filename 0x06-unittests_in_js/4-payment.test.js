const sendPaymentRequestToApi = require('./4-payment');
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and return 10', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;

    stub.restore();
    spy.restore();
  });
});
