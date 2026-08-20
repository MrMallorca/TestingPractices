const caesarCipher = require('../jsFunctionsTest/caesarCipher');

test('Hola, Mundo! = Krod, Pxqgr!', () => {
  expect(caesarCipher('Hola, Mundo!', 3)).toBe('Krod, Pxqgr!');
});
