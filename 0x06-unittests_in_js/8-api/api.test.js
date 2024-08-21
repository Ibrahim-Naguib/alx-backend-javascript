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
