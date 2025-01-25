import Node from './agregationNode';

test('6_OOPIntroduction: binaryTreeAgregation test', () => {
  const tree = new Node(
    9,
    new Node(4, new Node(8), new Node(6, new Node(3), new Node(7))),
    new Node(17, null, new Node(22, null, new Node(20))),
  );

  expect(tree.getCount()).toEqual(9);
  expect(tree.getSum()).toEqual(96);
  expect(tree.toArray()).toEqual([9, 4, 8, 6, 3, 7, 17, 22, 20]);
  expect(tree.toString()).toEqual('(9, 4, 8, 6, 3, 7, 17, 22, 20)');
  expect(tree.every(key => key < 0)).toBe(false);
  expect(tree.every(key => key < 23)).toBe(true);
  expect(tree.some(key => key < 0)).toBe(false);
  expect(tree.some(key => key === 22)).toBe(true);

  const oneNodeTree = new Node(8);

  expect(oneNodeTree.getCount()).toEqual(1);
  expect(oneNodeTree.getSum()).toEqual(8);
  expect(oneNodeTree.toArray()).toEqual([8]);
  expect(oneNodeTree.toString()).toEqual('(8)');
  expect(oneNodeTree.every(key => key < 0)).toBe(false);
  expect(oneNodeTree.every(key => key < 23)).toBe(true);
  expect(oneNodeTree.some(key => key < 0)).toBe(false);
  expect(oneNodeTree.some(key => key === 8)).toBe(true);
});
