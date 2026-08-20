const capitalize = require('../jsFunctionsTest/capitalize');

test('The first letter capitalized is: B', () => {
  expect(capitalize('barcelona')).toBe('B');
});
