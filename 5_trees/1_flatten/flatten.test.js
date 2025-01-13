import flatten from './flatten';

test('flatten test', () => {
  expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  expect(flatten([])).toEqual([]);
});
