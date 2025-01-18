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

/* eslint-disable no-param-reassign */
export default (tree, newRootName) => {
  const newFlatTree = flat.makeFlat(tree);

  function transformFlat(flatTree, curNode, newParent) {
    if (!flatTree[curNode]) {
      throw new Error('The passed node does not exist');
    }
    const [prevParent, prevChildren] = flatTree[curNode];

    const newChildren = prevChildren.filter(child => child !== newParent);
    if (prevParent) {
      newChildren.push(prevParent);
    }

    flatTree[curNode] = [newParent, newChildren];

    if (prevParent) {
      transformFlat(flatTree, prevParent, curNode);
    }

    return flatTree;
  }

  const transformedFlat = transformFlat(newFlatTree, newRootName, null);
  return flat.buildTree(transformedFlat, newRootName);
};
