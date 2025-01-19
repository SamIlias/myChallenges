import combine from './combine';

test('5_trees: combine test', () => {
  const branch1 = ['A', [['B', [['C'], ['D']]]]];
  const branch2 = ['B', [['D', [['E'], ['F']]]]];
  const branch3 = ['I', [['A', [['B', [['C'], ['H']]]]]]];

  expect(combine(branch1, branch2, branch3)).toEqual([
    'A',
    [['B', [['C'], ['D', [['E'], ['F']]], ['H']]], ['I']],
  ]);
});

test('5_trees: combine test with uncrossed branches', () => {
  const branch4 = ['A', [['B', [['C'], ['D']]]]];
  const branch5 = ['N', [['Z', [['E'], ['F']]]]];
  const branch6 = ['I', [['A', [['B', [['C'], ['H']]]]]]];

  expect(combine(branch4, branch5, branch6)).toEqual([
    'A',
    [['B', [['C'], ['D'], ['H']]], ['I']],
  ]);
});
