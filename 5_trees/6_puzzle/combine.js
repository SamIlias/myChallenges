// Реализуйте и экспортируйте по умолчанию функцию, которая объединяет отдельные
// ветки в одно дерево. Каждая из веток в свою очередь является также деревом.
//
// Функция может принимать на вход неограниченное количество веток и соединяет их.
// Корневым узлом объединённого дерева является корневой узел первой переданной ветки.

import _ from 'lodash';
import * as flat from '../flatTrees.js';

export default function combine(rootBranch, ...othersBranches) {
  const [root, rootChildren] = rootBranch;
  const mainTree = flat.makeFlat(rootBranch);

  othersBranches.forEach(branch => {
    const flatBranch = flat.makeFlat(branch);

    // if branch has node that is root of mainTree, rebuild this branch to change its root
    const workBranch = flatBranch[root]
      ? flat.rebuildFlat(flatBranch, root)
      : flatBranch;

    const nodes = Object.keys(workBranch);
    nodes.forEach(node => {
      const [curNodeParent, nodeChildren] = workBranch[node];

      if (mainTree[node]) {
        const [nodeParentInMainTree, children] = mainTree[node];
        const newChildren = _.uniq([...children, ...nodeChildren]);
        mainTree[node] = [nodeParentInMainTree, newChildren];
      } else {
        const newChildren = _.uniq([...nodeChildren]);
        mainTree[node] = [curNodeParent, newChildren];
      }
    });
  });

  return flat.buildTree(mainTree, root);
}
