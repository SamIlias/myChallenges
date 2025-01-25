import Node from './searchBinary';

test('6_OOPIntroduction: searchBinaryTree test', () => {
  const tree = new Node(
    9,
    new Node(4, new Node(3), new Node(6, new Node(5), new Node(7))),
    new Node(17, null, new Node(22, new Node(20), null)),
  );

  expect(tree.search(6).getKey()).toEqual(6);
  expect(tree.search(15)).toBeNull();
  expect(tree.search(6).getLeft().getKey()).toEqual(5);
  expect(tree.search(6).getLeft().getRight()).toBeNull();

  const emptyTree = new Node();

  expect(emptyTree.getKey()).toBeNull();
  expect(emptyTree.getLeft()).toBeNull();
  expect(emptyTree.getRight()).toBeNull();
});
