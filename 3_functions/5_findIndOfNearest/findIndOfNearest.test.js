import findIndexOfNearest from './findIndexOfNearest';

test('findIndexOfNearest test', () => {
  expect(findIndexOfNearest([], 2)).toEqual(null);
  expect(findIndexOfNearest([15, 10, 3, 4], 0)).toEqual(2);
  expect(findIndexOfNearest([7, 5, 3, 2], 4)).toEqual(1);
  expect(findIndexOfNearest([7, 5, 4, 4, 3], 4)).toEqual(2);
});
