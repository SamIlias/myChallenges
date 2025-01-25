// Особенность структуры двоичного дерева даёт хороший прирост к эффективности при
// поиске нужного значения. Для этого нужно, чтобы двоичное дерево было сбалансированным.
// То есть необходимо построить дерево так, чтобы общее количество узлов в левом
// и правом поддеревьях было примерно одинаковым для любого узла дерева.
// Node.js
//
// Реализуйте метод isBalanced(), который проверяет дерево на сбалансированность.
// Он возвращает true, если количество узлов в левом и правом поддеревьях каждого
// узла отличается не более, чем на 2. В ином случае метод должен вернуть false.

export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  getKey() {
    return this.key;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  search(target) {
    const iter = tree => {
      if (!tree) {
        return null;
      }

      if (target === tree.key) {
        return tree;
      }

      if (target < tree.key) {
        return iter(tree.left);
      }

      if (target > tree.key) {
        return iter(tree.right);
      }
    };

    return iter(this);
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

  getCount() {
    const iter = (acc, tree) => {
      if (!tree) {
        return acc;
      }

      return acc + 1 + iter(0, tree.left) + iter(0, tree.right);
    };

    return iter(0, this);
  }

  isBalanced() {
    const iter = tree => {
      if (!tree) {
        return true;
      }

      const leftChildNodesCount = tree.left ? tree.left.getCount() : 0;
      const rightChildNodesCount = tree.right ? tree.right.getCount() : 0;

      if (Math.abs(leftChildNodesCount - rightChildNodesCount) > 2) {
        return false;
      }

      return iter(tree.left) && iter(tree.right);
    };

    return iter(this);
  }
}
