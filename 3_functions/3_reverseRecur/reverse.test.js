import reverse from './reverse.js';

test('reverse test', () => {
  expect(reverse('')).toEqual('');
  expect(reverse('retupmoc')).toEqual('computer');
  expect(reverse('54321')).toEqual('12345');
  expect(reverse('0101010101')).toEqual('1010101010');

  expect(() => reverse()).toThrow('the string must be passed');
});
