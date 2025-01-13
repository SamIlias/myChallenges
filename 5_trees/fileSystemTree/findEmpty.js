// find names of empty directories only on 2 depth level
import * as fs from './fileSystemTree.js';

export default tree => {
  const iter = (node, depth) => {
    const name = fs.getName(node);
    const children = fs.getChildren(node);
    if (children.length === 0) {
      return name;
    }

    if (depth === 2) {
      return [];
    }

    const emptyDirNames = children
      .filter(child => !fs.isFile(child))
      .map(child => iter(child, depth + 1))
      .flat();

    return emptyDirNames;
  };

  return iter(tree, 0);
};
