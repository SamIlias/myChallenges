// В этом испытании вам предстоит написать собственную реализацию этих функций, только
// работать они будут с файловыми деревьями.
//
// map принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.
//
// filter принимает в качестве параметров предикат и дерево, а возвращает отфильтрованное
// дерево по предикату.
//
// reduce кроме основных параметров (функция-обработчик и дерево) принимает также
// начальное значение аккумулятора.

import * as fs from '../fileSystemTree/fileSystemTree.js';

const isNull = item => item === null;
const normalize = array => {
  const result = array.filter(item => !isNull(item));
  return result;
};

export const map = (func, tree) => {
  if (!fs.isDirectory(tree)) {
    return func(tree);
  }

  const children = fs.getChildren(tree);
  const newChildren = children.map(child => map(func, child));

  return { ...func(tree), children: newChildren };
};

export const filtered = (predicate, tree) => {
  if (predicate(tree)) {
    if (!fs.isDirectory(tree)) {
      return tree;
    }

    const children = fs.getChildren(tree);
    const newChildren = children.map(child => filtered(predicate, child));

    return { ...tree, children: normalize(newChildren) };
  }
  return null;
};

export const reduce = (callback, tree, accum) => {
  if (!fs.isDirectory(tree)) {
    const newAcc = callback(accum, tree);
    return newAcc;
  }

  const curAcc = callback(accum, tree);
  const children = fs.getChildren(tree);
  const newAcc = children.reduce(
    (acc, child) => reduce(callback, child, acc),
    curAcc,
  );

  return newAcc;
};
