import * as fs from './fileSystemTree.js';

export default node => {
  const children = fs.getChildren(node);
  const newMeta = { ...fs.getMeta(node) };
  const newChildren = [...children].reverse();

  return fs.mkdir(fs.getName(node), newChildren, newMeta);
};
