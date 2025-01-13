// Delete all files in current directory

import * as fs from './fileSystemTree.js';

export default tree => {
  const children = fs.getChildren(tree);
  const newChildren = children.filter(child => child.type === 'directory');
  const newMeta = { ...fs.getMeta(tree) };

  return fs.mkdir(fs.getName(tree), newChildren, newMeta);
};
