import Node from './balancedBinary';

test('6_OOPIntroduction: 7_balancedBinaryTree test', () => {
  const tree1 = new Node(
    8,
    new Node(5, null, new Node(6, new Node(4), null)),
    new Node(12, new Node(10, null, new Node(11)), new Node(14)),
  );

  expect(tree1.isBalanced()).toBe(true);

  const tree2 = new Node(
    8,
    new Node(
      5,
      new Node(4, new Node(1), new Node(3, new Node(2))),
      new Node(6),
    ),
    new Node(12, new Node(10, null, new Node(11)), new Node(14)),
  );
  expect(tree2.isBalanced()).toBe(false);

  const tree3 = new Node();
  expect(tree3.isBalanced()).toBe(true);

  const tree4 = new Node(1);
  expect(tree4.isBalanced()).toBe(true);

  const tree5 = new Node(
    9,
    new Node(4, new Node(3, new Node(2), null)),
    new Node(
      12,
      new Node(10),
      new Node(16, new Node(15), new Node(20, new Node(19))),
    ),
  );
  expect(tree5.isBalanced()).toBe(false);
});
