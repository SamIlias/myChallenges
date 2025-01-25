// В данном испытании мы будем использовать двоичное дерево, и выполнять агрегацию
// данных.
// Node.js
//
// Реализуйте следующие методы в классе:
//
//     getCount() — возвращает количество узлов в дереве.
//     getSum() — возвращает сумму всех ключей дерева.
//     toArray() — возвращает одномерный массив содержащий все ключи.
//     toString() — возвращает строковое представление дерева.
//     every(fn) — проверяет, удовлетворяют ли все ключи дерева условию, заданному
//     в передаваемой функции.
//     some(fn) - проверяет, удовлетворяет ли какой-либо ключ дерева условию, заданному
//     в передаваемой функции.
//
// При обходе дерева нужно использовать порядок слева направо. То есть вначале обрабатываем
// ключ узла, затем ключ левого ребёнка, после чего ключ правого ребёнка.

export default class Node {
  constructor(key, leftChild = null, rightChild = null) {
    this.key = key;
    this.left = leftChild;
    this.right = rightChild;
  }

  getCount() {
    const iter = (acc, tree) => {
      if (!tree) {
        return acc;
      }

      return acc + 1 + iter(0, tree.left) + iter(0, tree.right);
    };

    return iter(0, this);
  }

  getSum() {
    const iter = (acc, tree) => {
      if (!tree) {
        return acc;
      }

      return acc + tree.key + iter(0, tree.left) + iter(0, tree.right);
    };

    return iter(0, this);
  }

  toArray() {
    const iter = (acc, tree) => {
      if (!tree) {
        return acc;
      }

      acc.push(tree.key);

      return [...acc, ...iter([], tree.left), ...iter([], tree.right)];
    };

    return iter([], this);
  }

  toString() {
    return `(${this.toArray().join(', ')})`;
  }

  every(fn) {
    const keys = this.toArray();
    // for (const key of keys) {
    //     if (fn(key) === false) {
    //         return false;
    //     }
    // }

    // for (let i = 0; i < keys.length; i += 1) {
    //     if (fn(keys[i]) === false) {
    //         return false;
    //     }
    // }

    // return true;

    return keys.reduce((acc, item) => {
      if (acc === false) {
        return false;
      }
      return fn(item);
    }, true);
  }

  some(fn) {
    const keys = this.toArray();
    return keys.reduce((acc, item) => {
      if (acc === true) {
        return true;
      }
      return fn(item);
    }, false);
  }
}
