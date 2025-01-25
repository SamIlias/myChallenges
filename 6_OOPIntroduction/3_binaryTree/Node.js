// Двоичное дерево — иерархическая структура данных, в которой каждый узел имеет
// не более двух потомков (детей). Как правило, первый называется родительским узлом,
// а дети называются левым и правым наследниками.
//
// В данном испытании мы будем использовать подвид двоичного дерева — двоичное дерево
// поиска. Правильное дерево не содержит повторяющихся ключей, и для каждого узла
// гарантируется, что в левом поддереве все значения меньше текущего, а в правом — больше.
//
// Двоичное дерево поиска
// Node.js
//
// Реализуйте и экспортируйте по умолчанию класс, который реализует представление
// узла.
//
// Класс должен содержать:
//
//     Геттер getKey() — возвращает ключ.
//     Геттеры getLeft(), getRight() — возвращают соответственно левого и правого
//     ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.
//     Метод insert(key) — выполняет добавление узла, формируя правильное двоичное дерево.

export default class Node {
  constructor() {
    this.tree = {};
  }

  getKey() {
    return this.tree.key;
  }

  getLeft() {
    const newNode = new Node();
    newNode.tree = this.tree.left;
    return newNode;
  }

  getRight() {
    const newNode = new Node();
    newNode.tree = this.tree.right;
    return newNode;
  }

  /* eslint-disable no-param-reassign */
  insert(newKey) {
    const iter = node => {
      if (!node.key) {
        node.key = newKey;
        node.left = {};
        node.right = {};
      }

      if (node.key < newKey) {
        iter(node.right);
      }

      if (newKey < node.key) {
        iter(node.left);
      }
    };

    iter(this.tree);

    return this;
  }
}
