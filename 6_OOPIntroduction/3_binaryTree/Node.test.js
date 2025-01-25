import Node from './Node';

test('6_OOPIntroduction: search binary tree test', () => {
  const node = new Node();
  node.insert(9);
  node.insert(17);
  node.insert(4);
  node.insert(3);
  node.insert(6);

  expect(node.getKey()).toEqual(9);
  expect(node.getLeft().getKey()).toEqual(4);
  expect(node.getRight().getKey()).toEqual(17);
  expect(node.getLeft().getLeft().getKey()).toEqual(3);
  expect(node.getLeft().getRight().getKey()).toEqual(6);
});
