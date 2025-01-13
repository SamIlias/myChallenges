// count all nodes
import * as fs from './fileSystemTree.js';

const sum = arr => {
  const res = arr.reduce((acc, item) => acc + item, 0);
  return res;
};

export default function countNodes(tree) {
  if (fs.isFile(tree)) {
    return 1;
  }

  const children = fs.getChildren(tree);
  const descendantCounts = children.map(countNodes);

  return 1 + sum(descendantCounts);
}
