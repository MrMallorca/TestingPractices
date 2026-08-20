const calculator = require('../jsFunctionsTest/calculator');

test('4 + 4 = 8', () => {
  expect(calculator.add(4,4)).toBe(8);
});

test('8 - 4 = 4', () => {
  expect(calculator.subtract(8,4)).toBe(4);
});

test('3 * 2 = 6', () => {
  expect(calculator.multiply(3,2)).toBe(6);
});

test('6 / 3 = 2', () => {
  expect(calculator.divide(6,3)).toBe(2);
});