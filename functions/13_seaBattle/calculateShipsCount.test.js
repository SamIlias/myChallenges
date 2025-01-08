import calcShipsCount from './calcShipsCount';

test('calcShipsCount test', () => {
  const field = [
    [0, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
  ];

  const field2 = [
    [1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 1],
  ];

  const field3 = [[0]];

  const field4 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  const field5 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  expect(calcShipsCount(field)).toEqual(3);
  expect(calcShipsCount(field2)).toEqual(6);
  expect(calcShipsCount(field3)).toEqual(0);
  expect(calcShipsCount(field4)).toEqual(1);
  expect(calcShipsCount(field5)).toEqual(1);
});
