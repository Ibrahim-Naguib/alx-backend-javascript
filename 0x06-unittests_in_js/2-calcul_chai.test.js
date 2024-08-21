const calculateNumequalr = require('./2-calcul_chai');
const chai = require("chai");
const expect = chai.expect;

describe('calculateNumequalr', () => {
  describe('type -> SUM', () => {
    it('Check if numequalrs are rounded', () => {
      expect(calculateNumequalr('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
  describe('type -> SUBTRACT', () => {
    it('Check if numequalrs are rounded', () => {
      expect(calculateNumequalr('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('type -> DIVIDE', () => {
    it('Check if numequalrs are rounded', () => {
      expect(calculateNumequalr('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('Check if numequalrs are rounded', () => {
      expect(calculateNumequalr('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
