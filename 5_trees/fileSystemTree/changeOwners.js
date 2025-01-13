// Change owner of all nodes
import * as fs from './fileSystemTree.js';

export default function changeOwner(node, owner) {
  const name = fs.getName(node);
  const newMeta = { ...fs.getMeta(node) };
  newMeta.owner = owner;
  if (fs.isFile(node)) {
    return fs.mkfile(name, newMeta);
  }

  const children = fs.getChildren(node);
  const newChildren = children.map(child => changeOwner(child, owner));

  return fs.mkdir(name, newChildren, newMeta);
}
