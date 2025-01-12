import sameParityFilter from './sameParityFilter';

test('sameParityFilter test', () => {
  expect(sameParityFilter([-1, 0, 1, -3, 10, -2])).toStrictEqual([-1, 1, -3]);
  expect(sameParityFilter([2, 0, 1, -3, 10, -2])).toStrictEqual([2, 0, 10, -2]);
  expect(sameParityFilter([])).toStrictEqual([]);
});
