const sendPaymentRequestToApi = require('./5-payment');
const sinon = require("sinon");
const Utils = require("./utils");

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should log "The total is: 120" and be called once when called with 100 and 20', () => {

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'The total is: 120');
  });

  it('should log "The total is: 20" and be called once when called with 10 and 10', () => {

    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'The total is: 20');
  });
});
