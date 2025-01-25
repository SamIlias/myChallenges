import magic from './magic';

test('6_OOPIntroduction: 8_infinityFunction test: ', () => {
  /* eslint-disable eqeqeq */
  expect(magic() == 0).toBe(true);
  expect(magic(1, 2, 3)(4)(5)(-4)(1, 2, 3, 4, 5)(-21) == 5).toBe(true);
  expect(magic(1, 2, 4)(-8) == -1).toBe(true);
});
