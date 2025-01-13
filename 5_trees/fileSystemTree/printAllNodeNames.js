import * as fs from './fileSystemTree.js';

// Print all names of nodes
export default function dfs(node) {
  console.log(fs.getName(node));
  if (fs.isFile(node)) {
    return;
  }

  const children = fs.getChildren(node);
  children.forEach(dfs);
}
