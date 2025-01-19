// Реализуйте и экспортируйте по умолчанию функцию, которая строит дерево относительно
// заданного корневого узла.

// Функция принимает 2 аргумента:

//     исходное дерево
//     узел, от которого будет построено новое дерево.
//
// Функция должна возвращать новое дерево с сохранёнными связями между узлами, в котором переданный узел является корневым.
// Примеры
//
// const tree = ['A', [ //     A
//   ['B', [            //    / \
//     ['D'],           //   B   C
//   ]],                //  /   / \
//   ['C', [            // D   E   F
//     ['E'],
//     ['F'],
//   ]],
// ]];
//
// transform(tree, 'B');

// ['B', [           //   B
//   ['D'],          //  / \
//   ['A', [         // D   A
//     ['C', [       //      \
//       ['E'],      //       C
//       ['F'],      //      / \
//     ]],           //     E   F
//   ]],
// ]];

import * as flat from '../flatTrees.js';

export default (tree, newRootName) => {
  const newFlatTree = flat.makeFlat(tree);
  const transformedFlat = flat.rebuildFlat(newFlatTree, newRootName, null);

  return flat.buildTree(transformedFlat, newRootName);
};
