// count all files in directory and subdirectories
import _ from 'lodash';
import * as fs from './fileSystemTree.js';

const countFiles = tree => {
  if (fs.isFile(tree)) {
    return 1;
  }

  const children = fs.getChildren(tree);
  const fileCounts = children.map(countFiles);
  return _.sum(fileCounts);
};

export default tree => {
  if (fs.isFile(tree)) {
    return [];
  }

  const children = fs.getChildren(tree);
  const info = children.map(child => [fs.getName(child), countFiles(child)]);

  return info;
};
