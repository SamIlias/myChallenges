import merge from './dictionariesMerge';

test('dictionariesMerge test', () => {
  expect(merge({}, {}, {})).toStrictEqual({});
  expect(merge({ a: 1, b: 2 }, { a: 3 })).toStrictEqual({ a: [1, 3], b: [2] });
  expect(
    merge(
      { a: 1, b: 2, c: 3 },
      {},
      { a: 3, b: 2, d: 5 },
      { a: 6 },
      { b: 4, c: 3, d: 2 },
      { e: 9 },
    ),
  ).toStrictEqual({ a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] });
});
