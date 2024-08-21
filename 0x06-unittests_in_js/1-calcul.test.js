const assert = require("assert");
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type -> SUM', () => {
    it('Check if numbers are rounded', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe('type -> SUBTRACT', () => {
    it('Check if numbers are rounded', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('type -> DIVIDE', () => {
    it('Check if numbers are rounded', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('Check if numbers are rounded', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
