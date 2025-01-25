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
