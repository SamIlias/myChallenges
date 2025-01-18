import transform from './transformer';

test('5_trees: transformer test', () => {
  const tree1 = [
    'a',
    [
      [
        'b',
        [
          ['e', []],
          ['f', []],
        ],
      ],
      ['c', [['g', []]]],
      ['d', []],
    ],
  ];

  const result1 = ['g', [['c', [['a', [['b', [['e'], ['f']]], ['d']]]]]]];
  expect(transform(tree1, 'g')).toEqual(result1);

  const tree2 = [
    'A',
    [
      ['B', [['D']]],
      ['C', [['E'], ['F']]],
    ],
  ];

  const result2 = ['B', [['D'], ['A', [['C', [['E'], ['F']]]]]]];
  expect(transform(tree2, 'B')).toEqual(result2);

  // The root node does not change
  expect(transform(tree2, 'A')).toEqual(tree2);

  const noneExistNode = 'S';
  expect(() => transform(tree2, noneExistNode)).toThrow(
    'The passed node does not exist',
  );
});
