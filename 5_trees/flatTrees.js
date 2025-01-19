import _ from 'lodash';

// The expected the structure of tree is shown below
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

// Returns new structure of tree: {
//   a: [ null, [ 'b', 'c', 'd' ] ],
//   b: [ 'a', [ 'e', 'f' ] ],
//   e: [ 'b', [] ],
//   f: [ 'b', [] ],
//   c: [ 'a', [ 'g' ] ],
//   g: [ 'c', [] ],
//   d: [ 'a', [] ]
// }

/* eslint-disable no-param-reassign */
export function makeFlat(tree, parent = null) {
  const flatTree = {};
  const iter = (node, dict, parentOfNode = null) => {
    const [nodeName, children] = node;
    const childNames = [];
    dict[nodeName] = [parentOfNode, childNames];

    if (children) {
      children.forEach(child => {
        const childName = iter(child, dict, nodeName);
        childNames.push(childName);
      });
    }

    return nodeName;
  };

  iter(tree, flatTree, parent);

  return flatTree;
}

// Build deep tree from flat structure
export function buildTree(flatTree, rootName) {
  const [unused, childNames] = flatTree[rootName];

  const children = childNames.map(childName => {
    return buildTree(flatTree, childName);
  });

  return children.length > 0 ? [rootName, children] : [rootName];
}

// Rebuild flat tree with new root.
export function rebuildFlat(tree, newRoot) {
  const newFlatTree = _.cloneDeep(tree);

  function iter(flatTree, curNode, newParent) {
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
      iter(flatTree, prevParent, curNode);
    }

    return flatTree;
  }

  return iter(newFlatTree, newRoot, null);
}
