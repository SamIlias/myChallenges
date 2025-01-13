import * as fs from './fileSystemTree.js';
import reverse from './reverseChildren.js';
import changeNameToLowerCase from './changeNames.js';
import changeOwners from './changeOwners.js';
import countFiles from './countAllFiles.js';
import countNodes from './countAllNodes.js';
import deleteFiles from './deleteFilesInCurrentDir.js';
import findEmpty from './findEmpty.js';
import printAllNodes from './printAllNodeNames.js';

const tree = fs.mkdir('/', [
  fs.mkfile('oNe'),
  fs.mkfile('twO'),
  fs.mkdir('THREE'),
]);

console.log('changeNameToLowerCase function');
console.log('start tree is: \n', tree);
console.log('result is: ', changeNameToLowerCase(tree));
console.log('=======================================================');

const tree2 = fs.mkdir('/', [
  fs.mkfile('one'),
  fs.mkfile('two'),
  fs.mkdir('three'),
]);

console.log('reverse function');
console.log('start tree is: \n', tree2);
console.log('result is: ', reverse(tree2));
console.log('=======================================================');

console.log('changeOwners function');
console.log('start tree is: \n', tree2);
console.log('result is: ', changeOwners(tree2, 'ilias'));
console.log('=======================================================');

const tree3 = fs.mkdir('/', [
  fs.mkdir('etc', [fs.mkfile('bashrc'), fs.mkfile('cons.conf')]),
  fs.mkfile('hexrc'),
  fs.mkdir('bin', [fs.mkfile('ls'), fs.mkfile('cat')]),
]);

console.log('countFiles function');
console.log('start tree is: \n', tree3);
console.log('result is: ', countFiles(tree3));
console.log('=======================================================');

console.log('countNodes function');
console.log('start tree is: \n', tree3);
console.log('result is: ', countNodes(tree3));
console.log('=======================================================');

console.log('deleteFiles function');
console.log('start tree is: \n', tree3);
console.log('result is: ', deleteFiles(tree3));
console.log('=======================================================');

const tree4 = fs.mkdir('/', [
  fs.mkdir('etc', []),
  fs.mkfile('hexrc'),
  fs.mkdir('bin', []),
]);

console.log('findEmpty function');
console.log('start tree is: \n', tree4);
console.log('result is: ', findEmpty(tree4));
console.log('=======================================================');

console.log('printAllNodes function');
console.log('start tree is: \n', tree3);
console.log('\nresult is: \n');
console.log(printAllNodes(tree3));
console.log('=======================================================');
