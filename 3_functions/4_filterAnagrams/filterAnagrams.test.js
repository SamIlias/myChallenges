import filterAnagrams from './filterAnagrams';

test('filterAnagrams test', () => {
  expect(
    filterAnagrams('word', ['ordw', 'ordww', 'wrod', 'dorw', 'rodw']),
  ).toEqual(['ordw', 'wrod', 'dorw', 'rodw']);
  expect(
    filterAnagrams('same_value', [
      'value_samE',
      'SAME_value',
      'same_value',
      'dorw',
      'rodw',
    ]),
  ).toEqual(['value_samE', 'SAME_value', 'same_value']);
  expect(filterAnagrams('word', ['sdfsef'])).toEqual([]);
});
