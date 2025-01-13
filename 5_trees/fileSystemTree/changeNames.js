// Change name toLowerCase
import * as fs from './fileSystemTree.js';

export default node => {
  const children = fs.getChildren(node);
  const newChildren = children.map(child => {
    const name = fs.getName(child).toLowerCase();
    const meta = { ...fs.getMeta(child) };

    if (fs.isDirectory(child)) {
      const childrenOfChild = [...fs.getChildren(child)];
      return fs.mkdir(name, childrenOfChild, meta);
    }
    return fs.mkfile(name, meta);
  });

  const newMeta = { ...fs.getMeta(node) };

  return fs.mkdir(fs.getName(node), newChildren, newMeta);
};
