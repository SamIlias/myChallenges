import stringify from './stringify';

test('5_trees: stringify test', () => {
  expect(stringify('hello')).toEqual('hello');
  expect(stringify(5)).toEqual('5');
  expect(stringify(true)).toEqual('true');

  const array = [1, 2, 'asd', [3, 4, [5, 'asdf']]];
  expect(stringify(array, '-', 2)).toEqual(
    `[
--1
--2
--asd
--[
----3
----4
----[
------5
------asdf
----]
--]
]`,
  );

  const object = {
    hello: 'world',
    is: true,
    nested: { nestedDeep: { count: 5 } },
    nested2: { point: 10 },
  };
  expect(stringify(object, '=', 1)).toEqual(`{
=hello: world
=is: true
=nested: {
==nestedDeep: {
===count: 5
==}
=}
=nested2: {
==point: 10
=}
}`);
});
