import * as ft from './flatTrees.js';

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

console.log(ft.makeFlat(tree1));
