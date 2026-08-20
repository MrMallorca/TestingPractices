const reversedString = require('../jsFunctionsTest/reversedString');

test('The word reversed its: anolecrab', () => {
  expect(reversedString('barcelona')).toBe('anolecrab');
});

