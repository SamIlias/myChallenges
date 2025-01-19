import _ from 'lodash';
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

console.log(_.cloneDeep(tree1));
console.log(tree1);
