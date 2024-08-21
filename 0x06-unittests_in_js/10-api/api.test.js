const request = require("request");
const { expect } = require("chai");

describe("Index page", function() {
  const options = {
    url: "http://localhost:7865/",
    method: "GET"
  };

  it("check correct status code", function(done) {
    request(options, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
  });

  it("check correct message", function(done) {
    request(options, function(err, res, body) {
        expect(body).to.equal('Welcome to the payment system');
        done();
    });
  });

  it('should return Content-Type as text/html', (done) => {
    request(options, (error, response, body) => {
        expect(response.headers['content-type']).to.contain('text/html');
        done();
    });
  });
});

describe("Cart page", function() {
  it("check correct status code", function(done) {
    request('http://localhost:7865/cart/1', function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
  });

  it("check correct message", function(done) {
    request('http://localhost:7865/cart/1', function(err, res, body) {
        expect(body).to.equal('Payment methods for cart 1');
        done();
    });
  });

  it('should return Content-Type as text/html', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(res.statusCode).to.equal(404);
        done();
    });
  });
});

describe("available_payments page", function() {
  it("check correct status code", function(done) {
    request('http://localhost:7865/available_payments', function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
  });

  it("check correct content", function(done) {
    request('http://localhost:7865/available_payments', function(err, res, body) {
        expect(body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
    });
  });
});

describe("login page", function() {
  const url = 'http://localhost:7865/login';
  it("check correct status code", function(done) {
    request.post({
      url,
      json: { userName: 'John' },
    }, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
  });

  it("check correct content", function(done) {
    request.post({
      url,
      json: { userName: 'John' },
    }, function(err, res, body) {
        expect(body).to.equal('Welcome John');
        done();
    });
  });
});
