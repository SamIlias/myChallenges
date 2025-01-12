import nrzi from './NRZI';

test('testing function nrzi', () => {
  const signal1 = '_|¯|____|¯|__|¯¯¯';
  expect(nrzi(signal1)).toBe('011000110100');

  const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
  expect(nrzi(signal2)).toBe('110010000100111');

  const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
  expect(nrzi(signal3)).toBe('010010000100111');

  const signal4 = '';
  expect(nrzi(signal4)).toBe('');

  const signal5 = '|';
  expect(nrzi(signal5)).toBe('');
});
